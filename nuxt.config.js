export default ({ dev = false } = {}) => ({
  // Evita que uma compilação de produção sobrescreva o servidor de desenvolvimento.
  buildDir: dev ? '.nuxt-dev' : '.nuxt',
  server: {
    port: 8080,
    host: "localhost",
  },
  ssr: true,
  target: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "theme-color", content: "#111827" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/inter-latin.woff2', crossorigin: 'anonymous' },
      { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/space-grotesk-latin.woff2', crossorigin: 'anonymous' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico?v=bn-circular-1' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=bn-circular-1' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=bn-circular-1' },
      { rel: 'icon', type: 'image/svg+xml', sizes: 'any', href: '/favicon.svg?v=bn-circular-1' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=bn-circular-1' }
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/typography.css', 'animate.css/animate.min.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/iconify.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/tailwindcss"],

  /*
   ** Tailwind CSS configuration
   */
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {},
    viewer: true,
  },

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/dotenv'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
  },
});
