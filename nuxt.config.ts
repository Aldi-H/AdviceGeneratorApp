// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Advice Generator",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-32x32.png",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },

  css: ["@/assets/css/tailwind.css"],
});
