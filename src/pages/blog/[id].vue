<script setup lang="ts">
  import { definePageMeta } from "#imports";
  import { useArticle } from "~/api/article";

  definePageMeta({
    layout: "blog",
  });

  const post = await useArticle();
</script>

<template>
  <div>
    <MDC :value="post.content" tag="article" />
  </div>
</template>

<style scoped></style>
