<script setup lang="ts">
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDrawerOpen = ref(false);

  watchEffect(() => {
    console.log(isDrawerOpen.value);
  });
</script>

<template>
  <template v-if="isMobile">
    <organism-drawer> </organism-drawer>
    <header
      class="flex h-12 flex-row flex-nowrap items-center justify-between p-4 text-page-base-text-color"
    >
      <button @click="isDrawerOpen = !isDrawerOpen">
        <icons-menu />
      </button>
    </header>
  </template>
  <template v-else>
    <header>
      <organism-social />
    </header>
  </template>
</template>
