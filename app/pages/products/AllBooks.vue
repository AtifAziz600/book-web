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
            <div class="text-center mb-8">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">আমাদের প্রকাশিত বইসমূহ</h2>
                <div class="w-48 h-1 bg-red-500 mx-auto rounded-full"></div>
            </div>
        </div>
                <div class="container mx-auto px-3 relative z-10">
            <div class="max-w-7xl justify-center items-center">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    <BookCard v-for="book in books" :key="book.id" :book="book" @toggle-favorite="toggleFavorite"
                        @add-to-cart="addToCart" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>