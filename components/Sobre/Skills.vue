<template>
  <div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <article v-for="capability in capabilities" :key="capability.id" class="rounded-xl border border-gray-700 bg-gray-800 p-5 sm:p-6">
        <Icon :icon="capability.icon" width="26" height="26" class="text-emerald-400" aria-hidden="true" />
        <h3 class="mt-4 text-lg font-semibold text-white">{{ capability.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-gray-400">{{ capability.description }}</p>
        <ul class="mt-4 flex flex-wrap gap-2" :aria-label="'Tecnologias de ' + capability.title"><li v-for="technology in capability.technologies" :key="technology" class="rounded-md border border-gray-700 bg-gray-900 px-2 py-1 text-xs text-gray-300">{{ technology }}</li></ul>
      </article>
    </div>
    <p v-if="additionalKnowledge.length" class="mt-4 text-sm text-gray-400">Outros conhecimentos: <span class="text-gray-300">{{ additionalKnowledge.join(', ') }}</span>.</p>
  </div>
</template>
<script>
import { capabilities, additionalKnowledge } from '~/data/profile'
export default {
  name: 'ProfileSkills',
  data() { return { capabilities, additionalKnowledge } }
}
</script>
