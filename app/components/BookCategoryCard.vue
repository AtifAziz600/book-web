<script setup>
const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
});

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
      </div>

      <div class="px-4 flex-grow">
        <h3 class="text-md font-extrabold text-gray-800 line-clamp-2 mb-2 min-h-[3rem]">
          {{ book.title }}
        </h3>
        <h3 class="text-md font-bold text-gray-800 line-clamp-2 mb-2 min-h-[3rem]">
            {{ book.author }}
        </h3>
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

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>