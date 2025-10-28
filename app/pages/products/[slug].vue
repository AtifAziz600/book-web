<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "~/stores/auth";

const route = useRoute();
const authStore = useAuthStore();
const { $api } = useNuxtApp();

const { data } = await useAsyncData(`product-${route.params?.slug}`, () =>
  $api(`/frontend/v1/product/${route.params.slug}`)
);
const reviews = ref([]);
const newReview = ref({
  rating: 5,
  title: "",
  review: "",
});
const isLoadingReview = ref(false);
const reviewMessage = ref("");
const isModalOpen = ref(false);
const selectedFile = ref(null);
const currentImageIndex = ref(0);
const fetchReviews = async () => {
  try {
    const response = await $api(`/frontend/v1/product/${data.value.id}/reviews`);
    reviews.value = response;
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};

const submitReview = async () => {
  if (!authStore.loggedIn) {
    reviewMessage.value = "দয়া করে প্রথমে লগইন করুন";
    return;
  }
  if (!newReview.value.title.trim() || !newReview.value.review.trim()) {
    reviewMessage.value = "দয়া করে সব ফিল্ড পূরণ করুন";
    return;
  }
  isLoadingReview.value = true;
  try {
    const response = await $api(`/frontend/v1/product/${data.value.id}/reviews`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${authStore.token}` },
      body: {
        rating: newReview.value.rating,
        title: newReview.value.title,
        review: newReview.value.review,
      },
    });
    reviews.value.unshift(response.review);
    newReview.value = { rating: 5, title: "", review: "" };
    reviewMessage.value = response.message;

    setTimeout(() => {
      reviewMessage.value = "";
    }, 3000);
  } catch (error) {
    reviewMessage.value = "রিভিউ যোগ করতে ব্যর্থ হয়েছে";
    console.error("Error submitting review:", error);
  } finally {
    isLoadingReview.value = false;
  }
};


// Image modal functions
const openModal = () => {
  const images = data.value?.images?.map(img => img.image_url) || [];
  if (!images.length) return;
  selectedFile.value = images[0];
  currentImageIndex.value = 0;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const navigateImage = (direction) => {
  const images = data.value?.images?.map(img => img.image_url) || [];
  if (!images.length) return;

  if (direction === "up") {
    currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length;
  } else if (direction === "down") {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
  }

  selectedFile.value = images[currentImageIndex.value];
};

const handleScroll = (e) => {
  if (!isModalOpen.value) return;
  if (e.deltaY > 50) navigateImage("down");
  else if (e.deltaY < -50) navigateImage("up");
};

onMounted(() => {
  window.addEventListener("wheel", handleScroll);
  fetchReviews();
});

onUnmounted(() => window.removeEventListener("wheel", handleScroll));
</script>

<template>
  <section class="py-12 bg-gradient-to-br from-slate-50 via-white to-slate-100">
    <div class="container mx-auto px-4">
      <div v-if="data" class="grid md:grid-cols-2 gap-8 mb-16">
        <div class="bg-white p-6 rounded-lg shadow-md flex justify-center items-center">
          <div class="flex flex-col items-center">
            <img :src="data?.cover_image_url" :alt="data?.title" class="max-h-[500px] object-contain mb-4" />
            <button @click="openModal(data?.cover_image_url)"
              class="bg-red-700 hover:bg-red-800 text-white self-center lg:self-start rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 hover:shadow-md mt-2 lg:mt-4">
              একটু পড়ে দেখুন
            </button>
          </div>
        </div>

        <div class="flex flex-col justify-center">
          <h1 class="text-3xl font-bold mb-2">{{ data?.title }}</h1>
          <p class="text-lg text-gray-600 mb-4">
            by <span class="font-semibold">{{ data?.author }}</span>
          </p>
          <div class="text-3xl font-bold text-[#800000] mb-6">
            ৳{{ data?.price }}
          </div>
          <div class="text-sm text-gray-500">
            <p><span class="font-semibold">Publisher:</span> {{ data?.publisher }}</p>
            <p><span class="font-semibold">Pages:</span> {{ data?.pages }}</p>
            <p><span class="font-semibold">ISBN:</span> {{ data?.isbn }}</p>
          </div>
          <NuxtLink to="/order-form"
            class="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-full font-semibold mt-4 text-center">
            অ্যাড তো কার্ট
          </NuxtLink>
        </div>
      </div>
      <div v-if="data?.product_info" class="bg-white p-8 rounded-lg shadow-md mb-16">
        <h2 class="text-2xl font-bold mb-4 border-b pb-2">বইয়ের বিবরণ</h2>
        <p class="text-gray-700 leading-relaxed" v-html="data?.product_info"></p>
      </div>
    </div>
    <div class="mt-12 bg-white p-6 rounded-lg shadow-md max-w-7xl mx-auto py-6">
      <h3 class="text-2xl font-bold text-gray-800 mb-6">রিভিউ করুন</h3>
      <div v-if="authStore.loggedIn" class="mb-8 p-4 bg-gray-50 rounded-lg">
        <div v-if="reviewMessage" class="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {{ reviewMessage }}
        </div>
        <div class="mb-4">
          <label class="block text-sm font-semibold text-gray-700 mb-2">রেটিং</label>
          <div class="flex gap-2">
            <button v-for="star in 5" :key="star" @click="newReview.rating = star" class="text-2xl transition"
              :class="star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'">
              ★
            </button>
          </div>
        </div>
        <div class="mb-4">
          <input v-model="newReview.title" type="text" placeholder="রিভিউ শিরোনাম..."
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#800000]" />
        </div>
        <div class="mb-4">
          <textarea v-model="newReview.review" rows="4" placeholder="আপনার রিভিউ লিখুন..."
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#800000]"></textarea>
        </div>

        <button @click="submitReview" :disabled="isLoadingReview"
          class="bg-[#800000] text-white py-2 px-6 rounded-md hover:bg-red-800 transition duration-300 font-medium disabled:opacity-50">
          {{ isLoadingReview ? "পাঠাচ্ছে..." : "রিভিউ পোস্ট করুন" }}
        </button>
      </div>
      <div v-else class="mb-8 p-4 bg-blue-50 rounded-lg">
        <p class="text-blue-700">
          রিভিউ করতে <NuxtLink to="/login" class="font-semibold underline">লগইন করুন</NuxtLink>
        </p>
      </div>
      <div class="space-y-6">
        <div v-if="reviews.length === 0" class="text-center text-gray-500 py-8">
          এখনও কোনো রিভিউ নেই
        </div>

        <div v-for="(review, index) in reviews" :key="index" class="border-b border-gray-200 pb-4">
          <div class="flex items-start">
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-2">
                <p class="font-semibold text-gray-800">{{ review.author_name }}</p>
                <div class="flex text-yellow-400">
                  <span v-for="star in review.rating" :key="star">★</span>
                </div>
              </div>
              <p class="text-gray-500 text-sm mb-2">{{ review.date }}</p>
              <p class="font-semibold text-gray-700 mb-2">{{ review.title }}</p>
              <p class="text-gray-700">{{ review.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="data?.relatedProducts?.length" class="container mx-auto px-4 mt-16">
      <h2 class="text-2xl font-bold mb-6 border-b pb-2">সম্পর্কিত বই</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <BookCard v-for="book in data.relatedProducts" :key="book.id" :book="book" />
      </div>
    </div>
    <transition name="fade">
      <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        @click="closeModal">
        <button @click="closeModal"
          class="absolute top-4 right-4 text-white text-3xl font-bold hover:scale-110 transition z-10">
          &times;
        </button>

        <div class="relative w-full max-w-3xl mx-auto p-4 flex flex-col items-center bg-white rounded-lg shadow-lg"
          @click.stop>
          <div class="relative w-full flex justify-center items-center">
            <img :src="selectedFile" :alt="data?.title"
              class="max-h-[80vh] max-w-full rounded-lg shadow-lg object-contain transition-all duration-300" />

            <button @click="navigateImage('up')"
              class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 px-2 py-1 rounded-full shadow">
              ◀
            </button>
            <button @click="navigateImage('down')"
              class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 px-2 py-1 rounded-full shadow">
              ▶
            </button>
          </div>
          <p class="mt-4 text-gray-600 text-sm">
            {{ currentImageIndex + 1 }} / {{ data?.images?.length || 0 }}
          </p>
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