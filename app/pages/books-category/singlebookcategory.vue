<template>
    <section class="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div class="container mx-auto px-8 py-12">
    <h1 class="text-3xl text-center mb-16 uppercase">প্লে গ্রুপ (ছোট্ট স্লাইড)-এর বইসমূহ</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <BookCategoryCard v-for="book in books" :key="book.id" :book="book" to="/products"/>
    </div>
</div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
const books = [
    {
        id: 1,
        title: "শিশুদের বাংলা পড়া(পেপারব্যাক)",
        author: "ড. আলী আহম্মাদ",
        image: "/image/book-1.jpg",
    },
];

</script>

<style>

</style>