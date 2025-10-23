<script setup lang="ts">
defineProps({
  book: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['view-pdf']);

const handleQuestionClick = (paper: { name: string; url: string }) => {
  emit('view-pdf', paper);
};
</script>

<template>
  <div class="bg-white shadow rounded-lg p-4 flex flex-col items-center">
    <img
      :src="book.image"
      alt="book cover"
      class="w-32 h-32 object-cover rounded-md mb-4"
    />
    <h2 class="font-bold text-lg text-center mb-2">{{ book.title }}</h2>
    <p class="text-sm text-gray-600 mb-4 text-center">{{ book.author }}</p>

    <button
      @click="emit('view-pdf', { name: 'সিলেবাস', url: book.syllabus })"
      class="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg w-full mb-2"
    >
      সিলেবাস দেখুন
    </button>

     <button
      @click="emit('view-pdf', { name: 'সিলেবাস', url: book.questionPapers })"
      class="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-lg w-full mb-2"
    >
      সিলেবাস দেখুন
    </button>
  </div>
</template>
