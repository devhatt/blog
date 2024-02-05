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
      fonts: {
        // ...
      },
    }),
  ],
  shortcuts: [],
  theme: {
    colors: {
      button: {
        primary: "#F2F2F2",
      },
      page: {
        background: "#F2F2F2",
        primary: "#212226",
      },
      palette: {
        1: "#212226",
        2: "#F2A7A7",
        3: "#F2F2F2",
        4: "#D94141",
        5: "#BF3939",
      },
    },
    fontFamily: {
      sans: "Space Mono, sans-serif",
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
