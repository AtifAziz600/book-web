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
    <div class="mx-auto">
      <div class="flex items-center justify-center">
        <img :src="`${baseURL}${bannerData?.image}`" class="w-full h-[400px] md:h-[500px] lg:h-[700px]object-cover" :alt="bannerData?.title">
      </div>
    </div>
    <div class="absolute inset-0 flex items-center justify-end px-6 md:px-16">
      <div class="max-w-xl text-white text-right">
        <h1 class="text-lg md:text-3xl font-bold mb-3 leading-snug">
          {{ bannerData?.title }}
          <span class="text-[var(--color-thirdly)] block text-lg md:text-2xl">{{ bannerData?.highlight }}</span>
        </h1>
        <p class="text-sm md:text-base mb-6 leading-relaxed opacity-90">
          {{ bannerData?.description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-end sm:justify-end">
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
  </section>
</template>

<style scoped>
:root {
  --color-primary: #1C3B8B;
  --color-secondary: #E61C24;
  --color-thirdly: #FEE600;
}
</style>