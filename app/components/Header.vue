<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '@/stores/auth';

const cartItemCount = ref(0);
const store = useAuthStore();

const isLoggedIn = computed(() => store.loggedIn);
const user = computed(() => store.user);

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const logout = async () => {
    await store.logout();
    isDropdownOpen.value = false;
};
</script>
<template>
    <header class="hidden lg:block">
        <nav class="relative">
            <div class=" ">
                <header class="bg-white shadow-lg py-3 sticky top-0 z-50">
                    <div class="container mx-auto px-4">
                        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                            <a href="/" class="flex items-center flex-shrink-0">
                                <img src="/image/logo.png" class="h-12 w-auto rounded-2xl" alt="Brand Logo">
                                <span class="ml-2 text-xl font-extrabold text-gray-800">সালসাবীল পাবলিকেশন্স</span>
                            </a>

                            <div class="flex-1 max-w-xl w-full order-3 md:order-none">
                                <div class="flex shadow-sm">
                                    <input type="text" placeholder="পণ্য, বিভাগ, অথবা ব্র্যান্ড অনুসন্ধান করুন..."
                                        class="flex-1 px-4 py-2.5 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500">
                                    <button
                                        class="bg-[#800000] hover:bg-red-700 text-white px-5 py-2.5 rounded-r-lg transition duration-200 flex items-center">
                                        <Icon name="heroicons:magnifying-glass" class="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <div class="flex items-center space-x-6">
                                <!-- <div
                                    class="flex flex-col items-center cursor-pointer group p-1.5 hover:bg-gray-100 rounded-lg transition duration-200">
                                    <Icon name="heroicons:gift"
                                        class="w-6 h-6 text-gray-700 group-hover:text-red-600" />
                                    <span class="text-xs mt-1 text-gray-600">উইশ লিস্ট</span>
                                </div> -->
                                <NuxtLink to="/order/cart">
                                    <div
                                        class="flex flex-col items-center cursor-pointer group relative p-1.5 hover:bg-gray-100 rounded-lg transition duration-200">
                                        <Icon name="heroicons:shopping-bag"
                                            class="w-6 h-6 text-gray-700 group-hover:text-red-600" />
                                        <span v-if="cartItemCount > 0"
                                            class="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                                            {{ cartItemCount }}
                                        </span>
                                        <span class="text-xs mt-1 text-gray-600">কার্ট</span>
                                    </div>
                                </NuxtLink>

                                <div v-if="isLoggedIn" class="relative">
                                    <div @click="toggleDropdown"
                                        class="flex flex-col items-center cursor-pointer group p-1.5 hover:bg-gray-100 rounded-lg transition duration-200">
                                        <Icon name="heroicons:user-circle" class="w-12 h-12 text-gray-700 group-hover:text-red-600" />
                                        <span class="text-xs mt-1 text-gray-600">{{ user.name }}</span>
                                    </div>
                                    <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                                        <NuxtLink to="/dashboard" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ড্যাশবোর্ড</NuxtLink>
                                        <a @click.prevent="logout" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">লগআউট</a>
                                    </div>
                                </div>
                                <NuxtLink v-else to="/login">
                                    <div
                                        class="flex flex-col items-center cursor-pointer group p-1.5 hover:bg-gray-100 rounded-lg transition duration-200">
                                        <Icon name="heroicons:user"
                                            class="w-12 h-12 text-gray-700 group-hover:text-red-600" />
                                        <span class="text-xs mt-1 text-gray-600">লগইন</span>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </header>
                <NavBar />
                <span class="flex items-center  w-full h-2"> </span>
            </div>
        </nav>
    </header>
</template>
<style scoped></style>
