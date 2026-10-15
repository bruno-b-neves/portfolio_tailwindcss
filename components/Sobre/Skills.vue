<template>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <article v-for="skill in skills" :key="skill.name"
            class="rounded-xl border border-gray-800 bg-gray-800 p-5 transition duration-200 hover:-translate-y-1 hover:border-gray-600">
            <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gray-700 text-emerald-400">
                <Icon :icon="skill.icon" width="24" height="24" />
            </div>
            <h3 class="font-semibold text-white">{{ skill.name }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-400">{{ skill.description }}</p>
        </article>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
            ],
        }
    }
}
</script>