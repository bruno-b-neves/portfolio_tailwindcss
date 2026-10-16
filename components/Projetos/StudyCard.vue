<template>
  <article class="flex h-full flex-col rounded-xl border border-gray-700 bg-gray-800 p-5">
    <Icon :icon="study.icon || 'ph:code-bold'" width="26" height="26" class="text-emerald-400" aria-hidden="true" /><h3 class="mt-4 text-lg font-semibold text-white">{{ study.title }}</h3>
    <p class="mt-2 text-sm leading-relaxed text-gray-400">{{ study.description }}</p>
    <ul v-if="study.topics && study.topics.length" class="mt-4 flex flex-wrap gap-2" :aria-label="'Temas de ' + study.title"><li v-for="topic in study.topics" :key="topic" class="rounded-md border border-gray-700 bg-gray-900 px-2 py-1 text-xs text-gray-300">{{ topic }}</li></ul>
    <div class="flex-1" />
    <details v-if="study.modules && study.modules.length" class="mt-5 border-t border-gray-700 pt-4"><summary class="cursor-pointer rounded text-sm font-semibold text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400">Ver módulos ({{ study.modules.length }})</summary><ul class="mt-3 space-y-1"><li v-for="module in study.modules" :key="module.url"><a :href="module.url" target="_blank" rel="noopener noreferrer" :aria-label="'Ver módulo ' + module.label + ' no GitHub (nova aba)'" class="inline-flex min-h-11 items-center gap-2 rounded text-sm text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">{{ module.label }}<Icon icon="material-symbols:open-in-new-rounded" width="16" height="16" aria-hidden="true" /></a></li></ul></details>
  </article>
</template>
<script>
export default { name: 'StudyCard', props: { study: { type: Object, required: true } } }
</script>
