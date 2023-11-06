import Icons from "unplugin-icons/vite";

//nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [Icons({})],
  },
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "bootstrap-vue/dist/bootstrap-vue.css",
  ],
  bootstrapVueNext: {
    composables: true,
  },
  modules: ["@bootstrap-vue-next/nuxt"],
});
