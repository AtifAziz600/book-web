<script setup>
import { ref } from 'vue';
const books = [];
const loading = ref(true);
const config = useRuntimeConfig();
const baseURL = config.public.apiBase;
const {$api} = useNuxtApp();
const {data, error, status, refresh} = useAsyncData('all_products', () => $api('/top-one-ir'))

const addToCart = (book) => {
    console.log("Added to cart:", book.title);
};
</script>
<template>
    <section class="w-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-6">
        <div class="text-center mb-10">
            <div class="text-center mb-8">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">আমাদের প্রকাশিত বইসমূহ</h2>
                <div class="w-48 h-1 bg-red-500 mx-auto rounded-full"></div>
            </div>
        </div>
                <div class="container mx-auto px-3 relative z-10">
            <div class="max-w-7xl justify-center items-center">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    <BookCard v-for="data in data?.all_products" :key="data.id" :book="data" 
                        @add-to-cart="addToCart" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>