<script setup>
const blogs = [
    {
        id: 1,
        publisher: "সালসাবীল পাবলিকেশন্স",
        reviews: "১৯৪",
        title: "দুর্বল প্যারেন্টিং-এর ৭ টি কারণ",
        image: "/image/best-seller-books-38a6.jpg",
        excerpt: "বাবা-মা হওয়া সহজ, কিন্তু ‘ভালো বাবা-মা’ হওয়া সহজ না। এমনি এমনি কেউ ভালো বাবা-মা হতে পারে না; এটার জন্য দরকার জ্ঞানার্জন, সচেতনতা, অনুশীলন।",
    },
    {
        id: 2,
        publisher: "সালসাবীল পাবলিকেশন্স",
        reviews: "৭৯",
        title: "কারাবন্দি মুসলিম বিজ্ঞানীর যুগান্তকারী আবিষ্কার",
        image: "/image/darsul-quran-slider-banner-de24.jpg",
        excerpt: "মুসলিম ইতিহাসে একজন খলিফা ছিলেন, যিনি পরিচিত ছিলেন ‘পাগলা খলিফা’ নামে। তার নাম ছিল আল হাকিম। মিশরের ফাতেমি খিলাফতের খলিফা ছিলেন তিনি।",
    },
    {
        id: 3,
        publisher: "সালসাবীল পাবলিকেশন্স",
        reviews: "১০৫",
        title: "হৃদয় হলো শরীরের রাজধানী",
        image: "/image/rajniti-banner-8639.jpg",
        excerpt: "জগতের সব কিছুই আল্লাহর নামের তাসবিহ পাঠকরছে, যা আমাদের অস্তিত্বের জানান দেয়। প্রকৃত পক্ষে মানুষ এবং সৃষ্টি জগতের যে কোনো সৃষ্টি হোক তা মূলত আল্লাহ-তায়ালার বৈশিষ্ট্যের প্রতিফলনমাত্র।",
    }
];
</script>
<template>
    <section class="w-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-6">
        <div class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="text-center mb-10">
                    <div class="flex items-center justify-center gap-3 mb-4">
                        <Icon name="heroicons:book-open" class="h-12 w-12 text-[#1C3B8B]" />
                        <h2 class="text-3xl font-bold text-gray-800">আমাদের আর্টিকেল পড়ুন</h2>
                    </div>
                    <p class="text-gray-600">আমাদের সর্বশেষ নিবন্ধগুলি পড়ুন এবং আপডেট থাকুন.</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div v-for="blog in blogs" :key="blog.id" class="p-4 md:w-1/3">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="blog.image"
                                alt="blog">
                            <div class="p-6">
                                <div class="flex items-center gap-2 text-sm text-gray-500">
                                    <Icon name="heroicons:user" class="w-4 h-4 text-red-500" />
                                    <span>{{ blog.publisher }}</span>
                                </div>
                                <p class="text-sm text-gray-500 mt-1">রিভিউ : {{ blog.reviews }}</p>
                                <h1 class="title-font text-lg font-medium text-gray-900 my-3">{{ blog.title }}</h1>
                                <p class="leading-relaxed mb-3 text-sm">{{ blog.excerpt }}</p>
                                <div class="flex items-center flex-wrap ">
                                    <NuxtLink to="/blog"
                                        class="text-white bg-red-600 cursor-pointer hover:bg-red-700 px-4 py-2 rounded-md inline-flex items-center">পুরোটা
                                        পড়ুন
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
