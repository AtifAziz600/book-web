<script setup>
import { ref } from "vue";

const subjects = ref([
  { id: 1, name: "ছবি আঁকিবুকি অনুশীলন" },
  { id: 2, name: "ছেলে অথবা মেয়েদের লেখা" },
  { id: 3, name: "অঙ্কের অনুশীলন" },
  { id: 4, name: "আলফাবেট লেখা" },
  { id: 5, name: "শ্রেণী কার্য (টেবিল কাজ)" },
  { id: 6, name: "ফ্রিজার রঙের কাজ" },
  { id: 7, name: "কার্ড আঁকিবুকি" },
  { id: 8, name: "ফ্রিজার কেটে আঠা লাগানো" },
  { id: 9, name: "ফ্রিজার জার্নাল ও স্কেচবুক লেখা" },
  { id: 10, name: "আলফাবেট ব্লক" },
  { id: 11, name: "নিয়মিত ছুটি (৭)" },
]);
</script>

<template>
  <section class="w-full bg-white py-6">
    <div class="container mx-auto px-4">
      <h2 class="text-center text-xl font-bold mb-6">অর্জন ফরম</h2>

      <div class="overflow-x-auto">
        <table class="min-w-full border border-gray-400">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-400 px-2 py-2 text-sm">ক্রম</th>
              <th class="border border-gray-400 px-2 py-2 text-sm">বিষয়</th>
              <th class="border border-gray-400 px-2 py-2 text-sm">দর</th>
              <th class="border border-gray-400 px-2 py-2 text-sm">পরিমাণ</th>
              <th class="border border-gray-400 px-2 py-2 text-sm">গ্রেড</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(subject, index) in subjects" :key="subject.id">
              <td class="border border-gray-400 px-2 py-2 text-center text-sm">{{ index + 1 }}</td>
              <td class="border border-gray-400 px-2 py-2 text-sm">{{ subject.name }}</td>
              <td class="border border-gray-400 px-2 py-2 text-sm"></td>
              <td class="border border-gray-400 px-2 py-2 text-sm"></td>
              <td class="border border-gray-400 px-2 py-2 text-sm"></td>
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
<button class="flex items-center justify-center">বিল</button>
      </div>
    </div>
  </section>
</template>
