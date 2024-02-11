<script setup lang="ts">
  import { computed } from "vue";

  type Props = {
    description: string;
    href: string;
    img: string;
    tags: string[];
    title: string;
  };

  const props = defineProps<Props>();

  const tags = computed(() => Array.from(new Set(props.tags)));
</script>

<template>
  <section
    relative
    flex="~ row nowrap"
    rounded-md
    overflow-hidden
    shadow-2xl
    py-2
  >
    <img alt="" aspect-square object-center object-cover :src="img" hidden />
    <div text-start px-2 pb-2>
      <div flex-flow-row items-center justify-between>
        <h2 text="1.2rem" font-semibold my-2 first-letter:uppercase>
          {{ title }}
        </h2>
        <nuxt-link :href="href">
          <span sr-only>Participe</span>
          <div class="i-mdi:external-link text-blue-500 size-5" />
        </nuxt-link>
      </div>
      <p :title="description" text-dark-100 text-sm line-clamp-2>
        {{ description }}
      </p>
      <ul flex="~ row items-end" mt-2 gap-x-2>
        <li font-extrabold text-xs uppercase v-for="tag in tags" :key="tag">
          #{{ tag }}
        </li>
      </ul>
    </div>
  </section>
</template>
