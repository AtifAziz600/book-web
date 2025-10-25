import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
css: ['~/assets/css/main.css'],
  vite: {
  plugins: [tailwindcss()],
},

  modules: ["nuxt-swiper", "@nuxt/ui" ,"@nuxt/icon", "@pinia/nuxt"],
    runtimeConfig: {
    public: {
      apiUrl: 'http://localhost:8000/api',
      apiBase: process.env.APP_URL || 'http://localhost:8000'
      // apiUrl: 'https://admin.salsabilpublications.com/api',
      // apiBase: process.env.APP_URL || 'https://admin.salsabilpublications.com'
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali&display=swap',
        },
      ],
    },
  },
})