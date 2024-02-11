<script setup lang="ts">
  import { useFormatDate } from "~/composables/useFormatDate";

  type Props = {
    date: string;
    description: string;
    href: string;
    time: string;
    title: string;
  };

  const { formatDate } = useFormatDate();

  defineProps<Props>();
</script>

<template>
  <section flex="~ col" shadow-2xl p-2 rounded-md>
    <div flex-flow-row items-center mb-2 justify-between>
      <h2 font-extrabold text-lg>
        {{ title }}
      </h2>
      <nuxt-link
        flex="~ row items-center gap-4"
        text-blue-500
        text-sm
        :href="href"
      >
        <span sr-only> Participe </span>
        <div i-mdi:external-link size-5 />
      </nuxt-link>
    </div>
    <div max-h-20 my-2>
      <p grow-1 text-justify line-clamp-3 text-sm>
        {{ description }}
      </p>
    </div>
    <div flex="~ row justify-between items-end gap-2 text-bold">
      <p centralize flex-flow-row gap-x-2 font-bold text-xs>
        <span i-material-symbols:alarm></span>
        {{ time }}
      </p>
      <p
        bg-blue-100
        text-blue-500
        w-16
        h-6
        centralize
        p-2
        rounded
        first-letter:uppercase
        font-extrabold
        bg-blue-opacity-90
        text-xs
      >
        {{ formatDate(date) }}
      </p>
    </div>
  </section>
</template>
