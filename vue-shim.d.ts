import VueRouter from "vue-router";

// html.d.ts
declare module "@vue/runtime-dom" {
  type HTMLAttributes = Record<string, any>;
}
declare module "@vue/runtime-core" {
  type AllowedComponentProps = Record<string, any>;
}

declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter;
  }
}
