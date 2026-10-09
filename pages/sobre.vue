<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <section id="sobre" class="relative overflow-hidden px-6 py-16 sm:px-8 md:py-24 lg:px-16">
      <div class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      <div class="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-400 opacity-10 blur-3xl"></div>

      <div class="relative z-10 mx-auto max-w-6xl">
        <!-- Introdução -->
        <header class="mb-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div class="space-y-6 lg:col-span-8">
            <div class="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300">
              <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
              <span>Sobre mim · Desenvolvedor Frontend</span>
            </div>

            <h1 class="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Desenvolvendo experiências digitais com
              <span class="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"> tecnologia e propósito.</span>
            </h1>

            <p class="max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Sou desenvolvedor frontend com mais de 4 anos de experiência, atuando principalmente com o ecossistema Vue.js e Nuxt.
              Gosto de transformar necessidades em interfaces responsivas, organizadas e fáceis de usar, buscando equilíbrio entre
              experiência do usuário, qualidade de código e desempenho.
            </p>

            <div class="flex flex-wrap gap-3 pt-1">
              <NuxtLink to="/projetos" class="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <span>Conheça meus projetos</span>
                <Icon icon="material-symbols:arrow-forward-rounded" width="18" height="18" />
              </NuxtLink>
              <NuxtLink to="/contato" class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-5 py-3 text-sm font-semibold text-gray-200 transition duration-200 hover:border-gray-500 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500">
                <Icon icon="material-symbols:mail-outline-rounded" width="18" height="18" />
                <span>Entre em contato</span>
              </NuxtLink>
            </div>
          </div>

          <aside class="flex justify-center lg:col-span-4 lg:justify-end" aria-label="Resumo profissional">
            <div class="relative w-full max-w-sm rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-2xl">
              <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-emerald-400 text-white">
                <Icon icon="ph:code-bold" width="30" height="30" />
              </div>
              <p class="text-sm font-medium text-gray-400">Minha trajetória</p>
              <p class="mt-1 text-3xl font-bold text-white">+4 anos</p>
              <p class="mt-2 text-sm leading-relaxed text-gray-300">
                Criando e evoluindo interfaces web com foco em usabilidade, responsividade e manutenção do código.
              </p>
              <div class="mt-6 border-t border-gray-700 pt-4">
                <p class="flex items-center gap-2 text-sm text-gray-300">
                  <Icon icon="material-symbols:school-outline-rounded" width="18" height="18" class="text-emerald-400" />
                  Ciência da Computação · UNIP
                </p>
              </div>
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

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <article v-for="skill in skills" :key="skill.name" class="rounded-xl border border-gray-800 bg-gray-800 p-5 transition duration-200 hover:-translate-y-1 hover:border-gray-600">
              <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gray-700 text-emerald-400">
                <Icon :icon="skill.icon" width="24" height="24" />
              </div>
              <h3 class="font-semibold text-white">{{ skill.name }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-gray-400">{{ skill.description }}</p>
            </article>
          </div>
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
            <article v-for="experience in experiences" :key="experience.id"
                class="rounded-2xl border border-gray-800 bg-gray-800 p-5 sm:p-8">
                <!-- Empresa, cargo e período na mesma área -->
                <header
                    class="flex flex-col justify-between gap-4 border-b border-gray-700 pb-6 sm:flex-row sm:items-start">
                    <div>
                        <h3 class="text-xl font-bold text-white sm:text-2xl">
                            {{ experience.company }}
                        </h3>
                        <p class="mt-2 text-sm font-semibold text-emerald-400">
                            {{ experience.position }}
                        </p>
                    </div>

                    <span
                        class="inline-flex w-fit flex-shrink-0 rounded-full border border-gray-700 bg-gray-900 px-3 py-1.5 text-xs font-medium text-gray-300">
                        {{ experience.period }}
                    </span>
                </header>

                <!-- Descrição geral da experiência na empresa -->
                <p class="max-w-4xl py-6 leading-relaxed text-gray-300">
                    {{ experience.description }}
                </p>

                <!-- Histórico de funções dentro da empresa -->
                <div v-if="experience.roles && experience.roles.length" class=" pt-6">
                    <h4 class="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-400">
                        Evolução de funções
                    </h4>

                    <ol class="space-y-0">
                        <li v-for="(role, index) in experience.roles" :key="role.id" class="relative pl-8 sm:pl-10">
                            <!-- Bullet ao lado do título da função -->
                            <span
                                class="absolute left-0 top-1.5 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2"
                                :class="index === 0
                                    ? 'border-emerald-300 bg-gray-800'
                                    : 'border-gray-600 bg-gray-800'" aria-hidden="true">
                                <span class="h-1.5 w-1.5 rounded-full"
                                    :class="index === 0 ? 'bg-emerald-300' : 'bg-gray-500'"></span>
                            </span>

                            <!-- Linha vertical entre as funções; termina antes do próximo bullet -->
                            <div v-if="index < experience.roles.length - 1"
                                class="absolute bottom-0 left-2 top-5 w-px bg-gray-600" aria-hidden="true"></div>

                            <div class="pb-7">
                                <!-- Título e ano na mesma linha -->
                                <div
                                    class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                                    <h5 class="font-semibold" :class="index === 0 ? 'text-white' : 'text-gray-200'">
                                        {{ role.title }}
                                    </h5>
                                    <span v-if="role.period" class="flex-shrink-0 text-xs font-medium text-emerald-400">
                                        {{ role.period }}
                                    </span>
                                </div>

                                <p class="mt-2 max-w-3xl text-sm leading-relaxed text-gray-400">
                                    {{ role.description }}
                                </p>
                            </div>
                        </li>
                    </ol>
                </div>
            </article>
        </div>
    </section>

        <!-- Formação -->
        <section id="formacao" class="scroll-mt-24" aria-labelledby="formacao-title">
          <div class="mb-7 max-w-2xl">
            <p class="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">Aprendizado contínuo</p>
            <h2 id="formacao-title" class="text-2xl font-bold text-white sm:text-3xl">Formação e cursos</h2>
            <p class="mt-3 leading-relaxed text-gray-400">
              Formação acadêmica e cursos que contribuíram para minha evolução no desenvolvimento de software.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <article v-for="item in education" :key="item.title" class="flex gap-4 rounded-xl border border-gray-800 bg-gray-800 p-5 sm:p-6">
              <div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gray-700 text-blue-400">
                <Icon :icon="item.icon" width="23" height="23" />
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="font-semibold leading-snug text-white">{{ item.title }}</h3>
                <p class="mt-1 text-sm text-gray-300">{{ item.institution }}</p>
                <p class="mt-2 text-xs font-medium text-emerald-400">{{ item.period }}</p>

                <a
                  v-if="item.certificateUrl"
                  :href="item.certificateUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-4 inline-flex items-center gap-2 rounded-lg border border-gray-700 px-3 py-2 text-sm font-semibold text-blue-300 transition hover:border-blue-400 hover:bg-gray-700 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  :aria-label="`Validar certificado: ${item.title}`"
                >
                  <Icon icon="material-symbols:verified-outline-rounded" width="18" height="18" />
                  <span>Validar certificado</span>
                  <Icon icon="material-symbols:open-in-new-rounded" width="16" height="16" />
                </a>
              </div>
            </article>
          </div>
        </section>
</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SobrePage',
  data() {
    return {

      education: [
        {
          title: 'Desenvolvimento Web Moderno',
          institution: 'Cod3r · Udemy',
          period: 'Curso de desenvolvimento web',
          icon: 'material-symbols:language-rounded',
          certificateUrl: '' // Cole aqui o link público de validação do certificado.
        },
        {
          title: 'Vue.js 2, Vuex & Vue Router',
          institution: 'Cod3r · Udemy',
          period: 'Curso de Vue.js',
          icon: 'simple-icons:vuedotjs',
          certificateUrl: '' // Cole aqui o link público de validação do certificado.
        },
        {
          title: 'Java + Spring Boot: Introdução',
          institution: 'Rocketseat',
          period: 'Curso introdutório',
          icon: 'simple-icons:springboot',
          certificateUrl: '' // Cole aqui o link público de validação do certificado.
        },
        {
          title: 'Ciência da Computação',
          institution: 'Universidade Paulista (UNIP)',
          period: 'Ago/2025 — Atual',
          icon: 'material-symbols:school-outline-rounded'
        }
      ],

      experiences: [
        {
          id: 'grupo-cpv',
          company: 'Grupo CPV de Ensino',
          position: 'Desenvolvedor Frontend',
          period: 'Mar/2021 — Atual',
          description: 'Atuação no desenvolvimento frontend, contribuindo para a evolução e manutenção de interfaces web e para a implementação de funcionalidades dos produtos da empresa.',
          // Mantenha as funções da mais recente para a mais antiga e substitua os exemplos pelos dados reais.
          roles: [
            {
              id: 'funcao-atual',
              title: 'Desenvolvimento Frontend',
              period: 'Atual',
              description: 'Descreva aqui suas responsabilidades atuais, principais entregas e tecnologias utilizadas.'
            },
            {
              id: 'funcao-anterior',
              title: 'Função anterior',
              period: '',
              description: 'Adicione aqui o título e a descrição da função anterior. Remova este exemplo se não se aplicar à sua trajetória.'
            }
          ]
        }
      ],

      skills: [
        {
          name: 'Nuxt',
          icon: 'simple-icons:nuxtdotjs',
          description: 'Estruturação de aplicações Vue com recursos do ecossistema Nuxt.'
        },
        {
          name: 'JavaScript',
          icon: 'simple-icons:javascript',
          description: 'Desenvolvimento de funcionalidades e interações para aplicações web.'
        },
        {
          name: 'Tailwind CSS',
          icon: 'simple-icons:tailwindcss',
          description: 'Construção de interfaces responsivas com classes utilitárias.'
        },
        {
          name: 'Bootstrap',
          icon: 'simple-icons:bootstrap',
          description: 'Criação de layouts responsivos com componentes e utilitários.'
        },
        {
          name: 'TypeScript',
          icon: 'simple-icons:typescript',
          description: 'Tipagem estática para tornar o código mais previsível.'
        }
      ]
    }
  },

  head() {
    return {
      title: 'Sobre | Bruno Neves — Desenvolvedor Frontend',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Conheça a trajetória profissional, as tecnologias, a experiência e a formação de Bruno Neves, desenvolvedor frontend com mais de 4 anos de experiência.'
        }
      ]
    }
  }
}
</script>
