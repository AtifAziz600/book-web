<script setup>
</script>
<template>
    <section class="w-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div class="container mx-auto px-4 max-w-7xl">
            <div class="flex max-w-7xl mx-auto rounded-lg shadow-xl my-8 overflow-hidden border-2" style="border-color: var(--color-primary);">
                <div class="md:w-3/5 p-6 md:p-8 border-r-2" style="border-color: var(--color-primary); background-color: white;">
                    <h2 class="text-xl md:text-2xl font-bold pb-3 border-b-2 flex items-center" style="color: var(--color-primary); border-color: var(--color-primary);">
                        <span class="mr-2">
                            <Icon name="mdi:books" class="h-8 w-8"/>
                        </span>
                        নতুন প্রস্তাবিত বই
                    </h2>
                    
                    <div class="flex flex-col md:flex-row mt-6 space-y-4 md:space-y-0 md:space-x-6">
                        
                        <div class="relative w-48 h-48 mx-auto md:mx-0">
                            <div class="border-2 w-full h-full rounded-md overflow-hidden flex items-center justify-center" style="border-color: var(--color-primary);">
                                <img src="/image/book-1.jpg" class="h-full w-full object-cover" alt="">
                            </div>
                            
                            <button class="absolute -top-4 left-0 rounded-md px-3 py-1 text-sm font-medium transition-all duration-300 hover:scale-105" 
                                    style="background-color: var(--color-secondary); color: white; border-color: var(--color-secondary);">
                                একটু পড়ে দেখুন
                            </button>
                        </div>
                        
                        <div class="flex flex-col justify-between px-8 space-y-6">
                            <div class="mx-auto">
                                <p class="text-xl md:text-2xl font-bold mb-2" style="color: var(--color-primary);">আটফালুল রিডার</p>
                                <p class="text-lg md:text-xl mb-1" style="color: var(--color-primary);">লেখক: ড. আলী আহম্মাদ</p>
                                <p class="text-sm md:text-base bg-yellow-100 inline-block px-2 py-1 rounded" style="color: var(--color-primary); background-color: var(--color-thirdly);">[৩য় শ্রেণির জন্য]</p>
                            </div>
                            <button class="self-start rounded-md gap-8 px-4 py-2 text-sm font-medium transition-all duration-300 hover:shadow-md mt-4" 
                                    style="background-color: var(--color-primary); color: white; border-color: var(--color-primary);">
                                একটু পড়ে দেখুন
                            </button>
                        </div>
                    </div>
                </div>

                <div class="md:w-2/5 p-6 md:p-8" style="background-color: rgba(28, 59, 139, 0.05);">
                    <div class="flex items-center pb-3 border-b-2" style="border-color: var(--color-primary);">
                        <span class="text-xl md:text-2xl mr-2" >
                            <Icon name="mdi:newspaper" class="h-8 w-8" />
                        </span>
                        <h2 class="text-xl md:text-2xl font-bold" style="color: var(--color-primary);">নোটিশ কার্ড</h2>
                    </div>
                    
                    <div class="mt-4 space-y-3">
                        <div class="p-3 rounded-md" style="background-color: white; border-left: 4px solid var(--color-secondary);">
                            <p class="text-sm" style="color: var(--color-primary);">নোটিশ কার্ডের বিষয়বস্তু এখানে প্রদর্শিত হবে</p>
                        </div>
                        <div class="p-3 rounded-md" style="background-color: white; border-left: 4px solid var(--color-secondary);">
                            <p class="text-sm" style="color: var(--color-primary);">আরও নোটিশ এখানে যুক্ত করা যেতে পারে</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
:root {
  --color-primary: #1C3B8B;
  --color-secondary: #E61C24;
  --color-thirdly: #FEE600;
}
</style>