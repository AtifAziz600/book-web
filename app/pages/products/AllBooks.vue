<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const config = useRuntimeConfig();
const {$api} = useNuxtApp();

const books = ref([]);
const loading = ref(true);

const fetchBooks = async () => {
  loading.value = true;
  try {
    const { data } = await $api('/frontend/v1/product', {
      params: {
        search: route.query.search || '',
      },
    });
    books.value = data || [];
  } catch (error) {
    console.error('Error fetching books:', error);
  } finally {
    loading.value = false;
  }
};
await fetchBooks();
watch(() => route.query.search, fetchBooks);
</script>

<template>
  <section class="w-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-6">
    {{ data }}
    <div class="text-center mb-8">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">আমাদের প্রকাশিত বইসমূহ</h2>
      <div class="w-48 h-1 bg-red-500 mx-auto rounded-full"></div>
    </div>

    <div class="container mx-auto px-3 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <BookCard v-for="book in books" :key="book.id" :book="book" />
      </div>
    </div>
  </section>
</template>
<style scoped>
</style>