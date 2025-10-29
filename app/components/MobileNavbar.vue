<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const config = useRuntimeConfig()
const { $api } = useNuxtApp()
const dropdownOpen = ref(false)
const { data: pages } = await useAsyncData("page", () => $api("/frontend/v1/page"))
const { data, pending, error, refresh } = await useAsyncData('settings', () => $api('/top-one-ir'))
const { data: categories } = await useAsyncData("category", () => $api("/frontend/v1/category"))
const searchQuery = ref('')
const router = useRouter()


const performSearch = () => {
  if (!searchQuery.value.trim()) {
    navigateTo("/products/AllBooks");
    return;
  }
  navigateTo({
    path: "/products/AllBooks",
    query: { search: searchQuery.value.trim() },
  });

  searchQuery.value = "";
};
const menuItems = ref([
  { name: "হোম", link: "/", type: "link" },
  { name: "আমাদের সম্পর্কে", link: "/about", type: "link" },
  { name: "অর্ডার ফর্ম", link: "/order-form", type: "link" },
  { name: "যোগাযোগ", link: "/contact-us", type: "link" },
])
</script>

<template>
  <div class="lg:hidden z-50">
    <header class="bg-white shadow-lg py-3 sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
          <a href="/" class="flex items-center flex-shrink-0">
            <img :src="data?.logo_light" class="h-12 w-12 rounded-full" alt="Brand Logo">
          </a>
          <div class="flex-1 flex justify-center mx-4">
            <div class="flex shadow-sm">
              <input v-model="searchQuery" @keydown.enter="performSearch" type="text"
                placeholder="পণ্য, বিভাগ, অথবা ব্র্যান্ড অনুসন্ধান করুন..."
                class="flex-1 px-6 py-2.5 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500">
              <button @click="performSearch"
                class="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-r-lg transition duration-200 flex items-center">
                <Icon name="heroicons:magnifying-glass" class="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </header>

    <div class="md:hidden bg-white py-3 overflow-x-auto border-b sticky top-[64px] z-50">
      <div class="flex items-center space-x-3 px-4">

        <template v-for="item in menuItems" :key="item?.name">
          <NuxtLink v-if="item?.type === 'link'" :to="item.link"
            class="flex-shrink-0 py-2 px-4 bg-white border border-gray-300 text-gray-800 rounded-full font-medium"
            exact-active-class="!bg-[#ED1B24] !text-white !border-none">
            {{ item?.name }}
          </NuxtLink>

          <div v-if="item?.type === 'dropdown'" class="relative flex-shrink-0">
            <button
              class="py-2 px-4 bg-white border border-gray-300 text-gray-800 rounded-full font-medium flex items-center"
              @click="dropdownOpen = !dropdownOpen">
              {{ item?.name }}
              <Icon name="mdi:chevron-down" class="w-5 h-5 ml-1" />
            </button>

            <div v-if="dropdownOpen" class="absolute top-full left-0 w-56 bg-white shadow-lg border z-50">
              <NuxtLink v-for="cat in categories" :key="cat?.id" :to="`/syllabus/${cat?.slug}`"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {{ cat?.name }}
              </NuxtLink>
            </div>
          </div>
        </template>

        <NuxtLink v-for="page in pages?.slice(0, 2)" :key="page?.id" :to="`/page/${page?.slug}`"
          class="flex-shrink-0 py-2 px-4 bg-white border border-gray-300 text-gray-800 rounded-full font-medium"
          exact-active-class="!bg-[#ED1B24] !text-white !border-none">
          {{ page?.title }}
        </NuxtLink>

      </div>
    </div>
  </div>
</template>
