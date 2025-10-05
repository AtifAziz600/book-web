<template>
    <nav class="bg-[#800000] w-full">
        <div class="flex items-center justify-center text-white text-md font-normal">

            <NuxtLink to="/" class="py-4 px-6 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase" active-class="font-bold text-red-300 border-b-2 border-red-600 bg-[#A82229]">হোম</NuxtLink>

            <NuxtLink to="/about" class="py-4 px-6 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase" active-class="font-bold text-red-600 border-b-2 border-black-600 bg-[#A82229]">আমাদের সম্পর্কে</NuxtLink>

            <NuxtLink to="/books-category" class="py-4 px-6 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase" active-class="font-bold text-red-600 border-b-2 border-black-600 bg-[#A82229]">পাঠ্যপুস্তক</NuxtLink>

            <NuxtLink href="/order-form" class="py-4 px-6 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase" active-class="font-bold text-red-600 border-b-2 border-black-600 bg-[#A82229]">অর্ডার ফর্ম</NuxtLink>

            <NuxtLink to="/advice"
                class="py-4 px-6 text-white hover:bg-[#A82229] transition-colors duration-200 flex items-center uppercase" active-class="font-bold text-red-600 border-b-2 border-black-600 bg-[#A82229]">
                পরামর্শ
            </NuxtLink>

            <NuxtLink to="/contact-us" class="py-4 px-6 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase" active-class="font-bold text-red-600 border-b-2 border-black-600 bg-[#A82229]">যোগাযোগ</NuxtLink>

            <NuxtLink to="/Terms-condition" class="py-4 px-6 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase" active-class="font-bold text-red-600 border-b-2 border-black-600 bg-[#A82229]">শর্তাবলি ওর নীতিমালা</NuxtLink>
        </div>
    </nav>
</template>

<script>
</script>

<style scoped>
</style>