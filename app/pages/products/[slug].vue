<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { $api } = useNuxtApp();
const { data } = await useAsyncData(`product-${route.params?.slug}`, () =>
  $api(`/frontend/v1/product/${route.params.slug}`)
);

const isModalOpen = ref(false);
const selectedFile = ref(null);
const currentImageIndex = ref(0);

const openModal = (file = null) => {
  selectedFile.value = file || data.value?.cover_image_url;
  isModalOpen.value = true;
  if (!data.value?.book_file_url) currentImageIndex.value = 0;
};

const closeModal = () => (isModalOpen.value = false);

const navigateImage = (direction) => {
  const images = [data.value?.cover_image_url, ...(data.value?.images?.map(img => img.image_url) || [])];
  if (!images.length) return;

  if (direction === "up") {
    currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length;
  } else if (direction === "down") {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
  }

  selectedFile.value = images[currentImageIndex.value];
};

const handleScroll = (e) => {
  if (!isModalOpen.value || data.value?.book_file_url) return;

  if (e.deltaY > 50) {
    navigateImage("down");
  } else if (e.deltaY < -50) {
    navigateImage("up");
  }
};

onMounted(() => {
  window.addEventListener("wheel", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("wheel", handleScroll);
});

const relatedBooks = [
  { id: 2, title: "গণিত শিখি (পেপারব্যাক)", price: 34.99, image: "/image/book-1.jpg", inStock: true },
  { id: 3, title: "আমার প্রথম ইংরেজি বই (পেপারব্যাক)", price: 49.99, image: "/image/book-1.jpg", inStock: true },
  { id: 4, title: "বিজ্ঞানের মজার খেলা (পেপারব্যাক)", price: 99.99, image: "/image/book-1.jpg", inStock: false },
  { id: 5, title: "ছোটদের ছড়া (পেপারব্যাক)", price: 25.00, image: "/image/book-1.jpg", inStock: true },
];
</script>

<template>
  <section class="py-12 bg-gradient-to-br from-slate-50 via-white to-slate-100">
    <div class="container mx-auto px-4">
      <div v-if="data" class="grid md:grid-cols-2 gap-8 mb-16">
        <div class="bg-white p-6 rounded-lg shadow-md flex justify-center items-center">
          <div class="flex flex-col items-center">
            <img
              :src="data?.cover_image_url"
              :alt="data?.title"
              class="max-h-[500px] object-contain mb-4"
            />
            <button
              @click="openModal(data?.book_file_url)"
              class="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-full font-semibold transition"
            >
              Read here
            </button>
          </div>
        </div>

        <div class="flex flex-col justify-center">
          <h1 class="text-3xl font-bold mb-2">{{ data?.title }}</h1>
          <p class="text-lg text-gray-600 mb-4">
            by <span class="font-semibold">{{ data?.author }}</span>
          </p>
          <div class="text-3xl font-bold text-[#800000] mb-6">
            ৳{{ data?.price?.toFixed(2) }}
          </div>
          <div class="text-sm text-gray-500">
            <p><span class="font-semibold">Publisher:</span> {{ data?.publisher }}</p>
            <p><span class="font-semibold">Pages:</span> {{ data?.pages }}</p>
            <p><span class="font-semibold">ISBN:</span> {{ data?.isbn }}</p>
          </div>
          <button
            class="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-full font-semibold mt-4"
          >
            অ্যাড তো কার্ট
          </button>
        </div>
      </div>

      <div
        v-if="data?.product_info"
        class="bg-white p-8 rounded-lg shadow-md mb-16"
      >
        <h2 class="text-2xl font-bold mb-4 border-b pb-2">বইয়ের বিবরণ</h2>
        <p class="text-gray-700 leading-relaxed" v-html="data?.product_info"></p>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
        সম্পর্কিত বই
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <BookCard
          v-for="relatedBook in relatedBooks"
          :key="relatedBook.id"
          :book="relatedBook"
        />
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-70 backdrop-blur-sm"
        @click="closeModal"
      >
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-gray-800 text-3xl font-bold hover:scale-110 transition z-10"
        >
          &times;
        </button>

        <div
          class="relative w-full max-w-2xl mx-auto p-4 flex flex-col items-center bg-white rounded-lg shadow-lg"
          @click.stop
        >
          <template v-if="data?.book_file_url">
            <PdfEasy
              :src="data.book_file_url"
              theme="dark"
              :pagination="true"
              :zoom="true"
              :download="true"
              :fullscreen="true"
              class="w-full h-[80vh] rounded-lg"
            />
          </template>
          <template v-else>
            <div class="relative w-full flex justify-center">
              <img
                :src="selectedFile || data?.cover_image_url"
                :alt="data?.title"
                class="max-h-[80vh] max-w-full rounded-lg shadow-lg object-contain transition-all duration-300"
              />
            </div>
          </template>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>