export default defineNuxtPlugin({
    name: 'my-plugin',
    enforce: 'pre', // or 'post'
    async setup (nuxtApp) {
        console.info('hello plugins setup');
      // this is the equivalent of a normal functional plugin
    },
    hooks: {
      // You can directly register Nuxt app runtime hooks here
      'app:created'() {
        const nuxtApp = useNuxtApp()
        // do something in the hook
        console.info('hello plugins app:created');
        console.warn("tester")
      }
    },
    env: {
      // Set this value to `false` if you don't want the plugin to run when rendering server-only or island components.
      islands: true
    }
  })
  