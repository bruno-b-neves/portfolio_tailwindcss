<template>
  <header ref="header" class="sticky top-0 z-40 w-full border-b border-gray-800 bg-gray-900" @keydown.esc.stop.prevent="closeMenu(true)">
    <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-6 lg:flex-nowrap lg:px-8">
      <NuxtLink to="/" aria-label="Bruno Neves — página inicial" class="group inline-flex min-w-0 items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400" @click.native="closeMenu()">
        <img src="/brand/bruno-dev.svg" alt="" width="165" height="48" class="h-12 w-auto flex-shrink-0" />
      </NuxtLink>
      <button ref="menuToggle" type="button" :aria-expanded="String(isMenuOpen)" aria-controls="main-navigation" :aria-label="isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'" class="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 lg:hidden" @click="isMenuOpen = !isMenuOpen">
        <Icon :icon="isMenuOpen ? 'material-symbols:close-rounded' : 'material-symbols:menu-rounded'" width="23" height="23" aria-hidden="true" />
      </button>
      <nav id="main-navigation" ref="navigation" aria-label="Navegação principal" class="main-navigation w-full border-t border-gray-800 pb-2 pt-3 lg:ml-6 lg:w-auto lg:border-0 lg:p-0" :class="{ 'is-open': isMenuOpen }">
        <ul class="m-0 flex list-none flex-col gap-1 p-0 lg:flex-row lg:items-center lg:gap-2">
          <li v-for="link in links" :key="link.to">
            <NuxtLink :to="link.to" :aria-current="isActive(link.to) ? 'page' : null" class="flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400" :class="isActive(link.to) ? 'bg-gray-800 text-white' : 'text-gray-400'" @click.native="closeMenu()">{{ link.label }}</NuxtLink>
          </li>
          <li class="pt-2 lg:pl-2 lg:pt-0"><button type="button" class="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-emerald-500 border-opacity-40 bg-emerald-500 bg-opacity-10 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-emerald-400 lg:w-auto" @click="openContact"><Icon icon="material-symbols:mail-outline-rounded" width="18" height="18" aria-hidden="true" />Vamos conversar</button></li>
        </ul>
      </nav>
    </div>
    <ContactModal :is-open="isContactOpen" @close="isContactOpen = false" />
  </header>
</template>
<script>
import ContactModal from '~/components/ContactModal.vue'

export default {
  name: 'MenuBase',
  components: { ContactModal },
  data() {
    return {
      isMenuOpen: false,
      isContactOpen: false,
      links: [{ to: '/sobre', label: 'Sobre' }, { to: '/projetos', label: 'Projetos' }, { to: '/certificacoes', label: 'Certificações' }]
    }
  },
  watch: { '$route.fullPath'() { this.closeMenu() } },
  mounted() {
    this.desktopQuery = window.matchMedia('(min-width: 1024px)')
    if (this.desktopQuery.addEventListener) this.desktopQuery.addEventListener('change', this.onBreakpointChange)
    else this.desktopQuery.addListener(this.onBreakpointChange)
    document.addEventListener('pointerdown', this.onOutsidePointer)
  },
  beforeDestroy() {
    if (this.desktopQuery) {
      if (this.desktopQuery.removeEventListener) this.desktopQuery.removeEventListener('change', this.onBreakpointChange)
      else this.desktopQuery.removeListener(this.onBreakpointChange)
    }
    if (process.client) document.removeEventListener('pointerdown', this.onOutsidePointer)
  },
  methods: {
    isActive(path) { return this.$route.path === path || this.$route.path.startsWith(path + '/') },
    closeMenu(restoreFocus = false) {
      const wasOpen = this.isMenuOpen
      this.isMenuOpen = false
      if (restoreFocus && wasOpen) this.$nextTick(() => this.$refs.menuToggle && this.$refs.menuToggle.focus())
    },
    onBreakpointChange(event) {
      const navigation = this.$refs.navigation
      const focusWasInNavigation = navigation && navigation.contains(document.activeElement)
      this.closeMenu()
      if (!event.matches && focusWasInNavigation) this.$nextTick(() => this.$refs.menuToggle && this.$refs.menuToggle.focus())
    },
    onOutsidePointer(event) {
      if (this.isMenuOpen && this.$refs.header && !this.$refs.header.contains(event.target)) this.closeMenu()
    },
    openContact() {
      this.closeMenu()
      if (this.desktopQuery && !this.desktopQuery.matches && this.$refs.menuToggle) this.$refs.menuToggle.focus()
      this.isContactOpen = true
    }
  }
}
</script>
<style scoped>
.main-navigation { display: none; }
.main-navigation.is-open { display: block; }
@media (min-width: 1024px) {
  .main-navigation,
  .main-navigation.is-open { display: flex; }
}
</style>
