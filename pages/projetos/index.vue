<template>
  <div class="bg-gray-900 text-gray-100">
    <main class="relative overflow-hidden px-6 py-16 sm:px-8 md:py-20 lg:px-16" aria-labelledby="projects-title">
      <div class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500 opacity-10 blur-3xl" aria-hidden="true" />
      <div class="relative mx-auto max-w-6xl">
        <header class="max-w-2xl"><p class="text-xs font-semibold uppercase tracking-wider text-emerald-400">Portfólio</p><h1 id="projects-title" class="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Projetos e <span class="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">estudos.</span></h1><p class="mt-4 leading-relaxed text-gray-400">Aplicações desenvolvidas em cursos e atividades acadêmicas. Explore o código, as tecnologias e os conhecimentos de cada formação.</p></header>
        <section class="mt-10" aria-labelledby="applications-title">
          <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><h2 id="applications-title" class="text-2xl font-bold text-white">Aplicações</h2><div role="group" aria-label="Seleção de projetos" class="inline-flex self-start rounded-lg border border-gray-700 bg-gray-800 p-1"><button v-for="view in views" :key="view.value" type="button" :aria-pressed="String(projectView === view.value)" @click="projectView = view.value" class="min-h-11 rounded-md px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400" :class="projectView === view.value ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'">{{ view.label }}</button></div></div>
          <ProjectGallery :projects="visibleProjects" :filterable="projectView === 'all'" empty-title="Sem projetos em destaque" empty-description="Selecione Todos para explorar as aplicações cadastradas." @details="selectedProject = $event" />
        </section>
        <section class="mt-12 border-t border-gray-800 pt-10" aria-labelledby="collections-title"><h2 id="collections-title" class="text-2xl font-bold text-white">Coleções de estudos</h2><p class="mt-3 text-sm leading-relaxed text-gray-400">Conhecimentos, exercícios e aplicações organizados por formação.</p>
          <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2"><NuxtLink v-for="collection in collectionsWithCounts" :key="collection.slug" :to="'/projetos/' + collection.slug" class="group flex h-full flex-col rounded-xl border border-gray-700 bg-gray-800 p-5 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:p-6"><div class="flex items-start gap-4"><Icon :icon="collection.icon || 'ph:code-bold'" width="28" height="28" class="flex-shrink-0 text-emerald-400" aria-hidden="true" /><div><h3 class="text-lg font-semibold text-white group-hover:text-blue-300">{{ collection.title }}</h3><p class="mt-1 text-xs text-gray-400">{{ collection.institution }}</p></div></div><p class="mt-4 flex-1 text-sm leading-relaxed text-gray-400">{{ collection.description }}</p><p class="mt-4 text-xs text-gray-300"><span v-if="collection.studyCount">{{ collection.studyCount }} temas de estudo · </span>{{ collection.projectCount }} {{ collection.projectCount === 1 ? 'aplicação' : 'aplicações' }}</p><span class="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-300">Explorar coleção <Icon icon="material-symbols:arrow-forward-rounded" width="18" height="18" aria-hidden="true" /></span></NuxtLink></div>
        </section>
      </div>
    </main>
    <ProjectDetailsModal :project="selectedProject" @close="selectedProject = null" />
  </div>
</template>
<script>
import ProjectGallery from '~/components/Projetos/ProjectGallery.vue'
import ProjectDetailsModal from '~/components/Projetos/ProjectDetailsModal.vue'
import { projects } from '~/data/projects'
import { portfolioCollections } from '~/data/portfolioCollections'

export default {
  name: 'ProjetosPage',
  components: { ProjectGallery, ProjectDetailsModal },
  data() { return { projectView: 'featured', selectedProject: null, views: [{ value: 'featured', label: 'Destaques' }, { value: 'all', label: 'Todos' }] } },
  computed: {
    visibleProjects() { return this.projectView === 'featured' ? projects.filter(project => project.featured).slice(0, 6) : projects },
    collectionsWithCounts() { return portfolioCollections.map(collection => ({ ...collection, studyCount: (collection.studies || []).length, projectCount: projects.filter(project => project.source === collection.slug).length })) }
  },
  head() { return { title: 'Projetos e Estudos | Bruno Neves — Desenvolvedor Frontend', meta: [{ hid: 'description', name: 'description', content: 'Explore os projetos de Bruno Neves, com detalhes, tecnologias, código e coleções de estudos em desenvolvimento web.' }] } }
}
</script>
