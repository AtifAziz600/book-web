<script setup>
import { ref } from 'vue';

const book = ref({
    id: 1,
    title: "শিশুদের বাংলা পড়া (পেপারব্যাক)",
    author: "ড. আলী আহম্মাদ",
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    inStock: true,
    image: "/image/book-1.jpg",
    description: "শিশুদের জন্য বাংলা ভাষা শেখার একটি চমৎকার বই। সহজ ভাষায় লেখা এবং সুন্দর ছবি দিয়ে সাজানো এই বইটি শিশুদের বাংলা পড়া ও লেখায় আগ্রহী করে তুলবে।",
    publisher: "সোভিয়েত ইউনিয়ন",
    pages: 64,
    isbn: "978-984-33-1234-5"
});

const relatedBooks = [
    { id: 2, title: "গণিত শিখি (পেপারব্যাক)", price: 34.99, image: "/image/book-1.jpg", inStock: true },
    { id: 3, title: "আমার প্রথম ইংরেজি বই (পেপারব্যাক)", price: 49.99, image: "/image/book-1.jpg", inStock: true },
    { id: 4, title: "বিজ্ঞানের মজার খেলা (পেপারব্যাক)", price: 99.99, image: "/image/book-1.jpg", inStock: false },
    { id: 5, title: "ছোটদের ছড়া (পেপারব্যাক)", price: 25.00, image: "/image/book-1.jpg", inStock: true },
];

const quantity = ref(1);

const incrementQuantity = () => {
    quantity.value++;
};

const decrementQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};

const addToCart = () => {
    console.log(`Added ${quantity.value} of ${book.value.title} to cart.`);
};
</script>

<template>
    <section class="w-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 md:py-20">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
                <div class="bg-white p-6 rounded-lg shadow-md flex justify-center items-center">
                    <img :src="book.image" :alt="book.title" class="max-w-full h-auto max-h-[500px] object-contain">
                </div>

                <div class="flex flex-col justify-center">
                    <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{{ book.title }}</h1>
                    <p class="text-lg text-gray-600 mb-4">by <span class="font-semibold">{{ book.author }}</span></p>

                    <div class="flex items-center mb-4">
                        <div class="text-3xl font-bold text-[#800000] mr-3">৳{{ book.price.toFixed(2) }}</div>
                        <div v-if="book.originalPrice" class="text-xl text-gray-400 line-through">৳{{ book.originalPrice.toFixed(2) }}</div>
                        <div v-if="book.discount" class="ml-4 px-2 py-0.5 bg-[#800000] text-white text-sm font-bold rounded-full shadow-lg">
                            -{{ book.discount }}%
                        </div>
                    </div>

                    <div class="mb-6">
                        <span v-if="book.inStock" class="text-green-600 font-semibold flex items-center">
                            <Icon name="heroicons:check-circle-20-solid" class="w-5 h-5 mr-1.5" />
                            ইন স্টক
                        </span>
                        <span v-else class="text-red-600 font-semibold flex items-center">
                            <Icon name="heroicons:x-circle-20-solid" class="w-5 h-5 mr-1.5" />
                            আউট অফ স্টক
                        </span>
                    </div>

                    <div class="flex items-center gap-4 mb-6">
                        <div class="flex items-center border border-gray-300 rounded-full">
                            <button @click="decrementQuantity" class="px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-100 rounded-l-full">-</button>
                            <span class="px-4 py-2 text-lg font-semibold text-gray-800">{{ quantity }}</span>
                            <button @click="incrementQuantity" class="px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-100 rounded-r-full">+</button>
                        </div>
                        <button @click="addToCart" :disabled="!book.inStock" class="flex-grow flex items-center justify-center bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 text-white font-semibold text-lg px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
                            <Icon name="heroicons:shopping-cart" class="w-5 h-5 mr-2" />
                            অ্যাড তো কার্ট
                        </button>
                    </div>
                    
                    <div class="text-sm text-gray-500">
                        <p><span class="font-semibold">Publisher:</span> {{ book.publisher }}</p>
                        <p><span class="font-semibold">Pages:</span> {{ book.pages }}</p>
                        <p><span class="font-semibold">ISBN:</span> {{ book.isbn }}</p>
                    </div>
                </div>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-md mb-16">
                <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">বইয়ের বিবরণ</h2>
                <p class="text-gray-700 leading-relaxed">{{ book.description }}</p>
            </div>
            <div>
                <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">সম্পর্কিত বই</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <BookCard v-for="relatedBook in relatedBooks" :key="relatedBook.id" :book="relatedBook" />
                </div>
            </div>
        </div>
    </section>
</template>
