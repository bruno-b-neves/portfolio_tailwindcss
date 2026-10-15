<template>
    <section id="experiencia" class="bg-gray-900" aria-labelledby="experiencia-title">
        <div class="mx-auto">

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

                                <!-- Descrição da função -->
                                <p v-if="role.description" class="mt-3 max-w-3xl text-sm leading-relaxed text-gray-400">
                                    {{ role.description }}
                                </p>

                                <!-- Projetos e marcos tecnológicos da função -->
                                <div v-if="role.projects && role.projects.length" class="mt-6 space-y-6">
                                    <article v-for="project in role.projects" :key="project.id"
                                        class="rounded-xl border border-gray-700 bg-gray-900 p-5">
                                        <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                            <h6 class="font-semibold text-white">
                                                {{ project.title }}
                                            </h6>

                                            <span class="text-xs font-medium text-emerald-400">
                                                {{ project.period }}
                                            </span>
                                        </div>

                                        <p class="mt-3 text-sm leading-relaxed text-gray-400">
                                            {{ project.description }}
                                        </p>

                                        <div class="mt-5">
                                            <p
                                                class="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                                                Principais responsabilidades
                                            </p>

                                            <ul class="space-y-2">
                                                <li v-for="(responsibility, i) in project.responsibilities" :key="i"
                                                    class="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                                                    <span
                                                        class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400"
                                                        aria-hidden="true"></span>

                                                    <span>{{ responsibility }}</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <!-- Tecnologias utilizadas -->
                                        <div class="mt-5 flex flex-wrap gap-2">
                                            <span v-for="technology in project.technologies" :key="technology"
                                                class="rounded-md border border-gray-700 bg-gray-800 px-2.5 py-1 text-xs text-gray-300">
                                                {{ technology }}
                                            </span>
                                        </div>
                                    </article>
                                </div>

                                <!-- Responsabilidades da função -->
                                <div v-if="role.responsibilities && role.responsibilities.length" class="mt-5">
                                    <h6 class="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                                        Principais responsabilidades
                                    </h6>

                                    <ul class="space-y-2">
                                        <li v-for="(responsibility, i) in role.responsibilities" :key="i"
                                            class="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                                            <span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400"
                                                aria-hidden="true"></span>

                                            <span>{{ responsibility }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            experiences: [
                {
                    id: 'grupo-cpv',
                    company: 'CPV Grupo Educacional',
                    position: 'Desenvolvedor Frontend',
                    period: 'Mar/2021 — Atual',

                    description:
                        'Minha trajetória no CPV começou na área de Infraestrutura de TI, onde também passei a colaborar com a equipe de desenvolvimento WordPress. Essa aproximação possibilitou minha transição definitiva para o desenvolvimento web. Posteriormente, assumi a responsabilidade integral pelo frontend institucional, participando de duas grandes transformações tecnológicas: a migração para Vue.js em 2023 e a modernização da arquitetura com Vue 3 e Nuxt a partir de 2025.',

                    roles: [
                        {
                            id: 'frontend',
                            title: 'Desenvolvedor Frontend',
                            period: '2023 — Atual',

                            description:
                                'Responsável pelo desenvolvimento, manutenção e evolução do frontend institucional do CPV, conduzindo duas grandes migrações tecnológicas com foco em responsividade, qualidade de código, performance, acessibilidade e SEO.',

                            projects: [
                                {
                                    id: 'nuxt-migration',
                                    title: 'Modernização da arquitetura Frontend',
                                    period: '2025 — Atual',

                                    description:
                                        'Migração da aplicação legada em Vue.js 2 e Vue CLI para uma arquitetura moderna baseada em Vue.js 3, Nuxt e Bootstrap 5, visando superar limitações de performance, renderização e SEO.',

                                    responsibilities: [
                                        'Responsabilidade integral pelo desenvolvimento frontend durante a migração tecnológica.',
                                        'Migração das interfaces e componentes de Vue.js 2 para Vue.js 3 e Nuxt.',
                                        'Implementação de estratégias de renderização SSR e SSG conforme as necessidades da aplicação.',
                                        'Implementação de SEO técnico, incluindo metadados, títulos, descrições, URLs canônicas e Open Graph.',
                                        'Otimização de performance, carregamento de recursos e experiência de navegação.',
                                        'Modernização dos layouts utilizando Bootstrap 5 e Sass/SCSS.',
                                        'Aplicação de boas práticas de acessibilidade, HTML semântico e desenvolvimento mobile-first.',
                                        'Organização de componentes reutilizáveis e evolução da arquitetura frontend.'
                                    ],

                                    technologies: [
                                        'Vue.js 3',
                                        'Nuxt',
                                        'JavaScript',
                                        'Bootstrap 5',
                                        'Sass/SCSS',
                                        'SSR',
                                        'SSG',
                                        'SEO'
                                    ]
                                },
                                {
                                    id: 'vue2-migration',
                                    title: 'Migração do WordPress para Vue.js',
                                    period: '2023 — 2025',

                                    description:
                                        'Participação na transição tecnológica do site institucional, anteriormente desenvolvido em WordPress, para uma aplicação frontend baseada no ecossistema Vue.js 2. Assumi integralmente a implementação e evolução do frontend.',

                                    responsibilities: [
                                        'Desenvolvimento do novo frontend institucional utilizando Vue.js 2 e JavaScript.',
                                        'Migração das interfaces existentes em WordPress para uma aplicação baseada em Vue CLI.',
                                        'Implementação de layouts responsivos utilizando BootstrapVue e Bootstrap 4.6.',
                                        'Desenvolvimento seguindo a abordagem mobile-first e boas práticas de HTML semântico e CSS.',
                                        'Organização da navegação utilizando Vue Router.',
                                        'Gerenciamento de estado da aplicação utilizando Vuex.',
                                        'Criação e manutenção de componentes reutilizáveis.',
                                        'Responsabilidade pela implementação e evolução do frontend durante a migração.'
                                    ],

                                    technologies: [
                                        'Vue.js 2',
                                        'Vue CLI',
                                        'Vue Router',
                                        'Vuex',
                                        'JavaScript',
                                        'BootstrapVue',
                                        'Bootstrap 4.6'
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'wordpress',
                            title: 'Desenvolvedor WordPress',
                            period: '2022 - 2023', // Preencher com as datas corretas

                            description:
                                'Atuação no desenvolvimento e manutenção do ambiente WordPress institucional, após transição interna da equipe de Infraestrutura para Desenvolvimento.',

                            responsibilities: [
                                'Criação, atualização e manutenção de páginas institucionais.',
                                'Implementação e atualização de banners utilizando Slider Revolution.',
                                'Verificação e acompanhamento de plugins, temas e templates.',
                                'Atualização dos calendários de simulados e vestibulares.',
                                'Aplicação de boas práticas de HTML semântico e CSS.',
                                'Upload de arquivos na AWS para utilização pelo frontend.'
                            ],

                            technologies: [
                                'WordPress',
                                'HTML',
                                'CSS',
                                'Slider Revolution',
                                'AWS'
                            ]
                        }
                    ]
                }
            ],
        }
    },
}
</script>
