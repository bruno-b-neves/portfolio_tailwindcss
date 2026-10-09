<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <section
      id="certificacoes"
      class="relative isolate overflow-hidden px-6 py-16 sm:px-8 md:py-24 lg:px-16"
      aria-labelledby="certificacoes-title"
    >
      <div
        class="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-blue-500 opacity-10 blur-3xl"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-72 w-72 rounded-full bg-emerald-400 opacity-10 blur-3xl"
        aria-hidden="true"
      />

      <div class="relative z-10 mx-auto max-w-6xl">
        <!-- Cabeçalho alinhado à página Sobre e Projetos -->
        <header class="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div class="max-w-2xl">
            <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300">
              <span class="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              <span>Aprendizado contínuo</span>
            </div>

            <h1 id="certificacoes-title" class="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Cursos e
              <span class="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                certificações.
              </span>
            </h1>
          </div>

          <p class="max-w-xl leading-relaxed text-gray-400 sm:text-base">
            Cursos que fazem parte da minha jornada de aprendizado em desenvolvimento web e software.
            Quando disponível, cada card inclui um link para consultar o certificado.
          </p>
        </header>

        <div v-if="certifications.length" class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="certification in certifications"
            :key="certification.id"
            class="group flex h-full flex-col rounded-2xl border border-gray-800 bg-gray-800 p-5 transition duration-300 hover:-translate-y-1 hover:border-gray-600 hover:shadow-xl hover:shadow-black/10 sm:p-6"
          >
            <div class="mb-5 flex items-start justify-between gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-gray-700 bg-gray-900 text-emerald-400 transition duration-300 group-hover:scale-105 group-hover:text-blue-300">
                <Icon :icon="certification.icon" width="26" height="26" />
              </div>

              <span class="rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1 text-xs font-medium text-gray-400">
                {{ certification.type }}
              </span>
            </div>

            <h2 class="text-lg font-semibold leading-snug text-white transition-colors group-hover:text-blue-300">
              {{ certification.title }}
            </h2>

            <p class="mt-2 text-sm font-medium text-emerald-400">
              {{ certification.institution }}
            </p>

            <p class="mt-3 flex-1 text-sm leading-relaxed text-gray-400">
              {{ certification.description }}
            </p>

            <div class="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gray-700 pt-4">
              <div class="flex flex-col gap-1 text-xs text-gray-500">
                <span v-if="certification.completedAt">
                  Conclusão: {{ certification.completedAt }}
                </span>
                <span v-if="certification.workload">
                  Carga horária: {{ certification.workload }}
                </span>
                <span v-if="!certification.completedAt && !certification.workload">
                  Informações adicionais não informadas
                </span>
              </div>

              <a
                v-if="certification.certificateUrl"
                :href="certification.certificateUrl"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`Validar certificado: ${certification.title}`"
                class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm font-semibold text-blue-300 transition duration-200 hover:border-blue-400 hover:bg-gray-700 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <Icon icon="material-symbols:verified-outline-rounded" width="18" height="18" />
                <span>Validar</span>
                <Icon icon="material-symbols:open-in-new-rounded" width="16" height="16" />
              </a>

              <span v-else class="text-xs text-gray-500">
                Link não informado
              </span>
            </div>
          </article>
        </div>

        <div class="mt-10 rounded-2xl border border-gray-800 bg-gray-800/70 p-5 sm:p-6">
          <div class="flex items-start gap-4">
            <div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gray-900 text-blue-300">
              <Icon icon="material-symbols:school-outline-rounded" width="24" height="24" />
            </div>
            <div>
              <h2 class="font-semibold text-white">Formação acadêmica</h2>
              <p class="mt-1 text-sm leading-relaxed text-gray-400">
                Ciência da Computação · Universidade Paulista (UNIP) · Ago/2025 — Atual.
                A graduação fica resumida na página Sobre; esta página é dedicada aos cursos e certificados.
              </p>
              <NuxtLink
                to="/sobre"
                class="mt-3 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Conheça minha trajetória
                <Icon icon="material-symbols:arrow-forward-rounded" width="17" height="17" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CertificacoesPage',

  data() {
    return {
      certifications: [
        {
          id: 'desenvolvimento-web-moderno',
          title: 'Desenvolvimento Web Moderno',
          institution: 'Cod3r · Udemy',
          type: 'Desenvolvimento web',
          icon: 'material-symbols:language-rounded',
          description:
            'Curso voltado ao desenvolvimento web moderno. Adicione detalhes específicos sobre o conteúdo se quiser destacar os módulos estudados.',
          completedAt: '',
          workload: '',
          certificateUrl: ''
        },
        {
          id: 'vue-vuex-router',
          title: 'Vue.js 2, Vuex & Vue Router',
          institution: 'Cod3r · Udemy',
          type: 'Frontend',
          icon: 'simple-icons:vuedotjs',
          description:
            'Estudos sobre Vue.js 2 e suas ferramentas de gerenciamento de estado e navegação entre páginas.',
          completedAt: '',
          workload: '',
          certificateUrl: ''
        },
        {
          id: 'java-spring-boot-introducao',
          title: 'Java + Spring Boot: Introdução',
          institution: 'Rocketseat',
          type: 'Backend',
          icon: 'simple-icons:springboot',
          description:
            'Introdução ao desenvolvimento de aplicações com Java e Spring Boot.',
          completedAt: '',
          workload: '',
          certificateUrl: ''
        }
      ]
    }
  },

  head() {
    return {
      title: 'Certificações | Bruno Neves — Desenvolvedor Frontend',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Confira os cursos de Bruno Neves relacionados ao desenvolvimento web e consulte os certificados quando os links de validação estiverem disponíveis.'
        }
      ]
    }
  }
}
</script>
