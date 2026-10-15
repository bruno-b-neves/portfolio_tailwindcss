<template>
  <div class="relative">
    <div class="relative overflow-hidden" style="max-height: 390px">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <article v-for="item in education" :key="item.title"
          class="flex gap-4 rounded-xl border border-gray-800 bg-gray-800 p-5 sm:p-6">
          <div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gray-700 text-blue-400">
            <Icon :icon="item.icon" width="23" height="23" />
          </div>

          <div class="flex min-w-0 flex-1 flex-col">
            <h3 class="font-semibold leading-snug text-white">{{ item.title }}</h3>
            <p class="mt-1 text-sm text-gray-300">{{ item.institution }}</p>
            <p class="mt-2 text-xs font-medium text-emerald-400">{{ item.period }}</p>
            <p v-if="item.description" class="mt-3 text-sm leading-relaxed text-gray-400">
              {{ item.description }}
            </p>

            <div class="mt-auto flex flex-wrap gap-2 pt-5">
              <a v-if="item.courseUrl" :href="item.courseUrl" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-3 py-2 text-sm font-semibold text-blue-300 transition hover:border-blue-400 hover:bg-gray-700 hover:text-blue-200">
                <Icon icon="material-symbols:open-in-new-rounded" width="18" height="18" />
                Ver curso
              </a>
              <a v-if="item.certificateUrl" :href="item.certificateUrl" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-3 py-2 text-sm font-semibold text-emerald-400 transition hover:border-emerald-400 hover:bg-gray-700"
                :aria-label="`Validar certificado: ${item.title}`">
                <Icon icon="material-symbols:verified-outline-rounded" width="18" height="18" />
                Validar certificado
              </a>
            </div>
          </div>
        </article>
      </div>

      <div
        class="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent"
        aria-hidden="true"></div>
    </div>

    <div class="relative z-10 -mt-10 flex justify-center pb-4">
      <NuxtLink to="/certificacoes"
        class="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-emerald-300 uppercase transition duration-200 hover:text-emerald-400">
        <Icon icon="material-symbols:school-outline-rounded" width="20" height="20" />
        Ver todas as certificações
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      education: [
        {
          title: 'Ciência da Computação',
          institution: 'Universidade Paulista (UNIP)',
          period: 'Ago/2025 — Atual',
          description:
            'Graduação em Ciência da Computação, com foco na construção de fundamentos em programação, algoritmos e desenvolvimento de software.',
          icon: 'material-symbols:school-outline-rounded',
          courseUrl: '',
          certificateUrl: ''
        },
        {
          title: 'Web Moderno Completo com JavaScript + Projetos',
          institution: 'Cod3r · Udemy',
          period: 'Formação complementar',
          description:
            'Formação em desenvolvimento web moderno, abrangendo JavaScript, HTML5, CSS3, frameworks e desenvolvimento de projetos práticos.',
          icon: 'material-symbols:code-rounded',
          // courseUrl: 'https://www.udemy.com/course/curso-web/',
          courseUrl: '',
          // certificateUrl: 'https://www.udemy.com/certificate/UC-87ffd16e-f5ac-4401-8593-84c52c7990d6/'
          certificateUrl: ''
        },
        {
          title: 'Vue JS 2 — O Guia Completo',
          institution: 'Cod3r · Leonardo Leitão',
          platform: 'Udemy',
          period: 'Formação complementar',
          description:
            'Formação especializada no ecossistema Vue.js 2, abordando desenvolvimento de componentes, diretivas, comunicação entre componentes, gerenciamento de estado com Vuex e navegação utilizando Vue Router.',
          icon: 'simple-icons:vuedotjs',
          courseUrl: '',
          certificateUrl: ''
        },
        {
          title: 'UI Design (Design de Interface de Usuário)',
          institution: 'Udemy',
          period: 'Formação complementar',
          description:
            'Estudo dos fundamentos de design de interfaces, abordando hierarquia visual, tipografia, teoria das cores, composição e princípios para criação de interfaces digitais consistentes.',
          icon: 'material-symbols:design-services-outline-rounded',
          courseUrl:
            'https://www.udemy.com/course/ui-design-design-de-interface-de-usuario/',
          certificateUrl: ''
        },

        {
          title: 'Java com Spring Boot — Curso Introdutório',
          institution: 'Rocketseat',
          period: 'Formação complementar',
          description:
            'Introdução ao desenvolvimento Backend utilizando Java e Spring Boot, explorando os fundamentos da linguagem e a construção de aplicações com o framework.',
          icon: 'simple-icons:springboot',
          courseUrl:
            'https://app.rocketseat.com.br/jornada/java-com-spring-boot-curso-introdutorio/visao-geral',
          certificateUrl: ''
        },

        {
          title: 'Responsive Web Design (Legacy)',
          institution: 'freeCodeCamp',
          period: 'Formação complementar',
          description:
            'Formação em fundamentos de desenvolvimento web responsivo, abrangendo HTML5, CSS3, Flexbox, CSS Grid, acessibilidade e construção de páginas adaptáveis a diferentes dispositivos.',
          icon: 'material-symbols:devices-outline-rounded',
          courseUrl:
            'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
          certificateUrl: ''
        }


      ],

    }
  }
}
</script>

<style scoped></style>