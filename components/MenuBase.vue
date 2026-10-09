<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900 transition-shadow duration-200"
    :class="{ 'shadow-lg': isScroll }"
  >
    <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-6 lg:flex-nowrap lg:px-8">
      <!-- Marca -->
      <NuxtLink
        to="/"
        class="group inline-flex min-w-0 items-center gap-3 rounded-lg no-underline focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Bruno Neves — página inicial"
        @click.native="closeMenu"
      >
        <img
          src="~/assets/image/frontend-dev-logo.svg"
          alt=""
          width="44"
          height="44"
          class="h-11 w-11 flex-shrink-0"
        />

        <span class="flex min-w-0 flex-col leading-tight">
          <span class="text-base font-bold tracking-tight text-white transition-colors group-hover:text-emerald-300 sm:text-lg">
            Bruno Neves
          </span>
          <span class="mt-1 font-mono text-xs uppercase tracking-widest text-gray-400 sm:text-[11px]">
            Frontend Developer
          </span>
        </span>
      </NuxtLink>

      <!-- Botão mobile -->
      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-gray-300 transition-colors hover:border-gray-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 lg:hidden"
        :aria-expanded="String(isCollapsed)"
        aria-controls="main-navigation"
        :aria-label="isCollapsed ? 'Fechar menu de navegação' : 'Abrir menu de navegação'"
        @click="toggleCollapse"
      >
        <Icon
          :icon="isCollapsed ? 'material-symbols:close-rounded' : 'material-symbols:menu-rounded'"
          width="22"
          height="22"
        />
      </button>

      <!-- Navegação responsiva -->
      <transition
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <div
          v-show="isCollapsed || isDesktop"
          id="main-navigation"
          class="w-full overflow-hidden lg:flex lg:w-auto lg:flex-1 lg:items-center lg:justify-end lg:overflow-visible"
        >
          <nav aria-label="Navegação principal" class="border-t border-gray-800 pb-3 pt-3 lg:ml-8 lg:border-0 lg:p-0">
            <ul class="m-0 flex list-none flex-col gap-1 p-0 lg:flex-row lg:items-center lg:gap-2">
              <li>
                <NuxtLink
                  :to="{ path: '/sobre' }"
                  class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-400 no-underline transition-colors hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 lg:py-2.5"
                  @click.native="closeMenu"
                >
                  Sobre
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :to="{ path: '/projetos' }"
                  class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-400 no-underline transition-colors hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 lg:py-2.5"
                  @click.native="closeMenu"
                >
                  Projetos
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :to="{ path: '/certificacoes' }"
                  class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-400 no-underline transition-colors hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 lg:py-2.5"
                  @click.native="closeMenu"
                >
                  Certificações
                </NuxtLink>
              </li>
              <li class="pt-2 lg:pl-2 lg:pt-0">
                <button
                  type="button"
                  class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500 border-opacity-40 bg-emerald-500 bg-opacity-10 px-4 py-2.5 text-sm font-semibold text-emerald-50 transition-colors hover:border-emerald-300 hover:bg-opacity-20 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 lg:w-auto"
                  @click="openContact"
                >
                  <Icon icon="material-symbols:mail-outline-rounded" width="17" height="17" />
                  Vamos conversar
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </transition>
    </div>

    <ContactModal :is-open="isContactOpen" @close="isContactOpen = false" />
  </header>
</template>

<script>
import ContactModal from '~/components/ContactModal.vue'

export default {
  name: 'MenuBase',

  components: {
    ContactModal
  },

  data() {
    return {
      isCollapsed: false,
      isScroll: false,
      isDesktop: false,
      isContactOpen: false
    }
  },

  watch: {
    $route() {
      this.closeMenu()
    }
  },

  mounted() {
    if (process.client) {
      this.checkScreenSize()
      window.addEventListener('resize', this.checkScreenSize)
      window.addEventListener('scroll', this.handleScroll, { passive: true })
    }
  },

  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('resize', this.checkScreenSize)
      window.removeEventListener('scroll', this.handleScroll)
    }
  },

  methods: {
    checkScreenSize() {
      this.isDesktop = window.innerWidth >= 1024

      if (this.isDesktop) {
        this.isCollapsed = false
      }
    },

    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed
    },

    closeMenu() {
      this.isCollapsed = false
    },

    openContact() {
      this.closeMenu()
      this.isContactOpen = true
    },

    handleScroll() {
      this.isScroll = window.scrollY > 8
    },

    beforeEnter(el) {
      if (this.isDesktop) return
      el.style.height = '0px'
      el.style.opacity = '0'
    },

    enter(el, done) {
      if (this.isDesktop) return done()

      el.offsetHeight
      el.style.transition = 'height 260ms ease, opacity 260ms ease'
      el.style.height = `${el.scrollHeight}px`
      el.style.opacity = '1'
      setTimeout(done, 260)
    },

    afterEnter(el) {
      if (this.isDesktop) return
      el.style.height = 'auto'
      el.style.transition = ''
    },

    beforeLeave(el) {
      if (this.isDesktop) return
      el.style.height = `${el.scrollHeight}px`
      el.style.opacity = '1'
    },

    leave(el, done) {
      if (this.isDesktop) return done()

      el.offsetHeight
      el.style.transition = 'height 260ms ease, opacity 260ms ease'
      el.style.height = '0px'
      el.style.opacity = '0'
      setTimeout(done, 260)
    }
  }
}
</script>
