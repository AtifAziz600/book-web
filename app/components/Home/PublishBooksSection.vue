<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useNuxtApp, useAsyncData } from '#app';

const route = useRoute();
const { $api } = useNuxtApp();
const { data: productsData, error, refresh } = await useAsyncData(
  `publish_products`,
  () =>
    $api('/top-one-ir')
);
const publishProducts = computed(() => productsData.value?.publish_products || []);
const publishNotice = computed(() => productsData.value?.publish_notice || []);
</script>

<template>
  <section class="w-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
    <div class="container mx-auto px-4 max-w-7xl">
      <div
        v-for="product in publishProducts"
        :key="product.slug"
        class="flex flex-col lg:flex-row max-w-7xl mx-auto rounded-lg shadow-xl my-4 lg:my-8 overflow-hidden border-2"
        :style="{ borderColor: 'var(--color-primary)' }"
      >
        <!-- Book Info -->
        <div class="w-full lg:w-3/5 p-4 lg:p-8 lg:border-r-2" :style="{ borderColor: 'var(--color-primary)', backgroundColor: 'white' }">
          <h2 class="text-lg lg:text-2xl font-bold pb-3 border-b-2 flex items-center" :style="{ color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }">
            <span class="mr-2">
              <Icon name="mdi:books" class="h-6 w-6 lg:h-8 lg:w-8"/>
            </span>
            {{ product.title }}
          </h2>
          <div class="flex flex-col lg:flex-row mt-4 lg:mt-6 space-y-4 lg:space-y-0 lg:space-x-6">
            <div class="relative w-32 h-32 lg:w-48 lg:h-48 mx-auto lg:mx-0">
              <div class="border-2 w-full h-full rounded-md overflow-hidden flex items-center justify-center" :style="{ borderColor: 'var(--color-primary)' }">
                <img :src="product.cover_image_url" class="h-full w-full object-cover" :alt="product.title"/>
              </div>
              <NuxtLink :to="`/products/${product.slug}`"
                class="absolute -top-3 lg:-top-4 left-0 rounded-md px-2 lg:px-3 py-1 text-xs lg:text-sm font-medium transition-all duration-300 hover:scale-105"
                :style="{ backgroundColor: 'var(--color-secondary)', color: 'white', borderColor: 'var(--color-secondary)' }"
              >
                একটু পড়ে দেখুন
              </NuxtLink>
            </div>
            <div class="flex flex-col justify-between px-0 lg:px-8 space-y-4 lg:space-y-6 text-center lg:text-left">
              <div class="mx-auto lg:mx-0">
                <p class="text-lg lg:text-2xl font-bold mb-2" :style="{ color: 'var(--color-primary)' }">{{ product.title }}</p>
                <p class="text-base lg:text-xl mb-1" :style="{ color: 'var(--color-primary)' }">
                  লেখক: {{ product.author }}
                </p>
                <p class="text-xs lg:text-base bg-yellow-100 inline-block px-2 py-1 rounded" :style="{ color: 'var(--color-primary)', backgroundColor: 'var(--color-thirdly)' }">
                  [{{ product.category.name }} এর জন্য]
                </p>
                <p class="text-xs lg:text-xl mb-1" :style="{color: 'var(--color-primary)'}">
                    মূল্য: ৳{{ product.price }}
                </p>
              </div>
              <NuxtLink :to="`/products/${product.slug}`"
                class="self-center lg:self-start rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 hover:shadow-md mt-2 lg:mt-4"
                :style="{ backgroundColor: 'var(--color-primary)', color: 'white', borderColor: 'var(--color-primary)' }"
              >
                এখানে ক্লিক করুন
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Notice Card -->
<div class="w-full lg:w-2/5 p-4 lg:p-8" style="background-color: rgba(28, 59, 139, 0.05);">
  <div class="flex items-center pb-3 border-b-2" :style="{ borderColor: 'var(--color-primary)' }">
    <span class="text-lg lg:text-2xl mr-2">
      <Icon name="mdi:newspaper" class="h-6 w-6 lg:h-8 lg:w-8"/>
    </span>
    <h2 class="text-lg lg:text-2xl font-bold" :style="{ color: 'var(--color-primary)' }">নোটিশ কার্ড</h2>
  </div>

  <div class="mt-4 space-y-3">
    <!-- Loop through publishNotice array -->
    <div
      v-for="(notice, index) in publishNotice"
      :key="index"
      class="p-3 rounded-md"
      style="background-color: white; border-left: 4px solid var(--color-secondary);"
    >
      <p class="text-xs lg:text-sm" style="color: var(--color-primary);">{{ notice }}</p>
    </div>
    <div v-if="publishNotice.length === 0" class="p-3 rounded-md" style="background-color: white; border-left: 4px solid var(--color-secondary);">
      <p class="text-xs lg:text-sm" style="color: var(--color-primary);">কোনো নোটিশ নেই</p>
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