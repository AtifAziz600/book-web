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

              <div class="">
                <div class="grid gap-4 text-sm grid-cols-1">
                  <div class="md:col-span-5">
                    <label for="institution_name">প্রতিষ্ঠানের নাম</label>
                    <input type="text" name="institution_name" id="institution_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value=""
                      placeholder="আপনার প্রতিষ্ঠানের নাম লিখুন" />
                  </div>

                  <div class="md:col-span-5">
                    <label for="institute_code">কোড</label>
                    <input type="text" name="institute_code" id="institute_code"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value=""
                      placeholder="আপনার ইনস্টিটিউট কোড লিখুন" />
                  </div>

                  <div class="md:col-span-5">
                    <label for="phone">মোবাইল নম্বর</label>
                    <input type="tel" name="phone" id="phone" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value="" placeholder="+880" />
                  </div>

                  <div class="md:col-span-5">
                    <div class="grid grid-cols-2 gap-4">
                      <div class="col-span-1">
                        <label for="district_selection">জেলা</label>
                        <select id="district_selection" name="district_selection"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 border-gray-200 text-gray-600">
                          <option value="">Select</option>
                          <option value="Dhaka">ঢাকা</option>
                          <option value="Chittagong">চট্টগ্রাম</option>
                          <option value="Rajshahi">রাজশাহী</option>
                        </select>
                      </div>

                      <div class="col-span-1">
                        <label for="thana_selection">থানা</label>
                        <select id="thana_selection" name="thana_selection"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 border-gray-200 text-gray-600">
                          <option value="">Select</option>
                          <option value="Mirpur">মিরপুর</option>
                          <option value="Mohammadpur">মোহাম্মদপুর</option>
                          <option value="Gulshan">গুলশান</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="md:col-span-5">
                    <label for="address">ঠিকানা</label>
                    <input type="text" name="address" id="address"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value=""
                      placeholder="আপনার ঠিকানা লিখুন" />
                  </div>

                  <div class="md:col-span-5">
                    <label for="special_instructions">নোট</label>
                    <textarea name="special_instructions" id="special_instructions" rows="5"
                      class="mt-1 border rounded px-4 w-full bg-gray-50" placeholder="নোট (যদি থাকে)..."></textarea>
                  </div>

                  <div class="md:col-span-5 text-right">
                    <div class="inline-flex items-end">
                      <button @click="openModal"
                        class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-8 rounded transition duration-300 inline-flex items-center justify-center">
                        অর্ডার করুন
                      </button>
                    </div>
                  </div>
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
              </div>
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
const {$api} =  useNuxtApp();
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
    institution_name: form.value.institution_name,
    institute_code: form.value.institute_code,
    phone: form.value.phone,
    district: form.value.district_selection,
    thana: form.value.thana_selection,
    address: form.value.address,
    special_instructions: form.value.special_instructions,
    subjects: subjects.value,
    payment_method: "cod",
    delivery_charge: 0,
  };

  try {
    const response = await $api("/frontend/v1/order", {
      method: "POST",
      body: orderData,
    });

    alert("আপনার অর্ডার সফলভাবে জমা হয়েছে!");
    localStorage.removeItem("cartItems");
    closeModal();
  } catch (error) {
    console.log("Error submitting order:", error);
    alert("দুঃখিত, কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
  } finally {
    isProcessing.value = false;
  }
};

const processConfirm = async () => {
  isProcessing.value = true;
  await submitOrder();
};
</script>


<style scoped></style>