import { defineEventHandler, getRouterParams, H3Event } from "h3";
import type {
  ArticleFindByIdPathParams,
  ArticleFindByIdResponse,
} from "~/server/models";

type ArticleResponse = {
  body_markdown: string;
  cover_image: string;
  description: string;
  id: number;
  img: string;
  published_at: string;
  title: string;
  url: string;
};

async function handler(event: H3Event): Promise<ArticleFindByIdResponse> {
  const { id } = getRouterParams(event) as ArticleFindByIdPathParams;

  const data = await $fetch<ArticleResponse>(
    `https://dev.to/api/articles/${id}`,
  );

  return {
    content: data.body_markdown,
    description: data.description,
    id: String(data.id),
    img: data.cover_image,
    published_at: data.published_at,
    title: data.title,
    url: data.url,
  };
}

export default defineEventHandler(handler);
