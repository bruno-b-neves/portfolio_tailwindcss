<template>
  <div class="bg-gray-900 text-gray-100">
    <main class="relative overflow-hidden px-6 py-16 sm:px-8 lg:px-16 lg:py-20" aria-labelledby="home-title">
      <div class="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-500 opacity-10 filter blur-3xl" aria-hidden="true" />
      <div class="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div class="lg:col-span-7">
          <p class="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs text-gray-300">
            <span class="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            Disponível para oportunidades
          </p>
          <p class="mt-6 text-lg text-gray-300">Olá, sou Bruno Neves.</p>
          <h1 id="home-title" class="mt-3 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Desenvolvedor Frontend.
            <span class="mt-2 block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Vue.js e Nuxt.</span>
          </h1>
          <p class="mt-5 max-w-lg leading-relaxed text-gray-400 sm:text-lg">
            Desenvolvo interfaces web responsivas, com atenção à performance, acessibilidade e experiência de navegação.
          </p>
          <div class="mt-7 flex flex-col gap-3 sm:flex-row">
            <NuxtLink to="/projetos" class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Ver projetos <Icon icon="material-symbols:arrow-forward-rounded" width="18" height="18" aria-hidden="true" />
            </NuxtLink>
            <button type="button" @click="isContactOpen = true" class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-5 py-3 text-sm font-semibold text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <Icon icon="material-symbols:mail-outline-rounded" width="18" height="18" aria-hidden="true" />Vamos conversar
            </button>
          </div>
          <NuxtLink to="/sobre" class="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm text-blue-300 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Mais sobre mim <Icon icon="material-symbols:arrow-forward-rounded" width="17" height="17" aria-hidden="true" />
          </NuxtLink>
        </div>
        <div class="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 lg:col-span-5">
          <img src="~/assets/image/bbn.png" alt="Bruno Neves, desenvolvedor Frontend" width="502" height="497" fetchpriority="high" decoding="async" class="profile-photo block h-72 w-full object-cover object-center filter grayscale transition duration-500 hover:grayscale-0 sm:h-96" />
        </div>
      </div>
    </main>
    <ContactModal :is-open="isContactOpen" @close="isContactOpen = false" />
  </div>
</template>

<script>
import ContactModal from '~/components/ContactModal.vue'

export default {
  name: 'IndexPage',
  components: { ContactModal },
  data() { return { isContactOpen: false } },
  head() {
    return {
      title: 'Bruno Neves | Desenvolvedor Frontend — Vue.js e Nuxt',
      meta: [{ hid: 'description', name: 'description', content: 'Bruno Neves, desenvolvedor Frontend com foco em Vue.js e Nuxt. Conheça meus projetos de interfaces web responsivas e entre em contato.' }]
    }
  }
}
</script>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .profile-photo { transition: none; }
}
</style>
