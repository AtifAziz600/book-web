<script setup>
const route = useRoute();
const {$api} = useNuxtApp();
const { data:products, error, status } = await useAsyncData(`category-${route.params?.slug}`,() => $api('/frontend/v1/product', {
    query: {
        category: route.params?.slug
    }
}) 
);
const category = computed(() => products.value?.data?.[0]?.category || null);
const addToCart = (book) => {
    console.log("Added to cart:", book.title);
};
</script>
<template>
    <section class="w-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12">
        <div class="text-center mb-10">
            <div class="flex items-center justify-center gap-3 mb-4">
                <Icon name="heroicons:book-open" class="h-8 w-8 text-[#1C3B8B]" />
                <h2 class="text-3xl font-bold text-gray-800">{{ category?.name }}</h2>
            </div>
            <p class="text-gray-600">আমাদের {{ category?.name }} সংকলিত সংগ্রহ ব্রাউজ করুন</p>
        </div>
        <div class="container mx-auto px-3 relative z-10">
            <div class="max-w-7xl justify-center items-center">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    <BookCard v-for="data in products?.data" :key="data.id" :book="data" 
                        @add-to-cart="addToCart" />
                </div>
            </div>
        </div>
    </section>
</template>
<style>
</style>