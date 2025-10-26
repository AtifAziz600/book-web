<template>
  <section class="w-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12">
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div class="container max-w-7xl mx-auto">
        <div>
          <h2 class="font-semibold text-xl text-gray-600 mb-4">ইনভয়েস</h2>
          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="text-gray-600 lg:col-span-2">
                <p class="font-medium text-lg mb-4">অর্ডার বিস্তারিত</p>
                <div class="overflow-x-auto mb-6">
                  <table class="min-w-full border border-gray-400">
                    <thead>
                      <tr class="bg-gray-100">
                        <th class="border border-gray-400 px-2 py-2 text-sm">ক্রম</th>
                        <th class="border border-gray-400 px-2 py-2 text-sm">বিষয়</th>
                        <th class="border border-gray-400 px-2 py-2 text-sm">দর</th>
                        <th class="border border-gray-400 px-2 py-2 text-sm">পরিমাণ</th>
                        <th class="border border-gray-400 px-2 py-2 text-sm">মোট</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in order?.order_details" :key="item.id">
                        <td class="border border-gray-400 px-2 py-2 text-center text-sm">
                          {{ index + 1 }}
                        </td>
                        <td class="border border-gray-400 px-2 py-2 text-sm">
                          {{ item.product.title }}
                        </td>
                        <td class="border border-gray-400 px-2 py-2 text-sm">
                          {{ item.price }}
                        </td>
                        <td class="border border-gray-400 px-2 py-2 text-sm">
                          {{ item.quantity }}
                        </td>
                        <td class="border border-gray-400 px-2 py-2 text-right font-semibold text-sm">
                          {{ (item.price * item.quantity).toFixed(2) }}
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr class="bg-gray-100 font-bold">
                        <td colspan="4" class="border border-gray-400 px-2 py-2 text-right">
                          মোট মূল্য (Sub Total):
                        </td>
                        <td class="border border-gray-400 px-2 py-2 text-right text-red-600">
                          {{ order?.sub_total?.toFixed(2) }}
                        </td>
                      </tr>
                      <tr class="bg-gray-100 font-bold">
                        <td colspan="4" class="border border-gray-400 px-2 py-2 text-right">
                          ডেলিভারি চার্জ:
                        </td>
                        <td class="border border-gray-400 px-2 py-2 text-right text-red-600">
                          {{ order?.delivery_charge}}
                        </td>
                      </tr>
                      <tr class="bg-gray-100 font-bold">
                        <td colspan="4" class="border border-gray-400 px-2 py-2 text-right">
                          সর্বমোট (Grand Total):
                        </td>
                        <td class="border border-gray-400 px-2 py-2 text-right text-red-600">
                          {{ order?.grand_total }}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <p class="font-medium text-lg mb-4">আপনার তথ্য</p>
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2">
                  <div class="md:col-span-1">
                    <label class="block mb-1 text-sm font-medium text-gray-700">প্রতিষ্ঠানের নাম:</label>
                    <p class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center">{{ order?.institution_name }}</p>
                  </div>
                  <div class="md:col-span-1">
                    <label class="block mb-1 text-sm font-medium text-gray-700">ইনস্টিটিউট কোড:</label>
                    <p class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center">{{ order?.institute_code }}</p>
                  </div>
                  <div class="md:col-span-1">
                    <label class="block mb-1 text-sm font-medium text-gray-700">ফোন নাম্বার:</label>
                    <p class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center">{{ order?.phone }}</p>
                  </div>
                  <div class="md:col-span-1">
                    <label class="block mb-1 text-sm font-medium text-gray-700">ঠিকানা:</label>
                    <p class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center">{{ order?.address }}</p>
                  </div>
                  <div class="md:col-span-2">
                    <label class="block mb-1 text-sm font-medium text-gray-700">নোট:</label>
                    <p class="border mt-1 rounded px-4 py-2 w-full bg-gray-50 min-h-[80px]">{{ order?.special_instructions }}</p>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-1">
                <div class="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100">
                  <h2 class="text-xl font-bold mb-4 text-gray-800">অর্ডার সারাংশ</h2>
                  <div class="space-y-3 mb-6">
                    <div class="flex justify-between py-1">
                      <span class="text-gray-600">পণ্যের মূল্য:</span>
                      <span class="font-medium">৳ {{ order?.sub_total }}</span>
                    </div>
                    <div class="flex justify-between py-1">
                      <span class="text-gray-600">ডেলিভারি চার্জ:</span>
                      <span class="font-medium">৳ {{ order?.delivery_charge }}</span>
                    </div>
                    <div class="border-t border-gray-200 pt-3 mt-3">
                      <div class="flex justify-between font-bold text-lg">
                        <span>সর্বমোট:</span>
                        <span class="text-red-600">৳ {{ order?.grand_total }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Removed "Confirm Order" button as this is an invoice page -->
              </div>

              <div class="mb-4">
                  <button 
                    @click="viewInvoicePdf"
                    class="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <Icon name="mdi:file-pdf-box" class="w-4 h-4 mr-2" />
                    ইনভয়েস PDF দেখুন
                  </button>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, navigateTo } from 'nuxt/app';

const { $api } = useNuxtApp();
const route = useRoute();
const order = ref(null);

onMounted(async () => {
  const orderId = route.query.order_id;
  if (orderId) {
    try {
      const response = await $api(`/frontend/v1/order/${orderId}`);
      order.value = response.data;
    } catch (error) {
      console.error("Error fetching order details:", error);
      alert("অর্ডার বিস্তারিত লোড করতে সমস্যা হয়েছে।");
    }
  } else {
    alert("কোনো অর্ডার আইডি পাওয়া যায়নি।");
    navigateTo('/order-form'); // Redirect to order form if no order ID
  }
});

// Add this function for PDF viewing
const viewInvoicePdf = () => {
  if (order.value && order.value.id) {
    // Assuming your PDF endpoint is something like this
    // Adjust the URL based on your actual API endpoint
    const pdfUrl = `/api/order/${order.value.id}/invoice.pdf`;
    window.open(pdfUrl, '_blank');
  } else {
    alert('অর্ডার ডেটা পাওয়া যায়নি।');
  }
};
</script>

<style scoped>
/* Add any specific styles for this page here */
</style>
