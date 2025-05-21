// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      wordpressUrl: 'http://rest-api-backend.local/wp-json/wp/v2',
      frontendSiteUrl: 'http://localhost:3000'
    },
  }
})
