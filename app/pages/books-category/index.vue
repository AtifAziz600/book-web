<script setup>
import { ref } from "vue";
const books = ref([
    { id: 1, title: 'Pre Play', image: '/image/pre-play.jpg', slug: 'pre-play' },
    { id: 2, title: 'Pre Boro Boi', image: '/image/pre-boro-boi.jpg', slug: 'pre-boro-boi' },
    { id: 3, title: 'Shoto Size', image: '/image/shoto-size.jpg', slug: 'shoto-size' },
    { id: 4, title: 'Shoto Size', image: '/image/shoto-size.jpg', slug: 'shoto-size-2' },
    { id: 5, title: 'Pre Boro Boi', image: '/image/pre-boro-boi.jpg', slug: 'pre-boro-boi-2' },
    { id: 6, title: 'Pre Play', image: '/image/pre-play.jpg', slug: 'pre-play-2' },
    { id: 7, title: 'Pre Play', image: '/image/pre-play.jpg', slug: 'pre-play-3' },
    { id: 8, title: 'Pre Play', image: '/image/pre-play.jpg', slug: 'pre-play-4' },
    { id: 9, title: 'Pre Play', image: '/image/pre-play.jpg', slug: 'pre-play-5' },
    { id: 10, title: 'Pre Play', image: '/image/pre-play.jpg', slug: 'pre-play-6' },
    { id: 11, title: 'Pre Play', image: '/image/pre-play.jpg', slug: 'pre-play-7' },
    { id: 12, title: 'Pre Play', image: '/image/pre-play.jpg', slug: 'pre-play-8' },
]);
</script>

<template>
    <section class="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div class="container mx-auto px-8 py-12">
            <h1 class="text-3xl text-center mb-16 uppercase font-bold text-gray-800">
                আমাদের প্রকাশিত পাঠ্যপুস্তক সমূহ
            </h1>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6">
                <NuxtLink v-for="book in books" :key="book.id" to="/books-category/singlebookcategory" class="block">
                    <div
                        class="w-32 h-32 bg-white rounded-full shadow-md flex justify-center items-center grayscale hover:grayscale-0 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                        <img class="w-full h-full object-cover rounded-full" :src="book.image" :alt="book.title">
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>