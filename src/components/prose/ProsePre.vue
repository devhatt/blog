<template>
  <pre
    bg-gray-100
    p-4
    rounded
    font-mono
    text-sm
    overflow-y-auto
    m-y-5
    :class="$props.class"
  ><slot /></pre>
</template>

<script setup lang="ts">
  defineProps({
    code: {
      type: String,
      default: "",
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
    meta: {
      type: String,
      default: null,
    },
    class: {
      type: String,
      default: null,
    },
  });
</script>

<style scoped>
  pre code .line {
    display: block;
  }
</style>
