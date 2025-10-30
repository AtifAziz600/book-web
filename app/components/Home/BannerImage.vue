<script setup>
import { computed } from 'vue';
const { $api } = useNuxtApp();
const config = useRuntimeConfig();
const baseURL = config.public.apiBase;
const { data } = await useAsyncData('banner', () => $api('/frontend/v1/banner'));

const bannerData = computed(() => {
  return data.value?.data?.[0] || null;
  return data.value?.data?.[0] || {};
});
</script>

<template>
  <section v-if="bannerData" class="w-full relative overflow-hidden z-50">
    <div class="w-full h-[250px] md:h-[400px] relative">
      <img
        :src="`${baseURL}${bannerData?.image}`"
        class="w-full h-full object-cover object-center"
        :alt="bannerData?.title"
      />
      <div class="absolute inset-0 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-end px-4 md:px-16 bg-black/30 py-8 md:py-12">
        <div class="text-center md:text-right max-w-xl text-white">
          <h1 class="text-lg md:text-3xl font-bold mb-2 md:mb-3 leading-snug">
            {{ bannerData?.title }}
            <span class="text-[var(--color-thirdly)] block text-base md:text-2xl">{{ bannerData?.highlight }}</span>
          </h1>
          <p class="text-sm md:text-base mb-4 md:mb-6 leading-relaxed opacity-90">
            {{ bannerData?.description }}
          </p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
            <NuxtLink
              to="/products/AllBooks"
              class="bg-[var(--color-secondary)] hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
            >
              {{ bannerData?.button1_text }}
            </NuxtLink>
            <NuxtLink
              to="/order-form"
              class="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
            >
              {{ bannerData?.button2_text }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
:root {
  --color-primary: #1C3B8B;
  --color-secondary: #E61C24;
  --color-thirdly: #FEE600;
}
</style>