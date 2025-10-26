<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const name = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const isLoading = ref(false)
const showPassword = ref(false)
const auth = useAuthStore()

const handleRegister = async () => {
  try {
    await auth.register({
      name: name.value,
      email: email.value,
      password: password.value,
      phone: phone.value,
    })

    alert('নিবন্ধন সফল হয়েছে!')
  } catch (error: any) {
    console.error('Registration error:', error)
    const message = error?.data?.message || 'নিবন্ধন ব্যর্থ হয়েছে। অনুগ্রহ করে আপনার তথ্য পরীক্ষা করুন।'
    alert(message)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section class="min-h-screen w-full relative overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 transition-all duration-1000">
    <div class="relative z-10 w-full max-w-xl">
      <div class="bg-white shadow-xl overflow-hidden border border-gray-100 rounded-lg">
        <div class="p-8 text-start">
          <h1 class="text-2xl font-bold text-gray-700 mb-2">সালসাবিল পাবলিকেশন</h1>
          <p class="text-gray-600">আপনার অ্যাকাউন্টে নিবন্ধন করুন</p>
        </div>

        <div class="p-8">
          <form @submit.prevent="handleRegister">
            <div class="mb-6">
              <label for="name" class="block text-gray-700 font-medium mb-2">নাম</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon name="mdi:user-outline" class="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  v-model="name"
                  type="text"
                  class="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  placeholder="আপনার নাম লিখুন"
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
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div class="mb-6">
              <label for="confirm-phone" class="block text-gray-700 font-medium mb-2">ফোন নম্বর</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon name="mdi:phone" class="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirm-phone"
                  v-model="phone"
                  type="tel"
                  class="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  placeholder="ফোন নম্বর লিখুন"
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
              class="w-full bg-red-500 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition flex items-center justify-center"
              :disabled="isLoading"
            >
              <Icon v-if="isLoading" name="mdi:loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
              {{ isLoading ? 'নিবন্ধন হচ্ছে...' : 'নিবন্ধন' }}
            </button>
          </form>

        </div>
      </div>
    </div>
  </section>
</template>
