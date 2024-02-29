// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerVariantGroup,
} from "unocss";

import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({}),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: { sans: ["Space Mono"] },
      provider: "google",
    }),
  ],
  rules: [
    [
      /^grid-auto-fill-(\d+)$/,
      (match) => ({
        "grid-template-columns": `repeat(auto-fit, minmax(${Number(match[1])}px, 1fr))`,
      }),
    ],
    [
      /^bg-(.*)-opaque-(\d+)-rounded-(\d+)$/,
      ([, c, d1, d2]) => `bg-${c}-1 bg-opacity-${d1} w-${d2} h-${d2} rounded`,
    ],
    [/^bg-(.*)-opacity-(\d+)$/, ([, c, d]) => `bg-${c} bg-opacity-${d}`],
  ],
  shortcuts: [
    { centralize: "flex flex-col items-center justify-center" },
    { increase: "transition-all hover:scale-104 ease-linear" },
    { "flex-flow-col": "flex flex-col flex-nowrap" },
    { "flex-flow-row": "flex flex-row flex-nowrap" },
    { "size-full": "w-full h-full" },
    {
      "text-button":
        "px-4 py-2 font-bold text-blue rounded-md material-symbols-chevron-right",
    },
  ],
  theme: {
    colors: {
      primary: "#4fa5e0",
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
