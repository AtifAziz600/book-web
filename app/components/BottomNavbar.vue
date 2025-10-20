<template>
    <div class="lg:hidden sticky bottom-0 left-0 right-0 bg-[#800000] text-white z-50 shadow-lg">
        <div class="flex justify-around items-center h-16">
            <NuxtLink to="/" class="flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
                <Icon name="mdi:home-outline" class="text-2xl mb-1" />
                <span class="text-xs">হোম</span>
            </NuxtLink>

            <button @click="isSidebarOpen = true" class="flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
                <Icon name="heroicons:bars-3" class="text-2xl mb-1" />
                <span class="text-xs">ক্যাটাগরি</span>
            </button>

            <NuxtLink to="/order/cart" class="flex flex-col items-center justify-center text-center transition-transform hover:scale-105 relative">
                <Icon name="heroicons:shopping-bag" class="text-2xl mb-1" />
                <span class="text-xs">কার্ট</span>
                <span v-if="cartItemsCount > 0" class="absolute -top-1 -right-1 bg-white text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {{ cartItemsCount }}
                </span>
            </NuxtLink>

            <NuxtLink to="/login" class="flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
                <Icon name="heroicons:user" class="text-2xl mb-1" />
                <span class="text-xs">লগইন</span>
            </NuxtLink>
        </div>

        <div v-if="isSidebarOpen"
            class="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 z-40"
            @click="isSidebarOpen = false"></div>
        <div class="fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out"
            :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'">
            <div class="flex justify-between items-center p-4 border-b border-gray-200 text-gray-800">
                <div class="flex items-center gap-2">
                    <Icon name="heroicons:bars-3" class="text-2xl" />
                    <h2 class="text-lg font-bold">ক্যাটাগরি</h2>
                </div>
                <button @click="isSidebarOpen = false" class="p-1 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors">
                    <Icon name="heroicons:x-mark" class="text-xl" />
                </button>
            </div>

            <div class="overflow-y-auto h-full pb-20">
                <div class="p-2">
                    <h3 class="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">ক্যাটাগরি পাঠ্যপুস্তক সমূহ</h3>
                    <nav class="space-y-1">
                        <NuxtLink 
                        v-for="book in data?.all_categories" :key="book.id"
                            to="/books-category/singlebookcategory" 
                            class="flex items-center py-3 px-4 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all group"
                            @click="isSidebarOpen = false"
                        >
                            <img class="w-8 h-8 text-xl mr-3 object-cover rounded-full" :src="`${baseURL}${book.icon}`" :alt="data?.name">
                            <span class="font-medium">{{ book.name }}</span>
                        </NuxtLink>
                    </nav>
                </div>

                <div class="mt-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 mx-3 rounded-lg border border-red-100">
                    <h2 class="text-center text-xl text-gray-800">All Rights Reserved by</h2>
                    <h2 class="text-center text-xl text-red-700">সালসাবীল পাবলিকেশন্স</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const isSidebarOpen = ref(false)
const cartItemsCount = ref(0) 

const categories = ref([])

const config = useRuntimeConfig()
const baseURL = config.public.apiBase
const { $api } = useNuxtApp()
const {data, error, status, refresh} = useAsyncData('category ', () => $api('/top-one-ir'));

const handleEscape = (e) => {
    if (e.key === 'Escape') {
        isSidebarOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.fixed {
    transition: all 0.3s ease-in-out;
}

.z-50 {
    z-index: 50;
}

.overflow-y-auto::-webkit-scrollbar {
    width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
    background: #e5e5e5;
    border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #d4d4d4;
}
</style>