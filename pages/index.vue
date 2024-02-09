<script lang="ts" setup>
  const projects = ref([
    {
      description:
        "Octopost é um app que permite que o usuário faça publicações em redes sociais all-in-one, mas de forma modular, ou seja, se sua rede social não está presente ainda no app, não se preocupe, você pode desenvolver um módulo para usar essa nova rede social no app!",
      href: "https://github.com/devhatt/octopost",
      img: "octopost.png",
      tags: ["Typescript", "React", "Electron"],
      title: "Octopost",
    },
    {
      description:
        "O PetDex é um projeto mobile/desktop com o objetivo de facilitar a adoção de pets. No petdéx usuários e ONGs podem cadastrar os animais para adoção e o aplicativo vai fazer um sistema de match com o usuário que mais combina com aquele pet.",
      href: "https://github.com/devhatt/petdex-frontend",
      img: "petdex.png",
      tags: ["Javascript", "Golang"],
      title: "Petdex",
    },
    {
      description:
        "O HatBot é um bot para discord que tem como objetivo ajudar os usuários a gerenciar seus servidores, com funções de moderação, música, entretenimento e muito mais!",
      href: "https://github.com/devhatt/hatbot-discord",
      img: "discord.jpg",
      tags: ["Typescript", "Node.js"],
      title: "HatBot Discord",
    },
  ]);

  const events = ref([
    {
      date: "2017-09-08T15:25:53Z",
      description:
        "Ut sunt reprehenderit cillum elit excepteur quis Lorem. Enim aliqua non cillum do commodo ipsum cillum consequat. Tempor est minim nulla fugiat id incididunt non est aliquip.",
      href: "https://www.evento.com",
      time: "10:00 - 12:00",
      title: "Evento de React",
    },
    {
      date: "2018-09-08T15:25:53Z",
      description:
        "Pariatur fugiat elit reprehenderit elit adipisicing consequat minim ullamco nostrud esse in reprehenderit. Officia commodo ipsum enim consequat mollit culpa nulla sunt consequat duis minim ex laboris quis. Dolore amet anim qui velit nostrud non amet aute.",
      href: "https://www.evento.com",
      time: "14:00 - 16:00",
      title: "Evento de Vue",
    },
    {
      date: "2019-09-08T15:25:53Z",
      description:
        "Dolor in consectetur id occaecat esse ea duis consectetur labore labore fugiat reprehenderit. Pariatur id eu ut tempor in ad sit nisi ullamco aliquip minim. Dolor commodo incididunt nostrud culpa consequat duis occaecat consequat. Consectetur reprehenderit dolore proident quis ipsum ea proident ipsum culpa eu anim.",
      href: "https://www.evento.com",
      time: "4:00 - 5:00",
      title: "Evento de Angular",
    },
  ]);

  const posts = ref([
    {
      id: 1,
    },
  ]);
</script>

<template>
  <main>
    <h2>
      Bem-vindo a DevHatt! Aqui você encontra eventos, projetos e artigos sobre
      tecnologia.
    </h2>

    <div flex="~ col nowrap gap-y-10">
      <home-article flex="~ gap-x-2">
        <template v-slot:title> Nossos Projetos </template>
        <template v-slot:description>
          Lorem pariatur aliquip id incididunt Lorem commodo quis.
        </template>
        <div
          grid-auto-fill-250
          md:grid-auto-fill-350
          gap-4
          grid="~ justify-between"
        >
          <project-card
            v-for="(project, index) in projects"
            :key="index"
            v-bind="project"
          />
        </div>
      </home-article>

      <home-article flex="~ gap-x-2">
        <template v-slot:title> Eventos </template>
        <template v-slot:description>
          Do amet ad excepteur quis qui Lorem consectetur.
        </template>
        <div
          grid-auto-fill-280
          md:grid-auto-fill-350
          lg:grid-auto-fill-500
          gap-4
          grid="~ justify-between"
        >
          <event-card
            v-for="(event, index) in events"
            :key="index"
            v-bind="event"
          />
        </div>
      </home-article>

      <home-article>
        <template v-slot:title> Blog </template>
        <p>
          Culpa magna dolor eu tempor consequat quis aliqua. Dolore eiusmod
          labore sit sint sit nostrud nulla deserunt officia ea. Minim
          reprehenderit officia dolor Lorem.
        </p>
        <div
          grid-auto-fill-280
          md:grid-auto-fill-350
          lg:grid-auto-fill-500
          gap-4
          grid="~ justify-between"
        >
          <blog-card
            v-for="(post, index) in posts"
            :key="index"
            v-bind="post"
          />
        </div>
      </home-article>
    </div>
  </main>
</template>
