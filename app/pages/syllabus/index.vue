<script setup>
import { ref } from "vue";

const syllabusCategories = ref([
  {
    id: 1,
    title: "প্রাক-প্রাথমিক",
    image: "/image/pre-play.jpg",
  },
  {
    id: 2,
    title: "প্রাথমিক",
    image: "/image/pre-boro-boi.jpg",
  },
  {
    id: 3,
    title: "মাধ্যমিক",
    image: "/image/shoto-size.jpg",
  },
  {
    id: 4,
    title: "উচ্চ মাধ্যমিক",
    image: "/image/pre-play.jpg",
  },
  {
    id: 5,
    title: "অনার্স",
    image: "/image/pre-boro-boi.jpg",
  },
  {
    id: 6,
    title: "মাস্টার্স",
    image: "/image/shoto-size.jpg",
  }
]);
</script>

<template>
  <section class="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
    <div class="container mx-auto px-6 py-12">
            <div class="text-center mb-8">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">সিলেবাস এবং প্রশ্নপত্র</h2>
                <div class="w-64 h-1 bg-red-500 mx-auto rounded-full"></div>
            </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-8">
        <NuxtLink
          v-for="category in syllabusCategories"
          :key="category.id"
          class="text-center bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition-all duration-300"
          to="/syllabus/singlepage"
        >
          <div
            class="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-sm mb-4 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img :src="category.image" :alt="category.title" class="w-full h-full object-cover" />
          </div>

          <h2 class="text-lg font-semibold text-gray-800 mb-3">{{ category.title }}</h2>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
