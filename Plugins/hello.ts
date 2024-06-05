export default defineNuxtPlugin({
  name: "my-plugin",
  enforce: "pre", // or 'post'
  async setup(nuxtApp) {
    console.info("hello plugins setup");
    // this is the equivalent of a normal functional plugin
  },
  hooks: {
    // You can directly register Nuxt app runtime hooks here
    "app:created"() {
      const nuxtApp = useNuxtApp();
      // do something in the hook
      logTime("hello plugins app:created")
    },
    "vue:setup"() {
      const nuxtApp = useNuxtApp();
      // do something in the hook
      logTime("hello plugins vue:setup")
    },
    "page:start"(){
      const nuxtApp = useNuxtApp();
      // do something in the hook
      logTime("hello plugins page:start")
    },
    "page:finish"(){
        const nuxtApp = useNuxtApp();
        // do something in the hook
        logTime("hello plugins page:start")
      },
  },
  env: {
    // Set this value to `false` if you don't want the plugin to run when rendering server-only or island components.
    islands: true,
  },
});


const logTime = (msg: string) => {
    console.info(`${msg} at ${new Date().toISOString()}`)
}