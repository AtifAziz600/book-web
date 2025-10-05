<template>
    <div class="lg:hidden sticky bottom-0 left-0 right-0 bg-red-600 text-white z-50">
        <div class="flex justify-around items-center h-16">
            <NuxtLink to="/" class="flex flex-col items-center justify-center text-center">
                <Icon name="mdi:home-outline" class="text-2xl mb-1" />
                <span class="text-xs">হোম</span>
            </NuxtLink>

            <NuxtLink to="/books-category" class="flex flex-col items-center justify-center text-center">
                <Icon name="mdi:menu" class="text-2xl mb-1"/>
                <span class="text-xs">ক্যাটাগরি</span>
            </NuxtLink>

            <NuxtLink to="/order/cart" class="flex flex-col items-center justify-center text-center">
                <Icon name="heroicons:shopping-bag" class="text-2xl mb-1"/>
                <span class="text-xs">কার্ট</span>
            </NuxtLink>

            <NuxtLink to="/login" class="flex flex-col items-center justify-center text-center">
                <Icon name="heroicons:user" class="text-2xl mb-1"/>
                <span class="text-xs">লগইন</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>
