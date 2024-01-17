// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    dirs: ["~/components"],
    global: true,
  },
  css: ["~/assets/scss/reset.scss"],
  devtools: { enabled: true },
  generate: {},
  modules: [["@nuxtjs/sitemap", {}]],
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  ssr: true,
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
