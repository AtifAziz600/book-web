<template>
  <section class="w-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12">
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div class="container max-w-7xl mx-auto">
        <div>
          <h2 class="font-semibold text-xl text-gray-600">বুক অর্ডার ফর্ম</h2>
          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
              <div class="text-gray-600 lg:col-span-1">
                <p class="font-medium text-lg mb-4">অর্ডার বিস্তারিত</p>

                <div class="overflow-x-auto">
                  <table class="min-w-full border border-gray-400">
                    <thead>
                      <tr class="bg-gray-100">
                        <th class="border border-gray-400 px-2 py-2 text-sm">ক্রম</th>
                        <th class="border border-gray-400 px-2 py-2 text-sm">বিষয়</th>
                        <th class="border border-gray-400 px-2 py-2 text-sm">দর</th>
                        <th class="border border-gray-400 px-2 py-2 text-sm">পরিমাণ</th>
                        <th class="border border-gray-400 px-2 py-2 text-sm">মোট</th>
                        <th class="border border-gray-400 px-2 py-2 text-sm">একশন</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(subject, index) in subjects" :key="subject?.id">
                        <td class="border border-gray-400 px-2 py-2 text-center text-sm">
                          {{ index + 1 }}
                        </td>
                        <td class="border border-gray-400 px-2 py-2 text-sm">
                          {{ subject?.name }}
                        </td>
                        <td class="border border-gray-400 px-2 py-2 text-sm">
                          {{ subject?.rate }}
                        </td>
                        <td class="border border-gray-400 px-2 py-2 text-sm">
                          {{ subject?.quantity }}
                        </td>
                        <td class="border border-gray-400 px-2 py-2 text-right font-semibold text-sm">
                          {{ itemTotal(subject)?.toFixed(2) }}
                        </td>
                        <td class="border border-r-gray-400 px-2 py-2 text-center font-semibold text-sm">
                          <button @click="removeItems(index)">
                            <Icon name="ph:trash" class="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr class="bg-gray-100 font-bold">
                        <td colspan="5" class="border border-gray-400 px-2 py-2 text-right">
                          মোট মূল্য (Grand Total):
                        </td>
                        <td class="border border-gray-400 px-2 py-2 text-right text-red-600">
                          {{ grandTotal?.toFixed(2) }}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <form @submit.prevent>
                <div>
                  <label for="institution_name" class="block mb-2 text-sm font-medium text-gray-700">প্রতিষ্ঠানের
                    নাম</label>
                  <input v-model="form.institution_name" type="text" id="institution_name"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="আপনার প্রতিষ্ঠানের নাম লিখুন"
                    required />
                </div>
                <div>
                  <label for="institute_code" class="block mb-2 text-sm font-medium text-gray-700">ইনস্টিটিউট
                    কোড</label>
                  <input v-model="form.institute_code" type="text" id="institute_code"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="ইনস্টিটিউট কোড লিখুন" />
                </div>
                <div>
                  <label for="phone" class="block mb-2 text-sm font-medium text-gray-700">ফোন নাম্বার</label>
                  <input v-model="form.phone" type="tel" id="phone"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="+880" required />
                </div>
<div>
  <label for="address" class="block mb-2 text-sm font-medium text-gray-700">ঠিকানা</label>
  <input v-model="form.address" type="text" id="address"
    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="ঠিকানা লিখুন" required />
</div>
<div>
  <label for="district_selection" class="block mb-2 text-sm font-medium text-gray-700">জেলা</label>
  <input v-model="form.district_selection" type="text" id="district_selection"
    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="জেলা লিখুন" />
</div>
<div>
  <label for="thana_selection" class="block mb-2 text-sm font-medium text-gray-700">থানা</label>
  <input v-model="form.thana_selection" type="text" id="thana_selection"
    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="থানা লিখুন" />
</div>
<div>
  <label for="special_instructions" class="block mb-2 text-sm font-medium text-gray-700">নোট</label>
  <textarea v-model="form.special_instructions" id="special_instructions" rows="4"
    class="border rounded px-4 py-2 w-full bg-gray-50"
    placeholder="যদি বিশেষ কোনো নির্দেশনা থাকে, এখানে লিখুন..."></textarea>
</div>

                <div class="mt-6 flex justify-end">
                  <button @click="openModal" type="submit" :disabled="isProcessing"
                    class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition disabled:opacity-50">
                    {{ isProcessing ? "Processing..." : " অর্ডার করুন" }}
                  </button>
                </div>
                <div class="flex items-start sm:items-center py-1">
                  <label for="terms-checkbox-2" class="ms-2 text-sm font-medium text-gray-800">আমাদের বই নিতে ইচ্ছুক এমন
                    প্রতিষ্ঠানকে অবশ্যই আগে ওয়েবসাইটে নিবন্ধন করতে হবে। এরপর আমাদের অফিশিয়াল WhatsApp [০১৯৪২২১৩৩৪৬] এ
                    মেসেজ করে এপ্রুভাল নিতে হবে। WhatsApp মেসেজ করার আগ পর্যন্ত আপনার একাউন্টটি এপ্রুভাল এর অপেক্ষায়ই
                    থাকবে।</label>
                </div>
                <div class="flex items-start px-2 py-1 sm:items-center">
                  <input id="terms-checkbox-2" type="checkbox" value=""
                    class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-red-600 focus:ring-2" />
                  <label for="terms-checkbox-2" class="ms-2 text-sm font-medium text-gray-800"> Accept terms and
                    conditions</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="modal">
      <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center" @click.self="closeModal">
        <div class="absolute inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
        </div>
        <div
          class="relative bg-white rounded-lg shadow-xl w-full max-w-sm p-6 m-4 transform transition-all duration-300">
          <div class="flex justify-center mb-4">
            <Icon name="heroicons:exclamation-triangle" class="h-24 w-24 text-gray-800" />
          </div>
          <div class="flex justify-center items-center text-center mb-6">
            <h2 class="font-semibold text-xl">
              আপনি কি অর্ডারটি কনফার্ম করতে চান?
            </h2>
          </div>
          <div class="flex justify-between space-x-4">
            <button @click="processConfirm" :disabled="isProcessing"
              class="flex-1 px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-150 flex items-center justify-center disabled:opacity-70 text-sm">
              <svg v-if="isProcessing" class="animate-spin h-5 w-5 mr-1 text-white" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
              হ্যাঁ, কনফার্ম করুন
            </button>
            <button @click="closeModal"
              class="flex-1 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded hover:bg-gray-300 transition duration-150 text-sm">
              বাতিল করুন
            </button>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
const { $api } = useNuxtApp();
const isModalOpen = ref(false);
const isProcessing = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};
const closeModal = () => {
  isModalOpen.value = false;
};

const subjects = ref([]);

const form = ref({
  institution_name: "",
  institute_code: "",
  phone: "",
  district_selection: "",
  thana_selection: "",
  address: "",
  special_instructions: "",
});

const itemTotal = (subject) => {
  const rate = Number(subject.rate) || 0;
  const quantity = Number(subject.quantity) || 0;
  return rate * quantity;
};

const grandTotal = computed(() => {
  return subjects.value?.reduce((sum, subject) => {
    return sum + itemTotal(subject);
  }, 0);
});

const removeItems = (index) => {
  if (subjects.value && subjects.value[index]) {
    subjects.value.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(subjects.value));
  }
};

onMounted(() => {
  const storedSubjects = localStorage.getItem("cartItems");
  if (storedSubjects) {
    subjects.value = JSON.parse(storedSubjects);
  }
});

const submitOrder = async () => {
  const orderData = {
    user_id: null,
    institution_name: form.value.institution_name,
    institution_code: form.value.institute_code,
    phone: form.value.phone,
    district: form.value.district_selection,
    thana: form.value.thana_selection,
    address: form.value.address,
    special_instructions: form.value.special_instructions,
    delivery_charge: 0,
    payment_method: "cod",
    payment_status: "pending",
    order_type: "customer",
    order_date: new Date().toISOString(),
    grand_total: grandTotal.value,
    subjects: subjects.value.map((subject) => ({
      id: subject.id,
      product_stock_id: 1, 
      quantity: subject.quantity,
      rate: subject.rate,
    })),
  };

  try {
    const response = await $api("/frontend/v1/order", {
      method: "POST",
      body: orderData,
    });

    localStorage.setItem("orderData", JSON.stringify(response));
    localStorage.removeItem("cartItems");
    navigateTo(`/order/success?order_id=${response.order_id}`);
  } catch (error) {
    console.log("Error submitting order:", error);
    alert("দুঃখিত, কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
  } finally {
    isProcessing.value = false;
  }
};




const processConfirm = async () => {
  if (!subjects.value || subjects.value.length === 0) {
    alert("আপনি কোনো বই অর্ডার করেননি! দয়া করে অন্তত একটি বই যোগ করুন।");
    closeModal();
    return;
  }

  isProcessing.value = true;
  await submitOrder();
};

</script>


<style scoped></style>
