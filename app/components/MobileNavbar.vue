<script setup>
import { ref } from 'vue';

const cartItemCount = ref(0);
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <div class="lg:hidden">
    <header class="bg-white shadow-lg py-3 sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
          <button @click="toggleMenu" class="p-2">
            <Icon name="heroicons:bars-3" class="w-8 h-8 text-gray-700" />
          </button>
          <a href="/" class="flex items-center flex-shrink-0">
            <img src="/image/logo.png" class="h-10 w-auto rounded-2xl" alt="Brand Logo">
            <span class="ml-2 text-lg font-extrabold text-gray-800">সালসাবিল</span>
          </a>
          <div class="flex items-center space-x-4">
            <NuxtLink to="/order/cart" class="relative">
              <Icon name="heroicons:shopping-bag" class="w-8 h-8 text-gray-700" />
              <span v-if="cartItemCount > 0" 
                class="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                {{ cartItemCount }}
              </span>
            </NuxtLink>

            <NuxtLink to="/login">
              <Icon name="heroicons:user" class="w-8 h-8 text-gray-700" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <div v-if="isMenuOpen" class="bg-white shadow-lg">
      <div class="container mx-auto px-4 py-4">
        <div class="flex mb-4">
          <input type="text" placeholder="পণ্য, বিভাগ, অথবা ব্র্যান্ড অনুসন্ধান করুন..."
            class="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500">
          <button class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-lg">
            <Icon name="heroicons:magnifying-glass" class="w-5 h-5" />
          </button>
        </div>
        <nav class="bg-[#ED1B24] rounded-lg">
          <NuxtLink to="/" class="block py-3 px-4 text-white hover:bg-[#A82229] uppercase" @click="closeMenu">হোম</NuxtLink>
          <NuxtLink to="/about" class="block py-3 px-4 text-white hover:bg-[#A82229] uppercase" @click="closeMenu">আমাদের সম্পর্কে</NuxtLink>
          <NuxtLink to="/books-category" class="block py-3 px-4 text-white hover:bg-[#A82229] uppercase" @click="closeMenu">পাঠ্যপুস্তক</NuxtLink>
          <a href="/order-form" class="block py-3 px-4 text-white hover:bg-[#A82229] uppercase" @click="closeMenu">অর্ডার ফর্ম</a>
          <NuxtLink to="/advice" class="block py-3 px-4 text-white hover:bg-[#A82229] uppercase" @click="closeMenu">পরামর্শ</NuxtLink>
          <NuxtLink to="/contact-us" class="block py-3 px-4 text-white hover:bg-[#A82229] uppercase" @click="closeMenu">যোগাযোগ</NuxtLink>
          <NuxtLink to="/Terms-condition" class="block py-3 px-4 text-white hover:bg-[#A82229] uppercase" @click="closeMenu">শর্তাবলি ওর নীতিমালা</NuxtLink>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any mobile-specific styles here */
</style>