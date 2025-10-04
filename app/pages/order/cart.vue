<template>
    <section class="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            <h2 class="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black flex items-center justify-center gap-3">
                <Icon name="uil:shopping-cart" class="text-red-600" />
                শপিং কার্ট
            </h2>
            
            <div class="hidden lg:grid grid-cols-2 py-6">
                <div class="font-normal text-xl leading-8 text-gray-500">বই</div>
                <p class="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                    <span class="w-full max-w-[200px] text-center">ডেলিভারি চার্জ</span>
                    <span class="w-full max-w-[260px] text-center">পরিমাণ</span>
                    <span class="w-full max-w-[200px] text-center">মোট</span>
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                <div class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                    <div class="img-box">
                        <img src="/image/book-1.jpg" 
                             alt="book cover" class="xl:w-[140px] rounded-xl object-cover shadow-md">
                    </div>
                    <div class="pro-data w-full max-w-sm">
                        <h5 class="font-semibold text-xl leading-8 text-black max-[550px]:text-center">শিশুদের বাংলা পড়া(পেপারব্যাক)</h5>
                        <p class="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                            ড. আলী আহম্মাদ
                        </p>
                        <p class="text-sm text-gray-400 max-[550px]:text-center">পেপারব্যাক</p>
                        <h6 class="font-medium text-lg leading-8 text-red-600 max-[550px]:text-center">৳14.99</h6>
                    </div>
                </div>
                
                <div class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                    <h6 class="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                        ৳3.99 <span class="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">(ডেলিভারি চার্জ)</span>
                    </h6>
                    <div class="flex items-center w-full mx-auto justify-center">
                        <button class="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                            <Icon name="uil:minus" class="text-gray-900 text-xl transition-all duration-500 group-hover:text-black" />
                        </button>
                        <input type="text" class="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent" placeholder="1">
                        <button class="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                            <Icon name="uil:plus" class="text-gray-900 text-xl transition-all duration-500 group-hover:text-black" />
                        </button>
                    </div>
                    <h6 class="text-red-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                        ৳14.99
                    </h6>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                <div class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                    <div class="img-box">
                        <img src="/image/book-1.jpg" 
                             alt="book cover" class="xl:w-[140px] rounded-xl object-cover shadow-md">
                    </div>
                    <div class="pro-data w-full max-w-sm">
                        <h5 class="font-semibold text-xl leading-8 text-black max-[550px]:text-center">শিশুদের বাংলা পড়া(পেপারব্যাক)</h5>
                        <p class="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                            ড. আলী আহম্মাদ
                        </p>
                        <p class="text-sm text-gray-400 max-[550px]:text-center">পেপারব্যাক</p>
                        <h6 class="font-medium text-lg leading-8 text-red-600 max-[550px]:text-center">৳24.99</h6>
                    </div>
                </div>
                
                <div class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                    <h6 class="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                        ৳3.99 <span class="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">(ডেলিভারি চার্জ)</span>
                    </h6>
                    <div class="flex items-center w-full mx-auto justify-center">
                        <button class="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                            <Icon name="uil:minus" class="text-gray-900 text-xl transition-all duration-500 group-hover:text-black" />
                        </button>
                        <input type="text" class="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent" placeholder="1">
                        <button class="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                            <Icon name="uil:plus" class="text-gray-900 text-xl transition-all duration-500 group-hover:text-black" />
                        </button>
                    </div>
                    <h6 class="text-red-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                        ৳24.99
                    </h6>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                <div class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                    <div class="img-box">
                        <img src="/image/book-1.jpg" 
                             alt="book cover" class="xl:w-[140px] rounded-xl object-cover shadow-md">
                    </div>
                    <div class="pro-data w-full max-w-sm">
                        <h5 class="font-semibold text-xl leading-8 text-black max-[550px]:text-center">শিশুদের বাংলা পড়া(পেপারব্যাক)</h5>
                        <p class="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                            ড. আলী আহম্মাদ
                        </p>
                        <p class="text-sm text-gray-400 max-[550px]:text-center">পেপারব্যাক</p>
                        <h6 class="font-medium text-lg leading-8 text-red-600 max-[550px]:text-center">৳18.99</h6>
                    </div>
                </div>
                
                <div class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                    <h6 class="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                        ৳3.99 <span class="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">(ডেলিভারি চার্জ)</span>
                    </h6>
                    <div class="flex items-center w-full mx-auto justify-center">
                        <button class="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                            <Icon name="uil:minus" class="text-gray-900 text-xl transition-all duration-500 group-hover:text-black" />
                        </button>
                        <input type="text" class="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent" placeholder="1">
                        <button class="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                            <Icon name="uil:plus" class="text-gray-900 text-xl transition-all duration-500 group-hover:text-black" />
                        </button>
                    </div>
                    <h6 class="text-red-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                        ৳18.99
                    </h6>
                </div>
            </div>

            <div class="bg-amber-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto border border-amber-100">
                <div class="flex items-center justify-between w-full mb-6">
                    <p class="font-normal text-xl leading-8 text-gray-600">Sub Total</p>
                    <h6 class="font-semibold text-xl leading-8 text-gray-900">৳58.97</h6>
                </div>
                <div class="flex items-center justify-between w-full pb-6 border-b border-amber-200">
                    <p class="font-normal text-xl leading-8 text-gray-600">ডেলিভারি চার্জ</p>
                    <h6 class="font-semibold text-xl leading-8 text-gray-900">৳11.97</h6>
                </div>
                <div class="flex items-center justify-between w-full py-6">
                    <p class="font-manrope font-medium text-2xl leading-9 text-gray-900">মোট</p>
                    <h6 class="font-manrope font-medium text-2xl leading-9 text-red-600">৳70.94</h6>
                </div>
            </div>
            <NuxtLink to="/order/order-confirm">
                <div class="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                <button class="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-red-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-red-700">
                    কন্টিনিউ উইথ পেমেন্ট
                    <Icon name="uil:arrow-right" class="ml-2" />
                </button>
            </div>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>

</style>