<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <article class="rounded-xl border border-gray-700 bg-gray-800 p-5 sm:p-6">
      <p class="text-xs font-semibold uppercase tracking-wide text-emerald-400">Graduação · {{ academic.status }}</p>
      <h3 class="mt-3 text-lg font-semibold text-white">{{ academic.title }}</h3>
      <p class="mt-2 text-sm text-gray-300">{{ academic.institution }}</p><p class="mt-2 text-sm text-gray-400">{{ academic.period }}</p>
      <p class="mt-4 text-sm leading-relaxed text-gray-400">{{ academic.description }}</p>
      <NuxtLink :to="'/projetos/' + academic.collectionSlug" class="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-blue-300 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">Ver projetos acadêmicos <Icon icon="material-symbols:arrow-forward-rounded" width="18" height="18" aria-hidden="true" /></NuxtLink>
    </article>
    <article class="rounded-xl border border-gray-700 bg-gray-800 p-5 sm:p-6">
      <p class="text-xs font-semibold uppercase tracking-wide text-emerald-400">Formação complementar</p>
      <h3 class="mt-3 text-lg font-semibold text-white">Aprendizado conectado à prática</h3>
      <p class="mt-3 text-sm leading-relaxed text-gray-400">Cursos de desenvolvimento web, Vue.js, UI Design e backend complementam minha atuação. Os estudos de JavaScript seguem em andamento.</p>
      <ul class="mt-4 space-y-2"><li v-for="course in featuredCourses" :key="course.id" class="text-sm text-gray-300">{{ course.title }} <span class="text-gray-400">· {{ course.institution }}</span></li></ul>
      <NuxtLink to="/certificacoes" class="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-blue-300 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">Ver formação e certificações <Icon icon="material-symbols:arrow-forward-rounded" width="18" height="18" aria-hidden="true" /></NuxtLink>
    </article>
  </div>
</template>
<script>
import { academic, certifications } from '~/data/certifications'
export default {
  name: 'ProfileEducation',
  data() { return { academic } },
  computed: { featuredCourses() { return certifications.filter(course => course.featured) } }
}
</script>
