<script setup>
import { computed } from 'vue'; 

const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
});

const formattedPrice = computed(() => {
  return parseFloat(props.book.price).toFixed(2);
});

const formattedOriginalPrice = computed(() => {
  if (props.book.originalPrice) {
    return parseFloat(props.book.originalPrice).toFixed(2);
  }
  return null;
});

</script>

<template>
  <NuxtLink :to="`/books/${book.id}`" class="block group h-full">
    <div class="bg-white overflow-hidden transition-all duration-300 border border-gray-100 h-full flex flex-col hover:-translate-y-1">
      
      <div class="relative w-full aspect-[2/3] overflow-hidden bg-gray-100 p-4">
        <img
          :src="book.image"
          :alt="`Cover of ${book.title}`"
          class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        <div v-if="book.isNew || book.discount" class="absolute top-2 right-2 flex flex-col gap-1.5 items-end">
          <span 
            v-if="book.isNew" 
            class="px-2 py-0.5 bg-green-600 text-white text-xs font-bold rounded-full shadow-lg tracking-wider uppercase"
          >
            New
          </span>
          <span 
            v-if="book.discount" 
            class="px-2 py-0.5 bg-red-600 text-white text-xs font-bold rounded-full shadow-lg"
          >
            -{{ book.discount }}%
          </span>
        </div>
      </div>

      <div class="px-4 flex-grow">
        <h3 class="text-md font-extrabold text-gray-800 line-clamp-2 mb-2 min-h-[3rem]">
          {{ book.title }}
        </h3>
        </div>

      <div class="mt-auto p-4 flex justify-between items-end border-t border-gray-100 bg-gray-50/50">
        
        <div class="flex flex-col">
          <div v-if="book.originalPrice && book.discount" class="flex flex-row items-start">
            <div class="text-2xl font-semibold text-primary leading-tight">${{ formattedPrice }}</div>
            <div class="text-sm text-gray-400 line-through mt-0.5">${{ formattedOriginalPrice }}</div>
          </div>
          <div v-else class="text-2xl font-semibold text-primary leading-tight">৳{{ formattedPrice }}</div>
          
          <div class="text-xs mt-2">
            <span v-if="book.inStock" class="text-green-600 font-medium flex items-center">
              <Icon name="heroicons:check-circle-20-solid" class="w-3.5 h-3.5 mr-1" />
              In Stock
            </span>
            <span v-else class="text-red-600 font-medium flex items-center">
              <Icon name="heroicons:x-circle-20-solid" class="w-3.5 h-3.5 mr-1" />
              Out of Stock
            </span>
          </div>
        </div>
        
        <button
          @click.prevent.stop="$emit('add-to-cart', book)"
          :disabled="!book.inStock"
          class="flex items-center bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 text-white font-semibold text-sm px-4 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
        >
          <Icon name="heroicons:shopping-cart" class="w-4 h-4 mr-1.5" />
          Add To Cart
        </button>
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