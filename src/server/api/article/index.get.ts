import { defineEventHandler } from "h3";
import { ArticleFindAllResponse } from "~/server/models";

type ArticleResponse = {
  cover_image: string;
  description: string;
  id: number;
  img: string;
  published_at: string;
  title: string;
  url: string;
};

export default defineEventHandler(async (): Promise<ArticleFindAllResponse> => {
  const data = await $fetch<ArticleResponse[]>(
    "https://dev.to/api/articles?username=devhat",
  );

  return data.map((article) => ({
    description: article.description,
    id: String(article.id),
    img: article.cover_image,
    published_at: article.published_at,
    title: article.title,
    url: article.url,
  }));
});
