<script setup>
import { ref, computed } from "vue";

const isModalOpen = ref(false);
const openModal = () => {
  isModalOpen.value = true;
};
const closeModal = () => {
  isModalOpen.value = false;
};
const subjects = ref([
  { id: 1, name: "ছবি আঁকিবুকি অনুশীলন", rate: 200, quantity: 0, grade: 0 },
  { id: 2, name: "ছেলে অথবা মেয়েদের লেখা", rate: 350, quantity: 0, grade: 0 },
  { id: 3, name: "অঙ্কের অনুশীলন", rate: 500, quantity: 0, grade: 0 },
  { id: 4, name: "আলফাবেট লেখা", rate: 250, quantity: 0, grade: 0 },
  { id: 5, name: "শ্রেণী কার্য (টেবিল কাজ)", rate: 300, quantity: 0, grade: 0 },
  { id: 6, name: "ফ্রিজার রঙের কাজ", rate: 150, quantity: 0, grade: 0 },
  { id: 7, name: "কার্ড আঁকিবুকি", rate: 100, quantity: 0, grade: 0 },
  { id: 8, name: "ফ্রিজার কেটে আঠা লাগানো", rate: 400, quantity: 0, grade: 0 },
  { id: 9, name: "ফ্রিজার জার্নাল ও স্কেচবুক লেখা", rate: 550, quantity: 0, grade: 0 },
  { id: 10, name: "আলফাবেট ব্লক", rate: 120, quantity: 0, grade: 0 },
  { id: 11, name: "নিয়মিত ছুটি (৭)", rate: 0, quantity: 1, grade: 0 },
]);
const isProcessing = ref(false);
const billDetails = computed(() => {
  const taxRate = 0.10;
  const items = subjects.value
    .filter(subject => subject.quantity > 0)
    .map(subject => ({
      name: subject.name,
      quantity: subject.quantity,
      price: subject.rate,
      lineTotal: subject.quantity * subject.rate
    }));
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return {
    items,
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    total: total.toFixed(2)
  };
});


const processPayment = async () => {
  isProcessing.value = true;
  await new Promise(resolve => setTimeout(resolve, 1500));
  alert(`পেমেন্ট সম্পন্ন হয়েছে! মোট: ${billDetails.value.total} টাকা।`);
  closeModal();
  isProcessing.value = false;
};

</script>

<template>
  <section class="w-full bg-white py-6">
    <div class="container mx-auto px-4">
      <h2 class="text-center text-xl font-bold mb-6">অর্ডার ফর্ম</h2>

      <div class="overflow-x-auto">
        <table class="min-w-full border border-gray-400">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-400 px-2 py-2 text-sm">ক্রম</th>
              <th class="border border-gray-400 px-2 py-2 text-sm">বিষয়</th>
              <th class="border border-gray-400 px-2 py-2 text-sm">দর</th>
              <th class="border border-gray-400 px-2 py-2 text-sm">পরিমাণ</th>
            </tr>
          </thead>
          <tbody>

            <tr v-for="(subject, index) in subjects" :key="subject.id">

              <td class="border border-gray-400 px-2 py-2 text-center text-sm">{{ index + 1 }}</td>

              <td class="border border-gray-400 px-2 py-2 text-sm">{{ subject.name }}</td>
              <td class="border border-gray-400 px-2 py-2 text-sm">
                <input type="number" v-model.number="subject.rate" min="0"
                  class="w-20 border rounded px-1 py-0.5 text-right focus:ring-red-500 focus:border-red-500" />
              </td>

              <td class="border border-gray-400 px-2 py-2 text-sm">
                <input type="number" v-model.number="subject.quantity" min="0"
                  class="w-20 border rounded px-1 py-0.5 text-right focus:ring-red-500 focus:border-red-500" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="max-w-7xl items-end">
        <p class="mt-4 text-sm font-semibold text-gray-700">
          সর্বমোট অর্জিত মার্কস অনুযায়ী মূল্যায়নঃ
        </p>
      </div>
      <div class="flex items-center justify-center">
        <button @click="openModal"
          class="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-red-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-red-700">বিল</button>
      </div>
    </div>


    <transition name="modal">
      <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center" @click.self="closeModal">
        <div class="absolute inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
        </div>
        <div
          class="relative bg-white rounded-lg shadow-xl w-full max-w-lg p-6 m-4 transform transition-all duration-300">
          <div class="flex justify-between items-center border-b pb-3">
            <h3 class="text-xl font-semibold text-gray-800">অর্ডার বিল বিস্তারিত</h3>
            <button @click="closeModal"
              class="text-gray-400 hover:text-gray-600 text-2xl font-bold leading-none">&times;</button>
          </div>

          <div class="py-4">
            <div class="border-b pb-3 mb-3">
              <h4 class="font-semibold text-gray-700">বিল বিবরণী</h4>
              <p class="text-sm text-gray-500">তারিখ: {{ new Date().toLocaleDateString('bn-BD') }}</p>
            </div>

            <div class="space-y-2 max-h-60 overflow-y-auto">
              <div v-for="(item, index) in billDetails.items" :key="index" class="flex justify-between text-sm">
                <span>{{ item.name }}</span>
                <span>{{ item.quantity }} × {{ item.price }} = {{ item.quantity * item.price }} টাকা</span>
              </div>
            </div>
            <div class="py-4">
              <div class="border-b pb-3 mb-3">
                <h4 class="font-semibold text-gray-700">বিল বিবরণী</h4>
                <p class="text-sm text-gray-500">তারিখ: {{ new Date().toLocaleDateString('bn-BD') }}</p>
              </div>

              <div class="space-y-2 max-h-60 overflow-y-auto">
                <div v-for="(item, index) in billDetails.items" :key="index" class="flex justify-between text-sm">
                  <span>{{ item.name }}</span>
                  <span>{{ item.quantity }} × {{ item.price }} = {{ item.lineTotal.toFixed(2) }} টাকা</span>
                </div>
                <div v-if="billDetails.items.length === 0" class="text-center text-gray-500 py-4">
                  কোন আইটেম নির্বাচন করা হয়নি।
                </div>
              </div>

              <div class="mt-4 pt-3 border-t space-y-1">
                <div class="flex justify-between text-sm">
                  <span>সাবটোটাল:</span>
                  <span>{{ billDetails.subtotal }} টাকা</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span>ভ্যাট (১০%):</span>
                  <span>{{ billDetails.tax }} টাকা</span>
                </div>
                <div class="flex justify-between font-semibold text-base pt-2 border-t">
                  <span>সর্বমোট:</span>
                  <span>{{ billDetails.total }} টাকা</span>
                </div>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t space-y-1">
              <div class="flex justify-between text-sm">
                <span>সাবটোটাল:</span>
                <span>{{ billDetails.subtotal }} টাকা</span>
              </div>
              <div class="flex justify-between text-sm">
                <span>ভ্যাট (১০%):</span>
                <span>{{ billDetails.tax }} টাকা</span>
              </div>
              <div class="flex justify-between font-semibold text-base pt-2 border-t">
                <span>সর্বমোট:</span>
                <span>{{ billDetails.total }} টাকা</span>
              </div>
            </div>
          </div>

          <div class="flex justify-between pt-3 border-t">
            <button @click="closeModal"
              class="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded hover:bg-gray-300 transition duration-150">
              বাতিল করুন
            </button>
            <button @click="processPayment" :disabled="isProcessing"
              class="px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-150 flex items-center disabled:opacity-70">
              <svg v-if="isProcessing" class="animate-spin h-5 w-5 mr-1 text-white" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
              <span v-if="isProcessing">প্রক্রিয়া হচ্ছে...</span>
              <span v-else>পেমেন্ট করুন</span>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.9);
}
</style>
