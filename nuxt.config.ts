// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    dirs: ["~/components"],
    global: true,
  },
  css: ["@unocss/reset/eric-meyer.css", "~/styles/global.css"],
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/sitemap",
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
        defaultLocale: "pt",
        detectBrowserLanguage: {
          cookieKey: "i18n_redirected",
          redirectOn: "root", // recommended
          useCookie: true,
        }, // if you are using custom path, default
        locales: ["pt"],
        strategy: "prefix_except_default",
        vueI18n: "./i18n",
      },
    ],
    "@unocss/nuxt",
  ],
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  ssr: true,
  typescript: {
    strict: true,
    typeCheck: "build",
  },
});
