import { ref, type Ref, useAsyncData, useParams } from "#imports";
import type {
  ArticleFindByIdPathParams,
  ArticleFindByIdResponse,
} from "@/server/models";

export const ARTICLE_KEY = "article-find";

export async function useArticle() {
  const { id } = useParams<ArticleFindByIdPathParams>();

  const { data } = await useAsyncData(ARTICLE_KEY, async () =>
    $fetch<ArticleFindByIdResponse>(`/api/article/${id}`),
  );

  return ref(data.value) as Ref<ArticleFindByIdResponse>;
}
