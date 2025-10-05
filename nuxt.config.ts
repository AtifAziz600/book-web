import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
css: ['~/assets/css/main.css'],
  vite: {
  plugins: [tailwindcss()],
},

  modules: ["nuxt-swiper", "@nuxt/icon"],
  
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