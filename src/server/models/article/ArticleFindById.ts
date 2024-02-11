export type ArticleFindByIdResponse = {
  content: string;
  description: string;
  id: string;
  img: string;
  published_at: string;
  title: string;
  url: string;
};

export type ArticleFindByIdPathParams = {
  id: string;
};

export type ArticleFindByIdQueryParams = unknown;
