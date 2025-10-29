<script setup>
</script>
<template>
  <section
    class="w-full relative overflow-hidden"
    style="background: linear-gradient(to bottom right, #f8fafc, #ffffff, #f1f5f9)">
    <div class="container mx-auto px-2 max-w-7xl">
      <div class="py-4">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            class="lg:py-14 lg:px-20 p-10 rounded-2xl flex items-center justify-between flex-col lg:flex-row"
            style="background: var(--color-secondary);">
            <div class="block text-center mb-5 lg:text-left lg:mb-0">
              <h2 class="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">
                আমাদের প্রকাশনা বই
              </h2>
              <p class="text-xl text-indigo-100">
                এবং স্টেশনারি জিনিসপত্র অর্ডার করুন
              </p>
            </div>
            <NuxtLink to="/products/AllBooks"
              class="flex items-center gap-2 rounded-full shadow-sm text-lg font-semibold py-4 px-8 transition-all duration-500"
              style="background-color: white; color: var(--color-primary);">
              বিস্তারিত
            </NuxtLink>

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