<script setup lang="ts"></script>

<template>
  <div>
    <header h="18" p="3" class="hidden">
      <p font="bold" text="3xl">
        <a alt="Pagina inicial da Devhatt">DevHatt</a>
      </p>
      <nav flex="~ items-center gap-3 wrap" class="xl:none">
        <a>Eventos</a>
        <a>Projetos</a>
        <nuxt-link to="/blog">Blog</nuxt-link>
      </nav>
    </header>
    <div m="0 auto" min-w="280px" max-w="1300px" w="80vw">
      <slot></slot>
    </div>
    <footer>
      <p>Comunidade DevHatt</p>

      <p>Todos os direitos reservados</p>
      <nav>
        <a>Discord</a>
        <a>Linkedin</a>
        <a>Twitter</a>
      </nav>
    </footer>
  </div>
</template>
