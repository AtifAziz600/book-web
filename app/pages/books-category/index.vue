<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const baseURL = config.public.apiBase;
const {$api} = useNuxtApp();

const {data: categories, error, status} = await useAsyncData('category', () => $api('/frontend/v1/category'));
</script>

<template>
    <section class="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div class="container mx-auto px-8 py-12">
            <h1 class="text-3xl text-center mb-16 uppercase font-bold text-gray-800">
                আমাদের প্রকাশিত পাঠ্যপুস্তক সমূহ
            </h1>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6">
                <NuxtLink v-for="category in categories" :key="category.id" :to="`/category/${category.slug}`" class="text-center bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition-all duration-300">
                    <div
                        class="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-sm mb-4 grayscale hover:grayscale-0 transition-all duration-300">
                        <img class="w-full h-full object-cover rounded-full" :src="`${baseURL}${category.icon}`" :alt="category.name">
                    </div>
                    <h2 class="text-lg font-semibold text-gray-800 mb-3">{{ category.name }}</h2>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>