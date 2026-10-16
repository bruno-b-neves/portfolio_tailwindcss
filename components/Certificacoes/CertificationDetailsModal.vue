<template>
  <transition name="certification-modal">
    <div v-if="item" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      <div class="absolute inset-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-sm" aria-hidden="true" @click="close" />
      <section ref="dialog" role="dialog" aria-modal="true" aria-labelledby="details-title" tabindex="-1" class="certification-dialog relative z-10 flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 shadow-2xl" style="max-height: 90vh; max-height: 90dvh;">
        <div class="flex items-center justify-between gap-4 border-b border-gray-700 px-5 py-3">
          <span class="text-xs font-semibold uppercase tracking-wide text-emerald-400">{{ item.type }}<span v-if="item.status"> · {{ item.status }}</span></span>
          <button ref="closeButton" type="button" aria-label="Fechar detalhes" @click="close" class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"><Icon icon="material-symbols:close-rounded" width="24" height="24" /></button>
        </div>
        <div ref="scrollContent" class="overflow-y-auto p-5 sm:p-7">
          <div class="flex items-start gap-4">
            <img v-if="item.image" :src="item.image" alt="" class="hidden h-16 w-24 flex-shrink-0 rounded-lg object-cover sm:block" />
            <div>
              <h2 id="details-title" class="text-2xl font-bold leading-snug text-white">{{ item.title }}</h2>
              <p class="mt-2 text-sm text-emerald-400">{{ item.institution }}</p>
              <p v-if="item.period" class="mt-2 text-sm text-gray-400">{{ item.period }}</p>
            </div>
          </div>
          <p class="mt-5 text-sm leading-relaxed text-gray-300">{{ item.description }}</p>
          <section v-if="item.skills && item.skills.length" aria-labelledby="skills-title" class="mt-6">
            <h3 id="skills-title" class="text-sm font-semibold text-white">Principais conhecimentos</h3>
            <ul class="mt-3 flex flex-wrap gap-2"><li v-for="skill in item.skills" :key="skill" class="rounded-md border border-gray-600 bg-gray-900 px-2.5 py-1 text-xs text-gray-200">{{ skill }}</li></ul>
          </section>
          <section v-if="item.application" aria-labelledby="application-title" class="mt-6 rounded-xl border border-gray-700 bg-gray-900 p-4">
            <h3 id="application-title" class="text-sm font-semibold text-emerald-400">{{ item.id === 'vue-2' ? 'Aplicação na experiência profissional' : 'Aplicação prática' }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-300">{{ item.application }}</p>
          </section>
          <div v-if="item.collectionSlug || (item.relatedProjects && item.relatedProjects.length)" class="mt-6">
            <NuxtLink v-if="item.collectionSlug" :to="'/projetos/' + item.collectionSlug" class="inline-flex min-h-11 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">{{ item.type === 'Graduação' ? 'Ver projetos acadêmicos' : 'Explorar conhecimentos e projetos' }} <Icon icon="material-symbols:arrow-forward-rounded" width="18" height="18" aria-hidden="true" /></NuxtLink>
            <ul v-if="item.relatedProjects && item.relatedProjects.length" class="space-y-2">
              <li v-for="project in item.relatedProjects" :key="project.id"><a v-if="project.repositoryUrl" :href="project.repositoryUrl" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400">{{ project.title }} · Ver código <Icon icon="material-symbols:open-in-new-rounded" width="17" height="17" aria-hidden="true" /><span class="sr-only">(nova aba)</span></a></li>
            </ul>
          </div>
          <div v-if="item.certificateUrl" class="mt-6 border-t border-gray-700 pt-5">
            <a :href="item.certificateUrl" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"><Icon icon="material-symbols:verified-outline-rounded" width="18" height="18" aria-hidden="true" /> Ver certificado<span class="sr-only">(nova aba)</span></a>
          </div>
          <details v-if="item.curriculum && item.curriculum.length" class="mt-6 rounded-xl border border-gray-700 bg-gray-900 p-4">
            <summary class="cursor-pointer rounded text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-400">Conteúdo programático <span class="font-normal text-gray-400">({{ item.curriculum.length }} tópicos)</span></summary>
            <ul class="mt-4 space-y-3"><li v-for="subject in item.curriculum" :key="subject" class="flex items-start gap-2 text-sm leading-relaxed text-gray-300"><span class="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />{{ subject }}</li></ul>
          </details>
          <a v-if="item.courseUrl" :href="item.courseUrl" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">Página do curso <Icon icon="material-symbols:open-in-new-rounded" width="16" height="16" aria-hidden="true" /><span class="sr-only">(nova aba)</span></a>
        </div>
      </section>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'CertificationDetailsModal',
  props: { item: { type: Object, default: null } },
  data() { return { previousFocus: null, previousBodyOverflow: '' } },
  watch: {
    item(next, previous) {
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
    }
  },
  mounted() { window.addEventListener('keydown', this.handleKeydown) },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeydown)
    if (this.item) document.body.style.overflow = this.previousBodyOverflow
  },
  methods: {
    close() { this.$emit('close') },
    handleKeydown(event) {
      if (!this.item) return
      if (event.key === 'Escape') { event.preventDefault(); this.close(); return }
      if (event.key !== 'Tab' || !this.$refs.dialog) return
      const elements = Array.from(this.$refs.dialog.querySelectorAll('button, a[href], summary, [tabindex]:not([tabindex="-1"])'))
        .filter(el => !el.disabled && el.getAttribute('tabindex') !== '-1' && el.getClientRects().length)
      if (!elements.length) { event.preventDefault(); this.$refs.dialog.focus(); return }
      const first = elements[0], last = elements[elements.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
  }
}
</script>
<style scoped>
.certification-modal-enter-active,
.certification-modal-leave-active { transition: opacity 180ms ease; }
.certification-modal-enter-active .certification-dialog,
.certification-modal-leave-active .certification-dialog { transition: transform 180ms ease; }
.certification-modal-enter,
.certification-modal-leave-to { opacity: 0; }
.certification-modal-enter .certification-dialog,
.certification-modal-leave-to .certification-dialog { transform: translateY(8px); }
@media (prefers-reduced-motion: reduce) {
  .certification-modal-enter-active,
  .certification-modal-leave-active,
  .certification-modal-enter-active .certification-dialog,
  .certification-modal-leave-active .certification-dialog { transition: none; }
}
</style>
