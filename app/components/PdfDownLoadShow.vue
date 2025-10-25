<script setup>
const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['view-pdf']);

const hasPdfContent = (book) => {
  return book.pdfUrl || book.syllabus || book.questionPapers;
};

const getPdfUrl = (book) => {
  return book.pdfUrl || book.syllabus || book.questionPapers?.[0]?.url || null;
};
</script>

<template>
  <NuxtLink :to="`/books/${book.id}`" class="block group h-full">
    <div class="bg-white overflow-hidden transition-all duration-300 border border-gray-100 h-full flex flex-col hover:-translate-y-1">

      <div class="relative w-full overflow-hidden bg-gray-100 p-4">
        <img
          :src="book.image"
          :alt="`Cover of ${book.title}`"
          class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <div v-if="hasPdfContent(book)" class="absolute top-2 right-2">
          <span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
            PDF
          </span>
        </div>
      </div>

      <div class="p-4 flex-grow">
        <h3 class="text-md font-extrabold text-gray-800 line-clamp-2 mb-2 min-h-[3rem]">
          {{ book.title }}
        </h3>
        <p class="text-sm font-bold text-gray-600 mb-3">
          {{ book.author }}
        </p>
        <div v-if="hasPdfContent(book)" class="mt-3 space-y-2">
          <button 
            v-if="book.syllabus"
            @click.prevent="$emit('view-pdf', { type: 'syllabus', url: book.syllabus, title: book.title })"
            class="w-full bg-[#1C3B8B] hover:bg-blue-900 text-white text-sm py-2 px-3 rounded transition-colors duration-200 flex items-center justify-center"
          >
            <Icon name="material-symbols:menu-book" class="w-4 h-4 mr-2" />
            View Syllabus
          </button>
          <div v-if="book.questionPapers && book.questionPapers.length > 0" class="space-y-1">
            <button 
              @click.prevent
              class="w-full bg-green-700 hover:bg-green-900 text-white text-sm py-2 px-3 rounded transition-colors duration-200 flex items-center justify-center"
            >
              <Icon name="mdi:file-document-multiple" class="w-4 h-4 mr-2" />
              Question Papers ({{ book.questionPapers.length }})
            </button>
            
            <div class="bg-gray-50 rounded p-2 space-y-1">
              <button 
                v-for="(paper, index) in book.questionPapers?.slice(0, 3)"
                :key="index"
                @click.prevent="$emit('view-pdf', { type: 'question-paper', url: paper.url, title: paper.name || `Question Paper ${index + 1}` })"
                class="w-full text-left text-xs text-gray-700 hover:text-[#1C3B8B] hover:bg-blue-50 py-1 px-2 rounded transition-colors duration-200 flex items-center"
              >
                <Icon name="mdi:file-pdf-box" class="w-3 h-3 mr-2 text-red-500" />
                {{ paper.name || `Question Paper ${index + 1}` }}
              </button>

              <div v-if="book.questionPapers.length > 3" class="text-xs text-gray-500 text-center pt-1">
                +{{ book.questionPapers.length - 3 }} more
              </div>
            </div>
          </div>
          <button 
            v-if="book.pdfUrl && !book.syllabus && !book.questionPapers"
            @click.prevent="$emit('view-pdf', { type: 'document', url: book.pdfUrl, title: book.title })"
            class="w-full bg-[#800000] hover:bg-[#ED1B24] text-white text-sm py-2 px-3 rounded transition-colors duration-200 flex items-center justify-center"
          >
            <Icon name="mdi:file-pdf-box" class="w-4 h-4 mr-2" />
            View PDF
          </button>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>