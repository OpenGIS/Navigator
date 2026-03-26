<script setup>
import Icon from "@/components/ui/icon.vue";

defineProps({
  icon: { type: String, required: true },
  label: { type: String, required: true },
  iconSize: { type: Number, default: 40 },
  iconColor: { type: String, default: "currentColor" },
  active: { type: Boolean, default: false },
  id: { type: String, default: undefined },
});
</script>

<template>
  <button
    type="button"
    class="icon-btn border-0 bg-transparent d-flex flex-column align-items-center p-1"
    :id="id"
    :aria-pressed="active"
  >
    <Icon :width="iconSize" :height="iconSize" :fill="iconColor" :name="icon" />
    <span class="icon-btn__label" :style="{ color: iconColor }">{{ label }}</span>
    <slot />
  </button>
</template>

<style scoped>
.icon-btn {
  cursor: pointer;
  line-height: 1;
  position: relative;
  padding-bottom: 18px;
}

.icon-btn:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
  border-radius: 4px;
}

.icon-btn__label {
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  pointer-events: none;
}
</style>
