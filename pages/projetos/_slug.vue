<template>
  <div class="bg-gray-900 text-gray-100">
    <main class="relative overflow-hidden px-6 py-12 sm:px-8 md:py-16 lg:px-16" aria-labelledby="collection-title">
      <div class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500 opacity-10 blur-3xl" aria-hidden="true" />
      <div class="relative mx-auto max-w-6xl">
      <NuxtLink to="/projetos" class="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm text-blue-300 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"><Icon icon="material-symbols:arrow-back-rounded" width="18" height="18" aria-hidden="true" />Voltar aos projetos</NuxtLink>
      <header class="mt-6 max-w-3xl"><p class="text-xs font-semibold uppercase tracking-wider text-emerald-400">{{ collection.institution }} · Coleção de estudos</p><h1 id="collection-title" class="mt-3 text-3xl font-bold text-white sm:text-4xl">{{ collection.title }}</h1><p class="mt-4 leading-relaxed text-gray-400">{{ collection.description }}</p><a v-if="collection.repositoryUrl" :href="collection.repositoryUrl" target="_blank" rel="noopener noreferrer" class="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-semibold text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"><Icon icon="mdi:github" width="18" height="18" aria-hidden="true" />Repositório de estudos <Icon icon="material-symbols:open-in-new-rounded" width="16" height="16" aria-hidden="true" /><span class="sr-only">(nova aba)</span></a></header>
      <nav class="mt-6 flex flex-wrap gap-x-6 gap-y-1 border-b border-gray-800 pb-5" aria-label="Seções da coleção"><a v-if="collectionStudies.length" href="#conhecimentos" class="inline-flex min-h-11 items-center rounded text-sm text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400">Conhecimentos ({{ collectionStudies.length }})</a><a href="#aplicacoes" class="inline-flex min-h-11 items-center rounded text-sm text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400">Aplicações ({{ collectionProjects.length }})</a></nav>
      <section v-if="collectionStudies.length" id="conhecimentos" class="mt-8 scroll-mt-24" aria-labelledby="studies-title"><h2 id="studies-title" class="text-2xl font-bold text-white">Conhecimentos desenvolvidos</h2><p class="mt-3 text-sm leading-relaxed text-gray-400">Temas estudados e acesso aos exercícios de cada módulo.</p><div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"><StudyCard v-for="study in collectionStudies" :key="study.id" :study="study" /></div></section>
      <section id="aplicacoes" class="mt-10 scroll-mt-24" :class="collectionStudies.length ? 'border-t border-gray-800 pt-8' : ''" aria-labelledby="applications-title"><h2 id="applications-title" class="text-2xl font-bold text-white">Projetos desenvolvidos</h2><p class="mb-6 mt-3 text-sm leading-relaxed text-gray-400">Aplicações desta coleção, com detalhes e acesso ao código.</p><ProjectGallery :key="collection.slug" :projects="collectionProjects" :empty-title="collectionStudies.length ? 'Aplicações ainda não cadastradas' : 'Coleção em preparação'" :empty-description="collectionStudies.length ? 'Os exercícios já estão disponíveis nos conhecimentos acima. As aplicações aparecerão aqui conforme forem cadastradas.' : 'As aplicações desta formação aparecerão aqui conforme forem cadastradas.'" @details="selectedProject = $event" /></section>
    </div></main>
    <ProjectDetailsModal :project="selectedProject" @close="selectedProject = null" />
  </div>
</template>
<script>
import ProjectGallery from '~/components/Projetos/ProjectGallery.vue'
import ProjectDetailsModal from '~/components/Projetos/ProjectDetailsModal.vue'
import StudyCard from '~/components/Projetos/StudyCard.vue'
import { projects } from '~/data/projects'
import { portfolioCollections } from '~/data/portfolioCollections'

export default {
  name: 'ColecaoProjetosPage',
  components: { ProjectGallery, ProjectDetailsModal, StudyCard },
  validate({ params }) { return portfolioCollections.some(collection => collection.slug === params.slug) },
  data() { return { selectedProject: null } },
  computed: {
    collection() { return portfolioCollections.find(collection => collection.slug === this.$route.params.slug) || {} },
    collectionStudies() { return this.collection.studies || [] },
    collectionProjects() { return projects.filter(project => project.source === this.collection.slug) }
  },
  watch: { '$route.params.slug'() { this.selectedProject = null } },
  head() { return { title: (this.collection.title || 'Coleção') + ' | Projetos — Bruno Neves', meta: [{ hid: 'description', name: 'description', content: this.collection.description || 'Coleção de projetos e estudos.' }] } }
}
</script>
