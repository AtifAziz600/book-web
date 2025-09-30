<template>
  <footer class="bg-[#ED1B24] text-white p-6 md:p-10 border-t border-gray-700">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
      
      <div>
        <h3 class="text-xl font-extrabold mb-4 text-white">সালসাবীল পাবলিকেশন্স</h3>
        <p class="mb-4 text-gray-200">
          বই ও জ্ঞান প্রসারে আমাদের পাশে থাকুন। আপনার পছন্দের বইটি দ্রুত পেতে আজই যোগাযোগ করুন।
        </p>
        
        <div class="flex space-x-4 text-xl">
          <a href="#" class="hover:text-blue-400 transition duration-300" aria-label="Facebook Page">
            <Icon name="mdi:facebook"/>
          </a>
          <a href="#" class="hover:text-green-400 transition duration-300" aria-label="WhatsApp Contact">
            <Icon name="mdi:whatsapp" class="h-6 w-6 text-white"/>
          </a>
          <a href="mailto:salsabilpublication13@gmail.com" class="hover:text-red-400 transition duration-300" aria-label="Email Address">
           <Icon name="mdi:email" class="h-6 w-6 text-white"/>
          </a>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-bold mb-4 text-yellow-400">গুরুত্বপূর্ণ লিংক</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-yellow-300 transition duration-200">আমাদের সম্পর্কে</a></li>
          <li><a href="#" class="hover:text-yellow-300 transition duration-200">সকল বই</a></li>
          <li><a href="#" class="hover:text-yellow-300 transition duration-200">বিক্রেতা/ডিলার</a></li>
          <li><a href="#" class="hover:text-yellow-300 transition duration-200">প্রাইভেসি পলিসি</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-bold mb-4 text-yellow-400">যোগাযোগ ও ঠিকানা</h3>
        <p class="mb-2"><strong class="text-yellow-400">ঠিকানা:</strong></p>
        <p>০৩৭/৩, মফিজউল্লাহ কমপ্লেক্স</p>
        <p class="mb-4">বাংলাবাজার, ঢাকা-১১০০, বাংলাদেশ।</p>
        
        <p class="mb-2"><strong class="text-yellow-400">ফোন:</strong></p>
        <p><Icon name="mdi:phone"/> ০১৭৮৪-৫৬৬৩১৫</p>
        <p class="mb-4"><Icon name="mdi:phone"/> ০১৯৭২-১৩৩৪৫ (বইয়ের জন্য)</p>

        <a href="mailto:salsabilpublication13@gmail.com" class="text-yellow-300 hover:underline flex items-center space-x-1">
          <Icon name="mdi:email" class="w-5 h-5"/> <span>salsabilpublication13@gmail.com</span>
        </a>
      </div>

      <div>
        <h3 class="text-lg font-bold mb-4 text-yellow-400">নতুন বইয়ের খবর পান!</h3>
        
        <p class="mb-4 text-gray-200 text-xs">
          আমাদের প্রকাশনার সর্বশেষ খবর, অফার এবং নতুন বইয়ের ঘোষণা পেতে সাবস্ক্রাইব করুন।
        </p>

        <form class="w-full">
          <label for="SubscriberEmail" class="sr-only"> ইমেল </label>
          <div class="flex flex-col space-y-2 p-2 rounded-md bg-white border-2 border-yellow-400"> 
            <input
              type="email"
              id="SubscriberEmail"
              placeholder="আপনার ইমেল লিখুন"
              required
              class="w-full p-2 text-sm text-gray-900 placeholder-gray-500 focus:ring-yellow-400 focus:ring-2 border border-gray-300 rounded-sm"
            />
            <button
              type="submit"
              class="w-full bg-yellow-400 px-4 py-2 text-sm font-bold text-[#ED1B24] uppercase transition-all duration-300 hover:bg-yellow-500 rounded-sm"
            >
              সাবস্ক্রাইব করুন
            </button>
          </div>
        </form>
      </div>

    </div>
    
    <div class="mt-10 pt-4 border-t border-red-800 text-center text-sm text-gray-400">
      <p>
        © {{ new Date().getFullYear() }} <span class="text-white font-semibold">সালসাবীল পাবলিকেশন্স</span>। 
        সর্বস্বত্ব সংরক্ষিত। 
        <span class="text-gray-500">All Right Reserved</span>
      </p>
    </div>
  </footer>
</template>