<script setup>
import { ref } from 'vue';

const loading = ref(true);
const config = useRuntimeConfig();
const baseURL = config.public.apiBase;
const { $api } = useNuxtApp();

const { data: response, error, status, refresh } = useAsyncData('home_blogs', () => 
  $api('/top-one-ir')
);
</script>

<template>
  <section class="w-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-6">
    <div class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-10">
          <div class="flex items-center justify-center gap-3 mb-4">
            <Icon name="heroicons:book-open" class="h-12 w-12 text-[#1C3B8B]" />
            <h2 class="text-3xl font-bold text-gray-800">আমাদের আর্টিকেল পড়ুন</h2>
          </div>
          <p class="text-gray-600">আমাদের সর্বশেষ নিবন্ধগুলি পড়ুন এবং আপডেট থাকুন.</p>
        </div>

        <div class="flex flex-wrap -m-4">
          <div
            v-for="blog in response?.home_blogs"
            :key="blog.id"
            class="p-4 md:w-1/3"
          >
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="`${baseURL}${blog.image}`" alt="blog" />
              <div class="p-6">
                <div class="flex items-center gap-2 text-sm text-gray-500">
                  <Icon name="heroicons:user" class="w-4 h-4 text-red-500" />
                  <span>{{ blog.publisher }}</span>
                </div>
                <p class="text-sm text-gray-500 mt-1">রিভিউ : {{ blog.reviews }}</p>
                <h1 class="title-font text-lg font-medium text-gray-900 my-3">{{ blog.title }}</h1>
                <p class="leading-relaxed mb-3 text-sm">{{ blog.excerpt }}</p>
                <div class="flex items-center flex-wrap">
                  <NuxtLink
                    :to="`/blog/${blog.id}`"
                    class="text-white bg-red-600 cursor-pointer hover:bg-red-700 px-4 py-2 rounded-md inline-flex items-center"
                  >
                    পুরোটা পড়ুন
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
