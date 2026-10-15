<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <section ref="pageContent" id="certificacoes"
      class="relative isolate overflow-hidden px-6 py-16 sm:px-8 md:py-24 lg:px-16"
      aria-labelledby="certificacoes-title">
      <div
        class="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-blue-500 opacity-10 blur-3xl"
        aria-hidden="true"></div>
      <div
        class="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-72 w-72 rounded-full bg-emerald-400 opacity-10 blur-3xl"
        aria-hidden="true"></div>

      <div class="relative z-10 mx-auto max-w-6xl">
        <header class="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div class="max-w-2xl">
            <div
              class="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300">
              <span class="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true"></span>
              <span>Aprendizado contínuo</span>
            </div>
            <h1 id="certificacoes-title"
              class="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Cursos e <span
                class="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">certificações.</span>
            </h1>
          </div>
          <p class="max-w-xl leading-relaxed text-gray-400 sm:text-base">
            Minha formação complementar reúne estudos em desenvolvimento web, Vue.js, JavaScript, design de interfaces e
            fundamentos de backend. Conhecimentos que ampliam e acompanham minha experiência profissional.
          </p>
        </header>

        <div class="mb-5 flex items-center gap-3">
          <Icon icon="material-symbols:workspace-premium-outline-rounded" width="23" height="23"
            class="text-emerald-400" />
          <h2 class="text-xl font-semibold text-white">Formação complementar</h2>
        </div>

        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="certification in certifications" :key="certification.id"
            class="group flex h-full flex-col rounded-2xl border border-gray-800 bg-gray-800 p-5 transition duration-300 hover:-translate-y-1 hover:border-gray-600 hover:shadow-xl hover:shadow-black/10 sm:p-6">
            <div class="mb-5 flex items-start justify-between gap-4">
              <div
                class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-gray-700 bg-gray-900 text-emerald-400 transition duration-300 group-hover:scale-105 group-hover:text-blue-300">
                <Icon :icon="certification.icon" width="26" height="26" />
              </div>
              <span
                class="rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1 text-xs font-medium text-gray-400">{{
                  certification.type }}</span>
            </div>

            <h3 class="text-lg font-semibold leading-snug text-white transition-colors group-hover:text-blue-300">{{
              certification.title }}</h3>
            <p class="mt-2 text-sm font-medium text-emerald-400">{{ certification.institution }}</p>
            <p class="mt-3 flex-1 overflow-hidden text-sm leading-relaxed text-gray-400"
              style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;">{{
                certification.shortDescription || certification.description }}</p>

            <div class="mt-6 flex flex-wrap gap-2 border-t border-gray-700 pt-4">
              <button type="button" @click="openDetails(certification)"
                class="inline-flex min-h-10 items-center gap-2 rounded-lg bg-blue-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <Icon icon="material-symbols:visibility-outline-rounded" width="18" height="18" /> Ver detalhes
              </button>
              <a v-if="certification.courseUrl" :href="certification.courseUrl" target="_blank"
                rel="noopener noreferrer" :aria-label="`Ver curso: ${certification.title}`"
                class="inline-flex min-h-10 items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm font-semibold text-blue-300 transition hover:border-blue-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <Icon icon="material-symbols:open-in-new-rounded" width="17" height="17" /> Ver curso
              </a>
              <a v-if="certification.certificateUrl" :href="certification.certificateUrl" target="_blank"
                rel="noopener noreferrer" :aria-label="`Validar certificado: ${certification.title}`"
                class="inline-flex min-h-10 items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm font-semibold text-emerald-400 transition hover:border-emerald-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                <Icon icon="material-symbols:verified-outline-rounded" width="18" height="18" /> Validar certificado
              </a>
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
              <p class="mt-1 text-sm font-medium text-gray-300">Bacharelado em Ciência da Computação</p>
              <p class="mt-1 text-sm text-emerald-400">Universidade Paulista (UNIP) · Ago/2025 — Atual</p>
              <p class="mt-3 text-sm leading-relaxed text-gray-400">Em formação contínua, aprofundando meus
                conhecimentos em programação, algoritmos, fundamentos da computação e desenvolvimento de software.</p>
              <div class="mt-4 flex flex-wrap items-center gap-4">
                <button type="button" @click="openDetails(academic)"
                  class="inline-flex min-h-10 items-center gap-2 rounded-lg bg-blue-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <Icon icon="material-symbols:visibility-outline-rounded" width="18" height="18" /> Ver detalhes da
                  graduação
                </button>
                <NuxtLink to="/sobre"
                  class=" inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  Conheça minha trajetória
                  <Icon icon="material-symbols:arrow-forward-rounded" width="17" height="17" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CertificationDetailsModal :item="selectedItem" @close="closeDetails" />
  </div>
</template>

<script>
import CertificationDetailsModal from '~/components/Certificacoes/CertificationDetailsModal.vue'

export default {
  name: 'CertificacoesPage',
  components: { CertificationDetailsModal },
  data() {
    return {
      selectedItem: null,
      previousFocus: null,
      academic: {
        id: 'ciencia-computacao',
        title: 'Bacharelado em Ciência da Computação',
        institution: 'Universidade Paulista (UNIP)',
        period: 'Ago/2025 — Atual',
        type: 'Graduação',
        icon: 'material-symbols:school-outline-rounded',
        image: '',
        description: 'Graduação em Ciência da Computação, com foco na construção de fundamentos em programação, algoritmos e desenvolvimento de software.',
        curriculum: [],
        courseUrl: '',
        certificateUrl: ''
      },
      certifications: [
        {
          id: 'web-moderno',
          title: 'Web Moderno Completo com JavaScript + Projetos',
          institution: 'Cod3r · Udemy',
          type: 'Desenvolvimento web',
          icon: 'material-symbols:language-rounded',
          shortDescription: 'Formação prática em JavaScript e desenvolvimento web, do frontend ao backend.',
          description: 'Formação abrangente em desenvolvimento web moderno, consolidando fundamentos de programação e JavaScript por meio da construção de aplicações práticas. O aprendizado fortaleceu minha capacidade de estruturar interfaces, compreender aplicações de ponta a ponta e integrar tecnologias frontend e backend, contribuindo diretamente para minha evolução profissional como desenvolvedor Frontend.',
          courseUrl: 'https://www.udemy.com/course/curso-web/',
          certificateUrl: '',
          image: '/images/certificacoes/course-webmoderno.jpeg', // Ex.: '/images/cursos/nome-do-curso.webp'
          curriculum: [
            'Fundamentos de programação, lógica e algoritmos',
            'JavaScript: fundamentos, funções, objetos e arrays',
            'JavaScript avançado e ESNext',
            'Programação funcional e orientação a objetos',
            'HTML5, CSS3, Flexbox e CSS Grid',
            'DOM, eventos, HTTP, Ajax, Fetch e Axios',
            'Vue.js, React, Next.js e Angular',
            'Bootstrap e jQuery',
            'Node.js, Express e desenvolvimento de APIs',
            'Bancos de dados SQL e NoSQL',
            'Gulp, Webpack, Babel e Sass',
            'Projetos práticos e integração frontend/backend',
            'Desenvolvimento desktop com Electron',
            'Publicação de aplicações na AWS'
          ] // Síntese por áreas do conteúdo programático
        },
        {
          id: 'vue-2',
          title: 'Vue JS 2 — O Guia Completo',
          institution: 'Cod3r · Leonardo Leitão · Udemy',
          type: 'Frontend',
          icon: 'simple-icons:vuedotjs',
          shortDescription: 'Especialização em Vue.js 2, componentização, reatividade, Vue Router e Vuex.',
          description: 'Formação especializada no ecossistema Vue.js 2, abrangendo desde os fundamentos da reatividade e construção de interfaces declarativas até o desenvolvimento de aplicações estruturadas com componentes reutilizáveis, gerenciamento de estado e navegação entre páginas. O aprendizado consolidou conhecimentos em comunicação entre componentes, diretivas, ciclo de vida, Vue Router e Vuex, fortalecendo minha capacidade de desenvolver interfaces dinâmicas, organizar aplicações frontend e implementar soluções escaláveis. A construção de uma base técnica que contribuiu diretamente para minha evolução profissional com Vue.js, posteriormente aplicada na modernização do frontend institucional do CPV, durante a migração de WordPress para Vue 2.',
          courseUrl: '',
          certificateUrl: '',
          image: '/images/certificacoes/course-vuejsguiacompleto.jpeg', // Ex.: '/images/cursos/nome-do-curso.webp'
          curriculum: [
            'Fundamentos do Vue.js e configuração do ambiente',
            'Instância Vue, templates e sintaxe declarativa',
            'Reatividade, propriedades computadas e watchers',
            'Diretivas e renderização condicional de listas',
            'Eventos, métodos e modificadores',
            'Componentes reutilizáveis e comunicação entre componentes',
            'Ciclo de vida, filtros e mixins',
            'Formulários e vinculação bidirecional com v-model',
            'Estilização dinâmica, animações e transições',
            'Requisições HTTP e integração com APIs utilizando Axios',
            'Vue Router e desenvolvimento de aplicações SPA',
            'Vuex e gerenciamento centralizado de estado',
            'Exercícios, desafios e desenvolvimento de projetos práticos'
          ],
        },
        {
          id: 'ui-design',
          title: 'UI Design (Design de Interface de Usuário)',
          institution: 'Udemy',
          type: 'Design de interface',
          icon: 'material-symbols:palette-outline-rounded',
          shortDescription: 'Formação em UI Design com Figma, composição visual, acessibilidade, wireframes e prototipação.',
          description: 'Formação em Design de Interfaces voltada à criação de experiências digitais funcionais, consistentes e visualmente estruturadas, utilizando o Figma como ferramenta principal. O curso aprofundou conhecimentos em princípios de composição visual, hierarquia da informação, tipografia, teoria das cores, acessibilidade e construção de guias de estilo, percorrendo as etapas de criação de uma interface — do briefing e wireframe ao mockup e protótipo interativo. Ampliação da minha visão como desenvolvedor Frontend, fortalecendo a capacidade de interpretar decisões de design, transformar propostas visuais em interfaces responsivas e contribuir para produtos digitais com maior consistência, clareza e usabilidade.',
          courseUrl: 'https://www.udemy.com/course/ui-design-design-de-interface-de-usuario/',
          certificateUrl: '',
          image: '/images/certificacoes/course-uidesign.jpeg', // Ex.: '/images/cursos/nome-do-curso.webp'
          curriculum: [
            'Introdução ao UI Design, UX Design e Figma',
            'Ferramentas do Figma, frames, layers e formas vetoriais',
            'Princípios do design: eixo, simetria, hierarquia e ritmo',
            'Grids, alinhamento e composição visual',
            'Tipografia, escala tipográfica e legibilidade',
            'Psicologia das cores, círculo cromático e harmonização',
            'Acessibilidade de cores e critérios WCAG',
            'Briefing, pesquisa de referências e análise de mercado',
            'Criação de wireframes de baixa fidelidade',
            'Mockups de alta fidelidade e guias de estilo',
            'Componentes reutilizáveis e variantes no Figma',
            'Prototipação, interações, animações e transições',
            'Colaboração e exportação de projetos para desenvolvimento',
            'Projetos práticos: Turma do Café, Vaga Perfeita, Barba Brava, Página Pessoal e Sociedade do Inglês'
          ],
        },
        {
          id: 'java-spring-boot',
          title: 'Java com Spring Boot — Curso Introdutório',
          institution: 'Rocketseat',
          type: 'Backend',
          icon: 'simple-icons:springboot',
          shortDescription: 'Introdução ao desenvolvimento backend com Java e Spring Boot, explorando fundamentos da linguagem e construção de aplicações.',
          description: 'Formação prática e introdutória em desenvolvimento Backend com Java e Spring Boot, baseada na construção de uma API REST para gerenciamento de tarefas, desde a configuração do ambiente até a publicação da aplicação. O curso aborda organização de projetos, criação de endpoints HTTP, persistência de dados com Spring Data JPA e H2, validação de informações, autenticação, segurança e implementação das operações de cadastro, consulta e atualização de tarefas. Ampliação da minha compreensão sobre a arquitetura de aplicações web, comunicação entre Frontend e Backend e funcionamento de APIs REST, fortalecendo minha capacidade de desenvolver interfaces que se integram a serviços e compreender melhor o fluxo completo dos dados em uma aplicação.',
          courseUrl: 'https://app.rocketseat.com.br/jornada/java-com-spring-boot-curso-introdutorio/visao-geral',
          certificateUrl: '',
          image: '/images/certificacoes/course-javaspringboot.jpeg', // Ex.: '/images/cursos/nome-do-curso.webp'
          curriculum: [
            'Configuração do ambiente com Java, Maven e IDE',
            'Estrutura e organização de projetos Spring Boot',
            'Controllers, rotas HTTP e APIs REST',
            'Classes, atributos, getters, setters e Lombok',
            'Persistência com Spring Data JPA e banco H2',
            'Modelagem de entidades e criação de repositórios',
            'Cadastro de usuários e validação de informações',
            'ResponseEntity e respostas HTTP',
            'Hash de senhas, autenticação e filtros de segurança',
            'Modelagem e cadastro de tarefas',
            'Listagem e filtragem de tarefas',
            'Atualização completa e parcial de registros',
            'Validação de propriedade e controle de acesso',
            'Tratamento de exceções com try/catch',
            'Live Reload e publicação da aplicação no Render'
          ],
        },
        {
          title: 'Responsive Web Design (Legacy)',
          institution: 'freeCodeCamp',
          type: 'Certificação',
          icon: 'simple-icons:freecodecamp',

          shortDescription:
            'Certificação prática em HTML5, CSS3, acessibilidade e desenvolvimento de interfaces responsivas.',

          description:
            'Formação prática em desenvolvimento de interfaces web, com foco na construção de páginas responsivas, semanticamente estruturadas e acessíveis, utilizando HTML5 e CSS3. A certificação consolidou fundamentos essenciais de estilização, organização de layouts, formulários, Flexbox, CSS Grid e adaptação de interfaces para diferentes dispositivos, por meio de exercícios e projetos aplicados. O aprendizado fortaleceu minha base técnica em desenvolvimento Frontend, contribuindo para a criação de interfaces mobile-first, com estrutura semântica, consistência visual e atenção à experiência do usuário.',

          curriculum: [
            'Basic HTML and HTML5 — Estrutura semântica, elementos e formulários',
            'Basic CSS — Seletores, propriedades e estilização',
            'Applied Visual Design — Composição, posicionamento e animações',
            'Applied Accessibility — Acessibilidade e boas práticas semânticas',
            'Responsive Web Design Principles — Media Queries e responsividade',
            'CSS Flexbox — Layouts flexíveis e alinhamento',
            'CSS Grid — Construção de layouts em grade',
            'Projeto de certificação: Tribute Page',
            'Projeto de certificação: Survey Form',
            'Projeto de certificação: Product Landing Page',
            'Projeto de certificação: Technical Documentation Page',
            'Projeto de certificação: Personal Portfolio Webpage'
          ],

          courseUrl:
            'https://www.freecodecamp.org/learn/responsive-web-design/',

          certificateUrl: '',
          image: '/images/certificacoes/course-freecodecamp.jpeg', // Ex.: '/images/cursos/nome-do-curso.webp'
        }
      ]
    }
  },
  watch: {
    selectedItem(item) {
      this.$nextTick(() => {
        if (this.$refs.pageContent) {
          this.$refs.pageContent.inert = Boolean(item)
          if (item) this.$refs.pageContent.setAttribute('aria-hidden', 'true')
          else this.$refs.pageContent.removeAttribute('aria-hidden')
        }
      })
    }
  },
  beforeDestroy() {
    if (this.$refs.pageContent) {
      this.$refs.pageContent.inert = false
      this.$refs.pageContent.removeAttribute('aria-hidden')
    }
  },
  methods: {
    openDetails(item) { this.selectedItem = item },
    closeDetails() { this.selectedItem = null }
  },
  head() {
    return {
      title: 'Cursos e Certificações | Bruno Neves — Desenvolvedor Frontend',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Conheça a formação complementar de Bruno Neves em desenvolvimento web, Vue.js, JavaScript, UI Design e Java com Spring Boot, além da graduação em Ciência da Computação.'
        }
      ]
    }
  }
}
</script>
