<template>
  <div>
  <footer class="bg-gray-900 px-6 py-8 text-sm text-gray-400">
    <!-- Divisor com ícone central -->
    <div class="mx-auto mb-8 flex max-w-6xl items-center gap-4">
      <div class="h-px flex-1 bg-gray-800"></div>

      <Icon
        icon="lucide:code-2"
        class="shrink-0 text-gray-700 text-opacity-80"
        width="24"
        height="24"
        aria-hidden="true"
      />

      <div class="h-px flex-1 bg-gray-800"></div>
    </div>

    <div class="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div class="text-center sm:text-left">
        <NuxtLink
          to="/"
          class="inline-flex rounded-sm font-semibold text-white transition-colors hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label="Bruno Neves — página inicial"
        >
          Bruno Neves
        </NuxtLink>
        <p class="mt-1 text-xs text-gray-500">
          Desenvolvedor Front-end
        </p>
      </div>

      <nav aria-label="Links do rodapé">
        <ul class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <li>
            <NuxtLink
              to="/sobre"
              class="rounded-sm transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Sobre
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/projetos"
              class="rounded-sm transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Projetos
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/certificacoes"
              class="rounded-sm transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Certificações
            </NuxtLink>
          </li>
          <li>
            <button
              type="button"
              @click="openContact"
              class="rounded-sm transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Contato
            </button>
          </li>
        </ul>
      </nav>

      <div class="flex items-center justify-center gap-4 sm:justify-end">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-sm transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label="GitHub (abre em nova aba)"
        >
          <Icon icon="mdi:github" width="24" height="24" />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-sm transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label="LinkedIn (abre em nova aba)"
        >
          <Icon icon="mdi:linkedin" width="24" height="24" />
        </a>
      </div>
    </div>

    <div class="mx-auto mt-6 max-w-6xl border-t border-gray-800 pt-5 text-center text-xs text-gray-500">
      <p>
        © {{ new Date().getFullYear() }} Bruno Neves. Todos os direitos reservados.
      </p>
      <p class="mt-1">
        Desenvolvido com Nuxt e Tailwind CSS.
      </p>
    </div>
  </footer>

    <ContactModal :is-open="isContactOpen" @close="isContactOpen = false" />

</div>
</template>

<script>
import ContactModal from './ContactModal.vue';

export default {
  name: 'FooterBase',
  components: {
    ContactModal
  },
  data() {
    return {
      isContactOpen: false
    }
  },
  methods: {
    openContact() {
      this.isContactOpen = true
    }
  }
}
</script>
