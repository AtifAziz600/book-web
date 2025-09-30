<script setup>
import { Icon } from '@iconify/vue';

const books = [
  {
    title: "সালসাবিল কেন?",
    description: "সালসাবিল সম্পর্কে বিস্তারিত বিবরণ যা আমাদের জীবন ও মানসিক উন্নয়নে সাহায্য করে।",
    icon: "mdi-book-open-page-variant", 
  },
  {
    title: "বাংলা সাহিত্যের ইতিহাস",
    description: "বাংলা সাহিত্যের ইতিহাস এবং এর গুরুত্বপূর্ণ লেখকদের সংক্ষিপ্ত বিবরণ।",
    icon: "mdi-book-open-variant",
  },
{
  title: "আরবি শিক্ষক",
  description: "আরবি ভাষা শেখার জন্য কার্যকরী বই ও শিক্ষণ উপকরণ।",
  icon: "mdi-school",
},
  {
    title: "প্রাকৃতিক পরিবেশ",
    description: "প্রাকৃতিক পরিবেশ ও পরিবেশ রক্ষা করার গুরুত্ব নিয়ে লেখা বই।",
    icon: "mdi-book-multiple",
  },
];
</script>

<template>
  <section class="py-24 relative">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
      <div class="w-full flex-col justify-start items-center lg:gap-11 gap-8 inline-flex">
        <div class="w-full flex-col justify-start items-center gap-2.5 flex">
          <h2 class="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">বইসমূহ</h2>
          <p class="max-w-4xl mx-auto text-center text-gray-500 text-lg font-normal leading-8">
            এখানে বিভিন্ন বই সম্পর্কে সংক্ষিপ্ত বিবরণ দেওয়া হলো যা পাঠকদের জ্ঞান ও সচেতনতা বৃদ্ধি করে।
          </p>
        </div>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-start items-start gap-8">
          <div
            v-for="(book, index) in books"
            :key="index"
            class="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-[#1C3B8B] transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex"
          >
            <div class="flex-col justify-start items-center gap-3.5 inline-flex text-center">
              <Icon :icon="book.icon" width="40" height="40" class="text-[#E61C24]" />
              <h4 class="text-gray-900 text-lg font-semibold leading-8 mt-2">{{ book.title }}</h4>
              <p class="text-gray-500 text-sm font-normal leading-snug mt-1">{{ book.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
:root {
  --color-primary: #1C3B8B;
  --color-secondary: #E61C24;
  --color-thirdly: #FEE600;
}
</style>