<template>
  <div class="site-shell flex flex-col">
    <MenuBase class="flex-shrink-0" />
    <div class="container mx-auto min-w-0 w-full flex-1">
      <nuxt />
    </div>
    <FooterBase class="flex-shrink-0" />
  </div>
</template>

<script>
export default {
  components: {
    MenuBase: () => import('~/components/MenuBase.vue'),
    FooterBase: () => import('~/components/FooterBase.vue')
  }
}
</script>

<style>
.site-shell {
  min-height: 100vh;
  min-height: 100dvh;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-size: 1em;

  background-color: #111827;
  color: #fff;

  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
