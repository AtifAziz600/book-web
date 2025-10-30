<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useRouter } from 'vue-router'
const store = useAuthStore()
const isLoggedIn = computed(() => store.loggedIn)
const user = computed(() => store.user)
const config = useRuntimeConfig()
const baseURL = config.public.apiBase
const { $api } = useNuxtApp()
const { data, pending, error, refresh } = await useAsyncData('settings', () => $api('/top-one-ir'))
const mediaLogoName = computed(() => data.value?.media_logo_name)
const isDropdownOpen = ref(false)
const toggleDropdown = () => (isDropdownOpen.value = !isDropdownOpen.value)
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
const logout = async () => {
    await store.logout()
    isDropdownOpen.value = false
}
</script>
<template>
    <header class="hidden lg:block">
        <nav class="relative">
            <div class=" ">
                <header class="bg-white shadow-lg py-3 sticky top-0 z-50">
                    <div class="container mx-auto px-4">
                        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                            <NuxtLink href="/" class="flex items-center flex-shrink-0">
                                <img :src="data?.logo_light" class="h-12 w-auto rounded-2xl" alt="Brand Logo" />
                                <span class="ml-2 text-xl font-extrabold text-gray-800">
                                    {{ mediaLogoName }}
                                </span>
                            </NuxtLink>
                            <div class="flex-1 max-w-xl w-full order-3 md:order-none">
                                <div class="flex shadow-sm">
                                    <input v-model="searchQuery" @keydown.enter="performSearch" type="text"
                                        placeholder="আপনার বই অনুসন্ধান করুন..."
                                        class="flex-1 px-4 py-2.5 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500">
                                    <button @click="performSearch"
                                        class="bg-[#800000] hover:bg-red-700 text-white px-5 py-2.5 rounded-r-lg transition duration-200 flex items-center">
                                        <Icon name="heroicons:magnifying-glass" class="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <div class="flex items-center space-x-6">
                                <div v-if="isLoggedIn" class="relative">
                                    <div @click="toggleDropdown"
                                        class="flex flex-col items-center cursor-pointer group p-1.5 hover:bg-gray-100 rounded-lg transition duration-200">
                                        <Icon name="heroicons:user-circle"
                                            class="w-5 h-5 text-gray-700 group-hover:text-red-600" />
                                        <span class="text-xs mt-1 text-gray-600">{{ user.name }}</span>
                                    </div>
                                    <div v-if="isDropdownOpen"
                                        class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                                        <a @click.prevent="logout" href="#"
                                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">লগআউট</a>
                                    </div>
                                </div>
                                <NuxtLink v-else to="/login">
                                    <div
                                        class="flex flex-col items-center cursor-pointer group p-1.5 hover:bg-gray-100 rounded-lg transition duration-200">
                                        <Icon name="heroicons:user"
                                            class="w-5 h-5 text-gray-700 group-hover:text-red-600" />
                                        <span class="text-xs mt-1 text-gray-600">লগইন</span>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </header>
                <NavBar />
            </div>
        </nav>
    </header>
</template>
<style scoped></style>
