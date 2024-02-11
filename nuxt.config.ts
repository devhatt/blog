// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "./src",

  css: ["@unocss/reset/eric-meyer.css", "~/styles/global.css"],

  ssr: true,
  devtools: { enabled: true },

  imports: {
    dirs: ["components/prose"],
    autoImport: false,
  },
  components: {
    dirs: [
      {
        path: "~/components/prose",
        global: true,
      },
    ],
  },

  mdc: {
    highlight: {
      theme: "github-light",
    },
  },

  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },

  typescript: {
    strict: true,
    typeCheck: "build",
  },

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
        strategy: "no_prefix",
        vueI18n: "./src/i18n",
      },
    ],
    "@unocss/nuxt",
    "@nuxtjs/mdc",
  ],
});
