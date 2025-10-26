<script setup>
const config = useRuntimeConfig()
const baseURL = config.public.apiBase
const { $api } = useNuxtApp()
const {data: pages} = await useAsyncData('page', () => $api('/frontend/v1/page'));
const { data, pending, error, refresh } = await useAsyncData('settings', () => $api('/top-one-ir'))
const mediaLogoName = computed(() => data.value?.media_logo_name)
const footerContent = computed(() => data.value?.footer_columns)

// New computed properties for dynamic settings
const address = computed(() => data.value?.linkedin_link)
const email = computed(() => data.value?.email)
const phoneNumber = computed(() => data.value?.phone_number)
const whatsappNumber = computed(() => data.value?.whatsapp_number)
const hotlineNumber = computed(() => data.value?.hotline_number)
const facebookLink = computed(() => data.value?.facebook_link)
const whatsappLink = computed(() => `https://wa.me/${whatsappNumber.value}`)
</script>
<template>
  <footer class="bg-gray-800 text-white">
    <div class="bg-gray-800 py-10 md:py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div class="space-y-4">
            <img :src="data?.logo_light" class="w-18 h-auto md:w-18 lg:w-18 rounded-2xl object-cover justify-center items-center" alt="">
            <h3 class="text-xl font-bold text-white">
              {{ mediaLogoName }}
            </h3>
            <p class="text-gray-300 leading-relaxed">
              বই ও জ্ঞান প্রসারে আমাদের পাশে থাকুন। আপনার পছন্দের বইটি দ্রুত পেতে আজই যোগাযোগ করুন।
            </p>

            <div class="flex space-x-4">
              <a :href="facebookLink" class="p-2 bg-gray-700 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110" aria-label="Facebook Page">
                <Icon name="mdi:facebook" class="h-5 w-5 text-white"/>
              </a>
              <a :href="whatsappLink" class="p-2 bg-gray-700 rounded-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-110" aria-label="WhatsApp Contact">
                <Icon name="mdi:whatsapp" class="h-5 w-5 text-white"/>
              </a>
              <a :href="`mailto:${email}`" class="p-2 bg-gray-700 rounded-lg hover:bg-red-500 transition-all duration-300 transform hover:scale-110" aria-label="Email Address">
                <Icon name="mdi:email" class="h-5 w-5 text-white"/>
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-6 text-yellow-400 border-l-4 border-yellow-400 pl-3">
              গুরুত্বপূর্ণ লিংক
            </h3>
            <ul class="space-y-3">
              <li>
                <RouterLink to="/about" class="flex items-center text-gray-300 hover:text-yellow-300 transition-all duration-200 group">
                  <span class="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  আমাদের সম্পর্কে
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/products/AllBooks" class="flex items-center text-gray-300 hover:text-yellow-300 transition-all duration-200 group">
                  <span class="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  সকল বই
                </RouterLink>
              </li>
              <li v-for="page in pages?.slice(0,2)" :key="page?.id">
                <NuxtLink :to="`/page/${page?.slug}`" class="flex items-center text-gray-300 hover:text-yellow-300 transition-all duration-200 group">
                  <span class="w-2 h-2 bg-yellow-400 rounded-full mr-3">
                    </span>
                         {{ page?.title }}
                </NuxtLink>
                </li>
            </ul>
          </div>
          
  <div v-for="column in footerContent" :key="column.id" class="space-y-4">
    <h3 class="text-lg font-bold mb-6 text-yellow-400 border-l-4 border-yellow-400 pl-3">
      {{ column.title }}
    </h3>
    <ul class="space-y-3">
      <li v-for="page in column.pages" :key="page.slug">
        <NuxtLink :to="`/page/${page.slug}`" class="flex items-center text-gray-300 hover:text-yellow-300 transition-all duration-200 group">
          <span class="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
          {{ page.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
          <div>
            <h3 class="text-lg font-bold mb-6 text-yellow-400 border-l-4 border-yellow-400 pl-3">
              যোগাযোগ ও ঠিকানা
            </h3>
            <div class="space-y-4">
              <div>
                <p class="font-semibold text-yellow-400 mb-1">ঠিকানা:</p>
                <p class="text-gray-300">{{ address }}</p>
              </div>
              
              <div>
                <p class="font-semibold text-yellow-400 mb-1">ফোন:</p>
                <div class="flex items-center text-gray-300 mb-1">
                  <Icon name="mdi:phone" class="w-4 h-4 mr-2 text-yellow-400"/>
                  <span>{{ whatsappNumber }}</span>
                </div>
                <div class="flex items-center text-gray-300">
                  <Icon name="mdi:phone" class="w-4 h-4 mr-2 text-yellow-400"/>
                  <span>{{ hotlineNumber }} (বইয়ের জন্য)</span>
                </div>
              </div>


              <a :href="`mailto:${email}`" class="flex items-center text-yellow-300 hover:text-yellow-200 transition-colors duration-200 group">
                <Icon name="mdi:email" class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"/>
                <span class="break-all">{{ email }}</span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="bg-[#800000] py-6 border-t border-red-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-sm text-gray-300">
            © {{ new Date().getFullYear() }} 
            <span class="text-white font-semibold">সালসাবীল পাবলিকেশন্স</span>। 
            সর্বস্বত্ব সংরক্ষিত। 
            <span class="text-gray-400">All Rights Reserved</span>
                    | <span class="text-gray-400">Design & Developed by</span> 
        <a href="https://creativetechpark.com" target="_blank" class="text-yellow-400 hover:text-white transition-colors duration-200 font-semibold">
          Creative Tech Park
        </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
