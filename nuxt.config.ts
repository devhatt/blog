// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    dirs: ["~/components"],
    global: true,
  },
  css: ["~/assets/scss/reset.scss"],
  devtools: { enabled: true },
  generate: {},
  modules: [
    ["@nuxtjs/sitemap", {}],
    [
      "nuxt-gtag",
      {
        gtag: {
          id: "UA-XXXXXXXX-X",
        },
      },
    ],
    [
      "@nuxtjs/i18n",
      {
        locales: ['pt'],
        vueI18n: "./i18n"
      },
    ],
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Space+Mono": true,
        },
        googleFonts: {
          outputDir: "assets",
        },
      },
    ], 
  ],
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
