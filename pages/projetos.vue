<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <section
      id="projetos"
      class="relative isolate overflow-hidden px-6 py-16 sm:px-8 md:py-24 lg:px-16"
      aria-labelledby="projetos-title"
    >
      <!-- Elementos decorativos alinhados à página Sobre -->
      <div
        class="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-blue-500 opacity-10 blur-3xl"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-72 w-72 rounded-full bg-emerald-400 opacity-10 blur-3xl"
        aria-hidden="true"
      />

      <div class="relative z-10 mx-auto max-w-6xl">
        <!-- Cabeçalho -->
        <header class="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div class="max-w-2xl">
            <div
              class="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300"
            >
              <span class="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              <span>Portfólio · Projetos</span>
            </div>

            <h1 id="projetos-title" class="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Projetos em
              <span class="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                destaque.
              </span>
            </h1>
          </div>

          <p class="max-w-xl leading-relaxed text-gray-400 sm:text-base">
            Uma seleção de projetos e experimentos que demonstram meu trabalho com interfaces,
            componentes reutilizáveis e desenvolvimento frontend.
          </p>
        </header>

        <!-- Lista de projetos -->
        <div v-if="projects.length" class="grid grid-cols-1 gap-5 md:grid-cols-2">
          <article
            v-for="project in projects"
            :key="project.id"
            class="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-800 transition duration-300 hover:-translate-y-1 hover:border-gray-600 hover:shadow-xl hover:shadow-black/10"
          >
            <!-- Área de destaque do projeto -->
            <div
              class="relative flex min-h-48 items-center justify-center overflow-hidden border-b border-gray-700 bg-gray-900 p-8 sm:min-h-56"
            >
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-400/10 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div
                class="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-700 bg-gray-800 text-emerald-400 shadow-lg transition duration-300 group-hover:scale-105 group-hover:text-blue-300"
              >
                <Icon :icon="project.icon" width="42" height="42" />
              </div>

              <span
                class="absolute left-4 top-4 rounded-md border border-gray-700 bg-gray-900/90 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur"
              >
                {{ project.category }}
              </span>

              <span
                v-if="project.status"
                class="absolute right-4 top-4 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300"
              >
                {{ project.status }}
              </span>
            </div>

            <!-- Conteúdo -->
            <div class="flex flex-1 flex-col p-5 sm:p-6">
              <h2 class="text-xl font-semibold leading-snug text-white transition-colors group-hover:text-blue-300">
                {{ project.title }}
              </h2>

              <p class="mt-3 flex-1 text-sm leading-relaxed text-gray-300 sm:text-base">
                {{ project.description }}
              </p>

              <ul
                v-if="project.technologies && project.technologies.length"
                class="mt-5 flex flex-wrap gap-2"
                :aria-label="`Tecnologias utilizadas em ${project.title}`"
              >
                <li
                  v-for="technology in project.technologies"
                  :key="technology"
                  class="rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1 text-xs font-medium text-gray-300"
                >
                  {{ technology }}
                </li>
              </ul>

              <!-- Ações: aparecem somente quando a URL real for informada -->
              <div
                v-if="project.demoUrl || project.repositoryUrl"
                class="mt-6 flex flex-wrap items-center gap-3 border-t border-gray-700 pt-5"
              >
                <a
                  v-if="project.demoUrl"
                  :href="project.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span>{{ project.demoLabel || 'Ver projeto' }}</span>
                  <Icon icon="material-symbols:open-in-new-rounded" width="18" height="18" />
                </a>

                <a
                  v-if="project.repositoryUrl"
                  :href="project.repositoryUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`Ver repositório de ${project.title} no GitHub`"
                  class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm font-semibold text-gray-200 transition duration-200 hover:border-gray-500 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <Icon icon="mdi:github" width="19" height="19" />
                  <span class="sm:hidden">Código</span>
                  <span class="hidden sm:inline">Ver código</span>
                </a>
              </div>

              <p v-else class="mt-6 border-t border-gray-700 pt-4 text-xs leading-relaxed text-gray-500">
                Links de demonstração e repositório ainda não informados.
              </p>
            </div>
          </article>
        </div>

        <!-- Estado vazio, caso todos os projetos sejam removidos -->
        <div
          v-else
          class="rounded-2xl border border-dashed border-gray-700 bg-gray-800/60 px-6 py-12 text-center"
        >
          <Icon icon="ph:folder-open-bold" width="36" height="36" class="mx-auto text-gray-500" />
          <h2 class="mt-4 text-lg font-semibold text-white">Projetos em atualização</h2>
          <p class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-400">
            Estou organizando esta seção para apresentar projetos, tecnologias e links de demonstração.
          </p>
        </div>

        <!-- Encerramento / contato -->
        <div class="mt-10 flex flex-col gap-4 rounded-2xl border border-gray-800 bg-gray-800/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h2 class="font-semibold text-white">Quer conversar sobre um projeto?</h2>
            <p class="mt-1 text-sm leading-relaxed text-gray-400">
              Entre em contato para trocar ideias ou conhecer melhor meu trabalho.
            </p>
          </div>

          <button
            type="button"
            @click="openContact"
            class="inline-flex min-h-11 flex-shrink-0 items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-5 py-3 text-sm font-semibold text-gray-200 transition duration-200 hover:border-gray-500 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <Icon icon="material-symbols:mail-outline-rounded" width="18" height="18" />
            <span>Entre em contato</span>
            <Icon icon="material-symbols:arrow-forward-rounded" width="18" height="18" />
          </button>
        </div>
      </div>
    </section>

    <ContactModal :is-open="isContactOpen" @close="isContactOpen = false" />
  </div>
</template>

<script>
import ContactModal from '~/components/ContactModal.vue'

export default {
  name: 'ProjetosPage',
  components: {
    ContactModal
  },
  data() {
    return {
      projects: [
        {
          id: 'app-financeiro',
          title: 'Aplicação de gestão financeira',
          category: 'Aplicação web',
          status: 'Projeto demonstrativo',
          icon: 'ph:currency-circle-dollar-bold',
          description:
            'Espaço para apresentar uma aplicação de gestão financeira, destacando seus principais fluxos, decisões de interface e funcionalidades implementadas.',
          technologies: ['Nuxt', 'Vue 3', 'Tailwind CSS', 'JavaScript'],
          demoLabel: 'Ver demonstração',
          demoUrl: '',
          repositoryUrl: ''
        },
        {
          id: 'design-system',
          title: 'Design System e componentes',
          category: 'Interface · UI',
          status: 'Projeto demonstrativo',
          icon: 'ph:layout-bold',
          description:
            'Espaço para apresentar uma biblioteca de componentes reutilizáveis, com atenção à consistência visual, responsividade e acessibilidade.',
          technologies: ['Vue.js', 'Tailwind CSS', 'Storybook'],
          demoLabel: 'Ver demonstração',
          demoUrl: '',
          repositoryUrl: ''
        }
      ],
      isContactOpen: false,
    }
  },
  methods: {
    openContact() {
      this.isContactOpen = true
    }
  },
  head() {
    return {
      title: 'Projetos | Bruno Neves — Desenvolvedor Frontend',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Conheça projetos de Bruno Neves em desenvolvimento frontend, interfaces web, componentes reutilizáveis e aplicações com Vue.js e Nuxt.'
        }
      ]
    }
  }
}
</script>
