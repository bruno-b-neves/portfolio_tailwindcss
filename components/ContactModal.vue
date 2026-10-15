<template>
  <transition name="contact-modal">
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-4 py-8 sm:px-6"
      @click.self="close">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-sm" aria-hidden="true"></div>

      <!-- Dialog -->
      <section ref="dialog"
        class="contact-dialog relative z-10 my-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-2xl"
        role="dialog" aria-modal="true" aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-description" tabindex="-1" @keydown.esc.stop.prevent="close"
        @keydown.tab="trapFocus">
        <div class="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-400"></div>

        <div class="flex items-start justify-between gap-4 border-b border-gray-800 px-5 py-5 sm:px-8">
          <div class="flex items-start gap-3">
            <div
              class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-emerald-400 border-opacity-20 bg-emerald-400 bg-opacity-10 text-emerald-300">
              <Icon icon="material-symbols:send-rounded" width="23" height="23" />
            </div>
            <div>
              <p class="mb-1 font-mono text-xs uppercase tracking-widest text-emerald-400">Vamos conversar</p>
              <h2 id="contact-modal-title" class="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Tem um projeto em mente?
              </h2>
              <p id="contact-modal-description" class="mt-2 max-w-lg text-sm leading-relaxed text-gray-400">
                Me conte um pouco sobre sua ideia, oportunidade ou projeto. Vamos conversar!
              </p>
            </div>
          </div>

          <button ref="closeButton" type="button"
            class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-gray-700 text-gray-400 transition-colors hover:border-gray-500 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Fechar janela de contato" @click="close">
            <Icon icon="material-symbols:close-rounded" width="21" height="21" />
          </button>
        </div>

        <div class="grid grid-cols-1 gap-0 md:grid-cols-5">
          <!-- Contact links -->
          <aside
            class="border-b border-gray-800 bg-gray-800 bg-opacity-30 p-5 sm:p-6 md:col-span-2 md:border-b-0 md:border-r">
            <p class="mb-4 font-mono text-xs uppercase tracking-widest text-gray-500">Encontre-me também</p>

            <a :href="`mailto:${email}`"
              class="group mb-3 flex items-center gap-3 rounded-xl border border-gray-700 bg-gray-900 bg-opacity-70 p-3 transition-colors hover:border-blue-400 hover:border-opacity-60 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <span
                class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-400 bg-opacity-10 text-blue-300">
                <Icon icon="material-symbols:mail-outline-rounded" width="19" height="19" />
              </span>
              <span class="min-w-0">
                <span class="block text-xs text-gray-500">E-mail</span>
                <span class="block break-all text-sm font-medium text-gray-200 group-hover:text-blue-300">{{ email
                  }}</span>
              </span>
            </a>

            <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer"
              class="group mb-3 flex items-center gap-3 rounded-xl border border-gray-700 bg-gray-900 bg-opacity-70 p-3 transition-colors hover:border-emerald-400 hover:border-opacity-60 focus:outline-none focus:ring-2 focus:ring-emerald-400">
              <span
                class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-400 bg-opacity-10 text-emerald-300">
                <Icon icon="mdi:linkedin" width="19" height="19" />
              </span>
              <span>
                <span class="block text-xs text-gray-500">LinkedIn</span>
                <span class="block text-sm font-medium text-gray-200 group-hover:text-emerald-300">Bruno Barbosa Neves</span>
              </span>
              <Icon icon="material-symbols:open-in-new-rounded" width="15" height="15"
                class="ml-auto flex-shrink-0 text-gray-600" />
            </a>

            <a :href="githubUrl" target="_blank" rel="noopener noreferrer"
              class="group flex items-center gap-3 rounded-xl border border-gray-700 bg-gray-900 bg-opacity-70 p-3 transition-colors hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400">
              <span
                class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gray-700 bg-opacity-50 text-gray-200">
                <Icon icon="mdi:github" width="19" height="19" />
              </span>
              <span>
                <span class="block text-xs text-gray-500">GitHub</span>
                <span class="block text-sm font-medium text-gray-200 group-hover:text-white">bruno-b-neves</span>
              </span>
              <Icon icon="material-symbols:open-in-new-rounded" width="15" height="15"
                class="ml-auto flex-shrink-0 text-gray-600" />
            </a>

            <div class="mt-5 flex items-center gap-2 text-xs text-gray-500">
              <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
              Brasil · Remoto
            </div>
          </aside>

          <!-- Form: opens the visitor's email client (no backend required) -->
          <form class="space-y-4 p-5 sm:p-6 md:col-span-3" @submit.prevent="sendMessage">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label for="contact-name" class="mb-1.5 block text-xs font-mono text-gray-400">Seu nome</label>
                <div
                  class="rounded-lg bg-gray-700 p-px transition-all focus-within:bg-gradient-to-r focus-within:from-blue-500 focus-within:to-emerald-400 focus-within:ring-2 focus-within:ring-emerald-400 focus-within:ring-opacity-20">
                  <input id="contact-name" ref="firstField" v-model.trim="form.name" type="text" name="name"
                    autocomplete="name" required maxlength="100" placeholder="Como posso te chamar?"
                    class="block w-full rounded-lg bg-gray-900 px-3.5 py-3 text-sm text-white placeholder-gray-500 focus:outline-none" />
                </div>
              </div>

              <div>
                <label for="contact-email" class="mb-1.5 block text-xs font-mono text-gray-400">Seu e-mail</label>
                <div
                  class="rounded-lg bg-gray-700 p-px transition-all focus-within:bg-gradient-to-r focus-within:from-blue-500 focus-within:to-emerald-400 focus-within:ring-2 focus-within:ring-emerald-400 focus-within:ring-opacity-20">
                  <input id="contact-email" v-model.trim="form.senderEmail" type="email" name="email"
                    autocomplete="email" required maxlength="160" placeholder="voce@exemplo.com"
                    class="block w-full rounded-lg bg-gray-900 px-3.5 py-3 text-sm text-white placeholder-gray-500 focus:outline-none" />
                </div>
              </div>
            </div>

            <div>
              <label for="contact-subject" class="mb-1.5 block text-xs font-mono text-gray-400">Assunto</label>
              <div
                class="rounded-lg bg-gray-700 p-px transition-all focus-within:bg-gradient-to-r focus-within:from-blue-500 focus-within:to-emerald-400 focus-within:ring-2 focus-within:ring-emerald-400 focus-within:ring-opacity-20">
                <input id="contact-subject" v-model.trim="form.subject" type="text" name="subject" required
                  maxlength="140" placeholder="Ex.: oportunidade frontend"
                  class="block w-full rounded-lg bg-gray-900 px-3.5 py-3 text-sm text-white placeholder-gray-500 focus:outline-none" />
              </div>
            </div>

            <div>
              <label for="contact-message" class="mb-1.5 block text-xs font-mono text-gray-400">Mensagem</label>
              <div
                class="rounded-lg bg-gray-700 p-px transition-all focus-within:bg-gradient-to-r focus-within:from-blue-500 focus-within:to-emerald-400 focus-within:ring-2 focus-within:ring-emerald-400 focus-within:ring-opacity-20">
                <textarea id="contact-message" v-model.trim="form.message" name="message" rows="4" required
                  maxlength="4000" placeholder="Olá, Bruno! Gostaria de conversar sobre..."
                  class="block w-full resize-y rounded-lg bg-gray-900 px-3.5 py-3 text-sm leading-relaxed text-white placeholder-gray-500 focus:outline-none"></textarea>
              </div>
            </div>

            <p v-if="successMessage" class="rounded-lg border border-emerald-500 border-opacity-30
         bg-emerald-500 bg-opacity-10 p-3 text-sm text-emerald-300" role="status">
              {{ successMessage }}
            </p>

            <p v-if="errorMessage" class="rounded-lg border border-red-500 border-opacity-30
         bg-red-500 bg-opacity-10 p-3 text-sm text-red-300" role="alert">
              {{ errorMessage }}
            </p>

            <button type="submit" :disabled="isSending" class="inline-flex w-full items-center justify-center gap-2
         rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500
         px-5 py-3.5 text-sm font-semibold text-white
         transition-all hover:from-blue-500 hover:to-emerald-400
         disabled:cursor-not-allowed disabled:opacity-60
         focus:outline-none focus:ring-2 focus:ring-emerald-400
         focus:ring-offset-2 focus:ring-offset-gray-900">
              <span>
                {{ isSending ? 'Enviando mensagem...' : 'Enviar mensagem' }}
              </span>

              <Icon :icon="isSending
                ? 'eos-icons:loading'
                : 'material-symbols:send-rounded'" width="18" height="18" />
            </button>

            <p class="text-center text-xs leading-relaxed text-gray-500">
              O envio abre seu aplicativo de e-mail com a mensagem preenchida. Nenhum dado é enviado ou armazenado neste
              site.
            </p>
          </form>
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ContactModal',

  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      email: 'brunobneves95@gmail.com',
      linkedinUrl: 'https://linkedin.com/in/bruno-barbosa-neves-1b15621ab',
      githubUrl: 'https://github.com/bruno-b-neves',

      previousActiveElement: null,

      isSending: false,
      errorMessage: '',
      successMessage: '',

      form: {
        name: '',
        senderEmail: '',
        subject: '',
        message: ''
      }
    }
  },

  watch: {
    isOpen(isOpen) {
      if (process.client) {
        if (isOpen) {
          this.previousActiveElement = document.activeElement
          document.body.style.overflow = 'hidden'
          this.$nextTick(() => {
            if (this.$refs.firstField) this.$refs.firstField.focus()
          })
        } else {
          document.body.style.overflow = ''
          this.$nextTick(() => {
            if (this.previousActiveElement && this.previousActiveElement.focus) {
              this.previousActiveElement.focus()
            }
          })
        }
      }
    }
  },

  beforeDestroy() {
    if (process.client) document.body.style.overflow = ''
  },

  methods: {
    close() {
      this.$emit('close')
    },

    trapFocus(event) {
      if (event.key !== 'Tab') return

      const dialog = this.$refs.dialog
      if (!dialog) return

      const focusable = Array.from(dialog.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )).filter((element) => element.offsetParent !== null)

      if (!focusable.length) {
        event.preventDefault()
        dialog.focus()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    },

    async sendMessage() {
      this.errorMessage = ''
      this.successMessage = ''

      if (this.isSending) return

      const endpoint = process.env.FORM_SPREE_ENDPOINT

      if (!endpoint || !/^https:\/\/formspree\.io\/f\/[\w-]+$/.test(endpoint)) {
        this.errorMessage =
          'O serviço de contato ainda não está configurado corretamente.'
        return
      }

      this.isSending = true

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.form.name,
            email: this.form.senderEmail,
            _replyto: this.form.senderEmail,
            _subject: `[Portfólio] ${this.form.subject}`,
            message: this.form.message
          })
        })

        const result = await response.json()

        if (!response.ok) {
          const details = result.errors
            ? result.errors.map(error => error.message).join(' ')
            : ''

          throw new Error(
            details || 'Não foi possível enviar sua mensagem.'
          )
        }

        this.successMessage =
          'Mensagem enviada! Obrigado pelo contato.'

        this.form = {
          name: '',
          senderEmail: '',
          subject: '',
          message: ''
        }
      } catch (error) {
        this.errorMessage =
          error.message ||
          'Erro ao enviar. Verifique sua conexão e tente novamente.'
      } finally {
        this.isSending = false
      }
    }
  }
}
</script>

<style scoped>
.contact-modal-enter-active,
.contact-modal-leave-active {
  transition: opacity 180ms ease;
}

.contact-modal-enter-active .contact-dialog,
.contact-modal-leave-active .contact-dialog {
  transition: transform 180ms ease, opacity 180ms ease;
}

.contact-modal-enter,
.contact-modal-leave-to {
  opacity: 0;
}

.contact-modal-enter .contact-dialog,
.contact-modal-leave-to .contact-dialog {
  opacity: 0;
  transform: translateY(10px) scale(0.99);
}
</style>
