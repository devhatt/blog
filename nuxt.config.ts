// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    dirs: ["~/components"],
    global: true,
  },
  css: ["~/assets/scss/reset.scss"],
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
