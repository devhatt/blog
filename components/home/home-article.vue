<template>
  <article class="flex flex-col flex-nowrap gap-y-7" text-center>
    <header flex="~ col nowrap" gap-y-7 m-x-30 mb="10">
      <h2 text-3xl font-bold><slot name="title"></slot></h2>
      <p text-lg font-semibold text-gray-500>
        <slot name="description"></slot>
      </p>
    </header>
    <slot></slot>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped></style>
