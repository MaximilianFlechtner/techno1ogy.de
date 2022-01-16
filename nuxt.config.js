import shrinkRay from 'shrink-ray-current'

export default {
  render: {
    compressor: shrinkRay()
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Maximilian Flechtner',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
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
    '@nuxtjs/pwa',
  ],

  fontawesome: {
    icons: {
      solid: ['faWindowMaximize', 'faMobile', 'faCameraRetro'],
      brands: ['faInstagram'],
    },
  },

  pwa: {
    manifest: {
      name: 'Maximilian Flechtner',
      lang: 'de',
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-ssr-cache',
    ['nuxt-compress', {
      brotli: {
        threshold: 8192,
      },
    }],
  ],


  cache: {
    useHostPrefix: false,
    pages: [
      '/',
    ],
    store: {
      type: 'memory',
      max: 100,
      ttl: 60,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
