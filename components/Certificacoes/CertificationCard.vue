<template>
  <article class="group flex h-full flex-col rounded-2xl border bg-gray-800 p-5 transition duration-300 hover:border-gray-500 sm:p-6" :class="featured ? 'border-blue-500 border-opacity-40' : 'border-gray-700'">
    <div class="flex items-start justify-between gap-4">
      <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-gray-700 bg-gray-900 text-emerald-400">
        <Icon :icon="item.icon" width="26" height="26" aria-hidden="true" />
      </div>
      <span class="rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1 text-xs font-medium text-gray-300">{{ item.type }}</span>
    </div>
    <h3 class="mt-5 text-xl font-semibold leading-snug text-white">{{ item.title }}</h3>
    <p class="mt-2 text-sm text-emerald-400">{{ item.institution }}</p>
    <p v-if="item.status || item.period" class="mt-2 text-xs text-gray-300">{{ [item.status, item.period].filter(Boolean).join(' · ') }}</p>
    <p class="mt-4 text-sm leading-relaxed text-gray-400">{{ item.shortDescription || item.description }}</p>
    <ul v-if="item.skills && item.skills.length" class="mt-4 flex flex-wrap gap-2" :aria-label="'Conhecimentos de ' + item.title">
      <li v-for="skill in item.skills" :key="skill" class="rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1 text-xs text-gray-200">{{ skill }}</li>
    </ul>
    <div v-if="item.application" class="mt-5 border-l-2 border-emerald-400 pl-4">
      <p class="text-xs font-semibold uppercase tracking-wide text-emerald-400">{{ item.id === 'vue-2' ? 'Na experiência profissional' : 'Na prática' }}</p>
      <p class="mt-2 text-sm leading-relaxed text-gray-300">{{ item.application }}</p>
    </div>
    <div class="flex-1" />
    <div class="mt-6 border-t border-gray-700 pt-4">
      <NuxtLink v-if="item.collectionSlug" :to="'/projetos/' + item.collectionSlug" class="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-blue-300 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
        {{ item.status === 'Em andamento' ? 'Explorar conhecimentos' : 'Ver projetos e conhecimentos' }}
        <Icon icon="material-symbols:arrow-forward-rounded" width="18" height="18" aria-hidden="true" />
      </NuxtLink>
      <a v-else-if="relatedProject && relatedProject.repositoryUrl" :href="relatedProject.repositoryUrl" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-blue-300 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Ver código da API <Icon icon="material-symbols:open-in-new-rounded" width="17" height="17" aria-hidden="true" />
        <span class="sr-only">(nova aba)</span>
      </a>
      <div class="flex flex-wrap items-center gap-x-5 gap-y-1">
        <button type="button" :aria-label="'Ver detalhes de ' + item.title" @click="$emit('details', item)" class="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">Ver detalhes</button>
        <a v-if="item.certificateUrl" :href="item.certificateUrl" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 items-center rounded-lg text-sm font-medium text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400">Ver certificado<span class="sr-only"> (nova aba)</span></a>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: 'CertificationCard',
  props: { item: { type: Object, required: true }, featured: { type: Boolean, default: false } },
  computed: { relatedProject() { return (this.item.relatedProjects || [])[0] } }
}
</script>
