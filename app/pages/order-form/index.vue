<script setup>
import { ref, computed } from "vue";
const subjects = ref([
    { id: 1, name: "ছবি আঁকিবুকি অনুশীলন", rate: 250, quantity: 0, image: "/image/book-1.jpg" },
    { id: 2, name: "ছেলে অথবা মেয়েদের লেখা", rate: 310, quantity: 0, image: "/image/book-1.jpg" },
    { id: 3, name: "অঙ্কের অনুশীলন", rate: 120, quantity: 0, image: "/image/book-1.jpg" },
    { id: 4, name: "আলফাবেট লেখা", rate: 110, quantity: 0, image: "/image/book-1.jpg" },
    { id: 5, name: "শ্রেণী কার্য (টেবিল কাজ)", rate: 100, quantity: 0, image: "/image/book-1.jpg" },
    { id: 6, name: "ফ্রিজার রঙের কাজ", rate: 420, quantity: 0, image: "/image/book-1.jpg" },
    { id: 7, name: "কার্ড আঁকিবুকি", rate: 320, quantity: 0, image: "/image/book-1.jpg" },
    { id: 8, name: "ফ্রিজার কেটে আঠা লাগানো", rate: 230, quantity: 0, image: "/image/book-1.jpg" },
    { id: 9, name: "ফ্রিজার জার্নাল ও স্কেচবুক লেখা", rate: 520, quantity: 0, image: "/image/book-1.jpg" },
    { id: 10, name: "আলফাবেট ব্লক", rate: 620, quantity: 0, image: "/image/book-1.jpg" },
    { id: 11, name: "নিয়মিত ছুটি (৭)", rate: 430, quantity: 0, image: "/image/book-1.jpg" },
]);

const totalAmount = computed(() => {
  return subjects.value.reduce((total, subject) => {
    return total + (subject.quantity * subject.rate);
  }, 0).toFixed(2);
});
</script>

<template>
    <section class="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-8">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">অর্ডার ফর্ম</h2>
                <div class="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
            </div>
            
            <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gradient-to-r from-red-500 to-red-600 text-white sticky top-0 z-10">
                            <tr>
                                <th class="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider">ক্রম</th>
                                <th class="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider">ছবি</th>
                                <th class="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider">পণ্যের নাম</th>
                                <th class="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider">মূল্য</th>
                                <th class="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider">পরিমাণ</th>
                                <th class="py-3 px-4 text-right text-sm font-semibold uppercase tracking-wider">মোট (৳)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white max-h-[350px] overflow-y-auto block">
                            <tr v-for="(subject, index) in subjects" :key="subject.id" 
                                class="hover:bg-gray-50 transition-colors duration-150 table-row">
                                <td class="py-3 px-4 text-sm font-medium text-gray-700">{{ index + 1 }}</td>
                                <td class="py-3 px-3 text-sm">
                                    <div class="flex justify-center">
                                        <img :src="subject.image" :alt="subject.name" 
                                             class="w-10 h-10 object-cover rounded-lg border border-gray-200 shadow-sm" />
                                    </div>
                                </td>
                                <td class="py-3 px-4 text-sm font-medium text-gray-800">{{ subject.name }}</td>
                                <td class="py-3 px-4 text-sm">
                                    <input type="number" v-model.number="subject.rate" min="0"
                                        class="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-right" />
                                </td>
                                <td class="py-3 px-4 text-sm">
                                    <input type="number" v-model.number="subject.quantity" min="0"
                                        class="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-right" />
                                </td>
                                <td class="py-3 px-4 text-sm font-semibold text-right text-gray-800">
                                    {{ (subject.quantity * subject.rate).toFixed(2) }}
                                </td>
                            </tr>
                        </tbody>
                        <tfoot class="bg-gray-50 font-semibold sticky bottom-0 z-10">
                            <tr>
                                <td colspan="5" class="py-3 px-4 text-right text-gray-700">মোট:</td>
                                <td class="py-3 px-4 text-right text-lg text-red-600">{{ totalAmount }}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            
            <div class="flex justify-center">
                <NuxtLink to="/order-form/order-table" 
                    class="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg shadow-md hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                    <button class="flex items-center">
                        <span>বিল</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped>

.overflow-x-auto::-webkit-scrollbar {
    height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
    background: #c5c5c5;
    border-radius: 10px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
}


tbody {
    display: block;
    max-height: 350px; 
    overflow-y: auto;
}


thead, tbody tr, tfoot {
    display: table;
    width: 100%;
    table-layout: fixed;
}

th, td {
    width: calc(100% / 6); 
}
</style>