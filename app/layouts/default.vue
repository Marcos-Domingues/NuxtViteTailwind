<template>
  <div :data-theme="themeStore.currentTheme" class="h-screen">
    <div class="navbar bg-base-100 shadow-sm mb-3">
      <theme-selector />
    </div>
    <slot />
    <footer class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 flex fixed bottom-0 justify-around">
      <theme-selector :footer-position="true" />
      <aside>
        <p>Copyright © 2025 - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const themeStore = useThemeStore();
</script>

<style></style>