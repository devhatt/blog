import pt from "./languages/pt";
import { defineI18nConfig } from "#imports";

export default defineI18nConfig(() => ({
  defaultLocale: "en",
  messages: {
    pt,
  },
}));
