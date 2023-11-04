//nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "bootstrap-vue/dist/bootstrap-vue.css",
  ],
  devServerHandlers: [],
  modules: ["@bootstrap-vue-next/nuxt", "nuxt-bootstrap-icons"],
});
