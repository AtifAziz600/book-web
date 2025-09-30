<template>
    <section class="w-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12">
        <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div class="container max-w-screen-lg mx-auto">
                <div>
                    <h2 class="font-semibold text-xl text-gray-600">বুক অর্ডার ফর্ম</h2>
                    <p class="text-gray-500 mb-6">অর্ডার করতে প্রয়োজনীয় তথ্য দিন.</p>

                    <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <div class="text-gray-600">
                                <p class="font-medium text-lg">অর্ডার বিস্তারিত</p>
                                <p>আপনার বই নির্বাচন করুন এবং শিপিং তথ্য প্রদান করুন।</p>
                            </div>

                            <div class="lg:col-span-2">
                                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
                                    <div class="md:col-span-5">
                                        <label for="full_name">প্রতিষ্ঠানের নাম</label>
                                        <input type="text" name="full_name" id="full_name"
                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value=""
                                            placeholder="আপনার প্রতিষ্ঠানের নাম লিখুন" />
                                    </div>

                                    <div class="md:col-span-5">
                                        <label for="email">কোড</label>
                                        <input type="text" name="email" id="email"
                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value=""
                                            placeholder="আপনার ইনস্টিটিউট কোড লিখুন" />
                                    </div>

                                    <div class="md:col-span-5">
                                        <label for="phone">মোবাইল নম্বর</label>
                                        <input type="tel" name="phone" id="phone"
                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value=""
                                            placeholder="+880" />
                                    </div>

                                    <div class="md:col-span-5">
                                        <div class="grid grid-cols-2 gap-4">

                                            <div class="col-span-1">
                                                <label for="country">জেলা</label>
                                                <select id="book_selection" name="district_selection"
                                                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 border-gray-200 text-gray-600">
                                                    <option value="">Select</option>
                                                    <option value="pre-play">Pre Play</option>
                                                    <option value="pre-boro-boi">Pre Boro Boi</option>
                                                    <option value="shoto-size">Shoto Size</option>
                                                    <option value="other">Other Book</option>
                                                </select>
                                            </div>

                                            <div class="col-span-1">
                                                <label for="country">থানা</label>
                                                <select id="book_selection" name="district_selection"
                                                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 border-gray-200 text-gray-600">
                                                    <option value="">Select</option>
                                                    <option value="pre-play">Pre Play</option>
                                                    <option value="pre-boro-boi">Pre Boro Boi</option>
                                                    <option value="shoto-size">Shoto Size</option>
                                                    <option value="other">Other Book</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="md:col-span-5">
                                        <label for="email">ঠিকানা</label>
                                        <input type="text" name="address" id="address"
                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value=""
                                            placeholder="আপনার ঠিকানা লিখুন" />
                                    </div>
                                    <div class="md:col-span-5">
                                        <label for="special_instructions">নোট</label>
                                        <textarea name="special_instructions" id="special_instructions" rows="5"
                                            class="mt-1 border rounded px-4 w-full bg-gray-50"
                                            placeholder="নোট (যদি থাকে)..."></textarea>
                                    </div>

                                    <div class="md:col-span-5 text-right">
                                        <div class="inline-flex items-end">
                                            <NuxtLink to="/order-form/order-table"
                                                class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-8 rounded transition duration-300 inline-flex items-center justify-center">
                                                অর্ডার করুন
                                            </NuxtLink>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const quantity = ref(1);

const increaseQuantity = () => {
    quantity.value++;
};

const decreaseQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};
</script>

<style scoped></style>