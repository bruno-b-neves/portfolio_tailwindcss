<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <section id="certificacoes" ref="pageContent" class="relative overflow-hidden px-6 py-16 sm:px-8 md:py-24 lg:px-16" aria-labelledby="certificacoes-title">
      <div class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500 opacity-10 blur-3xl" aria-hidden="true" />
      <div class="relative mx-auto max-w-6xl">
        <header class="mb-10 max-w-3xl">
          <p class="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs text-gray-300"><span class="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />Aprendizado contínuo</p>
          <h1 id="certificacoes-title" class="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">Formação e <span class="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">certificações.</span></h1>
          <p class="mt-5 max-w-2xl leading-relaxed text-gray-400">Minha base em desenvolvimento Frontend, conectando estudos de interfaces, programação e design a projetos e à experiência profissional.</p>
        </header>

        <section aria-labelledby="academic-title" class="mb-12 rounded-2xl border border-gray-700 bg-gray-800 p-5 sm:p-6">
          <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div class="flex items-start gap-4">
              <div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gray-900 text-emerald-400"><Icon :icon="academic.icon" width="24" height="24" aria-hidden="true" /></div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-emerald-400">Graduação · Em andamento</p>
                <h2 id="academic-title" class="mt-2 text-lg font-semibold text-white">Ciência da Computação</h2>
                <p class="mt-1 text-sm text-gray-400">{{ academic.institution }} · {{ academic.period }}</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-x-5 gap-y-1">
              <NuxtLink to="/projetos/unip" class="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-blue-300 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">Ver projetos acadêmicos <Icon icon="material-symbols:arrow-forward-rounded" width="18" height="18" aria-hidden="true" /></NuxtLink>
              <button type="button" @click="openDetails(academic)" class="min-h-11 rounded-lg text-sm text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">Sobre a graduação</button>
            </div>
          </div>
        </section>

        <section aria-labelledby="featured-title">
          <p class="text-xs font-semibold uppercase tracking-wider text-emerald-400">Desenvolvimento Frontend</p>
          <h2 id="featured-title" class="mt-2 text-2xl font-bold text-white">Formações em destaque</h2>
          <p class="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">Conhecimentos que sustentam a construção de interfaces e a integração de aplicações web.</p>
          <div class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            <CertificationCard v-for="item in featuredCertifications" :key="item.id" :item="item" featured @details="openDetails" />
          </div>
        </section>

        <section aria-labelledby="complementary-title" class="mt-12 border-t border-gray-800 pt-10">
          <h2 id="complementary-title" class="text-2xl font-bold text-white">Conhecimentos complementares</h2>
          <p class="mt-3 text-sm leading-relaxed text-gray-400">Design de interfaces, desenvolvimento responsivo e fundamentos de backend.</p>
          <div class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <CertificationCard v-for="item in complementaryCertifications" :key="item.id" :item="item" @details="openDetails" />
          </div>
        </section>

        <section v-if="ongoingCertifications.length" aria-labelledby="ongoing-title" class="mt-12 border-t border-gray-800 pt-10">
          <h2 id="ongoing-title" class="text-2xl font-bold text-white">Estudos em andamento</h2>
          <p class="mt-3 text-sm leading-relaxed text-gray-400">Acompanhe os temas que estou estudando e os exercícios já publicados.</p>
          <div class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            <CertificationCard v-for="item in ongoingCertifications" :key="item.id" :item="item" @details="openDetails" />
          </div>
        </section>
        <div class="mt-12 flex flex-col gap-4 rounded-2xl border border-gray-700 bg-gray-800 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div><h2 class="font-semibold text-white">Conheça minha trajetória profissional</h2><p class="mt-2 text-sm text-gray-400">Experiências, formação e minha atuação como desenvolvedor Frontend.</p></div>
          <NuxtLink to="/sobre" class="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-blue-300 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">Ver trajetória <Icon icon="material-symbols:arrow-forward-rounded" width="18" height="18" aria-hidden="true" /></NuxtLink>
        </div>
      </div>
    </section>
    <CertificationDetailsModal :item="selectedItem" @close="closeDetails" />
  </div>
</template>
<script>
import CertificationCard from '~/components/Certificacoes/CertificationCard.vue'
import CertificationDetailsModal from '~/components/Certificacoes/CertificationDetailsModal.vue'
import { academic, certifications } from '~/data/certifications'

export default {
  name: 'CertificacoesPage',
  components: { CertificationCard, CertificationDetailsModal },
  data() { return { academic, certifications, selectedItem: null } },
  computed: {
    featuredCertifications() { return this.certifications.filter(item => item.featured && item.status !== 'Em andamento') },
    complementaryCertifications() { return this.certifications.filter(item => !item.featured && item.status !== 'Em andamento') },
    ongoingCertifications() { return this.certifications.filter(item => item.status === 'Em andamento') }
  },
  watch: {
    selectedItem(item) {
      this.$nextTick(() => {
        if (!this.$refs.pageContent) return
        this.$refs.pageContent.inert = Boolean(item)
        if (item) this.$refs.pageContent.setAttribute('aria-hidden', 'true')
        else this.$refs.pageContent.removeAttribute('aria-hidden')
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
      title: 'Formação e Certificações | Bruno Neves — Desenvolvedor Frontend',
      meta: [{ hid: 'description', name: 'description', content: 'Formação de Bruno Neves em Vue.js, desenvolvimento web, UI Design e backend. Explore os conhecimentos, projetos relacionados e a graduação em Ciência da Computação.' }]
    }
  }
}
</script>
