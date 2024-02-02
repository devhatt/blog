// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      button: {
        "primary-color": "#F2F2F2",
      },
      page: {
        "background-color": "#212226",
        "base-text-color": "#F2F2F2",
      },
      palette: {
        "color-1": "#212226",
        "color-2": "#F2A7A7",
        "color-3": "#F2F2F2",
        "color-4": "#D94141",
        "color-5": "#BF3939",
      },
      social: {
        brands: {
          discord: "#7289da",
          github: "#181717",
          linkedin: "#0077b5",
          twitter: "#1da1f2",
        },
      },
    },
    fontFamily: {
      sans: "Space Mono, sans-serif",
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
