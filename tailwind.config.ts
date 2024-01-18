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
        primary: "#24262B",
        secondary: "#DF4540",
      },
    },
  },
} satisfies Config;
