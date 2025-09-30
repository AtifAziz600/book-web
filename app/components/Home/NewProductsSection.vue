<script setup>
import { ref } from 'vue';
const books = [
    {
        id: 1,
        title: "শিশুদের বাংলা পড়া(পেপারব্যাক)",
        price: 29.99,
        originalPrice: 39.99,
        discount: 25,
        inStock: true,
        image: "/image/book-1.jpg",
    },
    {
        id: 2,
        title: "শিশুদের বাংলা পড়া(পেপারব্যাক)",
        price: 34.99,
        originalPrice: null,
        discount: null,
        inStock: false,
        image: "/image/book-1.jpg",
    },
    {
        id: 3,
        title: "শিশুদের বাংলা পড়া(পেপারব্যাক)",
        price: 49.99,
        originalPrice: 59.99,
        discount: 15,
        inStock: true,
        image: "/image/book-1.jpg",
    },
    {
        id: 4,
        title: "শিশুদের বাংলা পড়া(পেপারব্যাক)",
        price: 99.99,
        originalPrice: null,
        discount: null,
        inStock: true,
        image: "/image/book-1.jpg",
    }
];

const toggleFavorite = (id) => {
    const book = books.find(b => b.id === id);
    if (book) book.isFavorite = !book.isFavorite;
};

const addToCart = (book) => {
    console.log("Added to cart:", book.title);
};
</script>
<template>
    <section class="w-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-6">
        <div class="text-center mb-10">
            <div class="flex items-center justify-center gap-3 mb-4">
                <Icon name="heroicons:book-open" class="h-48 w-48 text-[#1C3B8B]" />
                <h2 class="text-3xl font-bold text-gray-800">নতুন বই সংগ্রহ</h2>
            </div>
            <p class="text-gray-600">আমাদের সাহিত্যিক ক্লাসিকের সংকলিত সংগ্রহ ব্রাউজ করুন</p>
        </div>
        <div class="container mx-auto px-3 relative z-10">
            <div class="max-w-7xl justify-center items-center">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <BookCard v-for="book in books" :key="book.id" :book="book" @toggle-favorite="toggleFavorite"
                        @add-to-cart="addToCart" />
                </div>
            </div>
        </div>
    </section>
</template>