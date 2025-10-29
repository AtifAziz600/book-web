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
const isFlipping = ref(false);
const currentPage = ref(0);
const flipDirection = ref('next');

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

// Page flip functions
const openModal = () => {
  const images = data.value?.images?.map(img => img.image_url) || [];
  if (!images.length) return;
  currentPage.value = 0;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  currentPage.value = 0;
  isFlipping.value = false;
};

const nextPage = () => {
  const totalPages = data.value?.images?.length || 0;
  if (currentPage.value < totalPages - 1 && !isFlipping.value) {
    isFlipping.value = true;
    flipDirection.value = 'next';
    setTimeout(() => {
      currentPage.value++;
      isFlipping.value = false;
    }, 300);
  }
};

const prevPage = () => {
  if (currentPage.value > 0 && !isFlipping.value) {
    isFlipping.value = true;
    flipDirection.value = 'prev';
    setTimeout(() => {
      currentPage.value--;
      isFlipping.value = false;
    }, 300);
  }
};

const goToPage = (pageIndex) => {
  if (!isFlipping.value && pageIndex >= 0 && pageIndex < (data.value?.images?.length || 0)) {
    isFlipping.value = true;
    flipDirection.value = pageIndex > currentPage.value ? 'next' : 'prev';
    setTimeout(() => {
      currentPage.value = pageIndex;
      isFlipping.value = false;
    }, 300);
  }
};

const handleKeydown = (e) => {
  if (!isModalOpen.value) return;
  
  if (e.key === 'ArrowLeft') prevPage();
  else if (e.key === 'ArrowRight') nextPage();
  else if (e.key === 'Escape') closeModal();
};

const handleScroll = (e) => {
  if (!isModalOpen.value) return;
  if (e.deltaY > 50) nextPage();
  else if (e.deltaY < -50) prevPage();
};

// Thumbnail navigation
const thumbnailImages = computed(() => {
  return data.value?.images?.map(img => img.image_url) || [];
});

onMounted(() => {
  window.addEventListener("wheel", handleScroll);
  window.addEventListener("keydown", handleKeydown);
  fetchReviews();
});

onUnmounted(() => {
  window.removeEventListener("wheel", handleScroll);
  window.removeEventListener("keydown", handleKeydown);
});
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
              class="max-h-[500px] object-contain mb-4 rounded-lg shadow-lg"
            />
            <button 
              @click="openModal"
              class="bg-red-700 hover:bg-red-800 text-white self-center lg:self-start rounded-md px-6 py-3 text-sm font-medium duration-300 hover:shadow-md mt-2 lg:mt-4"
            >
             একটু পড়ে দেখুন
            </button>
          </div>
        </div>

        <div class="flex flex-col justify-center">
          <h1 class="text-3xl font-bold mb-2 text-gray-800">{{ data?.title }}</h1>
          <p class="text-lg text-gray-600 mb-4">
            by <span class="font-semibold text-gray-800">{{ data?.author }}</span>
          </p>
          <div class="text-3xl font-bold text-[#800000] mb-6">
            ৳{{ data?.price }}
          </div>
          <div class="text-sm text-gray-500 space-y-2 mb-6">
            <p><span class="font-semibold text-gray-700">Publisher:</span> {{ data?.publisher }}</p>
            <p><span class="font-semibold text-gray-700">Pages:</span> {{ data?.pages }}</p>
            <p><span class="font-semibold text-gray-700">ISBN:</span> {{ data?.isbn }}</p>
          </div>
          <NuxtLink 
            to="/order-form"
            class="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full font-semibold mt-4 text-center hover:shadow-lg inline-block"
          >
            অ্যাড তো কার্ট
          </NuxtLink>
        </div>
      </div>
      
      <div v-if="data?.product_info" class="bg-white p-8 rounded-lg shadow-md mb-16">
        <h2 class="text-2xl font-bold mb-4 border-b pb-2 text-gray-800">বইয়ের বিবরণ</h2>
        <p class="text-gray-700 leading-relaxed" v-html="data?.product_info"></p>
      </div>
    </div>

    <!-- Reviews Section -->
    <div class="mt-12 bg-white p-6 rounded-lg shadow-md max-w-7xl mx-auto py-6">
      <h3 class="text-2xl font-bold text-gray-800 mb-6">রিভিউ করুন</h3>
      <div v-if="authStore.loggedIn" class="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <div v-if="reviewMessage" class="mb-4 p-3 bg-green-100 text-green-700 rounded border border-green-200">
          {{ reviewMessage }}
        </div>
        <div class="mb-4">
          <label class="block text-sm font-semibold text-gray-700 mb-2">রেটিং</label>
          <div class="flex gap-2">
            <button 
              v-for="star in 5" 
              :key="star" 
              @click="newReview.rating = star" 
              class="text-2xl transition transform hover:scale-110"
              :class="star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'"
            >
              ★
            </button>
          </div>
        </div>
        <div class="mb-4">
          <input 
            v-model="newReview.title" 
            type="text" 
            placeholder="রিভিউ শিরোনাম..."
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
          />
        </div>
        <div class="mb-4">
          <textarea 
            v-model="newReview.review" 
            rows="4" 
            placeholder="আপনার রিভিউ লিখুন..."
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
          ></textarea>
        </div>

        <button 
          @click="submitReview" 
          :disabled="isLoadingReview"
          class="bg-[#800000] text-white py-3 px-8 rounded-md hover:bg-red-800 transition duration-300 font-medium disabled:opacity-50 transform hover:scale-105 disabled:hover:scale-100"
        >
          {{ isLoadingReview ? "পাঠাচ্ছে..." : "রিভিউ পোস্ট করুন" }}
        </button>
      </div>
      <div v-else class="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p class="text-blue-700">
          রিভিউ করতে <NuxtLink to="/login" class="font-semibold underline hover:text-blue-800">লগইন করুন</NuxtLink>
        </p>
      </div>
      <div class="space-y-6">
        <div v-if="reviews.length === 0" class="text-center text-gray-500 py-8">
          এখনও কোনো রিভিউ নেই
        </div>

        <div v-for="(review, index) in reviews" :key="index" class="border-b border-gray-200 pb-6 last:border-b-0">
          <div class="flex items-start">
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-2">
                <p class="font-semibold text-gray-800">{{ review.author_name }}</p>
                <div class="flex text-yellow-400">
                  <span v-for="star in review.rating" :key="star">★</span>
                </div>
              </div>
              <p class="text-gray-500 text-sm mb-2">{{ review.date }}</p>
              <p class="font-semibold text-gray-700 mb-2 text-lg">{{ review.title }}</p>
              <p class="text-gray-700 leading-relaxed">{{ review.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Related Products -->
    <div v-if="data?.relatedProducts?.length" class="container mx-auto px-4 mt-16">
      <h2 class="text-2xl font-bold mb-6 border-b pb-2 text-gray-800">সম্পর্কিত বই</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <BookCard v-for="book in data.relatedProducts" :key="book.id" :book="book" />
      </div>
    </div>

    <!-- 3D Page Flip Modal -->
    <transition name="fade">
      <div 
        v-if="isModalOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        @click="closeModal"
      >
        <!-- Close Button -->
        <button 
          @click="closeModal"
          class="absolute top-6 right-6 text-white text-3xl font-bold z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70"
        >
          &times;
        </button>

        <div class="relative w-full max-w-6xl mx-auto p-4 flex flex-col items-center" @click.stop>
          
          <!-- Book Container -->
          <div class="book-container">
            <div class="book" :class="{ 'flipping': isFlipping, 'flip-next': flipDirection === 'next', 'flip-prev': flipDirection === 'prev' }">
              
              <!-- Current Page (Right Page) -->
              <div class="page page-right" :class="{ 'flipped': isFlipping && flipDirection === 'next' }">
                <div class="page-front">
                  <div class="page-content">
                    <img 
                      :src="data?.images[currentPage]?.image_url" 
                      :alt="`Page ${currentPage + 1}`" 
                      class="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div class="page-back">
                  <div class="page-content">
                    <img 
                      v-if="currentPage < (data?.images?.length || 0) - 1"
                      :src="data?.images[currentPage + 1]?.image_url" 
                      :alt="`Page ${currentPage + 2}`" 
                      class="w-full h-full object-contain"
                    />
                    <div v-else class="w-full h-full flex items-center justify-center bg-gray-100">
                      <p class="text-gray-500 text-lg">বইয়ের শেষ</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Previous Page (Left Page) -->
              <div class="page page-left" :class="{ 'flipped': isFlipping && flipDirection === 'prev' }">
                <div class="page-front">
                  <div class="page-content">
                    <img 
                      v-if="currentPage > 0"
                      :src="data?.images[currentPage - 1]?.image_url" 
                      :alt="`Page ${currentPage}`" 
                      class="w-full h-full object-contain"
                    />
                    <div v-else class="w-full h-full flex items-center justify-center bg-gray-100">
                      <p class="text-gray-500 text-lg">বইয়ের শুরু</p>
                    </div>
                  </div>
                </div>
                <div class="page-back">
                  <div class="page-content">
                    <img 
                      :src="data?.images[currentPage]?.image_url" 
                      :alt="`Page ${currentPage + 1}`" 
                      class="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- Main Navigation -->
          <div class="flex items-center justify-between w-full max-w-2xl mt-8 px-4">
            <button 
              @click="prevPage" 
              :disabled="currentPage === 0 || isFlipping"
              class="bg-white/90 hover:bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 flex items-center gap-2 font-semibold"
            >
              ◀ পূর্ববর্তী
            </button>
            
            <div class="flex flex-col items-center">
              <p class="text-white font-semibold bg-black/60 px-6 py-3 rounded-lg text-lg shadow-lg">
                পাতা {{ currentPage + 1 }} / {{ data?.images?.length || 0 }}
              </p>
              <div class="flex gap-1 mt-2">
                <button 
                  v-for="(img, index) in thumbnailImages" 
                  :key="index"
                  @click="goToPage(index)"
                  :class="[
                    'w-3 h-3 rounded-full transition transform hover:scale-125',
                    currentPage === index ? 'bg-white' : 'bg-white/50',
                    isFlipping ? 'pointer-events-none' : ''
                  ]"
                />
              </div>
            </div>
            
            <button 
              @click="nextPage" 
              :disabled="currentPage >= (data?.images?.length || 0) - 1 || isFlipping"
              class="bg-white/90 hover:bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 flex items-center gap-2 font-semibold"
            >
              পরবর্তী ▶
            </button>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
/* Modal Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Book Flip Styles */
.book-container {
  perspective: 2000px;
  width: 100%;
  max-width: 800px;
  height: 70vh;
  position: relative;
}

.book {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.4s ease;
}

.book.flipping {
  pointer-events: none;
}

.page {
  position: absolute;
  width: 50%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px 0 0 4px;
  overflow: hidden;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.3),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.page-right {
  right: 0;
  transform-origin: left center;
  border-radius: 0 4px 4px 0;
}

.page-left {
  left: 0;
  transform-origin: right center;
}

.page-right.flipped {
  transform: rotateY(-180deg);
}

.page-left.flipped {
  transform: rotateY(180deg);
}

.page-front,
.page-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: linear-gradient(135deg, #f8f8f8 0%, #e8e8e8 100%);
}

.page-back {
  transform: rotateY(180deg);
}

.page-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: white;
}

.page-content img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 2px;
}

/* Flip direction indicators */
.flip-next .page-right {
  z-index: 2;
}

.flip-prev .page-left {
  z-index: 2;
}

/* Scrollbar hiding for thumbnails */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .book-container {
    max-width: 90vw;
    height: 60vh;
  }
}

@media (max-width: 768px) {
  .book-container {
    height: 50vh;
    max-width: 95vw;
  }
  
  .page-content {
    padding: 10px;
  }
  
  /* Main navigation buttons */
  .flex.items-center.justify-between.w-full.max-w-2xl {
    flex-direction: column;
    gap: 1rem;
  }
  
  /* Thumbnail navigation */
  .flex.overflow-x-auto.gap-2 {
    max-width: 90vw;
  }
}

@media (max-width: 480px) {
  .book-container {
    height: 40vh;
  }
  
  .page-content {
    padding: 5px;
  }
}

/* Enhanced shadows and depth */
.book::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background: linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.05), rgba(0,0,0,0.1));
  z-index: 3;
  border-radius: 2px;
}

/* Page turning effect enhancement */
.page {
  background: linear-gradient(90deg, #f0f0f0 0%, #f8f8f8 5%, #fff 100%);
}
</style>