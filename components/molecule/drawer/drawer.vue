<template>
  <div
    class="absolute bottom-0 top-0 w-min bg-page-background-color p-2 shadow-sm shadow-black"
    :class="{ isOpen: '' }"
  >
    <slot></slot>
  </div>
</template>
