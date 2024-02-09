<script setup lang="ts">
  definePageMeta({
    layout: "blog-layout",
  });

  defineNuxtComponent({
    name: "BlogId",
  });

  const post = ref({
    title: "Como utilizar o ForwaredRef do React?",
  });

  console.log();
</script>

<template>
  <article>
    <h1>{{ post.title }}</h1>
    <section>
      <h2 id="utilidade">
        <nuxt-link to="#utilidade">Utilidade</nuxt-link>
      </h2>
    </section>
  </article>
</template>

<style scoped></style>
