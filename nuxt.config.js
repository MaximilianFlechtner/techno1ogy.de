export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Maximilian Flechtner',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Maximilian Flechtner Portfolio',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Maximilian Flechtner, Maximilian Flechtner Arendsee',
      },
      { hid: 'copyright', name: 'copyright', content: 'Maximilian Flechtner' },
      {
        hid: 'author',
        name: 'author',
        content: 'Maximilian Flechtner, flechtner@techno1ogy.de',
      },
      { hid: 'url', name: 'url', content: 'https://techno1ogy.de' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Maximilian Flechtner',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Maximilian Flechtner Portfolio',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://techno1ogy.de/me.jpeg',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://techno1ogy.de/',
      },
      {
        property: 'og:locale',
        content: 'de_DE',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: ['faWindowMaximize', 'faMobile', 'faCameraRetro'],
      brands: ['faInstagram'],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://techno1ogy.de/',
    gzip: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },
}
