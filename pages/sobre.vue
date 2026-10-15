<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <section id="sobre" class="relative overflow-hidden px-6 py-16 sm:px-8 md:py-24 lg:px-16">
      <div
        class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500 opacity-10 blur-3xl">
      </div>
      <div
        class="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-400 opacity-10 blur-3xl">
      </div>

      <div class="relative z-10 mx-auto max-w-6xl">
        <!-- Introdução -->
        <header class="mb-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div class="space-y-6 lg:col-span-8">
            <div
              class="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300">
              <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
              <span>Sobre mim · Desenvolvedor Frontend</span>
            </div>

            <h1 class="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Desenvolvendo experiências digitais com foco em
              <span class="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                performance, acessibilidade e propósito.
              </span>
            </h1>

            <div class="max-w-3xl space-y-4 text-base leading-relaxed text-gray-300 sm:text-lg">
              <p>
                Sou desenvolvedor Frontend com mais de 4 anos de experiência,
                especializado no ecossistema Vue.js e Nuxt. Minha trajetória inclui
                a responsabilidade pelo desenvolvimento frontend em duas grandes
                migrações tecnológicas: do WordPress para Vue.js 2 e,
                posteriormente, para Vue.js 3 e Nuxt.
              </p>

              <p>
                Atuo na construção e modernização de aplicações web, com foco em
                performance, SEO técnico, acessibilidade, responsividade e boas
                práticas de desenvolvimento. Atualmente, curso Ciência da
                Computação na UNIP e complemento minha formação com estudos
                em JavaScript, Vue.js, UI Design e desenvolvimento web.
              </p>
            </div>

            <div class="flex flex-wrap gap-3 pt-1">
              <NuxtLink to="/projetos"
                class="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <span>Conheça meus projetos</span>
                <Icon icon="material-symbols:arrow-forward-rounded" width="18" height="18" />
              </NuxtLink>
              <button type="button" @click="openContact"
                class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-5 py-3 text-sm font-semibold text-gray-200 transition duration-200 hover:border-gray-500 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500">
                <Icon icon="material-symbols:mail-outline-rounded" width="18" height="18" />
                <span>Entre em contato</span>
              </button>
            </div>
          </div>

          <aside class="flex justify-center lg:col-span-4 lg:justify-end" aria-label="Resumo profissional">
            <div class="relative w-full max-w-sm rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-2xl">
              <div
                class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-emerald-400 text-white">
                <Icon icon="ph:code-bold" width="30" height="30" />
              </div>
              <p class="text-sm font-medium text-gray-400">Minha trajetória</p>
              <p class="mt-1 text-3xl font-bold text-white">+4 anos</p>
              <p class="mt-2 text-sm leading-relaxed text-gray-300">
                Atuação em desenvolvimento web, com responsabilidade integral
                pelo frontend institucional em duas grandes migrações tecnológicas.
              </p>
              <ul class="mt-6 space-y-4 border-t border-gray-700 pt-5">
                <li class="flex items-start gap-3 text-sm text-gray-300">
                  <Icon icon="material-symbols:sync-rounded" width="20" height="20"
                    class="flex-shrink-0 text-emerald-400" />
                  <span>WordPress → Vue 2 → Vue 3 e Nuxt</span>
                </li>

                <li class="flex items-start gap-3 text-sm text-gray-300">
                  <Icon icon="material-symbols:speed-rounded" width="20" height="20"
                    class="flex-shrink-0 text-emerald-400" />
                  <span>Performance, SEO, SSR e SSG</span>
                </li>

                <li class="flex items-start gap-3 text-sm text-gray-300">
                  <Icon icon="material-symbols:school-outline-rounded" width="20" height="20"
                    class="flex-shrink-0 text-emerald-400" />
                  <span>Ciência da Computação · UNIP</span>
                </li>
              </ul>
            </div>
          </aside>
        </header>

        <!-- Competências -->
        <section id="habilidades" class="mb-16 scroll-mt-24" aria-labelledby="habilidades-title">
          <div class="mb-7 max-w-2xl">
            <p class="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">Tecnologias</p>
            <h2 id="habilidades-title" class="text-2xl font-bold text-white sm:text-3xl">Skills que utilizo</h2>
            <p class="mt-3 leading-relaxed text-gray-400">
              Tecnologias que fazem parte do meu conjunto de ferramentas para desenvolver e manter aplicações web.
            </p>
          </div>
          <CardSkills />
        </section>

        <!-- Experiência -->
        <section id="experiencia" class="mb-16 scroll-mt-24" aria-labelledby="experiencia-title">
          <div>
            <div class="mb-8 max-w-2xl">
              <p class="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                Trajetória profissional
              </p>
              <h2 id="experiencia-title" class="text-2xl font-bold text-white sm:text-3xl">
                Experiência
              </h2>
              <p class="mt-3 leading-relaxed text-gray-400">
                Minha evolução profissional, das experiências mais recentes às mais antigas.
              </p>
            </div>

            <!-- Card da empresa -->
            <CardExperience />
          </div>
        </section>


        <div class="mt-10 rounded-2xl border border-gray-800 bg-gray-800/70 p-5 sm:p-6">
          <div class="flex items-start gap-4">
            <div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gray-900 text-blue-300">
              <Icon icon="material-symbols:school-outline-rounded" width="24" height="24" />
            </div>
            <div>
              <h2 class="font-semibold text-white">Formação acadêmica</h2>
              <p class="mt-1 text-sm font-medium text-gray-300">
                Bacharelado em Ciência da Computação
              </p>
              <p class="mt-1 text-sm text-emerald-400">
                Universidade Paulista (UNIP) · Ago/2025 — Atual
              </p>
              <p class="mt-3 text-sm leading-relaxed text-gray-400">
                Em formação contínua, aprofundando meus conhecimentos em
                programação, algoritmos, fundamentos da computação e
                desenvolvimento de software.
              </p>
              <NuxtLink to="/certificacoes"
                class="mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Conheça minha trajetória

                <Icon icon="material-symbols:arrow-forward-rounded" width="17" height="17" />
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Formação -->
        <!-- <section id="formacao" class="scroll-mt-24" aria-labelledby="formacao-title">
          <div class="mb-7 max-w-2xl">
            <p class="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">Aprendizado contínuo</p>
            <h2 id="formacao-title" class="text-2xl font-bold text-white sm:text-3xl">Formação e cursos</h2>
            <p class="mt-3 leading-relaxed text-gray-400">
              Formação acadêmica e cursos que contribuíram para minha evolução no desenvolvimento de software.
            </p>
          </div>
          <CardEducation />
        </section> -->
      </div>
    </section>
    <ContactModal :is-open="isContactOpen" @close="isContactOpen = false" />
  </div>
</template>

<script>
export default {
  name: 'SobrePage',
  components: {
    ContactModal: () => import('~/components/ContactModal.vue'),
    CardExperience: () => import('~/components/Sobre/Experience.vue'),
    CardEducation: () => import('~/components/Sobre/Education.vue'),
    CardSkills: () => import('~/components/Sobre/Skills.vue')
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
      title: 'Sobre | Bruno Neves — Desenvolvedor Frontend',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Conheça a trajetória de Bruno Neves, desenvolvedor Frontend especializado em Vue.js e Nuxt, com experiência em migrações tecnológicas, performance, SEO e desenvolvimento web.'
        }
      ]
    }
  }
}
</script>
