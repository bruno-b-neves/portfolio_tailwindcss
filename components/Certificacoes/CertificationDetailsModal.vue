<template>
  <div>
    <transition name="certification-modal">
    <div v-if="item" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      <div class="absolute inset-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-sm" aria-hidden="true" @click="close"></div>
      <section ref="dialog" role="dialog" aria-modal="true" aria-labelledby="details-title" tabindex="-1" class="certification-dialog relative z-10 flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 shadow-2xl">
        <div class="flex items-center justify-between border-b border-gray-700 px-5 py-4">
          <span class="text-xs font-semibold uppercase tracking-wide text-emerald-400">{{ item.type }}</span>
          <button ref="closeButton" type="button" aria-label="Fechar detalhes" @click="close" class="flex h-10 w-10 items-center justify-center rounded-lg text-gray-300 transition hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
            <Icon icon="material-symbols:close-rounded" width="24" height="24" />
          </button>
        </div>
        <div class="overflow-y-auto">
          <div v-if="item.image" class="aspect-video w-full bg-gray-900">
            <img :src="item.image" :alt="`Imagem ilustrativa de ${item.title}`" class="h-full w-full object-cover" />
          </div>
          <div v-else class="flex h-40 items-center justify-center bg-gray-900 text-blue-300 sm:h-52">
            <Icon :icon="item.icon" width="64" height="64" />
          </div>
          <div class="space-y-6 p-5 sm:p-7">
            <div>
              <h2 id="details-title" class="text-2xl font-bold leading-snug text-white">{{ item.title }}</h2>
              <p class="mt-2 text-sm font-medium text-emerald-400">{{ item.institution }}</p>
              <p v-if="item.period" class="mt-1 text-sm text-gray-400">{{ item.period }}</p>
            </div>
            <div>
              <h3 class="mb-2 font-semibold text-white">Sobre a formação</h3>
              <p class="text-sm leading-relaxed text-gray-300">{{ item.description }}</p>
            </div>
            <div>
              <h3 class="mb-3 font-semibold text-white">Grade curricular / Conteúdo programático</h3>
              <ul v-if="item.curriculum && item.curriculum.length" class="space-y-2">
                <li v-for="(subject, index) in item.curriculum" :key="index" class="flex items-start gap-2 text-sm text-gray-300">
                  <Icon icon="material-symbols:check-circle-outline-rounded" width="19" height="19" class="mt-0.5 flex-shrink-0 text-emerald-400" />
                  <span>{{ subject }}</span>
                </li>
              </ul>
              <p v-else class="rounded-lg border border-gray-700 bg-gray-900 p-4 text-sm text-gray-400">Grade curricular ainda não cadastrada.</p>
            </div>
            <div v-if="item.courseUrl || item.certificateUrl" class="flex flex-wrap gap-3 border-t border-gray-700 pt-5">
              <a v-if="item.courseUrl" :href="item.courseUrl" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-10 items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-sm font-semibold text-blue-300 hover:bg-gray-700">
                <Icon icon="material-symbols:open-in-new-rounded" width="18" height="18" /> Ver curso
              </a>
              <a v-if="item.certificateUrl" :href="item.certificateUrl" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-10 items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-sm font-semibold text-emerald-400 hover:bg-gray-700">
                <Icon icon="material-symbols:verified-outline-rounded" width="18" height="18" /> Validar certificado
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'CertificationDetailsModal',
  props: {
    item: { type: Object, default: null }
  },
  data() {
    return { previousFocus: null }
  },
  watch: {
    item(next, previous) {
      if (next && !previous) {
        this.previousFocus = document.activeElement
        document.body.style.overflow = 'hidden'
        this.$nextTick(() => this.$refs.closeButton && this.$refs.closeButton.focus())
      } else if (!next && previous) {
        document.body.style.overflow = ''
        this.$nextTick(() => {
          if (this.previousFocus && this.previousFocus.focus) this.previousFocus.focus()
        })
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeydown)
    document.body.style.overflow = ''
  },
  methods: {
    close() { this.$emit('close') },
    handleKeydown(event) {
      if (!this.item) return
      if (event.key === 'Escape') { event.preventDefault(); this.close(); return }
      if (event.key !== 'Tab' || !this.$refs.dialog) return
      const elements = Array.from(this.$refs.dialog.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])'))
        .filter(el => !el.disabled && el.getAttribute('tabindex') !== '-1')
      if (!elements.length) { event.preventDefault(); this.$refs.dialog.focus(); return }
      const first = elements[0], last = elements[elements.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus()
      }
    }
  }
}
</script>

<style scoped>
.certification-modal-enter-active,
.certification-modal-leave-active {
  transition: opacity 180ms ease;
}
.certification-modal-enter-active .certification-dialog,
.certification-modal-leave-active .certification-dialog {
  transition: transform 180ms ease, opacity 180ms ease;
}
.certification-modal-enter,
.certification-modal-leave-to {
  opacity: 0;
}
.certification-modal-enter .certification-dialog,
.certification-modal-leave-to .certification-dialog {
  opacity: 0;
  transform: translateY(10px) scale(0.99);
}
</style>
