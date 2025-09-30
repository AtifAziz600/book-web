<script setup>
definePageMeta({
  layout: 'guest'
})

import { ref } from 'vue'
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const isLoading = ref(false)
const showPassword = ref(false)

const handleRegister = async () => {

  if (!email.value || !password.value) {
    alert('অনুগ্রহ করে ইমেল এবং পাসওয়ার্ড উভয়ই লিখুন')
    return
  }
  
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
    alert(`নিবন্ধনের চেষ্টা করা হয়েছে এই ইমেল দিয়ে: ${email.value}`)
  }, 1500)
}
</script>

<template>
  <section class="min-h-screen w-full relative overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 transition-all duration-1000" 
          style="background-image: url('/image/auth-bg.jpg');">
    
    <div class="relative z-10 w-full max-w-xl">
      <div class="bg-white shadow-xl overflow-hidden border border-gray-100 rounded-lg">
        <div class="p-8 text-start">
          <h1 class="text-2xl font-bold text-gray-700 mb-2">সালসাবিল পাবলিকেশন</h1>
          <p class="text-gray-600">আপনার অ্যাকাউন্টে **নিবন্ধন** করুন</p>
        </div>
        <div class="p-8">
          <form @submit.prevent="handleRegister">
            
            <div class="mb-6">
              <label for="firstName" class="block text-gray-700 font-medium mb-2">প্রথম নাম</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon name="mdi:user" class="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  id="firstName"
                  v-model="firstName"
                  type="text" 
                  class="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition" 
                  placeholder="আপনার প্রথম নাম লিখুন"
                  required
                />
              </div>
            </div>
            
            <div class="mb-6">
              <label for="lastName" class="block text-gray-700 font-medium mb-2">শেষ নাম</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon name="mdi:user-outline" class="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  id="lastName"
                  v-model="lastName"
                  type="text" 
                  class="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition" 
                  placeholder="আপনার শেষ নাম লিখুন"
                  required
                />
              </div>
            </div>
            
            <div class="mb-6">
              <label for="email" class="block text-gray-700 font-medium mb-2">ইমেল ঠিকানা</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon name="mdi:email" class="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  id="email"
                  v-model="email"
                  type="email" 
                  class="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition" 
                  placeholder="আপনার@ইমেল.কম"
                  required
                />
              </div>
            </div>
            
            <div class="mb-6">
              <label for="password" class="block text-gray-700 font-medium mb-2">পাসওয়ার্ড</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon name="mdi:lock" class="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  id="password"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'" 
                  class="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition" 
                  placeholder="আপনার পাসওয়ার্ড লিখুন"
                  required
                />
                <button 
                  type="button"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center"
                  @click="showPassword = !showPassword"
                >
                  <Icon v-if="showPassword" name="mdi:eye-off" class="h-5 w-5 text-gray-500" />
                  <Icon v-else name="mdi:eye" class="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
            
            <button 
              type="submit" 
              class="w-full bg-red-500 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition flex items-center justify-center"
              :disabled="isLoading"
            >
              <Icon v-if="isLoading" name="mdi:loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
              {{ isLoading ? 'নিবন্ধন হচ্ছে...' : 'নিবন্ধন' }}
            </button>
          </form>
          
          <p class="mt-8 text-center text-sm text-gray-600">
            যদি আপনার একটি অ্যাকাউন্ট থাকে, তাহলে অনুগ্রহ করে
            <NuxtLink href="/login" class="font-medium text-red-600 hover:text-red-500 transition">লগইন করুন</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>