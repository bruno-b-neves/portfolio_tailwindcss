<template>
  <article class="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gray-800">
    <div class="relative overflow-hidden border-b border-gray-700 bg-gray-900" style="padding-top: 56.25%;">
      <img v-if="project.image" :src="project.image" :alt="'Prévia de ' + project.title" loading="lazy" decoding="async" class="absolute inset-0 h-full w-full object-cover" />
      <div v-else class="absolute inset-0 flex items-center justify-center text-emerald-400"><Icon :icon="project.icon || 'ph:code-bold'" width="36" height="36" aria-hidden="true" /></div>
    </div>
    <div class="flex flex-1 flex-col p-5">
      <div class="flex flex-wrap gap-x-3 gap-y-1 text-xs"><span class="text-emerald-400">{{ projectTypeLabel(project.type) }}</span><span v-if="project.status" class="text-gray-400">{{ project.status }}</span></div>
      <h3 class="mt-3 text-lg font-semibold leading-snug text-white">{{ project.title }}</h3>
      <p v-if="project.origin" class="mt-2 text-xs text-gray-400">{{ project.origin }}</p>
      <p class="mt-3 text-sm leading-relaxed text-gray-300">{{ project.shortDescription || project.description }}</p>
      <ul v-if="technologies.length" class="mt-4 flex flex-wrap gap-2" :aria-label="'Tecnologias de ' + project.title">
        <li v-for="technology in technologies.slice(0, 3)" :key="technology" class="rounded-md border border-gray-700 bg-gray-900 px-2 py-1 text-xs text-gray-300">{{ technology }}</li>
        <li v-if="technologies.length > 3" class="rounded-md border border-gray-700 px-2 py-1 text-xs text-gray-400" :aria-label="(technologies.length - 3) + ' outras tecnologias nos detalhes'">+{{ technologies.length - 3 }}</li>
      </ul>
      <div class="flex-1" />
      <div class="mt-5 flex items-center justify-between gap-3 border-t border-gray-700 pt-3">
        <button type="button" :aria-label="'Ver detalhes de ' + project.title" @click="$emit('details', project)" class="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-blue-300 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">Ver detalhes <Icon icon="material-symbols:arrow-forward-rounded" width="17" height="17" aria-hidden="true" /></button>
        <a v-if="project.repositoryUrl" :href="project.repositoryUrl" target="_blank" rel="noopener noreferrer" :aria-label="'Ver código de ' + project.title + ' (nova aba)'" class="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-gray-700 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"><Icon icon="mdi:github" width="21" height="21" aria-hidden="true" /></a>
      </div>
    </div>
  </article>
</template>
<script>
import { projectTypeLabel } from '~/utils/projectPresentation'
export default {
  name: 'ProjectCard',
  props: { project: { type: Object, required: true } },
  computed: { technologies() { return this.project.technologies || [] } },
  methods: { projectTypeLabel }
}
</script>
