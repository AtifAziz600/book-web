<script setup lang="ts">
import PdfDownLoadShow from './PdfDownLoadShow.vue';

const config = useRuntimeConfig();
const baseURL = config.public.apiBase;
const { $api } = useNuxtApp();

const { data: syllabusData, error, status, refresh } = useAsyncData('syllabus', () =>
  $api('/frontend/v1/syllabus')
);

const handleViewPdf = (pdfData: { name: string; url: string }) => {
  if (!pdfData?.url) return;
  const fullUrl = `${baseURL}${pdfData.url}`;
  window.open(fullUrl, '_blank');
};
</script>

<template>
  <section
    class="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen"
  >
    <div class="container mx-auto px-4 py-12">
      <div class="text-center mb-16">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 uppercase">
          প্রাক-প্রাথমিক সিলেবাস এবং প্রশ্নপত্র
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          প্রাক-প্রাথমিক শিক্ষার্থীদের জন্য সকল বিষয়ের সিলেবাস এবং নমুনা প্রশ্নপত্র
        </p>
        <div class="w-48 h-1 bg-red-500 mx-auto rounded-full mt-6"></div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <PdfDownLoadShow
          v-for="book in syllabusData"
          :key="book.id"
          :book="{
            id: book.id,
            title: book.title,
            author: book.author,
            image: baseURL + book.image,
            syllabus: book.syllabus_file,
            questionPapers: book.question_papers,
          }"
          @view-pdf="handleViewPdf"
        />
      </div>
    </div>
  </section>
</template>
