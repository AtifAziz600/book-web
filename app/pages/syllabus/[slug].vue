<script setup lang="ts">
import PdfDownLoadShow from './PdfDownLoadShow.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useAuthStore } from '~/stores/auth'; // Fixed import path

const route = useRoute();
const config = useRuntimeConfig();
const baseURL = config.public.apiBase;
const { $api } = useNuxtApp();
const slug = route.params.slug;
const { data: syllabusData, error, status, refresh } = await useAsyncData(`product-${route.params.slug}`, () =>
  $api("/frontend/v1/product", { params: { category: route.params.slug } })
);

const authStore = useAuthStore();
const { user, loggedIn, login } = authStore; // Changed isAuthenticated to loggedIn

const books = computed(() => syllabusData.value?.data);

const handleViewPdf = (pdfData: { name: string; url: string }) => {
  if (!loggedIn) {
    // Redirect to login page if not authenticated
    return navigateTo('/login'); // Adjust the path if your login page is different
  }
  if (!pdfData?.url) return;
  window.open(pdfData.url, '_blank');
};
</script>

<template>
  <section
    class="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen"
  >
    <div class="container mx-auto px-4 py-12">
      <div class="text-center mb-16">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 uppercase">
          {{ params?.name }} সিলেবাস এবং প্রশ্নপত্র 
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ params?.name }} শিক্ষার্থীদের জন্য সকল বিষয়ের সিলেবাস এবং নমুনা প্রশ্নপত্র
        </p>
        <div class="w-48 h-1 bg-red-500 mx-auto rounded-full mt-6"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PdfDownLoadShow
          v-for="book in books" 
          :key="book.id"
          :book="{
            id: book.id,
            title: book.title,
            author: book.author,
            image: book.cover_image_url, 
            syllabus: book.syllabus_file_url,
            questionPapers: book.question_file_url,
          }"
          @view-pdf="handleViewPdf"
        />
      </div>
    </div>
  </section>
</template>
