<template>
  <div class="space-y-6">
    <article v-for="experience in experiences" :key="experience.id" class="rounded-2xl border border-gray-700 bg-gray-800 p-5 sm:p-7">
      <header class="flex flex-col gap-3 border-b border-gray-700 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div><h3 class="text-xl font-bold text-white sm:text-2xl">{{ experience.company }}</h3><p class="mt-2 text-sm font-medium text-emerald-400">{{ experience.position }}</p></div>
        <p class="text-sm text-gray-400">Na empresa: {{ experience.period }}</p>
      </header>
      <p class="mt-5 max-w-3xl text-sm leading-relaxed text-gray-300">{{ experience.description }}</p>
      <ol class="mt-7 space-y-8">
        <li v-for="(role, index) in experience.roles" :key="role.id" class="relative border-l border-gray-600 pl-5 sm:pl-7">
          <span class="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-gray-800" :class="index === 0 ? 'bg-emerald-400' : 'bg-gray-500'" aria-hidden="true" />
          <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h4 class="text-lg font-semibold text-white">{{ role.title }}</h4><p class="text-sm text-emerald-400">{{ role.period }}</p>
          </div>
          <p class="mt-3 max-w-3xl text-sm leading-relaxed text-gray-400">{{ role.description }}</p>
          <div v-if="role.projects && role.projects.length" class="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-2">
            <article v-for="project in role.projects" :key="project.id" class="flex flex-col rounded-xl border border-gray-700 bg-gray-900 p-4 sm:p-5">
              <p class="text-xs font-medium text-emerald-400">{{ project.period }}</p>
              <h5 class="mt-2 text-lg font-semibold leading-snug text-white">{{ project.title }}</h5>
              <p class="mt-3 text-sm leading-relaxed text-gray-400">{{ project.description }}</p>
              <p class="mt-5 text-xs font-semibold uppercase tracking-wide text-gray-300">Principais entregas</p>
              <ul class="mt-3 space-y-3">
                <li v-for="responsibility in highlights(project)" :key="responsibility" class="flex items-start gap-2 text-sm leading-relaxed text-gray-300"><span class="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />{{ responsibility }}</li>
              </ul>
              <ul class="mt-5 flex flex-wrap gap-2" :aria-label="'Tecnologias de ' + project.title"><li v-for="technology in project.technologies" :key="technology" class="rounded-md border border-gray-700 bg-gray-800 px-2 py-1 text-xs text-gray-300">{{ technology }}</li></ul>
              <details v-if="otherResponsibilities(project).length" class="mt-5 border-t border-gray-700 pt-4">
                <summary class="cursor-pointer rounded text-sm font-medium text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400">Mais sobre minha atuação</summary>
                <ul class="mt-4 space-y-3"><li v-for="responsibility in otherResponsibilities(project)" :key="responsibility" class="text-sm leading-relaxed text-gray-400">{{ responsibility }}</li></ul>
              </details>
            </article>
          </div>
          <ul v-if="role.responsibilities && role.responsibilities.length" class="mt-4 space-y-2"><li v-for="responsibility in role.responsibilities.slice(0, 3)" :key="responsibility" class="flex items-start gap-2 text-sm leading-relaxed text-gray-300"><span class="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />{{ responsibility }}</li></ul>
          <ul v-if="role.technologies && role.technologies.length" class="mt-4 flex flex-wrap gap-2" :aria-label="'Tecnologias de ' + role.title"><li v-for="technology in role.technologies" :key="technology" class="rounded-md border border-gray-600 bg-gray-900 px-2 py-1 text-xs text-gray-300">{{ technology }}</li></ul>
          <details v-if="role.responsibilities && role.responsibilities.length > 3" class="mt-4">
            <summary class="cursor-pointer rounded text-sm font-medium text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400">Outras atividades nesta função</summary>
            <ul class="mt-3 space-y-2"><li v-for="responsibility in role.responsibilities.slice(3)" :key="responsibility" class="text-sm leading-relaxed text-gray-400">{{ responsibility }}</li></ul>
          </details>
        </li>
      </ol>
    </article>
  </div>
</template>
<script>
import { experiences } from '~/data/profile'
export default {
  name: 'ProfileExperience',
  data() { return { experiences } },
  methods: {
    highlights(project) { return project.responsibilities.filter((_, index) => project.highlightIndexes.includes(index)) },
    otherResponsibilities(project) { return project.responsibilities.filter((_, index) => !project.highlightIndexes.includes(index)) }
  }
}
</script>
