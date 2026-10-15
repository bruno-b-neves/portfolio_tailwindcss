<template>
  <div class="bg-gray-900 text-gray-100">

    <!-- Hero / Seção Principal -->
    <!-- Hero / Seção Principal (Redenhada para ornar com o Design System do site) -->
    <main class="relative overflow-hidden bg-gray-900 px-6 sm:px-8 lg:px-16 min-h-screen">
      <!-- Iluminação decorativa -->
      <div class="absolute top-0 right-0 w-96 h-96 rounded-full
           bg-blue-500 opacity-10 filter blur-3xl
           pointer-events-none"></div>

      <div class="absolute bottom-0 left-0 w-72 h-72 rounded-full
           bg-emerald-500 opacity-10 filter blur-3xl
           pointer-events-none"></div>

      <div class="relative z-10 max-w-6xl mx-auto py-16 lg:py-20
           grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10
           items-center">
        <!-- APRESENTAÇÃO -->
        <div class="lg:col-span-7 text-center lg:text-left">

          <!-- Identificação profissional -->
          <div class="inline-flex items-center gap-2 px-3 py-2 mb-7
               rounded-full border border-gray-700 bg-gray-800
               text-xs font-mono text-gray-300">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>

            <span>FRONTEND ENGINEERING</span>

            <span class="text-gray-600">/</span>

            <span class="text-emerald-400">Disponível para oportunidades</span>
          </div>

          <!-- Título principal -->
          <p class="text-sm sm:text-base text-gray-400
               font-mono tracking-wide mb-4">
            Olá, eu sou o Bruno Neves.
          </p>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
               font-extrabold text-white tracking-tight
               leading-tight">
            Código que vira

            <span class="block text-transparent bg-clip-text
                 bg-gradient-to-r from-blue-400 to-emerald-400">
              experiência.
            </span>
          </h1>

          <!-- Posicionamento -->
          <h2 class="mt-5 text-lg sm:text-xl lg:text-2xl
               font-semibold text-gray-200">
            Desenvolvedor Frontend
            <span class="text-gray-500 font-normal">·</span>
            Vue.js &amp; Nuxt
          </h2>

          <p class="mt-5 max-w-xl mx-auto lg:mx-0
               text-sm sm:text-base lg:text-lg
               leading-relaxed text-gray-400">
            Desenvolvedor Frontend especializado em Vue.js e Nuxt, com experiência na modernização de aplicações web e
            condução de migrações tecnológicas. Transformo desafios técnicos em interfaces responsivas e acessíveis, com
            foco em performance, SEO e experiência do usuário.
          </p>

          <!-- Tecnologias -->
          <div class="mt-7">
            <p class="mb-3 text-xs font-mono uppercase tracking-widest
                 text-gray-500">
              Meu ecossistema
            </p>

            <div class="flex flex-wrap justify-center lg:justify-start
                 gap-2">
              <span class="inline-flex items-center gap-2 px-3 py-2
                   rounded-lg border
                   border-opacity-30
                   bg-opacity-10
                   text-xs sm:text-sm font-mono">
                <Icon icon="simple-icons:vuedotjs" width="16" height="16" />
                Vue.js
              </span>

              <span class="inline-flex items-center gap-2 px-3 py-2
                   rounded-lg border
                   border-opacity-30
                   bg-opacity-10
                   text-xs sm:text-sm font-mono">
                <Icon icon="simple-icons:nuxt" width="16" height="16" />
                Nuxt
              </span>

              <span class="inline-flex items-center gap-2 px-3 py-2
                   rounded-lg border
                   border-opacity-30
                   bg-opacity-10
                   text-xs sm:text-sm font-mono">
                <Icon icon="simple-icons:javascript" width="16" height="16" />
                JavaScript
              </span>

              <span class="inline-flex items-center gap-2 px-3 py-2
                   rounded-lg border
                   border-opacity-30
                   bg-opacity-10
                   text-xs sm:text-sm font-mono">
                <Icon icon="simple-icons:tailwindcss" width="16" height="16" />
                Tailwind CSS
              </span>

              <span class="inline-flex items-center gap-2 px-3 py-2
                   rounded-lg border
                   border-opacity-30
                   bg-opacity-10
                   text-xs sm:text-sm font-mono">
                <Icon icon="simple-icons:bootstrap" width="16" height="16" />
                Bootstrap
              </span>
            </div>
          </div>

          <!-- Ações -->
          <div class="mt-9 flex flex-col sm:flex-row
               items-center justify-center lg:justify-start gap-3">
            <a href="/projetos" class="w-full sm:w-auto inline-flex items-center
                 justify-center gap-2 px-6 py-3.5
                 rounded-xl bg-blue-600 hover:bg-blue-500
                 text-white text-sm font-semibold
                 shadow-lg shadow-blue-500
                 transition-all duration-200
                 focus:outline-none focus:ring-2
                 focus:ring-blue-400 focus:ring-offset-2
                 focus:ring-offset-gray-900">
              Explorar projetos

              <Icon icon="material-symbols:arrow-forward-rounded" width="20" height="20" />
            </a>

            <button type="button" @click="openContact" class="w-full sm:w-auto inline-flex items-center
                 justify-center gap-2 px-6 py-3.5
                 rounded-xl border border-gray-700
                 bg-gray-800 text-gray-200
                 hover:border-emerald-500 hover:text-emerald-400
                 text-sm font-semibold
                 transition-all duration-200
                 focus:outline-none focus:ring-2
                 focus:ring-emerald-400">
              <Icon icon="material-symbols:mail-outline-rounded" width="19" height="19" />

              Vamos conversar
            </button>
          </div>

          <!-- Assinatura técnica -->
          <div class="mt-9 pt-5 border-t border-gray-800
               flex flex-wrap items-center justify-center
               lg:justify-start gap-x-5 gap-y-2
               text-xs text-gray-500 font-mono">
            <span class="inline-flex items-center gap-2">
              <Icon icon="material-symbols:devices-rounded" width="16" height="16" />
              Mobile-first
            </span>

            <span class="inline-flex items-center gap-2">
              <Icon icon="material-symbols:accessibility-new-rounded" width="16" height="16" />
              Acessibilidade
            </span>

            <span class="inline-flex items-center gap-2">
              <Icon icon="material-symbols:speed-rounded" width="16" height="16" />
              Performance & SEO
            </span>
          </div>
        </div>

        <!-- ÁREA VISUAL -->
        <div class="lg:col-span-5 relative mx-auto w-full max-w-md">

          <!-- Halo de gradiente -->
          <div class="absolute -inset-3 rounded-3xl
               bg-gradient-to-br from-blue-500
               to-emerald-400 opacity-20
               filter blur-xl"></div>

          <!-- Card de perfil -->
          <div class="relative rounded-2xl border border-gray-700
               bg-gray-800 overflow-hidden shadow-2xl">
            <!-- Cabeçalho inspirado em editor de código -->
            <div class="flex items-center justify-between
                 px-4 py-3 border-b border-gray-700
                 bg-gray-800">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              </div>

              <span class="text-xs font-mono text-gray-400">
                bruno-neves.vue
              </span>

              <Icon icon="material-symbols:code-rounded" width="18" height="18" class="text-emerald-400" />
            </div>

            <!-- Foto -->
            <div class="relative overflow-hidden bg-gray-900">
              <img src="~/assets/image/bbn.png" alt="Bruno Neves, desenvolvedor frontend" width="502" height="497"
                fetchpriority="high" class="block w-full h-72 sm:h-96 object-cover
                   object-center filter grayscale
                   hover:grayscale-0 transition-all duration-500" />

              <!-- Gradiente inferior -->
              <div class="absolute inset-0 pointer-events-none
                   bg-gradient-to-t from-gray-900
                   via-transparent to-transparent"></div>

              <!-- Identificação sobre a foto -->
              <div class="absolute bottom-4 left-4 right-4">
                <p class="text-xs font-mono text-emerald-400 mb-1">
                  // frontend developer
                </p>

                <p class="text-2xl font-bold text-white">
                  Bruno Neves
                </p>

                <p class="text-sm text-gray-300 mt-1">
                  Interfaces com propósito.
                </p>
              </div>
            </div>

            <!-- Rodapé técnico -->
            <div class="p-4 border-t border-gray-700
                 bg-gray-800">
              <div class="flex items-center justify-between
                   gap-3 mb-3">
                <span class="text-xs text-gray-400 font-mono">
                  CURRENT_FOCUS
                </span>

                <span class="inline-flex items-center gap-2
                     text-xs text-emerald-400">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Evoluindo sempre
                </span>
              </div>

              <div class="flex flex-wrap gap-2">
                <span class="px-2.5 py-1.5 rounded-md
                     bg-gray-900 border border-gray-700
                     text-xs text-gray-300 font-mono">
                  Vue.js & Nuxt
                </span>

                <span class="px-2.5 py-1.5 rounded-md
                     bg-gray-900 border border-gray-700
                     text-xs text-gray-300 font-mono">
                  SEO Técnico
                </span>

                <span class="px-2.5 py-1.5 rounded-md
                     bg-gray-900 border border-gray-700
                     text-xs text-gray-300 font-mono">
                  Web Performance
                </span>
              </div>
            </div>
          </div>

          <!-- Elemento flutuante -->
          <div class="absolute -bottom-14 -right-3 sm:-right-5
               flex items-center gap-3 px-4 py-3
               rounded-xl border border-gray-700
               bg-gray-900 shadow-xl">
            <div class="flex items-center justify-center
                 w-10 h-10 rounded-lg
                 bg-emerald-500 bg-opacity-10
                 text-emerald-400">
              <Icon icon="material-symbols:developer-mode-tv-rounded" width="23" height="23" />
            </div>

            <div>
              <p class="text-sm font-semibold text-white">
                Frontend
              </p>

              <p class="text-xs text-gray-400">
                Código · Design · Performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- Seção Sobre Mim -->
    <!-- Seção Projetos -->
    <!-- Seção Certificações -->
    <!-- Seção Contato -->
    <ContactModal :is-open="isContactOpen" @close="isContactOpen = false" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    ContactModal: () => import('~/components/ContactModal.vue')
  },
  data() {
    return {
      isContactOpen: false
    }
  },
  methods: {
    openContact() {
      this.isContactOpen = true
    }
  },
  head() {
    return {
      title: 'Bruno Neves | Desenvolvedor Frontend',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Portfólio de Bruno Neves, desenvolvedor frontend especializado em interfaces modernas, acessibilidade e performance web.'
        }
      ]
    }
  }
}
</script>