<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth' 
const auth = useAuthStore()

const activeTab = ref('profile')

const tabs = [
  { id: 'profile', title: 'Profile' },
  { id: 'orders', title: 'Order List' },
]

const selectTab = (tabId: string) => {
  activeTab.value = tabId
}
</script>

<template>
  <section class="w-full h-40 lg:h-60 bg-[url('https://img.freepik.com/premium-vector/3d-vector-set-online-shopping-items-floating-air-mobile-phone-coupons-bag-gift-credit-card-basket_624031-736.jpg?w=1800')] bg-no-repeat bg-cover"> 
  </section>

  <div class="px-6 lg:px-0 max-w-3xl mx-auto -mt-16 lg:-mt-28 pb-10">
    <div class="p-5 bg-white shadow mb-6 rounded-lg">
      <div class="flex items-start lg:items-center">
        <div class="w-12 h-12 lg:w-20 lg:h-20 rounded-full overflow-hidden border-4 border-slate-100">
          <img class="w-full h-full object-cover" src="https://cdn-icons-png.freepik.com/256/15232/15232242.png?uid=R102446229&ga=GA1.1.1386564851.1716744340&semt=ais_hybrid">
        </div>
        <div class="pl-5">
          <p><strong>Name:</strong> {{ auth.user?.user?.name || 'Not available' }}</p>
          <p class="mb-2 text-sm text-gray-500">Member Since 2023</p> 
          <span class="inline-flex items-center gap-2 border uppercase rounded-md px-2 py-1 text-xs bg-blue-50 text-blue-700">
            <span class="text-lg">⭐</span> 
            verified account
          </span>
        </div>
      </div>
    </div>

    <div class="border-b border-gray-200 mb-6">
      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
        <button v-for="tab in tabs" :key="tab.id" @click="selectTab(tab.id)"
          :class="[
            tab.id === activeTab
              ? 'border-indigo-500 text-indigo-600 font-semibold'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
            'whitespace-nowrap py-4 px-1 border-b-2 text-sm focus:outline-none transition duration-150'
          ]">
          {{ tab.title }}
        </button>
      </nav>
    </div>

    <div class="p-5 bg-white shadow rounded-lg">
      
      <div v-if="activeTab === 'profile'">
        <h2 class="text-2xl font-bold mb-4">Account Profile</h2>
        <p class="mb-2 text-gray-700"><strong>Name:</strong> {{ auth.user?.user?.name }}</p>
        <p class="mb-4 text-gray-700"><strong>Email:</strong> {{ auth.user?.user?.email }}</p>
        <button class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Edit Profile</button>
      </div>

      <div v-else-if="activeTab === 'orders'">
        <h2 class="text-2xl font-bold mb-4">Order History</h2>
        <ul class="divide-y divide-gray-200">
          <li class="py-3 flex justify-between">
            <span class="font-medium">Order #1001</span>
            <span class="text-sm text-gray-600">Shipped (2025-10-10)</span>
            <span class="font-semibold text-green-600">$45.00</span>
          </li>
          <li class="py-3 flex justify-between">
            <span class="font-medium">Order #1002</span>
            <span class="text-sm text-gray-600">Delivered (2025-09-25)</span>
            <span class="font-semibold text-green-600">$22.99</span>
          </li>
          <li class="py-3 flex justify-between">
            <span class="font-medium">Order #1003</span>
            <span class="text-sm text-gray-600">Cancelled (2025-09-01)</span>
            <span class="font-semibold text-red-600">$18.50</span>
          </li>
        </ul>
      </div>

      <div v-else-if="activeTab === 'logout'">
        <h2 class="text-2xl font-bold mb-4 text-red-600">Ready to Log Out?</h2>
        <p class="mb-4 text-gray-700">Clicking the button below will securely end your session.</p>
        <button @click="selectTab('logout')" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Confirm Logout</button>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>