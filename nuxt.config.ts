// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    'vuetify-nuxt-module',
    '@nuxt/image',
    '@nuxtjs/eslint-module'
  ],
  fonts: {
    families: [
      {
        name: 'IBM Plex Sans',
        provider: 'google',
        weights: [300, 400, 500, 600, 700], // Only include weights you'll use
        styles: ['normal', 'italic']
      }
    ]
  },
  css: [
    './assets/css/globals.scss',
    './assets/css/main.scss',
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
              accent: '#0855ff',
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
