<template>
  <article class="flex flex-col flex-nowrap gap-y-7">
    <header flex="~ col nowrap" gap-y-2 text-center>
      <h2 text-xl font-bold><slot name="title"></slot></h2>
      <p text-md font-semibold text-gray-500>
        <slot name="description"></slot>
      </p>
    </header>
    <slot></slot>
  </article>
</template>
