<template>
  <nuxt-link
    :href="href"
    relative
    flex-flow-col
    rounded-md
    overflow-hidden
    shadow-2xl
    increase
  >
    <img alt="" w-full h="65%" object-center object-cover :src="img" />
    <p text-left p-5 text="1.25rem" font-semibold my-2 first-letter:uppercase>
      {{ title }}
    </p>
    <div
      bg-dark-opaque-80-rounded-8
      absolute
      top-2
      right-2
      flex="~ justify-center items-center"
    >
      <icon-external text-light-1 />
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
  interface Props {
    date: string;
    description: string;
    href: string;
    img: string;
    title: string;
  }

  defineProps<Props>();
</script>
