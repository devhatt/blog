<script setup lang="ts">
  const isMobile = useMediaQuery("(max-width: 768px)");
</script>

<template>
  <header
    class="flex h-12 flex-row flex-nowrap items-center justify-between p-4 text-page-base-text-color md:h-16"
  >
    <organism-header-social v-show="!isMobile" />
  </header>
</template>
