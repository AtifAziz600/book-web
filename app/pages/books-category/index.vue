<script setup>
const config = useRuntimeConfig();
const baseURL = config.public.apiBase;
const {$api} = useNuxtApp();
const {data, error, status, refresh} = useAsyncData('category ', () => $api('/top-one-ir'));
</script>

<template>
    <section class="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div class="container mx-auto px-8 py-12">
            <h1 class="text-3xl text-center mb-16 uppercase font-bold text-gray-800">
                আমাদের প্রকাশিত পাঠ্যপুস্তক সমূহ
            </h1>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6">
                <NuxtLink v-for="book in data?.all_categories" :key="book.id" to="/books-category/singlebookcategory" class="block">
                    <div
                        class="w-32 h-32 bg-white rounded-full shadow-md flex justify-center items-center grayscale hover:grayscale-0 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                        <img class="w-full h-full object-cover rounded-full" :src="`${baseURL}${book.icon}`" :alt="data?.title">
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>