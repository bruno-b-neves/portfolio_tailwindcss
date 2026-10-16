module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // ou 'media' ou 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        emerald: {
          50: 'oklch(97.9% 0.021 166.113)',
          100: 'oklch(95% 0.052 163.051)',
          200: 'oklch(90.5% 0.093 164.15)',
          300: 'oklch(84.5% 0.143 164.978)',
          400: 'oklch(76.5% 0.177 163.223)',
          500: 'oklch(69.6% 0.17 162.48)',
          600: 'oklch(59.6% 0.145 163.225)',
          700: 'oklch(50.8% 0.118 165.612)',
          800: 'oklch(43.2% 0.095 166.913)',
          900: 'oklch(37.8% 0.077 168.94)',
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: ['focus-within'],
      gradientColorStops: ['focus-within'],
      ringWidth: ['focus-within'],
      ringColor: ['focus-within'],
    },
  },
  plugins: [],
}