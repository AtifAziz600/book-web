<script setup>
import { ref } from 'vue'
const phone = ref('')
const password = ref('')
const rememberMe = ref(false)
const isLoading = ref(false)
const showPassword = ref(false)
import { useRouter } from 'vue-router'

const router = useRouter() 
const handleLogin = async () => {
  
  if (!phone.value || !password.value) {
    alert('অনুগ্রহ করে ইমেল এবং পাসওয়ার্ড উভয়ই লিখুন')
    return
  }
  
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    alert(`লগইন করার চেষ্টা করা হয়েছে এই ইমেল দিয়ে: ${email.value}`)
    router.push('/dashboard')
  }, 1500)
}
</script>

<template>
  <section class="min-h-screen w-full relative overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 transition-all duration-1000">
    
    <div class="relative z-10 w-full max-w-xl">
      <div class="bg-white shadow-xl overflow-hidden border border-gray-100 rounded-lg">
        <div class="p-8 text-start">
          <h1 class="text-2xl font-bold text-gray-700 mb-2">সালসাবিল পাবলিকেশন</h1>
          <p class="text-gray-600">আপনার অ্যাকাউন্টে লগইন করুন</p>
        </div>
        <div class="p-8">
          <form @submit.prevent="handleLogin">
            
            <div class="mb-6">
              <label for="phone" class="block text-gray-700 font-medium mb-2">ফোন নম্বর</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon name="mdi:phone" class="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  id="phone"
                  v-model="phone"
                  type="phone" 
                  class="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition" 
                  placeholder="আপনার ফোন নম্বর লিখুন"
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
            
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center">
                <input 
                  id="remember-me" 
                  v-model="rememberMe"
                  type="checkbox" 
                  class="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label for="remember-me" class="ml-2 block text-sm text-gray-700">আমাকে মনে রাখুন</label>
              </div>
              <div class="text-sm">
                <a href="#" class="font-medium text-red-600 hover:text-red-500 transition">পাসওয়ার্ড ভুলে গেছেন?</a>
              </div>
            </div>
            
            <button 
              type="submit" 
              class="w-full bg-red-500 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition flex items-center justify-center"
              :disabled="isLoading"
            >
              <Icon v-if="isLoading" name="mdi:loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
              {{ isLoading ? 'প্রবেশ করা হচ্ছে...' : 'প্রবেশ করুন' }}
            </button>
          </form>
          
          <p class="mt-8 text-center text-sm text-gray-600">
            আপনার কি অ্যাকাউন্ট নেই?
            <NuxtLink to="/register" class="font-medium text-red-600 hover:text-red-500 transition">নিবন্ধন করুন</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>