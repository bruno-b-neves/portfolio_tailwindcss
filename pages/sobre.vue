<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <section id="sobre" class="relative overflow-hidden px-6 py-16 sm:px-8 md:py-24 lg:px-16" aria-labelledby="sobre-title">
      <div class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500 opacity-10 blur-3xl" aria-hidden="true" />
      <div class="relative mx-auto max-w-6xl">
        <header class="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div class="lg:col-span-8">
            <p class="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs text-gray-300"><span class="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />Bruno Neves · Sobre mim</p>
            <h1 id="sobre-title" class="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">Desenvolvedor Frontend com foco em <span class="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Vue.js e Nuxt.</span></h1>
            <p class="mt-5 max-w-2xl leading-relaxed text-gray-300">Sou responsável pelo frontend institucional do CPV Grupo Educacional. Minha atuação reúne construção de interfaces, manutenção de aplicações e modernização da arquitetura web.</p>
            <p class="mt-4 max-w-2xl leading-relaxed text-gray-400">Da migração do WordPress para Vue 2 à evolução para Vue 3 e Nuxt, trabalho com componentes reutilizáveis, renderização, SEO técnico e interfaces responsivas.</p>
            <div class="mt-6 flex flex-wrap gap-3">
              <a href="#experiencia" class="inline-flex min-h-11 items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">Conheça minha experiência <Icon icon="material-symbols:arrow-downward-rounded" width="18" height="18" aria-hidden="true" /></a>
              <NuxtLink to="/projetos" class="inline-flex min-h-11 items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm font-semibold text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400">Explorar projetos <Icon icon="material-symbols:arrow-forward-rounded" width="18" height="18" aria-hidden="true" /></NuxtLink>
            </div>
          </div>
          <aside class="rounded-2xl border border-gray-700 bg-gray-800 p-5 sm:p-6 lg:col-span-4" aria-labelledby="profile-summary-title">
            <Icon icon="ph:code-bold" width="28" height="28" class="text-emerald-400" aria-hidden="true" />
            <p class="mt-4 text-xs font-semibold uppercase tracking-wide text-emerald-400">Evolução do frontend</p>
            <h2 id="profile-summary-title" class="mt-2 text-xl font-semibold text-white">Duas migrações no CPV</h2>
            <ol class="mt-5 space-y-4">
              <li class="border-l-2 border-gray-600 pl-3"><p class="text-sm font-medium text-white">WordPress → Vue.js 2</p><p class="mt-1 text-xs leading-relaxed text-gray-400">Componentes, navegação e gerenciamento de estado.</p></li>
              <li class="border-l-2 border-emerald-400 pl-3"><p class="text-sm font-medium text-white">Vue.js 2 → Vue.js 3 e Nuxt</p><p class="mt-1 text-xs leading-relaxed text-gray-400">SSR, SSG e SEO técnico na evolução da aplicação.</p></li>
            </ol>
          </aside>
        </header>

        <nav aria-label="Seções da página Sobre" class="mt-8 flex flex-wrap gap-x-6 gap-y-1 border-b border-gray-800 pb-6 text-sm text-gray-400">
          <a href="#experiencia" class="inline-flex min-h-11 items-center rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">Experiência</a>
          <a href="#habilidades" class="inline-flex min-h-11 items-center rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">Competências</a>
          <a href="#formacao" class="inline-flex min-h-11 items-center rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">Formação</a>
        </nav>

        <section id="experiencia" class="mt-10 scroll-mt-24" aria-labelledby="experiencia-title">
          <p class="text-xs font-semibold uppercase tracking-wider text-emerald-400">Trajetória profissional</p>
          <h2 id="experiencia-title" class="mt-2 text-2xl font-bold text-white sm:text-3xl">Experiência e entregas</h2>
          <p class="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">Minha evolução da infraestrutura ao desenvolvimento web e as responsabilidades assumidas em cada etapa.</p>
          <ProfileExperience class="mt-6" />
        </section>

        <section id="habilidades" class="mt-12 scroll-mt-24 border-t border-gray-800 pt-10" aria-labelledby="habilidades-title">
          <p class="text-xs font-semibold uppercase tracking-wider text-emerald-400">Conhecimentos técnicos</p>
          <h2 id="habilidades-title" class="mt-2 text-2xl font-bold text-white sm:text-3xl">Como aplico as tecnologias</h2>
          <p class="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">Competências organizadas pelas necessidades de uma aplicação, da interface à renderização.</p>
          <ProfileSkills class="mt-6" />
        </section>

        <section id="formacao" class="mt-12 scroll-mt-24 border-t border-gray-800 pt-10" aria-labelledby="formacao-title">
          <h2 id="formacao-title" class="text-2xl font-bold text-white sm:text-3xl">Formação e aprendizado contínuo</h2>
          <p class="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">Fundamentos acadêmicos e estudos que acompanham minha atuação em desenvolvimento.</p>
          <ProfileEducation class="mt-6" />
        </section>

        <section class="mt-12 flex flex-col gap-5 rounded-2xl border border-gray-700 bg-gray-800 p-5 sm:p-6 md:flex-row md:items-center md:justify-between" aria-labelledby="contact-title">
          <div><h2 id="contact-title" class="text-lg font-semibold text-white">Vamos conversar sobre desenvolvimento Frontend?</h2><p class="mt-2 text-sm leading-relaxed text-gray-400">Entre em contato para conhecer melhor minha experiência ou conversar sobre uma oportunidade.</p></div>
          <button type="button" @click="isContactOpen = true" class="inline-flex min-h-11 flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"><Icon icon="material-symbols:mail-outline-rounded" width="18" height="18" aria-hidden="true" />Entre em contato</button>
        </section>
      </div>
    </section>
    <ContactModal :is-open="isContactOpen" @close="isContactOpen = false" />
  </div>
</template>
<script>
import ContactModal from '~/components/ContactModal.vue'
import ProfileExperience from '~/components/Sobre/Experience.vue'
import ProfileSkills from '~/components/Sobre/Skills.vue'
import ProfileEducation from '~/components/Sobre/Education.vue'

export default {
  name: 'SobrePage',
  components: { ContactModal, ProfileExperience, ProfileSkills, ProfileEducation },
  data() { return { isContactOpen: false } },
  head() {
    return {
      title: 'Sobre | Bruno Neves — Desenvolvedor Frontend',
      meta: [{ hid: 'description', name: 'description', content: 'Conheça Bruno Neves, desenvolvedor Frontend com foco em Vue.js e Nuxt. Experiência no CPV em migrações de frontend, componentes, renderização e SEO técnico.' }]
    }
  }
}
</script>
