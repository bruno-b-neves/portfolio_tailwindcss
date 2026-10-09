<template>
  <div>
    <MenuBase />
    <div class="container mx-auto">
      <nuxt />
    </div>
    <FooterBase />
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
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1em;
  line-height: 1.5;
  letter-spacing: 0.5px;

  background-color: #111827;
  color: #fff;

  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
