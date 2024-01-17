// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    dirs: ["~/components"],
    global: true,
  },
  css: ["~/assets/styles/css/main.css"],
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
        defaultLocale: "en",
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
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use '@/assets/styles/_variables' as *;
          `,
        },
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
