<template>
    <section id="experiencia" class="bg-gray-900 px-6 py-16 sm:px-8 md:py-20 lg:px-16"
        aria-labelledby="experiencia-title">
        <div class="mx-auto max-w-6xl">
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
</template>

<script>
export default {
    data() {
        return {
            experiences: [
                {
                    id: 'grupo-cpv',
                    company: 'Grupo CPV de Ensino',
                    position: 'Desenvolvedor Frontend',
                    period: 'Mar/2021 — Atual',
                    description: 'Atuação no desenvolvimento frontend, contribuindo para a evolução e manutenção de interfaces web e para a implementação de funcionalidades dos produtos da empresa.',
                    // Mantenha as funções da mais recente para a mais antiga.
                    // Substitua os exemplos abaixo pelos cargos e períodos reais.
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
                            description: 'Adicione aqui o título e uma descrição da função anterior. Remova este exemplo se não se aplicar à sua trajetória.'
                        }
                    ]
                }
            ]
        }
    },
}
</script>

<style scoped></style>