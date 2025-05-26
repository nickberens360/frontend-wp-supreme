// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    'vuetify-nuxt-module',
    '@nuxt/image',
    '@nuxtjs/eslint-module'
  ],
  css: [
    './assets/css/globals.scss',
    '@mdi/font/css/materialdesignicons.css'
  ],
  vuetify: {
    moduleOptions: {
      disableVuetifyStyles: true,
      // styles: {
      //   configFile: './assets/css/components.scss'
      // },
    },
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi',
      },
      defaults: {
        VBtn: {
          rounded: 'pill',
        },
      },
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            colors: {
              secondary: '#011853',
              primary: '#bddc03',
            },
          },
        },
      },
    },
  },
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
      wordpressUrl: process.env.NUXT_PUBLIC_WORDPRESS_URL || 'https://supremebackdev.wpenginepowered.com/wp-json/wp/v2',
      frontendSiteUrl: process.env.NUXT_PUBLIC_FRONTEND_SITE_URL || 'http://localhost:3000'
    },
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
