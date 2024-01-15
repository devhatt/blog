import { SitemapStream, streamToPromise } from "sitemap";
import { serverQueryContent } from "#content/server";

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: "http://localhost:3000",
  });

  for (const doc of docs) {
    sitemap.write({
      changefreq: "monthly",
      url: doc._path,
    });
  }
  sitemap.end();

  return streamToPromise(sitemap);
});
