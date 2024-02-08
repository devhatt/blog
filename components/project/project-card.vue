<template>
  <section relative flex="~ row nowrap" rounded-md overflow-hidden shadow-2xl>
    <img alt="" aspect-square object-center object-cover :src="img" />
    <div text-start px-2 pb-2>
      <h2 text="1.2rem" font-semibold my-2 first-letter:uppercase>
        {{ title }}
      </h2>
      <p :title="description" text-dark-100 text-sm line-clamp-2>
        {{ description }}
      </p>
      <ul flex="~ row items-end" mt-2 gap-x-2>
        <li font-extrabold text-xs uppercase v-for="tag in tags" :key="tag">
          #{{ tag }}
        </li>
      </ul>
    </div>
    <nuxt-link absolute top-2 right-2 :href="href">
      <div class="i-mdi:external-link text-blue-400 size-5" />
    </nuxt-link>
  </section>
</template>

<script setup lang="ts">
  interface Props {
    description: string;
    href: string;
    img: string;
    tags: string[];
    title: string;
  }

  const props = defineProps<Props>();

  const tags = computed(() => Array.from(new Set(props.tags)));
</script>
