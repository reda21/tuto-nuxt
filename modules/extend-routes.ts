// modules/extend-routes.ts
import { defineNuxtModule } from '@nuxt/kit'
import { resolve } from 'path'

export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.hook('pages:extend', (routes) => {
      console.info("extendRoutes", routes);
      routes.push({
        name: 'custom-route',
        path: '/custom-route',
        file: resolve(__dirname, '../pages/test.vue') // Updated path resolution
      });
    })
  }
})
