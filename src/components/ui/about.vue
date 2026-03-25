<script setup>
import { useUI } from "@/core/useUI";

const { showAboutModal, closeAboutModal } = useUI();
</script>

<template>
  <Teleport to="body">
    <template v-if="showAboutModal">
      <div class="modal-backdrop fade show navigator-modal-backdrop"></div>
      <div
        class="modal fade show d-block navigator-modal"
        id="about-modal"
        tabindex="-1"
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-modal-title"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="about-modal-title">
                About Navigator
              </h5>
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
                @click="closeAboutModal"
              ></button>
            </div>
            <div class="modal-body">
              <p>
                Welcome to <strong>Navigator</strong> — an open source mapping
                application built with MapLibre GL JS and Vue 3.
              </p>
              <p>
                Use the <strong>menu</strong> to explore the app and navigate the
                map.
              </p>
              <p class="mb-0 text-body-secondary small">
                Powered by open data from OpenStreetMap and free vector tiles from
                OpenFreeMap.
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                id="about-modal-close"
                @click="closeAboutModal"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Teleport>
</template>
