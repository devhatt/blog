<script setup lang="ts">
  import type { Component } from "vue";

  interface Props {
    color?: string;
    href: string;
    icon: Component;
  }

  const props = defineProps<Props>();
</script>

<template>
  <atom-link
    :href="props.href"
    class="flex flex-row flex-nowrap gap-2 rounded-sm p-2 text-palette-color-3"
    :style="{ backgroundColor: color }"
  >
    <component class="h-5 w-5" :is="icon" />
  </atom-link>
</template>
