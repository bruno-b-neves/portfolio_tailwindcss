<template>
  <div v-if="project" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
    <div class="absolute inset-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-sm" aria-hidden="true" @click="close" />
    <section ref="dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" tabindex="-1" class="relative z-10 flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 shadow-2xl" style="max-height: 90vh; max-height: 90dvh;">
      <div class="flex items-start justify-between gap-4 border-b border-gray-700 px-5 py-4"><div><p class="text-xs text-emerald-400">{{ project.origin || projectTypeLabel(project.type) }}</p><h2 id="project-dialog-title" class="mt-2 text-xl font-bold text-white">{{ project.title }}</h2><p v-if="project.status" class="mt-2 text-xs text-gray-400">{{ project.status }}</p></div><button ref="closeButton" type="button" aria-label="Fechar detalhes do projeto" @click="close" class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"><Icon icon="material-symbols:close-rounded" width="24" height="24" aria-hidden="true" /></button></div>
      <div ref="content" class="overflow-y-auto p-5 sm:p-6">
        <p class="text-sm leading-relaxed text-gray-300 sm:text-base">{{ project.description || project.shortDescription }}</p>
        <section v-if="project.technologies && project.technologies.length" class="mt-6" aria-labelledby="project-technologies-title"><h3 id="project-technologies-title" class="text-sm font-semibold text-white">Tecnologias utilizadas</h3><ul class="mt-3 flex flex-wrap gap-2"><li v-for="technology in project.technologies" :key="technology" class="rounded-md border border-gray-600 bg-gray-900 px-2.5 py-1 text-xs text-gray-200">{{ technology }}</li></ul></section>
        <div v-if="project.demoUrl || project.repositoryUrl || project.backendRepositoryUrl" class="mt-6 flex flex-wrap gap-3 border-t border-gray-700 pt-5">
          <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">{{ project.demoLabel || 'Ver demonstração' }}<Icon icon="material-symbols:open-in-new-rounded" width="17" height="17" aria-hidden="true" /><span class="sr-only">(nova aba)</span></a>
          <a v-if="project.repositoryUrl" :href="project.repositoryUrl" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 items-center gap-2 rounded-lg border border-gray-600 bg-gray-900 px-4 py-2 text-sm font-semibold text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"><Icon icon="mdi:github" width="18" height="18" aria-hidden="true" />{{ project.backendRepositoryUrl ? 'Ver frontend' : 'Ver código' }}<span class="sr-only"> (nova aba)</span></a>
          <a v-if="project.backendRepositoryUrl" :href="project.backendRepositoryUrl" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 items-center gap-2 rounded-lg border border-gray-600 bg-gray-900 px-4 py-2 text-sm font-semibold text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"><Icon icon="mdi:github" width="18" height="18" aria-hidden="true" />Ver backend<span class="sr-only"> (nova aba)</span></a>
        </div>
        <img v-if="project.image" :src="project.image" :alt="'Prévia de ' + project.title" decoding="async" class="mt-6 block max-h-72 w-full rounded-xl bg-gray-900 object-contain" />
      </div>
    </section>
  </div>
</template>
<script>
import { projectTypeLabel } from '~/utils/projectPresentation'
export default {
  name: 'ProjectDetailsModal',
  props: { project: { type: Object, default: null } },
  data() { return { previousFocus: null, previousBodyOverflow: '' } },
  watch: {
    project(next, previous) {
      if (next && !previous) {
        this.previousFocus = document.activeElement
        this.previousBodyOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        this.$nextTick(() => this.$refs.closeButton && this.$refs.closeButton.focus())
      } else if (!next && previous) {
        document.body.style.overflow = this.previousBodyOverflow
        this.$nextTick(() => {
          if (this.previousFocus && this.previousFocus.isConnected) this.previousFocus.focus()
        })
      }
      if (next) this.$nextTick(() => { if (this.$refs.content) this.$refs.content.scrollTop = 0 })
    },
    '$route.fullPath'() { if (this.project) this.close() }
  },
  mounted() { document.addEventListener('keydown', this.onKeydown) },
  beforeDestroy() {
    if (process.client) {
      document.removeEventListener('keydown', this.onKeydown)
      if (this.project) document.body.style.overflow = this.previousBodyOverflow
    }
  },
  methods: {
    projectTypeLabel,
    close() { this.$emit('close') },
    onKeydown(event) {
      if (!this.project) return
      if (event.key === 'Escape') { event.preventDefault(); this.close(); return }
      const dialog = this.$refs.dialog
      if (event.key !== 'Tab' || !dialog) return
      const elements = Array.from(dialog.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')).filter(element => element.getClientRects().length)
      if (!elements.length) { event.preventDefault(); dialog.focus(); return }
      const first = elements[0], last = elements[elements.length - 1]
      if (!dialog.contains(document.activeElement)) { event.preventDefault(); first.focus() }
      else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
  }
}
</script>
