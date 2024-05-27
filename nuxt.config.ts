import extendRoutes from './modules/extend-routes'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@pinia/nuxt', extendRoutes],
  router: {
    
  },
  
})