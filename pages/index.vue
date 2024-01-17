<template>
  <main>
    <img src="/devhat.jpg" />
    <h1>DevHatt</h1>
  </main>
</template>

<style lang="scss">
  main {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #4fa5e0;
  }

  img {
    width: 100px;
    height: 100px;

    margin-bottom: 20px;
  }

  h1 {
    font-size: 2.5rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    color: white;
  }
</style>
