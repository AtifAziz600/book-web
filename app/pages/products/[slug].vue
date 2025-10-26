<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { $api } = useNuxtApp();
const { data } = await useAsyncData(`product-${route.params?.slug}`, () =>
  $api(`/frontend/v1/product/${route.params.slug}`)
);

const review = ref({
  bookTitle: "",
  author: "",
  content: "",
  image: null,
  imagePreview: "",
});

const isModalOpen = ref(false);
const selectedFile = ref(null);
const currentImageIndex = ref(0);

const openModal = (file = null) => {
  selectedFile.value = file || data.value?.cover_image_url;
  isModalOpen.value = true;
  currentImageIndex.value = 0;
};




const closeModal = () => (isModalOpen.value = false);

const navigateImage = (direction) => {
  const images = [data.value?.cover_image_url];
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

const newComment = ref("");
const comments = ref([
  {
    name: "ফারহানা আহমেদ",
    date: "২ দিন আগে",
    text: "এই বইটি আমার জীবন বদলে দিয়েছে। লেখকের ব্যাখ্যা খুবই সহজবোধ্য।",
    avatar: "/image/avater2.png",
  },
  {
    name: "ইমরান হোসেন",
    date: "১ সপ্তাহ আগে",
    text: "কুরআন বুঝতে এই বইটি খুবই সহায়ক। প্রতিটি মুসলিমের পড়া উচিত।",
    avatar: "/image/avater3.png",
  },
]);

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    review.value.image = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      review.value.imagePreview = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const submitReview = () => {
  if (!review.value.bookTitle || !review.value.content) {
    alert("দয়া করে বইয়ের নাম এবং রিভিউ লিখুন");
    return;
  }

  console.log("Review submitted:", review.value);
  alert("আপনার রিভিউ সফলভাবে জমা দেওয়া হয়েছে!");

  review.value = {
    bookTitle: "",
    author: "",
    content: "",
    image: null,
    imagePreview: "",
  };
};

const addComment = () => {
  if (!newComment.value.trim()) {
    alert("দয়া করে মন্তব্য লিখুন");
    return;
  }

  comments.value.unshift({
    name: "আপনি",
    date: "এখনই",
    text: newComment.value,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  });

  newComment.value = "";
};

const relatedBooks = [
  { id: 2, title: "গণিত শিখি (পেপারব্যাক)", price: 34.99, image: "/image/book-1.jpg", inStock: true },
  { id: 3, title: "আমার প্রথম ইংরেজি বই (পেপারব্যাক)", price: 49.99, image: "/image/book-1.jpg", inStock: true },
  { id: 4, title: "বিজ্ঞানের মজার খেলা (পেপারব্যাক)", price: 99.99, image: "/image/book-1.jpg", inStock: false },
  { id: 5, title: "ছোটদের ছড়া (পেপারব্যাক)", price: 25.0, image: "/image/book-1.jpg", inStock: true },
];
</script>


<template>
  <section class="py-12 bg-gradient-to-br from-slate-50 via-white to-slate-100">
    <div class="container mx-auto px-4">
      <div v-if="data" class="grid md:grid-cols-2 gap-8 mb-16">
        <div class="bg-white p-6 rounded-lg shadow-md flex justify-center items-center">
          <div class="flex flex-col items-center">
            <img :src="data?.cover_image_url" :alt="data?.title" class="max-h-[500px] object-contain mb-4" />
            <button @click="openModal(data?.cover_image_url)"
              class="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-full font-semibold transition">
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
            ৳{{ data?.price }}
          </div>
          <div class="text-sm text-gray-500">
            <p><span class="font-semibold">Publisher:</span> {{ data?.publisher }}</p>
            <p><span class="font-semibold">Pages:</span> {{ data?.pages }}</p>
            <p><span class="font-semibold">ISBN:</span> {{ data?.isbn }}</p>
          </div>
          <NuxtLink to="/order-form"
            class="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-full font-semibold mt-4">
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
      <h3 class="text-2xl font-bold text-gray-800 mb-4">আপনার বই রিভিউ শেয়ার করুন</h3>
      <p class="text-gray-600 mb-6">আপনার পড়া বই সম্পর্কে রিভিউ লিখুন এবং বইয়ের ছবি আপলোড করুন।</p>

      <form @submit.prevent="submitReview">
        <div class="mb-4">
          <label for="bookTitle" class="block text-gray-700 mb-2">বইয়ের নাম</label>
          <input type="text" id="bookTitle" v-model="review.bookTitle"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-#800000">
        </div>

        <div class="mb-4">
          <label for="author" class="block text-gray-700 mb-2">লেখক</label>
          <input type="text" id="author" v-model="review.author"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-#800000">
        </div>

        <div class="mb-4">
          <label for="review" class="block text-gray-700 mb-2">আপনার রিভিউ</label>
          <textarea id="review" v-model="review.content" rows="5"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-#800000"
            placeholder="বইটি পড়ে আপনার অভিজ্ঞতা শেয়ার করুন..."></textarea>
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 mb-2">বইয়ের ছবি আপলোড করুন</label>
          <div class="flex items-center justify-center w-full">
            <label for="bookImage"
              class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">ক্লিক করুন</span> অথবা ছবিটি ড্র্যাগ
                  করুন</p>
                <p class="text-xs text-gray-500">PNG, JPG, GIF (MAX. 5MB)</p>
              </div>
              <input id="bookImage" type="file" class="hidden" @change="handleImageUpload" accept="image/*" />
            </label>
          </div>
          <div v-if="review.imagePreview" class="mt-4">
            <p class="text-gray-700 mb-2">প্রিভিউ:</p>
            <img :src="review.imagePreview" class="max-h-48 rounded-md shadow-sm" alt="বইয়ের ছবি প্রিভিউ">
          </div>
        </div>

        <button type="submit"
          class="w-full bg-[#800000] text-white py-3 px-4 rounded-md hover:bg-green-700 transition duration-300 font-medium">
          রিভিউ পোস্ট করুন
        </button>
      </form>
    </div>

    <div class="mt-12 bg-white p-6 rounded-lg shadow-md max-w-7xl mx-auto py-6">
      <h3 class="text-2xl font-bold text-gray-800 mb-6">মন্তব্য করুন</h3>

      <div class="mb-6">
        <textarea v-model="newComment" rows="4"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-#800000"
          placeholder="আপনার মন্তব্য লিখুন..."></textarea>
        <button @click="addComment"
          class="mt-2 bg-[#800000] text-white py-2 px-6 rounded-md hover:bg-green-800 transition duration-300 font-medium">
          মন্তব্য পোস্ট করুন
        </button>
      </div>

      <div class="space-y-6">
        <div v-for="(comment, index) in comments" :key="index" class="border-b border-gray-200 pb-4">
          <div class="flex items-start">
            <img :src="comment.avatar" class="h-10 w-10 rounded-full mr-3 object-cover" alt="ব্যবহারকারী">
            <div>
              <p class="font-semibold text-gray-800">{{ comment.name }}</p>
              <p class="text-gray-500 text-sm">{{ comment.date }}</p>
              <p class="text-gray-700 mt-2">{{ comment.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
        সম্পর্কিত বই
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <BookCard v-for="relatedBook in relatedBooks" :key="relatedBook.id" :book="relatedBook" />
      </div>
    </div>
    <transition name="fade">
      <div v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-70 backdrop-blur-sm"
        @click="closeModal">
        <button @click="closeModal"
          class="absolute top-4 right-4 text-gray-800 text-3xl font-bold hover:scale-110 transition z-10">
          &times;
        </button>

<div class="relative w-full max-w-2xl mx-auto p-4 flex flex-col items-center bg-white rounded-lg shadow-lg" @click.stop>
<template v-if="data?.book_file_url">
  <PdfEasy 
    :src="data?.book_file_url" 
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