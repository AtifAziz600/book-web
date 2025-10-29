<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const menuItems = ref([
  { name: "হোম", link: "/", type: "link" },
  { name: "সিলেবাস ও প্রশ্নপত্র", type: "dropdown" },
  { name: "অর্ডার ফর্ম", link: "/order-form", type: "link" },
  { name: "ব্লগ", link: "/blog", type: "link" },
  { name: "যোগাযোগ", link: "/contact-us", type: "link" },
])

const config = useRuntimeConfig()
const baseURL = config.public.apiBase
const { $api } = useNuxtApp()

const { data: pageData } = await useAsyncData("page", () => $api("/frontend/v1/page"))
const { data: categories } = await useAsyncData("category", () => $api('/frontend/v1/category'))
</script>

<template>
  <nav class="bg-[#800000] w-full">
    <div class="flex items-center justify-center text-white text-md font-normal">
      <NuxtLink
        to="/"
        class="py-4 px-6 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase"
        active-class="font-bold text-red-300 border-b-2 border-red-600 bg-[#A82229]"
      >
        হোম
      </NuxtLink>
      <div v-for="page in pageData?.slice(4, 5)" :key="page.id">
        <NuxtLink
          :to="`/page/${page.slug}`"
          class="py-4 px-6 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase"
          active-class="font-bold text-red-300 border-b-2 border-red-600 bg-[#A82229]"
        >
          {{ page.title }}
        </NuxtLink>
      </div>

      <NuxtLink
        to="/books-category"
        class="py-4 px-6 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase"
        active-class="font-bold text-red-300 border-b-2 border-red-600 bg-[#A82229]"
      >
        পাঠ্যপুস্তক
      </NuxtLink>

      <div class="relative group">
        <button
          class="py-4 px-6 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase flex items-center cursor-pointer"
        >
          সিলেবাস ও প্রশ্নপত্র
          <Icon name="mdi:chevron-down" class="w-5 h-5 ml-1" />
        </button>
        <div
          class="absolute left-0 mt-0 w-56 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border"
        >
          <div class="py-1">
            <NuxtLink
              v-for="cat in categories"
              :key="cat.id"
              :to="`/syllabus/${cat.slug}`"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              active-class="bg-gray-100 font-semibold"
            >
              {{ cat.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <NuxtLink
        v-for="item in menuItems.filter(i => i.type === 'link' && i.name !== 'হোম')"
        :key="item.name"
        :to="item.link"
        class="py-4 px-6 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase"
        active-class="font-bold text-red-300 border-b-2 border-red-600 bg-[#A82229]"
      >
        {{ item.name }}
      </NuxtLink>
      <div v-for="page in pageData?.slice(0, 2)" :key="page.id">
        <NuxtLink
          :to="`/page/${page.slug}`"
          class="py-4 px-6 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase"
          active-class="font-bold text-red-300 border-b-2 border-red-600 bg-[#A82229]"
        >
          {{ page.title }}
        </NuxtLink>
      </div>

    </div>
  </nav>
</template>

<style scoped>
.group:hover .group-hover\:visible {
  visibility: visible;
}
.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}
</style>
