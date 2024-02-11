<script setup lang="ts">
  type Props = {
    description: string;
    id: string;
    img: string;
    title: string;
  };

  defineProps<Props>();
</script>

<template>
  <nuxt-link
    rounded-lg
    overflow-hidden
    block
    shadow-xl
    :to="{ name: 'blog-id', params: { id } }"
  >
    <img w-full h-200px object-cover :src="img" alt="Imagem do blog" />
    <div flex-flow-col gap-y-2 p-2>
      <h2 text-lg font-bold>{{ title }}</h2>
      <div h="5">
        <p text-sm line-clamp-2>
          {{ description }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>
