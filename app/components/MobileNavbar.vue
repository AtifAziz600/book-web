<script setup>
</script>

<template>
  <div class="lg:hidden">
    <header class="bg-white shadow-lg py-3 sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
          <a href="/" class="flex items-center flex-shrink-0">
            <img src="/image/logo.png" class="h-12 w-12 rounded-full" alt="Brand Logo">
          </a>
          <div class="flex-1 flex justify-center mx-4">
            <div class="flex shadow-sm">
              <input type="text" placeholder="পণ্য, বিভাগ, অথবা ব্র্যান্ড অনুসন্ধান করুন..."
                class="flex-1 px-6 py-2.5 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500">
              <button
                class="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-r-lg transition duration-200 flex items-center">
                <Icon name="heroicons:magnifying-glass" class="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>

    <div class="md:hidden bg-white py-3 overflow-x-auto border-b">
      <div class="flex space-x-3 px-4">
        <NuxtLink to="/"
          class="flex-shrink-0 py-2 px-4 bg-white border border-gray-300 text-gray-800 rounded-full font-medium"
          exact-active-class="!bg-[#ED1B24] !text-white !border-none">হোম</NuxtLink>
        <NuxtLink to="/about"
          class="flex-shrink-0 py-2 px-4 bg-white border border-gray-300 text-gray-800 rounded-full font-medium"
          exact-active-class="!bg-[#ED1B24] !text-white !border-none">আমাদের সম্পর্কে</NuxtLink>
        <NuxtLink to="/books-category"
          class="flex-shrink-0 py-2 px-4 bg-white border border-gray-300 text-gray-800 rounded-full font-medium"
          exact-active-class="!bg-[#ED1B24] !text-white !border-none">পাঠ্যপুস্তক</NuxtLink>
        <a href="/order-form"
          class="flex-shrink-0 py-2 px-4 bg-white border border-gray-300 text-gray-800 rounded-full font-medium"
          exact-active-class="!bg-[#ED1B24] !text-white !border-none">অর্ডার ফর্ম</a>
        <NuxtLink to="/advice"
          class="flex-shrink-0 py-2 px-4 bg-white border border-gray-300 text-gray-800 rounded-full font-medium"
          exact-active-class="!bg-[#ED1B24] !text-white !border-none">পরামর্শ</NuxtLink>
        <NuxtLink to="/contact-us"
          class="flex-shrink-0 py-2 px-4 bg-white border border-gray-300 text-gray-800 rounded-full font-medium"
          exact-active-class="!bg-[#ED1B24] !text-white !border-none">যোগাযোগ</NuxtLink>
        <NuxtLink to="/Terms-condition"
          class="flex-shrink-0 py-2 px-4 bg-white border border-gray-300 text-gray-800 rounded-full font-medium"
          exact-active-class="!bg-[#ED1B24] !text-white !border-none">শর্তাবলি ওর নীতিমালা</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>