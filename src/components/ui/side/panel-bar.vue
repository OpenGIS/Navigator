<template>
  <div class="panel-bar border-top bg-body">
    <slot />
  </div>
</template>

<style scoped>
.panel-bar {
  display: flex;
  flex-wrap: wrap;
  position: sticky;
  bottom: 0;
  z-index: 1;
}

:slotted(*) {
  flex: 1 0 calc(100% / 6);
  padding-block: 0.75rem;
}
</style>
