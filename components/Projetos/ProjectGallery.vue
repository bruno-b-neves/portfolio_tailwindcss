<template>
  <div>
    <div v-if="filterable && projects.length" class="mb-6 rounded-xl border border-gray-700 bg-gray-800 p-4 sm:p-5">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div><label for="project-search" class="mb-2 block text-sm text-gray-300">Buscar projeto</label><input id="project-search" v-model="search" type="search" placeholder="Nome, tecnologia ou tema" class="min-h-11 w-full rounded-lg border border-gray-600 bg-gray-900 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400" /></div>
        <div><label for="technology-filter" class="mb-2 block text-sm text-gray-300">Tecnologia principal</label><select id="technology-filter" v-model="technology" class="min-h-11 w-full rounded-lg border border-gray-600 bg-gray-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400"><option value="">Todas as tecnologias</option><option v-for="option in technologies" :key="option" :value="option">{{ option }}</option></select></div>
      </div>
      <div class="mt-3 flex flex-wrap items-center justify-between gap-2"><p role="status" class="text-xs text-gray-400">{{ filtered.length }} {{ filtered.length === 1 ? 'projeto encontrado' : 'projetos encontrados' }}</p><button v-if="search || technology" type="button" @click="clearFilters" class="min-h-11 rounded text-sm text-blue-300 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">Limpar filtros</button></div>
    </div>
    <div v-if="filtered.length" class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"><ProjectCard v-for="project in filtered" :key="project.id" :project="project" @details="$emit('details', $event)" /></div>
    <div v-else class="rounded-xl border border-dashed border-gray-700 bg-gray-800 p-6 text-center sm:p-8"><p class="font-semibold text-white">{{ projects.length ? 'Nenhum projeto encontrado' : emptyTitle }}</p><p class="mt-2 text-sm leading-relaxed text-gray-400">{{ projects.length ? 'Tente outro termo ou outra tecnologia.' : emptyDescription }}</p><button v-if="projects.length" type="button" @click="clearFilters" class="mt-3 min-h-11 rounded-lg text-sm font-semibold text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400">Limpar filtros</button></div>
  </div>
</template>
<script>
import ProjectCard from './ProjectCard.vue'
import { availableTechnologies, filterProjects } from '~/utils/projectPresentation'
export default {
  name: 'ProjectGallery',
  components: { ProjectCard },
  props: {
    projects: { type: Array, required: true },
    filterable: { type: Boolean, default: true },
    emptyTitle: { type: String, default: 'Projetos em preparação' },
    emptyDescription: { type: String, default: 'As aplicações aparecerão aqui conforme forem cadastradas.' }
  },
  data() { return { search: '', technology: '' } },
  computed: {
    technologies() { return availableTechnologies(this.projects) },
    filtered() { return filterProjects(this.projects, this.technology, this.search) }
  },
  watch: { projects() { this.clearFilters() } },
  methods: { clearFilters() { this.search = ''; this.technology = '' } }
}
</script>
