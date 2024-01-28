// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },

  css: ["@/assets/css/tailwind.css"],
});
