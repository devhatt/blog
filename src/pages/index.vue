<script lang="ts" setup>
  import { definePageMeta, useSeoMeta } from "#imports";

  definePageMeta({
    layout: "none",
    name: "devhatt",
  });

  useSeoMeta({
    title: "DevHatt",
    ogTitle: "DevHatt",
    description:
      "A devhatt é uma comunidade de desenvolvedores que tem como objetivo ajudar e ser ajudado.",
    ogDescription:
      "A devhatt é uma comunidade de desenvolvedores que tem como objetivo ajudar e ser ajudado.",
    ogImage: "/devhatt.jpg",
    twitterCard: "summary_large_image",
  });
</script>

<template>
  <main centralize overflow="hidden" h="100vh" w="100vw" bg="primary">
    <section centralize>
      <div flex="~ row-reverse" justify-center items-center>
        <h2 font-black text="7rem">DevHatt</h2>
        <img alt="logo da devhatt" src="/devhatt.jpg" />
      </div>
      <NuxtLink
        href="https://discord.gg/3gsMAEumEd"
        target="_blank"
        text-center
        bg="white"
        p="3"
        rounded
        w="19rem"
        flex="~ row"
        items-center
        justify-between
      >
        <span
          class="i-ic-baseline-discord text-blue-500 w-10 h-10 mr-3"
          alt="discord logo"
        />
        <p text-dark>Entre no nosso Discord</p>
      </NuxtLink>
    </section>
  </main>
</template>
