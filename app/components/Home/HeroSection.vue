<template>
  <section class="relative w-full lg:h-screen">
    <Swiper
      :modules="modules"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :loop="true"
      :pagination="{ clickable: true }"
      class="h-screen w-full"
    >
      <SwiperSlide
        v-for="slide in slides"
        :key="slide.id"
        class="h-full w-full bg-cover bg-center"
        :style="{ backgroundImage: `url(${slide.image})` }"
      >
        <div class="absolute inset-0 bg-black/50"></div>
        <div
          class="relative z-10 flex h-full flex-col items-center justify-center text-center px-6"
        >
          <h1 class="text-4xl sm:text-5xl font-bold text-white drop-shadow-md">
            {{ slide.title }}
            <strong class="text-[var(--color-secondary)]">
              {{ slide.highlight }}
            </strong>
          </h1>
          <p class="mt-4 max-w-2xl text-base sm:text-lg text-gray-100">
            {{ slide.description }}
          </p>

          <div class="mt-6 flex gap-4 justify-center">
            <a
              href="#"
              class="inline-block rounded bg-[var(--color-secondary)] px-5 py-3 font-medium text-white shadow-md transition hover:bg-indigo-900"
            >
              {{ slide.button1 }}
            </a>
            <a
              href="#"
              class="inline-block rounded border border-white px-5 py-3 font-medium text-white shadow-md transition hover:bg-white hover:text-[var(--color-primary)]"
            >
              {{ slide.button2 }}
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Autoplay, Pagination];

const commonTitle = "শিশুর স্বপ্ন হোক আকাশ জয়ের,";
const commonHighlight = "ইনশাআল্লাহ সব সম্ভব,";
const commonDescription = "অবিরাম লক্ষ্যে দূরন্ত শিশুর প্রতিটি অর্জনকে সেঁধে আত্মস্থাতে, শিক্ষা প্রাচুর্যে ধর্ম মানববিদ্যার জ্ঞান-আলোচনে তার জীবন ভরে উঠুক পরিপূর্ণতায়।";
const button1Text = "আমাদের প্রকাশিত বইগুলো দেখুন";
const button2Text = "বই অর্ডার করুন";

const slides = [
  {
    id: 1,
    title: commonTitle,
    highlight: commonHighlight,
    description: commonDescription,
    image: "/image/rajniti-banner-8639.jpg",
    button1: button1Text,
    button2: button2Text,
  },
  {
    id: 2,
    title: commonTitle,
    highlight: commonHighlight,
    description: commonDescription,
    image: "/image/darsul-quran-slider-banner-de24.jpg",
    button1: button1Text,
    button2: button2Text,
  },
  {
    id: 3,
    title: commonTitle,
    highlight: commonHighlight,
    description: commonDescription,
    image: "/image/best-seller-books-38a6.jpg",
    button1: button1Text,
    button2: button2Text,
  },
];
</script>

<style>
:root {
  --color-primary: #1C3B8B;
  --color-secondary: #E61C24;
  --color-thirdly: #FEE600;
}
</style>