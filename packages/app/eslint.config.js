import { defineFlatConfig } from "eslint-define-config";
import eslintConfigPrettier from "eslint-config-prettier";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsEslint from "@typescript-eslint/eslint-plugin";

export default defineFlatConfig([
  // global ignores
  {
    ignores: [
      "node_modules",
      "coverage",
      ".nyc_output",
      "dist",
      ".nuxt",
      ".output",
    ],
  },
  // nuxt config eslint
  {
    files: ["*.ts", "*.tsx", "*.mts", "*.cts", "*.vue"],
    rules: {
      // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
      "@typescript-eslint/no-unused-vars": "warn",
      // does not work with type definitions.
      "no-unused-vars": "off",
    },
  },
  {
    // Include typescript eslint rules in *.vue files
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
    files: ["*.vue"],
    rules: {
      "constructor-super": "off", // ts(2335) & ts(2377)
      "getter-return": "off", // ts(2378)
      "no-const-assign": "off", // ts(2588)
      "no-dupe-args": "off", // ts(2300)
      "no-dupe-class-members": "off", // ts(2393) & ts(2300)
      "no-dupe-keys": "off", // ts(1117)
      "no-func-assign": "off", // ts(2539)
      "no-import-assign": "off", // ts(2539) & ts(2540)
      "no-new-symbol": "off", // ts(7009)
      "no-obj-calls": "off", // ts(2349)
      "no-redeclare": "off", // ts(2451)
      "no-setter-return": "off", // ts(2408)
      "no-this-before-super": "off", // ts(2376)
      "no-undef": "off", // ts(2304)
      "no-unreachable": "off", // ts(7027)
      "no-unsafe-negation": "off", // ts(2365) & ts(2360) & ts(2358)
      "no-var": "warn", // ts transpile let/const to var, so no need for vars any more
      "prefer-const": "warn", // ts provides better types with const
      "prefer-rest-params": "warn", // ts provides better types with rest args over arguments
      "prefer-spread": "warn", // ts transpile spread to apply, so no need for manual apply
      "valid-typeof": "off", // ts(2367)
    },
  },
  // typescript eslint rules
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        extraFileExtensions: [".vue"],
        project: ["./tsconfig.json", "./.nuxt/tsconfig.json"],
      },
    },
    plugins: {
      "@typescript-eslint": tsEslint,
    },
  },
  // vue eslint rules
  {
    files: ["**/*.vue"],
    languageOptions: {
      ecmaVersion: 2020,
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        sourceType: "module",
      },
      sourceType: "module",
    },
    plugins: { vue },
    rules: {
      "vue/component-api-style": ["warn"],
      "vue/component-name-in-template-casing": ["warn", "pascal-case"],
      "vue/component-options-name-casing": ["warn", "kebab-case"],
      "vue/custom-event-name-casing": ["warn", "kebab-case"],
      "vue/define-emits-declaration": ["warn", "type-based"],
      "vue/define-props-declaration": ["warn", "type-based"],
      "vue/multi-word-component-names": ["warn"],
      "vue/no-arrow-functions-in-watch": ["warn"],
      "vue/no-async-in-computed-properties": ["warn"],
      "vue/no-child-content": ["warn"],
      "vue/no-computed-properties-in-data": ["warn"],
      "vue/no-deprecated-data-object-declaration": ["warn"],
      "vue/no-deprecated-destroyed-lifecycle": ["warn"],
      "vue/no-deprecated-dollar-listeners-api": ["warn"],
      "vue/no-deprecated-dollar-scopedslots-api": ["warn"],
      "vue/no-deprecated-events-api": ["warn"],
      "vue/no-deprecated-filter": ["warn"],
      "vue/no-deprecated-functional-template": ["warn"],
      "vue/no-deprecated-html-element-is": ["warn"],
      "vue/no-deprecated-inline-template": ["warn"],
      "vue/no-deprecated-props-default-this": ["warn"],
      "vue/no-deprecated-router-link-tag-prop": ["warn"],
      "vue/no-deprecated-scope-attribute": ["warn"],
      "vue/no-deprecated-slot-attribute": ["warn"],
      "vue/no-deprecated-slot-scope-attribute": ["warn"],
      "vue/no-deprecated-v-bind-sync": ["warn"],
      "vue/no-deprecated-v-is": ["warn"],
      "vue/no-deprecated-v-on-native-modifier": ["warn"],
      "vue/no-deprecated-v-on-number-modifiers": ["warn"],
      "vue/no-deprecated-vue-config-keycodes": ["warn"],
      "vue/no-dupe-keys": ["warn"],
      "vue/no-dupe-keys": ["warn"],
      "vue/no-dupe-v-else-if": ["warn"],
      "vue/no-duplicate-attributes": ["warn"],
      "vue/no-export-in-script-setup": ["warn"],
      "vue/no-expose-after-await": ["warn"],
      "vue/no-lifecycle-after-await": ["warn"],
      "vue/no-mutating-props": ["warn"],
      "vue/no-parsing-error": ["warn"],
      "vue/no-ref-as-operand": ["warn"],
      "vue/no-required-prop-with-default": ["warn", { autofix: false }],
      "vue/no-reserved-component-names": ["warn"],
      "vue/no-reserved-keys": ["warn"],
      "vue/no-reserved-props": ["warn"],
      "vue/no-shared-component-data": ["warn"],
      "vue/no-side-effects-in-computed-properties": ["warn"],
      "vue/no-template-key": ["warn"],
      "vue/no-textarea-mustache": ["warn"],
      "vue/no-unused-components": ["warn"],
      "vue/no-unused-vars": ["warn"],
      "vue/no-use-computed-property-like-method": ["warn"],
      "vue/no-use-v-if-with-v-for": ["warn"],
      "vue/no-useless-template-attributes": ["warn"],
      "vue/no-v-for-template-key-on-child": ["warn"],
      "vue/no-v-text-v-html-on-component": ["warn"],
      "vue/no-watch-after-await": ["warn"],
      "vue/prefer-import-from-vue": ["warn"],
      "vue/require-component-is": ["warn"],
      "vue/require-component-is": ["warn"],
      "vue/require-prop-type-constructor": ["warn"],
      "vue/require-render-return": ["warn"],
      "vue/require-slots-as-functions": ["warn"],
      "vue/require-toggle-inside-transition": ["warn"],
      "vue/require-v-for-key": ["warn"],
      "vue/require-valid-default-prop": ["warn"],
      "vue/return-in-computed-property": ["warn"],
      "vue/return-in-emits-validator": ["warn"],
      "vue/script-indent": ["warn", 2, { baseIndent: 1 }],
      "vue/use-v-on-exact": ["warn"],
      "vue/valid-attribute-name": ["warn"],
      "vue/valid-define-emits": ["warn"],
      "vue/valid-define-props": ["warn"],
      "vue/valid-next-tick": ["warn"],
      "vue/valid-template-root": ["warn"],
      "vue/valid-v-bind": ["warn"],
      "vue/valid-v-cloak": ["warn"],
      "vue/valid-v-else": ["warn"],
      "vue/valid-v-else-if": ["warn"],
      "vue/valid-v-for": ["warn"],
      "vue/valid-v-html": ["warn"],
      "vue/valid-v-if": ["warn"],
      "vue/valid-v-is": ["warn"],
      "vue/valid-v-memo": ["warn"],
      "vue/valid-v-model": ["warn"],
      "vue/valid-v-on": ["warn"],
      "vue/valid-v-once": ["warn"],
      "vue/valid-v-pre": ["warn"],
      "vue/valid-v-show": ["warn"],
      "vue/valid-v-slot": ["warn"],
      "vue/valid-v-text": ["warn"],
    },
  },
  // vue component rules
  {
    files: ["./components/**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "warn",
    },
  },
  {
    files: [
      "**/pages/**/*.{js,ts,jsx,tsx,vue}",
      "**/layouts/**/*.{js,ts,jsx,tsx,vue}",
      "**/app.{js,ts,jsx,tsx,vue}",
      "**/error.{js,ts,jsx,tsx,vue}",
      "**/components/*/**/*.{js,ts,jsx,tsx,vue}",
    ],
    rules: { "vue/multi-word-component-names": "off" },
  },
  {
    files: [
      "**/pages/**/*.{js,ts,jsx,tsx,vue}",
      "**/layouts/**/*.{js,ts,jsx,tsx,vue}",
    ],
    rules: { "vue/no-multiple-template-root": "error" },
  },
  // this is eslint rules for config files
  {
    files: [
      "eslint.config.js",
      "commitlint.config.ts",
      "nuxt.config.ts",
      "tailwind.config.ts",
      "vue-shim.d.ts",
      "uno.config.ts",
    ],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-magic-numbers": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-var-requires": "off",
      "perfectionist/sort-array-includes": "off",
      "perfectionist/sort-astro-attributes": "off",
      "perfectionist/sort-classes": "off",
      "perfectionist/sort-enums": "off",
      "perfectionist/sort-exports": "off",
      "perfectionist/sort-interfaces": "off",
      "perfectionist/sort-jsx-props": "off",
      "perfectionist/sort-maps": "off",
      "perfectionist/sort-named-exports": "off",
      "perfectionist/sort-named-imports": "off",
      "perfectionist/sort-object-types": "off",
      "perfectionist/sort-objects": "off",
      "perfectionist/sort-union-types": "off",
    },
  },
]);
