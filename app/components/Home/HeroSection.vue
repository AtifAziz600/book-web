<template>
  <section class="relative w-full h-[800px] lg:h-screen overflow-hidden">
    <Swiper
      v-if="data?.hero_slider?.length"
      :key="data.hero_slider.length"
      :modules="modules"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :loop="true"
      :pagination="{ clickable: true }"
      class="h-full w-full"
    >
      <SwiperSlide
        v-for="slide in data.hero_slider"
        :key="slide.id"
        class="h-full w-full relative"
      >
        <img
          :src="slide.image_url"
          :alt="slide.id"
          class="h-full w-full object-fit object-center"
        />

        <!-- <div class="absolute inset-0 bg-black/40"></div> -->

        <!-- <div class="absolute inset-0 flex items-center justify-center text-center px-4">
          <div class="max-w-3xl text-white mx-auto">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {{ commonTitle }}
              <span class="text-[var(--color-thirdly)] block">{{ commonHighlight }}</span>
            </h1>

            <p class="text-lg md:text-xl mb-8 leading-relaxed opacity-90 max-w-xl mx-auto">
              {{ commonDescription }}
            </p>

            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <NuxtLink
                to="/products/AllBooks"
                class="bg-[var(--color-secondary)] hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {{ button1Text }}
              </NuxtLink>
              <NuxtLink
                to="/products/AllBooks"
                class="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {{ button2Text }}
              </NuxtLink>
            </div>
          </div>
        </div> -->
      </SwiperSlide>
    </Swiper>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <div class="swiper-pagination-custom"></div>
    </div>
  </section>
</template>


<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const modules = [Autoplay, Pagination, Navigation];

const commonTitle = "শিশুর স্বপ্ন হোক আকাশ জয়ের,";
const commonHighlight = "ইনশাআল্লাহ সব সম্ভব,";
const commonDescription = "অবিরাম লক্ষ্যে দূরন্ত শিশুর প্রতিটি অর্জনকে সেঁধে আত্মস্থাতে, শিক্ষা প্রাচুর্যে ধর্ম মানববিদ্যার জ্ঞান-আলোচনে তার জীবন ভরে উঠুক পরিপূর্ণতায়।";
const button1Text = "প্রকাশিত বইগুলো দেখুন";
const button2Text = "বই অর্ডার করুন";

const { $api } = useNuxtApp();
const { data, error, status, refresh } = useAsyncData('sliders', () => $api('/top-one-ir'));
</script>

<style>
:root {
  --color-primary: #1C3B8B;
  --color-secondary: #E61C24;
  --color-thirdly: #FEE600;
  --swiper-pagination-color: #FEE600;
  --swiper-pagination-bullet-size: 12px;
  --swiper-pagination-bullet-inactive-color: #FFFFFF;
  --swiper-pagination-bullet-inactive-opacity: 0.5;
}

.swiper-pagination-custom .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background: white;
  opacity: 0.5;
  margin: 0 6px;
  transition: all 0.3s ease;
}

.swiper-pagination-custom .swiper-pagination-bullet-active {
  background: var(--color-thirdly);
  opacity: 1;
  transform: scale(1.2);
}

.swiper-button-prev-custom,
.swiper-button-next-custom {
  backdrop-filter: blur(4px);
}

.swiper-slide-active h1,
.swiper-slide-active p,
.swiper-slide-active .flex {
  animation: fadeInUp 0.8s ease-out forwards;
}

.swiper-slide-active h1 {
  animation-delay: 0.2s;
}

.swiper-slide-active p {
  animation-delay: 0.4s;
}

.swiper-slide-active .flex {
  animation-delay: 0.6s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {

  .swiper-button-prev-custom,
  .swiper-button-next-custom {
    display: none;
  }
}
</style>