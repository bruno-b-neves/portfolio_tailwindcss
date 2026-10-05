<template>
<header class="w-full py-4 px-4 md:px-8 border-b border-gray-600 sticky top-0 z-50 bg-gray-800" :class="isScroll ? 'shadow-lg' : ''">
  <div class="flex flex-row items-center justify-between gap-4 container">
    
    <a href="#">Nome do Site</a>

    <!-- Menu de Navegação / Links -->
    <nav>
      <ul class="flex flex-row items-center gap-6 p-0 m-0 list-none text-stone-400">
        <li>
          <a href="#sobre" class="transition-colors duration-200 hover:text-stone-100">Link 1</a>
        </li>
        <li>
          <a href="#projetos" class="transition-colors duration-200 hover:text-stone-100">Link 2</a>
        </li>
        <li>
          <a href="#experiencia" class="transition-colors duration-200 hover:text-stone-100">Link 3</a>
        </li>
        <li>
          <a href="#contato" class="transition-colors duration-200 hover:text-stone-100">Link 4</a>
        </li>
      </ul>
    </nav>

    <!-- Menu DarkMode / Language Selector -->
    <div class="flex flex-row items-center justify-end gap-1 text-sm">
      
      <!-- Botão/Switch de Dark Mode -->
      <span 
        @click="toggleDarkMode" 
        type="button"
        class="flex items-center justify-center p-1.5 rounded-full text-stone-300 hover:text-stone-100 hover:bg-stone-800 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-stone-500"
        :title="isDark ? 'Alternar para Modo Claro' : 'Alternar para Modo Escuro'"
      >
        <Icon
          :icon="isDark ? 'material-symbols:dark-mode-outline-rounded' : 'material-symbols:light-mode-outline-rounded'"
          width="18" 
          height="18" 
        />
      </span>

      <!-- Divisor sutil entre DarkMode e Idioma -->
      <span class="w-px h-4 bg-stone-700"></span>

      <!-- Seletor de Idioma -->
      <div class="flex items-center gap-1.5 text-sm text-stone-400 select-none">
        <button
          type="button"
          @click="currentLang = 'pt'"
          class="cursor-pointer transition-colors duration-200 hover:text-stone-100 focus:outline-none"
          :class="{ 'font-bold text-stone-100 underline underline-offset-4': currentLang === 'pt' }"
        >
          PT
        </button>
        <span class="text-stone-600">/</span>
        <button
          type="button"
          @click="currentLang = 'en'"
          class="cursor-pointer transition-colors duration-200 hover:text-stone-100 focus:outline-none"
          :class="{ 'font-bold text-stone-100 underline underline-offset-4': currentLang === 'en' }"
        >
          EN
        </button>
      </div>

    </div>
  </div>
</header>
</template>

<script>
export default {
    name: 'HeaderControls',
    data() {
        return {
            isDark: true,
            currentLang: 'pt'
        }
    },
    mounted() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.isDark = savedTheme === 'dark';
        }
        this.applyTheme();
    },
    methods: {
        toggleDarkMode() {
            this.isDark = !this.isDark;
            localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
            this.applyTheme();
        },
        applyTheme() {
            if (this.isDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    },
    watch: {
        isScroll(newValue) {
            if (newValue) {
                document.body.classList.add('scrolling');
            } else {
                document.body.classList.remove('scrolling');
            }
        }
    }
}
</script>

<style scoped></style>