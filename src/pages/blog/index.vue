<script setup lang="ts">
  import BlogCard from "~/components/blog/BlogCard.vue";
  import { useArticleFindAll } from "~/api/article";

  const articles = await useArticleFindAll();
</script>

<template>
  <section>
    <h1>Blog posts</h1>
    <div grid grid-auto-fill-280 gap-5>
      <BlogCard
        v-for="article in articles"
        :key="article.id"
        :id="article.id"
        :description="article.description"
        :img="article.img"
        :title="article.title"
      />
    </div>
  </section>
</template>
