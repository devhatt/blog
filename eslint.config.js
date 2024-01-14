import { defineFlatConfig } from "eslint-define-config";
import eslintConfigPrettier from "eslint-config-prettier";
// import { FlatCompat } from "@eslint/eslintrc";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsEslint from "@typescript-eslint/eslint-plugin";
import arrayFuncPlugin from "eslint-plugin-array-func";

// const compat = new FlatCompat({});

export default defineFlatConfig([
  // global ignores
  {
    ignores: ["node_modules", "coverage", ".nyc_output", "dist"],
  },
  // override default eslint rules
  {
    ...js.configs.recommended,
    rules: {
      "class-methods-use-this": "off",
      "dot-notation": "off",
      "max-params": "off",
      "no-loss-of-precision": "off",
      "no-magic-numbers": "off",
      "no-unused-vars": "off",
    },
  },
  // typescript eslint rules
  {
    files: ["**/*.ts", "**/*.vue"],
    plugins: {
      "@typescript-eslint": tsEslint,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".vue"],
      },
    },
    rules: {
      "@typescript-eslint/adjacent-overload-signatures": "warn",
      "@typescript-eslint/array-type": [
        "warn",
        { default: "array", readonly: "array" },
      ],
      "@typescript-eslint/await-thenable": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/ban-types": "warn",
      "@typescript-eslint/class-literal-property-style": "warn",
      "@typescript-eslint/class-methods-use-this": "warn",
      "@typescript-eslint/consistent-generic-constructors": [
        "warn",
        "constructor",
      ],
      "@typescript-eslint/consistent-indexed-object-style": ["warn", "record"],
      "@typescript-eslint/consistent-type-assertions": [
        "warn",
        {
          assertionStyle: "as",
          objectLiteralTypeAssertions: "allow-as-parameter",
        },
      ],
      "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
      "@typescript-eslint/default-param-last": "warn",
      "@typescript-eslint/dot-notation": "warn",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/explicit-member-accessibility": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "warn",
      "@typescript-eslint/init-declarations": "warn",
      "@typescript-eslint/max-params": ["warn", { max: 3 }],
      "@typescript-eslint/member-ordering": "warn",
      "@typescript-eslint/method-signature-style": ["warn", "property"],
      "@typescript-eslint/no-array-constructor": "warn",
      "@typescript-eslint/no-base-to-string": "warn",
      "@typescript-eslint/no-confusing-non-null-assertion": "warn",
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/no-duplicate-enum-values": "warn",
      "@typescript-eslint/no-duplicate-type-constituents": "warn",
      "@typescript-eslint/no-dynamic-delete": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-extra-non-null-assertion": "warn",
      "@typescript-eslint/no-extraneous-class": "warn",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-for-in-array": "warn",
      "@typescript-eslint/no-implied-eval": "warn",
      "@typescript-eslint/no-import-type-side-effects": "warn",
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/no-invalid-void-type": "warn",
      "@typescript-eslint/no-loop-func": "warn",
      "@typescript-eslint/no-loss-of-precision": "warn",
      "@typescript-eslint/no-magic-numbers": "warn",
      "@typescript-eslint/no-meaningless-void-operator": "warn",
      "@typescript-eslint/no-misused-new": "warn",
      "@typescript-eslint/no-misused-promises": "warn",
      "@typescript-eslint/no-mixed-enums": "warn",
      "@typescript-eslint/no-namespace": "warn",
      "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "warn",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-redundant-type-constituents": "warn",
      "@typescript-eslint/no-require-imports": "warn",
      "@typescript-eslint/no-shadow": "warn",
      "@typescript-eslint/no-throw-literal": "warn",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
      "@typescript-eslint/no-unnecessary-condition": "warn",
      "@typescript-eslint/no-unnecessary-qualifier": "warn",
      "@typescript-eslint/no-unnecessary-type-arguments": "warn",
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "@typescript-eslint/no-unnecessary-type-constraint": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unsafe-declaration-merging": "warn",
      "@typescript-eslint/no-unsafe-enum-comparison": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/no-unsafe-unary-minus": "warn",
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-use-before-define": "warn",
      "@typescript-eslint/no-useless-constructor": "warn",
      "@typescript-eslint/no-useless-empty-export": "warn",
      "@typescript-eslint/no-var-requires": "warn",
      "@typescript-eslint/non-nullable-type-assertion-style": "warn",
      "@typescript-eslint/parameter-properties": "warn",
      "@typescript-eslint/prefer-as-const": "warn",
      "@typescript-eslint/prefer-destructuring": "warn",
      "@typescript-eslint/prefer-enum-initializers": "warn",
      "@typescript-eslint/prefer-for-of": "warn",
      "@typescript-eslint/prefer-function-type": "warn",
      "@typescript-eslint/prefer-includes": "warn",
      "@typescript-eslint/prefer-literal-enum-member": "warn",
      "@typescript-eslint/prefer-namespace-keyword": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/prefer-optional-chain": "warn",
      "@typescript-eslint/prefer-readonly": "warn",
      "@typescript-eslint/prefer-reduce-type-parameter": "warn",
      "@typescript-eslint/prefer-regexp-exec": "warn",
      "@typescript-eslint/prefer-return-this-type": "warn",
      "@typescript-eslint/prefer-string-starts-ends-with": "warn",
      "@typescript-eslint/prefer-ts-expect-error": "warn",
      "@typescript-eslint/promise-function-async": "warn",
      "@typescript-eslint/require-array-sort-compare": "warn",
      "@typescript-eslint/require-await": "warn",
      "@typescript-eslint/restrict-plus-operands": "warn",
      "@typescript-eslint/restrict-template-expressions": "warn",
      "@typescript-eslint/return-await": "warn",
      "@typescript-eslint/sort-type-constituents": "warn",
      "@typescript-eslint/strict-boolean-expressions": "warn",
      "@typescript-eslint/switch-exhaustiveness-check": "warn",
      "@typescript-eslint/triple-slash-reference": "warn",
      "@typescript-eslint/typedef": "warn",
      "@typescript-eslint/unbound-method": "warn",
      "@typescript-eslint/unified-signatures": "warn",
    },
  },
  // vue eslint rules
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      ecmaVersion: 2020,
      sourceType: "module",
      parserOptions: {
        parser: tsParser,
        sourceType: "module",
      },
    },
    plugins: { vue },
    rules: {
      "vue/script-indent": ["warn", 2, { baseIndent: 1 }],
      "vue/component-name-in-template-casing": ["error", "kebab-case"],
      "vue/component-options-name-casing": ["error", "kebab-case"],
      "vue/custom-event-name-casing": ["error", "kebab-case"],
      "vue/define-emits-declaration": ["error", "type-based"],
      "vue/define-props-declaration": ["error", "type-based"],
      "vue/component-api-style": ["error", ["script-setup"]],
      "vue/no-required-prop-with-default": ["error", { autofix: false }],
      "vue/multi-word-component-names": "error",
      "vue/no-arrow-functions-in-watch": "error",
      "vue/no-async-in-computed-properties": "error",
      "vue/no-child-content": "error",
      "vue/no-computed-properties-in-data": "error",
      "vue/no-deprecated-data-object-declaration": "error",
      "vue/no-deprecated-destroyed-lifecycle": "error",
      "vue/no-deprecated-dollar-listeners-api": "error",
      "vue/no-deprecated-dollar-scopedslots-api": "error",
      "vue/no-deprecated-events-api": "error",
      "vue/no-deprecated-filter": "error",
      "vue/no-deprecated-functional-template": "error",
      "vue/no-deprecated-html-element-is": "error",
      "vue/no-deprecated-inline-template": "error",
      "vue/no-deprecated-props-default-this": "error",
      "vue/no-deprecated-router-link-tag-prop": "error",
      "vue/no-deprecated-scope-attribute": "error",
      "vue/no-deprecated-slot-attribute": "error",
      "vue/no-deprecated-slot-scope-attribute": "error",
      "vue/no-deprecated-v-bind-sync": "error",
      "vue/no-deprecated-v-is": "error",
      "vue/no-deprecated-v-on-native-modifier": "error",
      "vue/no-deprecated-v-on-number-modifiers": "error",
      "vue/no-deprecated-vue-config-keycodes": "error",
      "vue/no-dupe-keys": "error",
      "vue/no-dupe-v-else-if": "error",
      "vue/no-duplicate-attributes": "error",
      "vue/no-export-in-script-setup": "error",
      "vue/no-expose-after-await": "error",
      "vue/no-lifecycle-after-await": "error",
      "vue/no-mutating-props": "error",
      "vue/no-parsing-error": "error",
      "vue/no-ref-as-operand": "error",
      "vue/no-reserved-component-names": "error",
      "vue/no-reserved-keys": "error",
      "vue/no-reserved-props": "error",
      "vue/no-shared-component-data": "error",
      "vue/no-side-effects-in-computed-properties": "error",
      "vue/no-template-key": "error",
      "vue/no-textarea-mustache": "error",
      "vue/no-unused-components": "error",
      "vue/no-unused-vars": "error",
      "vue/no-use-computed-property-like-method": "error",
      "vue/no-use-v-if-with-v-for": "error",
      "vue/no-useless-template-attributes": "error",
      "vue/no-v-for-template-key-on-child": "error",
      "vue/no-v-text-v-html-on-component": "error",
      "vue/no-watch-after-await": "error",
      "vue/prefer-import-from-vue": "error",
      "vue/require-component-is": "error",
      "vue/require-prop-type-constructor": "error",
      "vue/require-render-return": "error",
      "vue/require-slots-as-functions": "error",
      "vue/require-toggle-inside-transition": "error",
      "vue/require-v-for-key": "error",
      "vue/require-valid-default-prop": "error",
      "vue/return-in-computed-property": "error",
      "vue/return-in-emits-validator": "error",
      "vue/use-v-on-exact": "error",
      "vue/valid-attribute-name": "error",
      "vue/valid-define-emits": "error",
      "vue/valid-define-props": "error",
      "vue/valid-next-tick": "error",
      "vue/valid-template-root": "error",
      "vue/valid-v-bind": "error",
      "vue/valid-v-cloak": "error",
      "vue/valid-v-else-if": "error",
      "vue/valid-v-else": "error",
      "vue/valid-v-for": "error",
      "vue/valid-v-html": "error",
      "vue/valid-v-if": "error",
      "vue/valid-v-is": "error",
      "vue/valid-v-memo": "error",
      "vue/valid-v-model": "error",
      "vue/valid-v-on": "error",
      "vue/valid-v-once": "error",
      "vue/valid-v-pre": "error",
      "vue/valid-v-show": "error",
      "vue/valid-v-slot": "error",
      "vue/valid-v-text": "error",
    },
  },
  // global rules
  {
    files: ["**/*"],
    plugins: {
      "array-func": arrayFuncPlugin,
    },
    rules: {
      "array-func/avoid-reverse": "off",
      "array-func/from-map": "warn",
      "array-func/no-unnecessary-this-arg": "off",
      "array-func/prefer-array-from": "warn",
      "array-func/prefer-flat": "warn",
      "array-func/prefer-flat-map": "warn",
    },
  },
  eslintConfigPrettier,
]);