<template>
  <footer class="border-t border-gray-800 bg-gray-900 px-6 py-6 text-sm text-gray-400 sm:px-8">
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-4 lg:flex-row lg:justify-between">
      <div class="text-center lg:text-left"><NuxtLink to="/" aria-label="Bruno Neves — página inicial" class="inline-flex min-h-11 items-center rounded-lg font-semibold text-white hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400">Bruno Neves</NuxtLink><p class="text-xs text-gray-500">Desenvolvedor Frontend</p></div>
      <nav aria-label="Links do rodapé"><ul class="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
        <li v-for="link in links" :key="link.to"><NuxtLink :to="link.to" class="inline-flex min-h-11 items-center rounded-lg hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">{{ link.label }}</NuxtLink></li>
        <li><button type="button" class="min-h-11 rounded-lg hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400" @click="isContactOpen = true">Contato</button></li>
      </ul></nav>
      <div class="flex items-center gap-2"><a href="https://github.com/bruno-b-neves" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Bruno Neves (nova aba)" class="inline-flex h-11 w-11 items-center justify-center rounded-lg hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"><Icon icon="mdi:github" width="23" height="23" aria-hidden="true" /></a><a href="https://linkedin.com/in/bruno-barbosa-neves-1b15621ab" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Bruno Neves (nova aba)" class="inline-flex h-11 w-11 items-center justify-center rounded-lg hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"><Icon icon="mdi:linkedin" width="23" height="23" aria-hidden="true" /></a></div>
    </div>
    <p class="mx-auto mt-5 max-w-6xl border-t border-gray-800 pt-4 text-center text-xs text-gray-500">© {{ year }} Bruno Neves. Todos os direitos reservados.</p>
    <ContactModal :is-open="isContactOpen" @close="isContactOpen = false" />
  </footer>
</template>
<script>
import ContactModal from '~/components/ContactModal.vue'

export default {
  name: 'FooterBase',
  components: { ContactModal },
  data() {
    return {
      isContactOpen: false,
      year: new Date().getFullYear(),
      links: [{ to: '/sobre', label: 'Sobre' }, { to: '/projetos', label: 'Projetos' }, { to: '/certificacoes', label: 'Certificações' }]
    }
  }
}
</script>
