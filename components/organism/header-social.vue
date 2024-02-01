<template>
  <nav class="flex flex-row flex-wrap gap-5">
    <atom-social-button
      v-for="{ link, color, id } in networks"
      :href="link"
      :color="color"
      :icon="iconMap[id]"
      :key="id"
    />
  </nav>
</template>

<script setup lang="ts">
  import discordIcon from "~/components/icons/discord.vue";
  import twitterIcon from "~/components/icons/twitter.vue";
  import githubIcon from "~/components/icons/github.vue";
  import linkedinIcon from "~/components/icons/linkedin.vue";

  const { data } = await useFetch("/api/social");

  const networks = computed(() => data.value ?? []);

  const iconMap = ref<Record<string, Component>>({
    discord: discordIcon,
    github: githubIcon,
    linkedin: linkedinIcon,
    twitter: twitterIcon,
  });
</script>

<style scoped></style>
