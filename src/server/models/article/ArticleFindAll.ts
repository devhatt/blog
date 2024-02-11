export type ArticleFindAllResponse = {
  description: string;
  id: string;
  img: string;
  published_at: string;
  title: string;
  url: string;
}[];

export type ArticleFindAllPathParams = {
  articleId: string;
};

export type ArticleFindAllQueryParams = unknown;
