<template>
  <section flex="~ col" shadow-xl p-3 rounded-md>
    <div flex-flow-row items-center p-2 justify-between>
      <h2 font-extrabold text-xl>
        {{ title }}
      </h2>
      <nuxt-link
        flex="~ row items-center gap-4"
        text-blue-500
        contained-button
        font-semibold
        p-2
        rounded
        :href="href"
      >
        Participe
        <div i-mdi:arrow-right size-5 />
      </nuxt-link>
    </div>
    <p grow-1 text-justify line-clamp-3 text-sm>
      {{ description }}
    </p>
    <div flex="~ row justify-between items-end gap-2 text-bold">
      <p centralize flex-flow-row gap-x-2 font-bold>
        <div i-material-symbols:alarm />
        {{ time }}
      </p>
      <p
        bg-blue-100
        text-blue-500
        w-18
        h-10
        centralize
        p-2
        rounded
        first-letter:uppercase
        font-extrabold
        bg-blue-opacity-90
      >
        {{ formatDate(date) }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
  interface Props {
    date: string;
    description: string;
    href: string;
    time: string;
    title: string;
  }

  const { formatDate } = useFormatDate();

  defineProps<Props>();
</script>
