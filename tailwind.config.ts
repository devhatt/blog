import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        /*
          #212226
          #D94141
          #BF3939
          #F2A7A7
          #F2F2F2
        */
        page: {
          "background-color": "#212226",
          "base-text-color": "#F2F2F2",
        },
      },
      fontFamily: {
        base: ["Space Mono", "sans-serif"],
      },
    },
  },
} satisfies Config;
