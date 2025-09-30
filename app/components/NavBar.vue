<template>
    <nav class="bg-[#ED1B24] w-full">
        <div class="flex items-center justify-center text-white text-md font-normal">

            <NuxtLink to="/" class="py-4 px-10 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase">হোম</NuxtLink>

            <NuxtLink to="/about" class="py-4 px-10 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase">আমাদের সম্পর্কে</NuxtLink>

            <NuxtLink to="/books-category" class="py-4 px-10 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase">পাঠ্যপুস্তক</NuxtLink>

            <a href="/order-form" class="py-4 px-10 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase">অর্ডার ফর্ম</a>

            <NuxtLink to="/advice"
                class="py-4 px-10 text-white hover:bg-[#A82229] transition-colors duration-200 flex items-center uppercase">
                পরামর্শ
            </NuxtLink>

            <NuxtLink to="/contact-us" class="py-4 px-10 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase">যোগাযোগ</NuxtLink>

            <NuxtLink to="/Terms-condition" class="py-4 px-10 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase">শর্তাবলি ওর নীতিমালা</NuxtLink>
        </div>
    </nav>
</template>

<script>
</script>

<style lang="scss" scoped>
</style>