import { ref, computed, inject } from "vue";
import maplibregl from "maplibre-gl";
import { useStorage } from "@/composables/useStorage";
import { getMapInstance } from "@/core/useMap";
import { Position } from "@/classes/Position";

// Per-instance cache: instanceId -> instance state
const locateCache = new Map();

/**
 * Composable for the Locate feature.
 *
 * Manages GPS tracking state, map markers, and the permission flow.
 * State is cached per Navigator instance and shared across all callers.
 */
export const useLocate = () => {
    const instanceId = inject("navigatorId", "navigator");

    if (!locateCache.has(instanceId)) {
        locateCache.set(instanceId, {
            storage: useStorage("locate", { permissionGranted: false }),
            mode: ref(null), // null | 'active' | 'following' | 'error'
            position: ref(null), // Position | null
            showConfirmModal: ref(false),
            showErrorModal: ref(false),
            watcherId: null,
            positionMarker: null,
            headingMarker: null,
        });
    }

    const c = locateCache.get(instanceId);

    // ─── Map markers ─────────────────────────────────────────────────────────

    const createPositionElement = () => {
        const el = document.createElement("div");
        el.className = "navigator-locate-position";
        el.innerHTML = `<svg width="32" height="32" fill="currentColor"><use href="#position"/></svg>`;
        return el;
    };

    const createHeadingElement = () => {
        const el = document.createElement("div");
        el.className = "navigator-locate-heading";
        el.innerHTML = `<svg width="32" height="32" fill="currentColor"><use href="#position-heading"/></svg>`;
        return el;
    };

    const updateMarkers = (pos) => {
        const map = getMapInstance(instanceId);
        if (!map) return;

        const lngLat = [pos.lng, pos.lat];

        if (!c.positionMarker) {
            c.positionMarker = new maplibregl.Marker({
                element: createPositionElement(),
                anchor: "center",
            })
                .setLngLat(lngLat)
                .addTo(map);
        } else {
            c.positionMarker.setLngLat(lngLat);
        }

        if (pos.heading !== null && pos.heading !== undefined) {
            if (!c.headingMarker) {
                c.headingMarker = new maplibregl.Marker({
                    element: createHeadingElement(),
                    anchor: "center",
                    rotationAlignment: "map",
                })
                    .setLngLat(lngLat)
                    .addTo(map);
            } else {
                c.headingMarker.setLngLat(lngLat);
            }
            c.headingMarker.setRotation(pos.heading);
        } else if (c.headingMarker) {
            c.headingMarker.remove();
            c.headingMarker = null;
        }
    };

    const removeMarkers = () => {
        c.positionMarker?.remove();
        c.positionMarker = null;
        c.headingMarker?.remove();
        c.headingMarker = null;
    };

    // ─── Geolocation callbacks ────────────────────────────────────────────────

    const onPosition = (geoPos) => {
        if (!c.storage.permissionGranted) {
            c.storage.permissionGranted = true;
        }

        const pos = new Position({
            lat: geoPos.coords.latitude,
            lng: geoPos.coords.longitude,
            heading: geoPos.coords.heading,
            accuracy: geoPos.coords.accuracy,
            speed: geoPos.coords.speed,
        });

        c.position.value = pos;
        updateMarkers(pos);

        if (c.mode.value === "following") {
            const map = getMapInstance(instanceId);
            if (map) map.easeTo({ center: [pos.lng, pos.lat] });
        }
    };

    const onError = (err) => {
        stopWatcher();
        removeMarkers();
        c.mode.value = "error";
        if (err.code === 1 /* PERMISSION_DENIED */) {
            c.showErrorModal.value = true;
        }
    };

    // ─── Internal helpers ─────────────────────────────────────────────────────

    const startWatching = () => {
        if (!("geolocation" in navigator)) {
            c.mode.value = "error";
            return;
        }
        c.mode.value = "active";
        c.watcherId = navigator.geolocation.watchPosition(onPosition, onError, {
            enableHighAccuracy: true,
        });
    };

    const stopWatcher = () => {
        if (c.watcherId !== null) {
            navigator.geolocation.clearWatch(c.watcherId);
            c.watcherId = null;
        }
    };

    // ─── Public actions ───────────────────────────────────────────────────────

    /**
     * Cycle through states: inactive → active → following → inactive.
     * In the error state, re-opens the error modal instead.
     * On first use (no stored grant), shows the confirmation modal.
     */
    const cycle = () => {
        if (c.mode.value === "error") {
            c.showErrorModal.value = true;
            return;
        }

        if (c.mode.value === null) {
            if (!c.storage.permissionGranted) {
                c.showConfirmModal.value = true;
            } else {
                startWatching();
            }
        } else if (c.mode.value === "active") {
            c.mode.value = "following";
            if (c.position.value) {
                const map = getMapInstance(instanceId);
                if (map)
                    map.easeTo({
                        center: [c.position.value.lng, c.position.value.lat],
                    });
            }
        } else if (c.mode.value === "following") {
            stop();
        }
    };

    /** Called when the user confirms they understand the permission request. */
    const confirmLocate = () => {
        c.showConfirmModal.value = false;
        startWatching();
    };

    /** Stop tracking and return to the inactive state. */
    const stop = () => {
        stopWatcher();
        removeMarkers();
        c.mode.value = null;
        c.position.value = null;
    };

    return {
        mode: computed(() => c.mode.value),
        position: computed(() => c.position.value),
        showConfirmModal: c.showConfirmModal,
        showErrorModal: c.showErrorModal,
        cycle,
        confirmLocate,
        stop,
    };
};
