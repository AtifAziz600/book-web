<script setup>
const settings = ref(null);
const loading = ref(true);
const { $api } = useNuxtApp();
const { data: order } = useAsyncData(() => $api(`/frontend/v1/order/${useRoute().query?.order_id}`))
const getSettings = async () => {
  try {
    const response = await $api({
      method: 'get',
      url: '/frontend/v1/top-one-ir',
    });
    if (response) {
      settings.value = response;
    }
  } catch (err) {
    console.error('Error fetching settings:', err);
  }
};

const printInvoice = (areaID) => {
  const printContent = document.getElementById(areaID).innerHTML;
  const originalContent = document.body.innerHTML;
  document.body.innerHTML = printContent;
  window.print();
  document.body.innerHTML = originalContent;
};

onMounted(async () => {
  await Promise.all([getSettings()]);
  loading.value = false;
});
</script>

<template>
  <div>
    <section class="overflow-hidden py-5">
      <div class="w-full max-w-4xl mx-auto p-6">
        <button class="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white rounded-md mb-4 transition-colors"
          @click="printInvoice('areaOfPrint')">ইনভয়েস প্রিন্ট করুন
        </button>
        <div class="w-full bg-white shadow-lg rounded-lg overflow-hidden" id="areaOfPrint">
          <div class="border border-gray-300 p-8">
            <div class="flex justify-between items-start mb-8 pb-6 border-b border-gray-200">
              <div>
                <h1 class="text-2xl font-bold text-gray-800 mb-2">ইনভয়েস</h1>
                <div class="bg-blue-100 text-blue-800 inline-block px-3 py-1 rounded-full text-sm font-medium">
                  {{ order?.order_status === 'delivered' ? 'বিতরণকৃত' : order?.order_status === 'pending' ? 'মুলতুবি' :
                    order?.order_status }}
                </div>
              </div>
              <div class="text-right">
                <h2 class="text-xl font-bold text-gray-800">{{ order?.id }}</h2>
                <p class="text-gray-600 mt-1">ইনভয়েস তারিখ: {{ order?.order_date }}</p>
              </div>
            </div>
            <div class="flex flex-col md:flex-row justify-between mb-10">
              <div class="mb-6 md:mb-0">
                <h3 class="text-lg font-semibold text-gray-700 mb-3">ক্রেতার তথ্য</h3>
                <ul class="list-none space-y-2">
                  <li class="flex items-start">
                    <span class="text-gray-600 w-24">প্রতিষ্ঠান:</span>
                    <span class="font-medium">{{ order?.institution_name }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-600 w-24">কোড:</span>
                    <span class="font-medium">{{ order?.institution_code }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-600 w-24">ফোন:</span>
                    <span class="font-medium">{{ order?.address?.phone }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-600 w-24">জেলা:</span>
                    <span class="font-medium">{{ order?.address?.state }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-600 w-24">থানা:</span>
                    <span class="font-medium">{{ order?.address?.city }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-600 w-24">ঠিকানা:</span>
                    <span class="font-medium">{{ order?.address?.street_address }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-600 w-24">নোট:</span>
                    <span class="font-medium">{{ order?.status_note }}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">অর্ডার বিবরণ</h3>
                <ul class="list-none space-y-2">
                  <li class="flex items-start">
                    <span class="text-gray-600 w-32">অর্ডার তারিখ:</span>
                    <span class="font-medium">{{ order?.order_date }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-600 w-32">অর্ডার স্ট্যাটাস:</span>
                    <span class="font-medium">{{ order?.order_status === 'delivered' ? 'বিতরণকৃত' : order?.order_status
                      === 'pending' ? 'মুলতুবি' : order?.order_status }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-600 w-32">পেমেন্ট স্ট্যাটাস:</span>
                    <span class="font-medium">{{ order?.payment_status === 'paid' ? 'পরিশোধিত' : order?.payment_status
                      === 'pending' ? 'মুলতুবি' : order?.payment_status }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mb-10">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">পণ্যের তালিকা</h3>
              <table class="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="p-3 text-left font-semibold text-gray-700">পণ্যের নাম</th>
                    <th class="p-3 text-center font-semibold text-gray-700">দাম</th>
                    <th class="p-3 text-center font-semibold text-gray-700">পরিমাণ</th>
                    <th class="p-3 text-center font-semibold text-gray-700">মোট</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in order?.order_details" :key="`order-details-${index}`"
                    :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                    <td class="p-3 text-left text-sm border-t border-gray-300">
                      {{ item.product?.title }}
                    </td>
                    <td class="p-3 text-center border-t border-gray-300">
                      <span class="font-medium">{{ settings?.currency_symbol }}{{ item.price }}</span>
                    </td>
                    <td class="p-3 text-center border-t border-gray-300">
                      <span class="font-medium">{{ item.quantity }}</span>
                    </td>
                    <td class="p-3 text-center border-t border-gray-300">
                      <span class="font-medium">{{ settings?.currency_symbol }} {{ item.total_amount }}</span>
                    </td>

                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flex justify-end mb-10">
              <div class="w-full md:w-4/12 bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 class="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">মোট হিসাব</h3>
                <div v-if="order?.sub_total" class="flex justify-between items-center mb-3">
                  <p class="text-gray-600">সাবটোটাল</p>
                  <p class="font-medium">{{ settings?.currency_symbol }}{{ order?.sub_total }}</p>
                </div>
                <div class="flex justify-between items-center pt-2">
                  <p class="text-lg font-semibold text-gray-800">সর্বমোট</p>
                  <p class="text-lg font-bold text-blue-700">{{ settings?.currency_symbol }}{{ order?.grand_total }}</p>
                </div>
              </div>
            </div>
            <div class="pt-8 border-t border-gray-200">
              <h3 class="text-lg font-bold text-gray-800 mb-3">আপনার অর্ডার করার জন্য ধন্যবাদ!</h3>
              <p class="text-sm text-gray-600 mb-4">আপনার অর্ডার করার জন্য ধন্যবাদ!
                ইনভয়েসটি তৈরি সম্পন্ন হয়েছে। বইটি পেতে বা অর্ডার সম্পর্কিত যেকোনো তথ্যের জন্য আমাদের সাথে WhatsApp-এ
                যোগাযোগ করুন।
                আমাদের অফিসিয়াল WhatsApp নম্বর: ০১৯৪২২১৩৩৪৬</p>
              <div class="text-xs text-gray-500 mt-6">
                <p>এই ইনভয়েসটি কম্পিউটার দ্বারা তৈরি করা হয়েছে এবং স্বাক্ষর ছাড়াই বৈধ।</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>