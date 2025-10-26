<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, navigateTo } from 'nuxt/app';

const { $api } = useNuxtApp();
const route = useRoute();
const isModalOpen = ref(false);
const isProcessing = ref(false);
const order = ref(null);

const form = ref({
    institution_name: "",
    institute_code: "",
    phone: "",
    email: "",
    delivery_type: "",
    address: "",
    special_instructions: "",
    payment_method: "cod", 
});

const openModal = () => {
    isModalOpen.value = true;
};
const closeModal = () => {
    isModalOpen.value = false;
};

onMounted(async () => {
    const orderId = route.query.order_id;
    if (orderId) {
        try {
            const response = await $api(`/frontend/v1/order/${orderId}`);
            order.value = response.data;
            form.value.institution_name = order.value.institution_name;
            form.value.institute_code = order.value.institute_code;
            form.value.phone = order.value.phone;
            form.value.email = order.value.customer?.email; 
            form.value.address = order.value.address;
            form.value.special_instructions = order.value.special_instructions;
            form.value.payment_method = order.value.payment_method || "cod";
            form.value.delivery_type = "standard"; 
        } catch (error) {
            console.error("Error fetching order details:", error);
            alert("অর্ডার বিস্তারিত লোড করতে সমস্যা হয়েছে।");
            navigateTo('/order-form');
        }
    } else {
        alert("কোনো অর্ডার আইডি পাওয়া যায়নি।");
        navigateTo('/order-form'); 
    }
});

const processConfirm = async () => {
    if (!order.value) {
        alert("অর্ডার লোড হয়নি।");
        closeModal();
        return;
    }

    isProcessing.value = true;
    try {
        await $api(`/frontend/v1/order/${order.value.id}/confirm`, {
            method: "POST",
            body: {
                payment_method: form.value.payment_method,
                delivery_type: form.value.delivery_type,
            },
        });
        alert("আপনার অর্ডার সফলভাবে কনফার্ম হয়েছে!");
        navigateTo(`/order/invoice?order_id=${order.value.id}`);
    } catch (error) {
        console.error("Error confirming order:", error);
        alert("দুঃখিত, অর্ডার কনফার্ম করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
        isProcessing.value = false;
        closeModal();
    }
};
</script>
<template>
    <section class="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
        <div class="container max-w-7xl mx-auto px-4 py-8">
            <div class="grid gap-6 grid-cols-1 lg:grid-cols-3">
                <div class="lg:col-span-2">
                    <div class="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100">
                        <div class="grid gap-4 text-sm grid-cols-1 lg:grid-cols-2">
                            <div class="lg:col-span-2">
                                <div class="grid gap-4 gap-y-3 text-sm grid-cols-1 md:grid-cols-6">
                                    <div class="md:col-span-6">
                                        <label for="institution_name"
                                            class="block text-gray-700 font-medium mb-1">নাম</label>
                                        <input type="text" name="institution_name" id="institution_name"
                                            class="h-12 border border-gray-300 mt-1 rounded-lg px-4 w-full bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                            v-model="form.institution_name" placeholder="আপনার নাম লিখুন" />
                                    </div>

                                    <div class="md:col-span-6">
                                        <label for="email" class="block text-gray-700 font-medium mb-1">ইমেইল</label>
                                        <input type="email" name="email" id="email"
                                            class="h-12 border border-gray-300 mt-1 rounded-lg px-4 w-full bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                            v-model="form.email" placeholder="আপনার ইমেইল লিখুন" />
                                    </div>

                                    <div class="md:col-span-6">
                                        <label for="phone" class="block text-gray-700 font-medium mb-1">মোবাইল
                                            নম্বর</label>
                                        <input type="tel" name="phone" id="phone"
                                            class="h-12 border border-gray-300 mt-1 rounded-lg px-4 w-full bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                            v-model="form.phone" placeholder="+880" />
                                    </div>

                                    <div class="md:col-span-6">
                                        <label for="delivery_type" class="block text-gray-700 font-medium mb-1">ডেলিভারি
                                            ধরণ</label>
                                        <select id="delivery_type" name="delivery_type"
                                            class="h-12 border border-gray-300 mt-1 rounded-lg px-4 w-full bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                            v-model="form.delivery_type">
                                            <option value="" disabled>ডেলিভারির ধরণ নির্বাচন করুন</option>
                                            <option value="standard">স্ট্যান্ডার্ড ডেলিভারি (Standard)</option>
                                            <option value="express">এক্সপ্রেস ডেলিভারি (Express)</option>
                                            <option value="pickup">স্টোর পিকআপ (Store Pickup)</option>
                                        </select>
                                    </div>

                                    <div class="md:col-span-6">
                                        <label for="address" class="block text-gray-700 font-medium mb-1">ঠিকানা</label>
                                        <input type="text" name="address" id="address"
                                            class="h-12 border border-gray-300 mt-1 rounded-lg px-4 w-full bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                            v-model="form.address" placeholder="আপনার ঠিকানা লিখুন" />
                                    </div>

                                    <div class="md:col-span-6">
                                        <label for="special_instructions"
                                            class="block text-gray-700 font-medium mb-1">নোট</label>
                                        <textarea name="special_instructions" id="special_instructions" rows="5"
                                            class="mt-1 border border-gray-300 rounded-lg px-4 w-full bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                            v-model="form.special_instructions" placeholder="নোট (যদি থাকে)..."></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100">
                        <h2 class="text-xl font-bold mb-4 text-gray-800">
                            পেমেন্ট পদ্ধতি (দয়া করে একটি পেমেন্ট পদ্ধতি নির্বাচন করুন)</h2>

                        <div class="mb-6">
                            <div
                                class="flex items-center p-4 border border-gray-300 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition duration-200"
                                :class="{ 'border-blue-500 bg-blue-50': form.payment_method === 'cod' }">
                                <input type="radio" name="payment_method" value="cod" v-model="form.payment_method"
                                    class="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500">
                                <div class="flex items-center">
                                    <div
                                        class="w-12 h-12 mr-3 bg-blue-100 rounded-full flex items-center justify-center">
                                        <img src="/image/cod.png" class="w-8 h-8" alt="Cash on Delivery">
                                    </div>
                                    <div>
                                        <div class="font-medium text-gray-800">ক্যাশ অন ডেলিভারি</div>
                                        <div class="text-sm text-gray-500">পণ্য হাতে পেয়ে টাকা পরিশোধ করুন</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-6">
                            <h3 class="font-medium mb-3 text-gray-700">মোবাইল ওয়ালেট</h3>
                            <div
                                class="flex items-center p-4 border border-gray-300 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition duration-200"
                                :class="{ 'border-blue-500 bg-blue-50': form.payment_method === 'bkash' }">
                                <input type="radio" name="payment_method" value="bkash" v-model="form.payment_method"
                                    class="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500">
                                <div class="flex items-center">
                                    <div
                                        class="w-12 h-12 mr-3 bg-blue-100 rounded-full flex items-center justify-center">
                                        <img src="/image/bkash1.png" class="w-8 h-8" alt="">
                                    </div>
                                    <div>
                                        <div class="font-medium text-gray-800">Bkash</div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex items-center p-4 border border-gray-300 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition duration-200"
                                :class="{ 'border-blue-500 bg-blue-50': form.payment_method === 'nagad' }">
                                <input type="radio" name="payment_method" value="nagad" v-model="form.payment_method"
                                    class="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500">
                                <div class="flex items-center">
                                    <div
                                        class="w-12 h-12 mr-3 bg-blue-100 rounded-full flex items-center justify-center">
                                        <img src="/image/nagad.jpg" class="w-8 h-8" alt="Nagad">
                                    </div>
                                    <div>
                                        <div class="font-medium text-gray-800">Nagad</div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex items-center p-4 border border-gray-300 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition duration-200"
                                :class="{ 'border-blue-500 bg-blue-50': form.payment_method === 'rocket' }">
                                <input type="radio" name="payment_method" value="rocket" v-model="form.payment_method"
                                    class="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500">
                                <div class="flex items-center">
                                    <div
                                        class="w-12 h-12 mr-3 bg-blue-100 rounded-full flex items-center justify-center">
                                        <img src="/image/rocket.png" class="w-8 h-8" alt="Rocket">
                                    </div>
                                    <div>
                                        <div class="font-medium text-gray-800">Rocket</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-1">
                    <div class="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100">
                        <h2 class="text-xl font-bold mb-4 text-gray-800">অর্ডার সারাংশ</h2>
                        <div class="space-y-3 mb-6">
                            <div class="flex justify-between py-1">
                                <span class="text-gray-600">পণ্যের মূল্য:</span>
                                <span class="font-medium">৳ {{ order?.sub_total?.toFixed(2) }}</span>
                            </div>
                            <div class="flex justify-between py-1">
                                <span class="text-gray-600">ডেলিভারি চার্জ:</span>
                                <span class="font-medium">৳ {{ order?.delivery_charge?.toFixed(2) }}</span>
                            </div>
                            <div class="border-t border-gray-200 pt-3 mt-3">
                                <div class="flex justify-between font-bold text-lg">
                                    <span>সর্বমোট:</span>
                                    <span class="text-red-600">৳ {{ order?.grand_total?.toFixed(2) }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button @click="openModal"
                        class="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-800 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        অর্ডার কনফার্ম করুন
                    </button>
                </div>
            </div>
        </div>
<transition name="modal">
    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center"
        @click.self="closeModal">
        <div
            class="absolute inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
        </div>
        <div
            class="relative bg-white rounded-lg shadow-xl w-full max-w-sm p-6 m-4 transform transition-all duration-300">
            <div class="flex justify-center mb-4">
                <Icon name="heroicons:exclamation-triangle" class="h-24 w-24 text-gray-800"/>
            </div>

            <div class="flex justify-center items-center text-center mb-6">
                <h2 class="font-semibold text-xl">
                    আপনি কি অর্ডারটি কনফার্ম করতে চান?
                </h2>
            </div>

            <div class="flex justify-between space-x-4">
                <button @click="processConfirm" :disabled="isProcessing"
                    class="flex-1 px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-150 flex items-center justify-center disabled:opacity-70 text-sm">
                    <svg v-if="isProcessing" class="animate-spin h-5 w-5 mr-1 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span v-if="isProcessing">প্রক্রিয়া হচ্ছে...</span>
                    <span v-else>হ্যাঁ, কনফার্ম করুন</span>
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

<style scoped>
input:focus,
select:focus,
textarea:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

input[type="radio"]:checked+div {
    border-color: #3b82f6;
    background-color: #eff6ff;
}

label:has(input[type="radio"]:checked) {
    border-color: #3b82f6;
    background-color: #eff6ff;
}
</style>
