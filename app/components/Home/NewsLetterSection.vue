<template>
    <section class="w-full relative overflow-hidden bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto flex flex-row items-center justify-between text-center">

            <div class="flex justify-center items-start">
                <h3 class="text-xl font-extrabold mb-3 text-yellow-500">
                    নতুন বইয়ের খবর পান!
                </h3>
            </div>

            <form class="w-full max-w-sm space-y-4">
                <div class="flex flex-col sm:flex-row">
                    <input type="email" placeholder="আপনার ইমেল লিখুন" required aria-label="ইমেল ঠিকানা"
                        class="w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 border border-gray-300 transition-all duration-200 shadow-sm" />
                    <button type="submit"
                        class="flex-shrink-0 bg-yellow-500 px-6 py-3 text-base font-bold text-[#800000] uppercase transition-all duration-300 hover:bg-yellow-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        সাবস্ক্রাইব করুন
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped></style>