<script setup lang="ts">
  interface Props {
    id: number;
  }

  defineProps<Props>();
</script>

<template>
  <nuxt-link block shadow-xl :to="{ name: 'blog-id', params: { id } }">
    <img
      w-full
      h-200px
      object-cover
      src="https://via.placeholder.com/200"
      alt="Imagem do blog"
    />
    <div flex-flow-col gap-y-2 p-2>
      <h2 text-lg font-bold>Uma postagem no blog</h2>
      <p text-sm line-clamp-2>
        Ea cupidatat et fugiat in. Ut reprehenderit consequat irure consequat
        non laborum velit mollit sunt anim enim. Voluptate ut cillum aliqua
        nostrud fugiat.
      </p>
    </div>
  </nuxt-link>
</template>
