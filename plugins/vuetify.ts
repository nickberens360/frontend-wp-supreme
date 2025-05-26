// plugins/vuetify.ts
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import "@/assets/styles/settings.scss"
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
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
            secondary: '#011853',   // Deep blue from the gradient
            primary: '#bddc03', // Green from the gradient
          },
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
