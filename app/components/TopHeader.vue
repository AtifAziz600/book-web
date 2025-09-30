<script setup>
</script>

<template>
    <section class="bg-gradient-to-r from-red-100 to-red-100 text-gray-800 text-sm py-2 border-b-2 border-red-200 shadow-sm">
        <div class="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
            <div class="flex flex-wrap items-center gap-6">
                <div class="flex items-center gap-2 hover:text-amber-600 transition-colors group">
                    <Icon name="ph:phone-light" class="text-xl text-red-500 group-hover:scale-110 transition-transform" />
                    <span>Phone: <span class="font-semibold text-gray-900">09613 787878, ০৯৬১৩ ৭৮৭৮৭৮</span></span>
                </div>
                <div class="flex items-center gap-2 hover:text-amber-600 transition-colors group">
                    <Icon name="ph:envelope-light" class="text-xl text-red-500 group-hover:scale-110 transition-transform" />
                    <span>Email: <span class="font-semibold text-gray-900">info@salsabilpublications.com</span></span>
                </div>
                <div class="flex items-center gap-2 hover:text-yellow-600 transition-colors group">
                    <Icon name="ph:clock-light" class="text-xl text-red-500 group-hover:scale-110 transition-transform" />
                    <span>Open: <span class="font-semibold text-gray-900">9AM - 6PM</span></span>
                </div>
            </div>
            <div class="flex flex-wrap items-center gap-6">
                <div class="flex items-center gap-3">
                    <a href="#" class="text-blue-500 hover:text-blue-600 transition-colors" aria-label="Facebook">
                        <Icon name="ph:facebook-logo-light" class="text-xl" />
                    </a>
                    <a href="#" class="text-green-400 hover:text-green-600 transition-colors" aria-label="Instagram">
                        <Icon name="ph:whatsapp-logo-light" class="text-xl" />
                    </a>
                </div>
                
                <div class="bg-gradient-to-r from-yellow-300 to-yellow-400 text-gray-900 px-4 py-1.5 rounded-full font-semibold shadow-md animate-pulse">
                    Friday 5th September, 2025
                </div>
                <div class="flex items-center gap-2 group">
                    <Icon name="ph:globe-light" class="text-xl text-red-500 group-hover:scale-110 transition-transform" />
                    <select class="bg-transparent border-none focus:ring-2 focus:ring-red-300 rounded-md px-2 py-1 font-medium cursor-pointer">
                        <option>EN</option>
                        <option>BN</option>
                    </select>
                </div>
            </div>
        </div>
    </section>
</template>