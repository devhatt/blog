
<script setup lang="ts">
import type { AnchorHTMLAttributes as AnchorAttributes } from 'vue';

interface Props extends /* @vue-ignore */ AnchorAttributes { }


defineProps<Props>();

</script>



<template>
  <a v-bind="$attrs" rel="”noopener noreferrer”">
  <slot></slot>
  </a>
</template>
