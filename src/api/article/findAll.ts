import type { ArticleFindAllResponse } from "~/server/models";
import { ref, useAsyncData } from "#imports";

export const ARTICLE_FIND_ALL_KEY = "article-find-all";

export async function useArticleFindAll() {
  const { data } = await useAsyncData<ArticleFindAllResponse>(
    ARTICLE_FIND_ALL_KEY,
    async () => {
      const articles = await $fetch<ArticleFindAllResponse>("/api/article");
      if (articles === null) return [];
      return articles;
    },
  );

  return ref<ArticleFindAllResponse>(data.value ?? []);
}
