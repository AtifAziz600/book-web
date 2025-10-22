<script setup>
import { ref } from 'vue';
const books = ref([]);
const loading = ref(true);
const config = useRuntimeConfig();
const baseURL = config.public.apiBase;
const {$api} = useNuxtApp();
const {data, error, status, refresh} = useAsyncData('new_books', () => $api('/top-one-ir'));


// const toggleFavorite = (id) => {
//     const book = books.find(b => b.id === id);
//     if (book) book.isFavorite = !book.isFavorite;
// };

const addToCart = (book) => {
    console.log("Added to cart:", book.title);
};
</script>
<template>
    <section class="w-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-6">
        <div class="text-center mb-10">
            <div class="flex items-center justify-center gap-3 mb-4">
                <Icon name="heroicons:book-open" class="h-8 w-8 text-[#1C3B8B]" />
                <h2 class="text-3xl font-bold text-gray-800">নতুন বই সংগ্রহ</h2>
            </div>
            <p class="text-gray-600">আমাদের সাহিত্যিক ক্লাসিকের সংকলিত সংগ্রহ ব্রাউজ করুন</p>
        </div>
        <div class="container mx-auto px-3 relative z-10">
            <div class="max-w-7xl justify-center items-center">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <BookCard v-for="data in data?.new_books" :key="data.id" :book="data" @toggle-favorite="toggleFavorite"
                        @add-to-cart="addToCart" />
                </div>
            </div>
        </div>
    </section>
</template>