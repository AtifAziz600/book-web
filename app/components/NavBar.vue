<script setup>
import { ref } from 'vue'

const menuItems = ref([
    { name: "হোম", link: "/", type: "link" },
    { name: "আমাদের সম্পর্কে", link: "/about", type: "link" },
    { name: "পাঠ্যপুস্তক", link: "/books-category", type: "link" },
        { 
        name: "সিলেবাস ও প্রশ্নপত্র", 
        link: "/syllabus",
        type: "dropdown",
        items: [
            { name: "প্রাক-প্রাথমিক", link: "/books-category/singlebookcategory" },
            { name: "প্রাথমিক", link: "/books-category/singlebookcategory" },
            { name: "মাধ্যমিক", link: "/books-category/singlebookcategory" },
            { name: "উচ্চ মাধ্যমিক", link: "/books-category/singlebookcategory" },
            { name: "অনার্স", link: "/books-category/singlebookcategory" },
            { name: "মাস্টার্স", link: "/books-category/singlebookcategory" },
        ]
    },
    { name: "অর্ডার ফর্ম", link: "/order-form", type: "link" },
    { name: "ব্লগ", link: "/blog/blogs", type: "link" },
    { name: "পরামর্শ", link: "/advice", type: "link" },
    { name: "যোগাযোগ", link: "/contact-us", type: "link" },
    { name: "শর্তাবলি ওর নীতিমালা", link: "/Terms-condition", type: "link" },
])
</script>

<template>
    <nav class="bg-[#800000] w-full">
        <div class="flex items-center justify-center text-white text-md font-normal">
            <template v-for="item in menuItems" :key="item.name">
                <NuxtLink 
                    v-if="item.type === 'link'"
                    :to="item.link"
                    class="py-4 px-6 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase"
                    active-class="font-bold text-red-300 border-b-2 border-red-600 bg-[#A82229]"
                >
                    {{ item.name }}
                </NuxtLink>
                
                <div v-else-if="item.type === 'dropdown'" class="relative group">
                    <NuxtLink :to="item.link" class="py-4 px-6 text-white hover:bg-[#A82229] transition-colors duration-200 uppercase flex items-center"
                    active-class="font-bold text-red-300 border-b-2 border-red-600 bg-[#A82229]"
                    >
                        {{ item.name }}
                        <Icon name="mdi:chevron-down" class="w-12 h-12 ml-1"/>
                    </NuxtLink>
                    
                    <div class="absolute left-0 mt-0 w-56 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border">
                        <div class="py-1">
                            <NuxtLink 
                                v-for="subItem in item.items" 
                                :key="subItem.name"
                                :to="subItem.link"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                active-class="bg-gray-100 font-semibold"
                            >
                                {{ subItem.name }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </nav>
</template>

<style scoped>
.group:hover .group-hover\:visible {
    visibility: visible;
}

.group:hover .group-hover\:opacity-100 {
    opacity: 1;
}
</style>