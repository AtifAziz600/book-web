<script setup>
import { ref } from 'vue'

const review = ref({
  bookTitle: '',
  author: '',
  content: '',
  image: null,
  imagePreview: ''
})

const newComment = ref('')
const comments = ref([
  {
    name: 'ফারহানা আহমেদ',
    date: '২ দিন আগে',
    text: 'এই বইটি আমার জীবন বদলে দিয়েছে। লেখকের ব্যাখ্যা খুবই সহজবোধ্য।',
    avatar: '/image/avater2.png'
  },
  {
    name: 'ইমরান হোসেন',
    date: '১ সপ্তাহ আগে',
    text: 'কুরআন বুঝতে এই বইটি খুবই সহায়ক। প্রতিটি মুসলিমের পড়া উচিত।',
    avatar: '/image/avater3.png'
  }
])

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    review.value.image = file
    const reader = new FileReader()
    reader.onload = (e) => {
      review.value.imagePreview = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const submitReview = () => {
  if (!review.value.bookTitle || !review.value.content) {
    alert('দয়া করে বইয়ের নাম এবং রিভিউ লিখুন')
    return
  }

  console.log('Review submitted:', review.value)
  alert('আপনার রিভিউ সফলভাবে জমা দেওয়া হয়েছে!')
  
  review.value = {
    bookTitle: '',
    author: '',
    content: '',
    image: null,
    imagePreview: ''
  }
}

const addComment = () => {
  if (!newComment.value.trim()) {
    alert('দয়া করে মন্তব্য লিখুন')
    return
  }
  
  comments.value.unshift({
    name: 'আপনি',
    date: 'এখনই',
    text: newComment.value,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  })
  
  newComment.value = ''
}
</script>

<template>
  <section class="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
    <div class="mt-10">
      <div class="mb-4 md:mb-0 w-full max-w-7xl mx-auto relative" style="height: 24em;">
        <div class="absolute left-0 bottom-0 w-full h-full z-10"
          style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));"></div>
        <img src="/image/darsul-quran-slider-banner-de24.jpg" class="absolute left-0 top-0 w-full h-full z-0 object-cover" />
        <div class="p-4 absolute bottom-0 left-0 z-20">
          <a href="#" class="px-4 py-1 bg-#800000 text-white inline-flex items-center justify-center mb-2">ইসলামিক সাহিত্য</a>
          <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
            কুরআনের আলো: আধুনিক জীবনের জন্য গাইডেন্স
          </h2>
          <div class="flex mt-3">
            <img src="/image/avater1.png"
              class="h-10 w-10 rounded-full mr-2 object-cover" />
            <div>
              <p class="font-semibold text-gray-200 text-sm"> ড. আহমেদ হাসান </p>
              <p class="font-semibold text-gray-400 text-xs"> ২৫ রমজান </p>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        <p class="pb-6">ইসলামি সাহিত্যের ভাণ্ডার অত্যন্ত সমৃদ্ধ ও বিস্তৃত। কুরআন ও হাদিসের গভীর ব্যাখ্যা থেকে শুরু করে আধুনিক সমস্যার ইসলামি সমাধান - সবই এতে স্থান পেয়েছে। ইসলামি বই আমাদের জ্ঞানভাণ্ডারকে সমৃদ্ধ করে এবং আত্মিক উন্নতির পথ দেখায়।</p>

        <p class="pb-6">বর্তমান সময়ে ইসলামি বই পড়ার গুরুত্ব আরও বেড়ে গেছে। ইন্টারনেটের এই যুগে বিভ্রান্তি ছড়ানো সহজ হয়েছে, তাই নির্ভরযোগ্য ইসলামি বই পড়া আমাদের জন্য অপরিহার্য। এগুলো আমাদের সঠিক পথে চলতে সাহায্য করে এবং আল্লাহর সন্তুষ্টি অর্জনের পথ সুগম করে।</p>

        <p class="pb-6">ইসলামি সাহিত্য শুধু ধর্মীয় বিষয়েই সীমাবদ্ধ নয়। এতে রয়েছে ইতিহাস, দর্শন, বিজ্ঞান, সাহিত্য ও সমাজবিজ্ঞানের নানা দিক। ইসলামি দৃষ্টিকোণ থেকে লেখা এসব বই আমাদের জীবনকে সুষম ও ভারসাম্যপূর্ণ করতে সহায়তা করে।</p>

        <div class="border-l-4 border-#800000 pl-4 mb-6 italic rounded bg-green-50 py-2">
          "জ্ঞানার্জন করা প্রতিটি মুসলমান নর-নারীর উপর ফরজ" - এই হাদিসটি আমাদেরকে শিক্ষা দেয় যে জ্ঞানার্জনের কোনো বিকল্প নেই। ইসলামি বই পড়ার মাধ্যমে আমরা আমাদের ধর্মীয় জ্ঞান বৃদ্ধি করতে পারি এবং আল্লাহর নৈকট্য লাভ করতে পারি।
        </div>

        <p class="pb-6">আমাদের ওয়েবসাইটে আপনি পাবেন নানা ধরনের ইসলামি বই। কুরআন তাফসির, হাদিস সংকলন, সীরাত গ্রন্থ, ফিকহ সম্পর্কিত বই, ইসলামি ইতিহাস, আত্মশুদ্ধিমূলক বই এবং সমসাময়িক বিষয়ের উপর ইসলামি দৃষ্টিভঙ্গি - সব ধরনের বই এখানে সংগ্রহ করা হয়েছে।</p>

        <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">ইসলামি বই পড়ার উপকারিতা</h2>

        <p class="pb-6">ইসলামি বই পড়ার মাধ্যমে আমরা আমাদের ঈমানকে মজবুত করতে পারি। এগুলো আমাদেরকে আল্লাহর প্রতি ভালোবাসা ও ভয় সৃষ্টি করতে সাহায্য করে। নবী-রাসূলদের জীবনী পড়ে আমরা তাদের আদর্শকে নিজেদের জীবনে বাস্তবায়ন করার চেষ্টা করতে পারি।</p>

        <p class="pb-6">ইসলামি সাহিত্য আমাদের নৈতিক চরিত্র গঠনে গুরুত্বপূর্ণ ভূমিকা পালন করে। সততা, আমানতদারী, দয়া, ক্ষমা, সহনশীলতা - এসব গুণাবলি বিকাশে ইসলামি বই আমাদের পথনির্দেশনা দেয়। এছাড়াও, ইসলামি বই পড়া আমাদের আত্মবিশ্লেষণে সাহায্য করে এবং আত্মউন্নয়নের পথ দেখায়।</p>

        <p class="pb-6">পরিবার ও সমাজ গঠনেও ইসলামি বইয়ের ভূমিকা অপরিসীম। পারিবারিক জীবন, সামাজিক দায়িত্ব, অর্থনৈতিক নীতি - সব বিষয়েই ইসলামের সুস্পষ্ট নির্দেশনা রয়েছে। এসব নির্দেশনা জানতে ও বাস্তবায়ন করতে ইসলামি বই আমাদের প্রধান সহায়ক।</p>

        <div class="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">আপনার বই রিভিউ শেয়ার করুন</h3>
          <p class="text-gray-600 mb-6">আপনার পড়া ইসলামি বই সম্পর্কে রিভিউ লিখুন এবং বইয়ের ছবি আপলোড করুন।</p>
          
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
                <label for="bookImage" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">ক্লিক করুন</span> অথবা ছবিটি ড্র্যাগ করুন</p>
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
            
            <button type="submit" class="w-full bg-#800000 text-white py-3 px-4 rounded-md hover:bg-green-700 transition duration-300 font-medium">
              রিভিউ পোস্ট করুন
            </button>
          </form>
        </div>

        <div class="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">মন্তব্য করুন</h3>
          
          <div class="mb-6">
            <textarea v-model="newComment" rows="4" 
                      class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-#800000"
                      placeholder="আপনার মন্তব্য লিখুন..."></textarea>
            <button @click="addComment" 
                    class="mt-2 bg-#800000 text-white py-2 px-6 rounded-md hover:bg-green-700 transition duration-300 font-medium">
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
      </div>
    </div>
  </section>
</template>


<style scoped>

</style>