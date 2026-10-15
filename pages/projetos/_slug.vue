<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <section class="px-6 py-16 sm:px-8 md:py-24 lg:px-16">
      <div class="mx-auto max-w-6xl">
        <nuxt-link to="/projetos" class="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"><Icon icon="material-symbols:arrow-back-rounded" width="18" height="18" /> Voltar aos projetos</nuxt-link>
        <header class="mb-9 mt-8">
          <p class="text-sm font-medium text-emerald-400">{{ collection.institution }} · Coleção de estudos</p>
          <h1 class="mt-2 text-3xl font-bold text-white sm:text-4xl">{{ collection.title }}</h1>
          <p class="mt-3 max-w-2xl leading-relaxed text-gray-400">{{ collection.description }}</p>
          <a v-if="collection.repositoryUrl" :href="collection.repositoryUrl" target="_blank" rel="noopener noreferrer" class="mt-5 inline-flex min-h-10 items-center gap-2 rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"><Icon icon="mdi:github" width="18" height="18" /> Repositório completo <Icon icon="material-symbols:open-in-new-rounded" width="16" height="16" /></a>
        </header>
        <div v-if="collectionProjects.length" class="mb-7 rounded-xl border border-gray-800 bg-gray-800/50 p-4 sm:p-5">
          <label for="technology-filter" class="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">Tecnologia principal</label>
          <select id="technology-filter" v-model="activeTechnology" class="min-h-10 w-full max-w-xs rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="todas">Todas as tecnologias</option>
            <option v-for="technology in availableTechnologies" :key="technology" :value="technology">{{ technology }}</option>
          </select>
          <p class="mt-3 text-xs text-gray-400" aria-live="polite">{{ filteredProjects.length }} {{ filteredProjects.length === 1 ? 'projeto encontrado' : 'projetos encontrados' }}</p>
        </div>
        <div v-if="filteredProjects.length" class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="project in filteredProjects" :key="project.id"
            class="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl">
            <div class="relative overflow-hidden border-b border-gray-700 bg-gray-900" style="padding-top: 56.25%;">
              <template v-if="project.image">
                <img :src="project.image" :alt="'Prévia do projeto '+ project.title" loading="lazy"
                  class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </template>
              <div v-else class="absolute inset-0 flex items-center justify-center text-emerald-400">
                <Icon :icon="project.icon || 'ph:code-bold'" width="36" height="36" />
              </div>
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-emerald-400/20" aria-hidden="true" />
              <span v-if="project.status" class="absolute right-3 top-3 rounded-md border border-emerald-500/40 bg-gray-900/90 px-2 py-1 text-xs font-medium text-emerald-300">{{ project.status }}</span>
            </div>

            <div class="flex flex-1 flex-col p-4 sm:p-5">
              <div class="mb-2 flex flex-wrap items-center gap-2 text-xs">
                <span class="rounded-md border border-blue-500/30 bg-blue-500/10 px-2 py-1 font-medium text-blue-300">{{ projectTypeLabel(project.type) }}</span>
                <span v-if="project.primaryTechnology || (project.technologies && project.technologies.length)" class="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 font-medium text-emerald-300">{{ project.primaryTechnology || project.technologies[0] }}</span>
              </div>
              <h2 class="text-lg font-semibold leading-snug text-white group-hover:text-blue-300">{{ project.title }}</h2>
              <p v-if="project.origin" class="mt-1 text-xs text-gray-400">{{ project.origin }}</p>
              <!-- <p class="project-description mt-3 text-sm leading-relaxed text-gray-300">{{ project.shortDescription || project.description }}</p> -->
              <ul v-if="project.technologies && project.technologies.length" class="mt-4 flex flex-wrap gap-1.5" :aria-label="'Tecnologias utilizadas em '+ project.title">
                <li v-for="technology in project.technologies.slice(0, 3)" :key="technology" class="rounded border border-gray-700 bg-gray-900 px-2 py-1 text-xs text-gray-300">{{ technology }}</li>
                <li v-if="project.technologies.length > 3" class="rounded border border-gray-700 bg-gray-900 px-2 py-1 text-xs text-gray-400">+{{ project.technologies.length - 3 }}</li>
              </ul>
              <div class="mt-2 flex items-center justify-between gap-2 border-t border-gray-700 pt-4" :class="project.technologies && project.technologies.length ? 'mt-4' : 'mt-5'">
                <button type="button" @click="openDetails(project)" class="inline-flex min-h-10 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  Ver detalhes <Icon icon="material-symbols:arrow-forward-rounded" width="17" height="17" />
                </button>
                <a v-if="project.repositoryUrl" :href="project.repositoryUrl" target="_blank" rel="noopener noreferrer" :aria-label="'Ver código de '+ project.title + ' no GitHub (nova aba)'"
                  class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 bg-gray-900 text-gray-200 transition hover:border-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <Icon icon="mdi:github" width="20" height="20" />
                </a>
              </div>
            </div>
          </article>
        </div>
        <div v-else class="rounded-xl border border-dashed border-gray-700 bg-gray-800/60 p-8 text-center">
          <h2 class="text-lg font-semibold text-white">{{ collectionProjects.length ? 'Nenhum projeto com esse filtro' : 'Coleção em preparação' }}</h2>
          <p class="mt-2 text-sm text-gray-400">{{ collectionProjects.length ? 'Escolha outra tecnologia para visualizar os projetos.' : 'Os projetos reais desta formação serão adicionados aqui conforme forem cadastrados.' }}</p>
          <button v-if="collectionProjects.length" type="button" @click="activeTechnology = 'todas'" class="mt-4 rounded-lg border border-gray-600 px-4 py-2 text-sm text-white hover:bg-gray-700">Limpar filtro</button>
        </div>
      </div>
    </section>
    <!-- Modal de detalhes -->

    <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="presentation" @click.self="closeDetails">
      <div class="absolute inset-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-sm" aria-hidden="true" @click="closeDetails" />
      <section ref="detailsDialog" role="dialog" aria-modal="true" :aria-labelledby="'project-dialog-title'"
        tabindex="-1" class="relative z-10 flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 shadow-2xl" style="max-height: 90vh" @keydown.tab="trapDetailsFocus">
        <div class="flex items-center justify-between gap-4 border-b border-gray-700 px-5 py-4">
          <div>
            <p class="text-xs font-medium text-emerald-400">{{ selectedProject.origin || projectTypeLabel(selectedProject.type) }}</p>
            <h2 id="project-dialog-title" class="mt-1 text-xl font-bold text-white">{{ selectedProject.title }}</h2>
          </div>
          <button ref="detailsClose" type="button" @click="closeDetails" aria-label="Fechar detalhes" class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
            <Icon icon="material-symbols:close-rounded" width="24" height="24" />
          </button>
        </div>
        <div class="overflow-y-auto p-5 sm:p-6">
          <div v-if="selectedProject.image" class="mb-5 flex items-center justify-center overflow-hidden rounded-xl bg-gray-900" style="min-height: 220px;">
            <img :src="selectedProject.image" :alt="'Prévia do projeto '+ selectedProject.title" class="h-full w-full object-cover" />
          </div>
          <p class="text-sm leading-relaxed text-gray-300 sm:text-base">{{ selectedProject.description }}</p>
          <h3 class="mt-6 text-sm font-semibold text-white">Tecnologias utilizadas</h3>
          <ul class="mt-3 flex flex-wrap gap-2">
            <li v-for="technology in selectedProject.technologies" :key="technology" class="rounded-md border border-gray-600 bg-gray-900 px-2.5 py-1 text-xs text-gray-200">{{ technology }}</li>
          </ul>
          <div v-if="selectedProject.demoUrl || selectedProject.repositoryUrl" class="mt-6 flex flex-wrap gap-3 border-t border-gray-700 pt-5">
            <a v-if="selectedProject.demoUrl" :href="selectedProject.demoUrl" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">
              {{ selectedProject.demoLabel || 'Ver demonstração' }} <Icon icon="material-symbols:open-in-new-rounded" width="17" height="17" />
            </a>
            <a v-if="selectedProject.repositoryUrl" :href="selectedProject.repositoryUrl" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 items-center gap-2 rounded-lg border border-gray-600 bg-gray-900 px-4 py-2 text-sm font-semibold text-gray-100 hover:bg-gray-700">
              <Icon icon="mdi:github" width="18" height="18" /> Ver código
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { projects, collections } from '~/data/projects'
import projectDialog from '~/mixins/projectDialog'
export default {
  name: 'ColecaoProjetosPage',
  mixins: [projectDialog],
  validate({ params }) { return collections.some(collection => collection.slug === params.slug) },
  data() { return { projects, activeTechnology: 'todas' } },
  computed: {
    collection() { return collections.find(collection => collection.slug === this.$route.params.slug) || {} },
    collectionProjects() { return this.projects.filter(project => project.source === this.collection.slug) },
    availableTechnologies() { return [...new Set(this.collectionProjects.map(project => project.primaryTechnology || (project.technologies && project.technologies[0])).filter(Boolean))].sort() },
    filteredProjects() { return this.collectionProjects.filter(project => this.activeTechnology === 'todas' || (project.primaryTechnology || (project.technologies && project.technologies[0])) === this.activeTechnology) }
  },
  methods: { projectTypeLabel(type) { return { curso: 'Curso', pessoal: 'Pessoal', academico: 'Acadêmico' }[type] || 'Projeto' } },
  head() { return { title: (this.collection.title || 'Coleção') + ' | Projetos — Bruno Neves', meta: [{ hid: 'description', name: 'description', content: this.collection.description || 'Coleção de projetos de estudo.' }] } }
}
</script>
