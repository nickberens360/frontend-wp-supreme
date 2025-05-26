// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/eslint-module'
  ],
  eslint: {
    lintOnStart: false,
  },
  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpg', 'png', 'svg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  runtimeConfig: {
    public: {
      wordpressUrl: 'http://rest-api-backend.local/wp-json/wp/v2',
      frontendSiteUrl: 'http://localhost:3000'
    },
  },
  css: [
      '@/assets/styles/settings.scss',
      'vuetify/styles',
      '@mdi/font/css/materialdesignicons.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
