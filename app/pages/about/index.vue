<script setup>
import { ref } from "vue";
import { Icon } from '@iconify/vue';
const faqs = ref([
  {
    question: "সালসাবিল পাবলিকেশন্স কি ধরনের বই সরবরাহ করে?",
    answer:
      "আমরা কুরআন, হাদীস, ইসলামি সাহিত্য, তাফসীর, ফিকহ, ইতিহাস ও শিশুতোষ ইসলামি বই সরবরাহ করি। সব বই প্রামাণিক এবং বিশ্বস্ত প্রকাশনা থেকে সংগ্রহ করা হয়।",
    open: false,
  },
  {
    question: "আমি কি অনলাইনে বই অর্ডার করতে পারি?",
    answer:
      "হ্যাঁ, আপনি আমাদের ওয়েবসাইট বা অ্যাপ থেকে সরাসরি বই অর্ডার করতে পারেন। আমরা বাংলাদেশ ও আন্তর্জাতিকভাবে নিরাপদ ডেলিভারি নিশ্চিত করি।",
    open: false,
  },
  {
    question: "বইয়ের দাম কি সাশ্রয়ী?",
    answer:
      "হ্যাঁ, আমরা নিশ্চিত করি যে আমাদের বইগুলো মানসম্পন্ন হওয়া সত্ত্বেও সর্বোচ্চ পাঠকদের জন্য সাশ্রয়ী মূল্যমানের।",
    open: false,
  },
  {
    question: "সালসাবিল থেকে বই কিনলে কি প্রামাণিকতা নিশ্চিত থাকে?",
    answer:
      "অবশ্যই! আমাদের সব বই কুরআন ও সুন্নাহ ভিত্তিক মূল প্রকাশনা থেকে সংগ্রহ করা হয় এবং প্রামাণিক উৎস নিশ্চিত করা হয়।",
    open: false,
  },
  {
    question: "আমি কি নতুন বা পুরনো বইয়ের এক্সচেঞ্জ করতে পারি?",
    answer:
      "আমরা মূলত নতুন ও প্রামাণিক প্রকাশনার বই সরবরাহ করি। এক্সচেঞ্জ বা ট্রেড-ইন অপশন বর্তমানে প্রযোজ্য নয়।",
    open: false,
  },
  {
    question: "আমরা কি আন্তর্জাতিকভাবে বই অর্ডার করতে পারি?",
    answer:
      "হ্যাঁ, আমরা অনলাইনে অর্ডার দেওয়ার মাধ্যমে বিশ্বের যেকোনো দেশে বই পাঠাই। ডেলিভারির খরচ দেশের উপর নির্ভর করে।",
    open: false,
  },
  {
    question: "বই অর্ডার করতে কি কোন রেজিস্ট্রেশন প্রয়োজন?",
    answer:
      "হ্যাঁ, অর্ডার করার জন্য একটি প্রোফাইল তৈরি করতে হবে, যেখানে আপনার নাম, ঠিকানা এবং কন্টাক্ট তথ্য দেওয়া থাকবে।",
    open: false,
  },
  {
    question: "বই ডেলিভারি কত দিন সময় নেয়?",
    answer:
      "বাংলাদেশে সাধারণ ডেলিভারি প্রায় ৩-৭ কর্মদিবসের মধ্যে হয়। আন্তর্জাতিক অর্ডার দেশের উপর নির্ভর করে ৭-১৫ কার্যদিবসের মধ্যে পৌঁছায়।",
    open: false,
  },
]);

  
const toggleFAQ = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
const books = [
  {
    title: "সালসাবিল কেন?",
    description: "সালসাবিল সম্পর্কে বিস্তারিত বিবরণ যা আমাদের জীবন ও মানসিক উন্নয়নে সাহায্য করে।",
    icon: "mdi-book-open-page-variant", 
  },
  {
    title: "বাংলা সাহিত্যের ইতিহাস",
    description: "বাংলা সাহিত্যের ইতিহাস এবং এর গুরুত্বপূর্ণ লেখকদের সংক্ষিপ্ত বিবরণ।",
    icon: "mdi-book-open-variant",
  },
  {
    title: "আরবি শিক্ষক",
    description: "আরবি ভাষা শেখার জন্য কার্যকরী বই ও শিক্ষণ উপকরণ।",
    icon: "mdi-school",
  },
  {
    title: "প্রাকৃতিক পরিবেশ",
    description: "প্রাকৃতিক পরিবেশ ও পরিবেশ রক্ষা করার গুরুত্ব নিয়ে লেখা বই।",
    icon: "mdi-book-multiple",
  },
];

const missionVision = [
  {
    title: "আমাদের লক্ষ্য",
    description: "ইসলামী জ্ঞান প্রচার, মানুষকে প্রামাণিক উৎসের দিকে পরিচালনা, বিশ্বাস নূর্তিপাদন এবং শিক্ষাকে সহজলভ্য করা।",
    icon: "mdi-target"
  },
  {
    title: "আমাদের দৃষ্টিভঙ্গি",
    description: "বিশ্বব্যাপী ইসলামী বইয়ের জন্য একটি বিশ্বস্ত প্ল্যাটফর্ম হয়ে ওঠা।",
    icon: "mdi-eye"
  }
];

const whyChoose = [
  {
    title: "প্রামাণিক গবেষণালব্ধ ইসলামী বিষয়বস্তু",
    description: "কুরআন ও সুন্নাহ ভিত্তিক নির্ভরযোগ্য বই"
  },
  {
    title: "সাশ্রয়ী ও সবার জন্য সহজলভ্য",
    description: "মূল্যবান জ্ঞান সবার কাছে পৌঁছে দেওয়া"
  },
  {
    title: "বিস্তৃত বৈচিত্র্য",
    description: "কুরআন, তাফসীর, হাদীস, ফিকহ, ইতিহাস, শিশুতোষ বই ইত্যাদি"
  },
  {
    title: "বাংলা ও আরবি উভয় ভাষায়",
    description: "বহুভাষিক পাঠকদের জন্য উপযোগী সংগ্রহ"
  }
];

const values = [
  {
    title: "প্রামাণিকতা",
    description: "কুরআন ও সুন্নাহ ভিত্তিক বই",
    icon: "mdi-certificate"
  },
  {
    title: "বিশ্বাস ও অখণ্ডতা",
    description: "সততা ও নীতিনিষ্ঠা",
    icon: "mdi-handshake"
  },
  {
    title: "শিক্ষা ও জ্ঞানার্জন",
    description: "জ্ঞান বিস্তারে প্রতিশ্রুতিবদ্ধ",
    icon: "mdi-school"
  },
  {
    title: "মুসলিম উম্মাহর সেবা",
    description: "সম্প্রদায়ের উন্নয়নে অবদান",
    icon: "mdi-account-group"
  }
];

const journey = [
  {
    year: "২০১০",
    title: "প্রতিষ্ঠা",
    description: "প্রামাণিক ইসলামী বই প্রকাশের লক্ষ্যে সালসাবিল পাবলিকেশন্স প্রতিষ্ঠিত হয়"
  },
  {
    year: "২০১৫",
    title: "সম্প্রসারণ",
    description: "বাংলা ও আরবি ভাষায় বই প্রকাশের পরিধি বৃদ্ধি"
  },
  {
    year: "২০২০",
    title: "ডিজিটাল উপস্থিতি",
    description: "অনলাইন প্ল্যাটফর্ম চালু করে বিশ্বব্যাপী পাঠকদের কাছে পৌঁছানো শুরু"
  },
  {
    year: "বর্তমান",
    title: "আন্তর্জাতিক স্বীকৃতি",
    description: "বিশ্বব্যাপী মুসলিম পাঠকদের কাছে বিশ্বস্ত প্রকাশনী হিসেবে প্রতিষ্ঠিত"
  }
];

const promises = [
  {
    title: "প্রামাণিক উৎস",
    description: "কুরআন ও সুন্নাহ ভিত্তিক মূল প্রকাশনার নিশ্চয়তা"
  },
  {
    title: "নির্ভরযোগ্য ডেলিভারি",
    description: "সময়মতো ও নিরাপদে বই পৌঁছে দেওয়ার প্রতিশ্রুতি"
  },
  {
    title: "শ্রদ্ধাশীল সেবা",
    description: "পেশাদার ও ইসলামী মূল্যবোধ সম্পন্ন সেবা প্রদান"
  }
];
</script>

<template>
  <section class="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
    <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
                <h1 class="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl">
                  সালসাবীল পাবলিকেশন্স স্বাগতম
                </h1>
                <p class="mt-4 text-gray-600">
                  আমরা আপনাদের জন্য কুরআন, হাদীস, ইসলামি সাহিত্য ও সমকালীন ইসলামী বিষয়ক বিশ্বস্ত ও প্রামাণিক বই সংগ্রহ করি। জ্ঞান ও নৈতিকতার আলো ছড়াতে আমাদের প্রচেষ্টা অব্যাহত।
                </p>
                <div class="grid gap-6 mt-8 sm:grid-cols-2">
                    <div class="flex items-center text-gray-800 -px-3">
                      <Icon name="mdi:check" class="w-5 h-5 mx-3"/>
                        <span class="mx-3">প্রিমিয়াম সংগ্রহ</span>
                    </div>

                    <div class="flex items-center text-gray-800 -px-3">
                       <Icon name="mdi:check" class="w-5 h-5 mx-3"/>
                        <span class="mx-3">নির্ভরযোগ্য প্রকাশনী</span>
                    </div>

                    <div class="flex items-center text-gray-800 -px-3">
                     <Icon name="mdi:check" class="w-5 h-5 mx-3"/>
                        <span class="mx-3">আসল ও প্রামাণিক গ্রন্থ</span>
                    </div>

                    <div class="flex items-center text-gray-800 -px-3">
                        <Icon name="mdi:check" class="w-5 h-5 mx-3"/>
                        <span class="mx-3">বাংলা ও আরবি বইয়ের সমাহার</span>
                    </div>

                    <div class="flex items-center text-gray-800 -px-3">
                       <Icon name="mdi:check" class="w-5 h-5 mx-3"/>
                        <span class="mx-3">নিরাপদ লেনদেন</span>
                    </div>

                    <div class="flex items-center text-gray-800 -px-3">
                       <Icon name="mdi:check" class="w-5 h-5 mx-3"/>
                        <span class="mx-3">দ্রুত ও বিশ্বস্ত ডেলিভারি</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img class="object-cover w-full h-full max-w-2xl rounded-md" src="/image/best-seller-books-38a6.jpg" alt="ইসলামী বইয়ের ছবি">
        </div>
    </div>

    <section class="py-24 relative">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full flex-col justify-start items-center lg:gap-11 gap-8 inline-flex">
          <div class="w-full flex-col justify-start items-center gap-2.5 flex">
            <h2 class="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">বইসমূহ</h2>
            <p class="max-w-4xl mx-auto text-center text-gray-500 text-lg font-normal leading-8">
              এখানে বিভিন্ন বই সম্পর্কে সংক্ষিপ্ত বিবরণ দেওয়া হলো যা পাঠকদের জ্ঞান ও সচেতনতা বৃদ্ধি করে।
            </p>
          </div>
          <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-start items-start gap-8">
            <div
              v-for="(book, index) in books"
              :key="index"
              class="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-[#1C3B8B] transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex"
            >
              <div class="flex-col justify-start items-center gap-3.5 inline-flex text-center">
                <Icon :icon="book.icon" width="40" height="40" class="text-[#E61C24]" />
                <h4 class="text-gray-900 text-lg font-semibold leading-8 mt-2">{{ book.title }}</h4>
                <p class="text-gray-500 text-sm font-normal leading-snug mt-1">{{ book.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full flex-col justify-start items-center lg:gap-12 gap-8 inline-flex">
          <div class="w-full flex-col justify-start items-center gap-4 flex">
            <h2 class="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">আমাদের লক্ষ্য ও দৃষ্টিভঙ্গি</h2>
            <p class="max-w-3xl text-center text-gray-500 text-lg font-normal leading-8">
              আমরা ইসলামী জ্ঞান প্রচার এবং মানুষকে প্রামাণিক উৎসের দিকে পরিচালনা করার লক্ষ্যে নিবেদিত
            </p>
          </div>
          
          <div class="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 justify-center items-center gap-8 w-full">
            <div
              v-for="(item, index) in missionVision"
              :key="index"
              class="w-full p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-sm"
            >
              <div class="flex items-start gap-4">
                <div class="p-3 bg-[#E61C24]/10 rounded-full">
                  <Icon :icon="item.icon" width="28" height="28" class="text-[#E61C24]" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{{ item.title }}</h3>
                  <p class="text-gray-600">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full flex-col justify-start items-center lg:gap-12 gap-8 inline-flex">
          <div class="w-full flex-col justify-start items-center gap-4 flex">
            <h2 class="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">কেন সালসাবিল পাবলিকেশন্স বেছে নিবেন?</h2>
            <p class="max-w-3xl text-center text-gray-500 text-lg font-normal leading-8">
              আমাদের অনন্য বৈশিষ্ট্য যা আমাদের অন্যদের থেকে আলাদা করে
            </p>
          </div>
          
          <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center items-center gap-6 w-full">
            <div
              v-for="(item, index) in whyChoose"
              :key="index"
              class="w-full p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ item.title }}</h3>
              <p class="text-gray-600">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full flex-col justify-start items-center lg:gap-12 gap-8 inline-flex">
          <div class="w-full flex-col justify-start items-center gap-4 flex">
            <h2 class="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">আমাদের মূল্যবোধ</h2>
            <p class="max-w-3xl text-center text-gray-500 text-lg font-normal leading-8">
              আমাদের কাজের ভিত্তি যা আমাদের পরিচালিত করে
            </p>
          </div>
          
          <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center gap-8 w-full">
            <div
              v-for="(value, index) in values"
              :key="index"
              class="w-full p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#1C3B8B] transition-all duration-300 flex flex-col items-center text-center"
            >
              <div class="p-4 bg-[#E61C24]/10 rounded-full mb-4">
                <Icon :icon="value.icon" width="32" height="32" class="text-[#E61C24]" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ value.title }}</h3>
              <p class="text-gray-600">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full flex-col justify-start items-center lg:gap-12 gap-8 inline-flex">
          <div class="w-full flex-col justify-start items-center gap-4 flex">
            <h2 class="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">আমাদের যাত্রা</h2>
            <p class="max-w-3xl text-center text-gray-500 text-lg font-normal leading-8">
              প্রতিষ্ঠা থেকে আজ পর্যন্ত আমাদের বিকাশের গল্প
            </p>
          </div>
          
          <div class="w-full">
            <div class="relative">
              <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden lg:block"></div>
              
              <div class="space-y-12">
                <div
                  v-for="(step, index) in journey"
                  :key="index"
                  class="relative flex flex-col lg:flex-row items-center"
                  :class="{ 'lg:flex-row-reverse': index % 2 !== 0 }"
                >
                  <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#E61C24] rounded-full border-4 border-white shadow hidden lg:block"></div>

                  <div class="w-full lg:w-5/12 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                      <span class="inline-block px-3 py-1 bg-[#E61C24]/10 text-[#E61C24] font-bold rounded-full text-sm">{{ step.year }}</span>
                      <h3 class="text-xl font-bold text-gray-900">{{ step.title }}</h3>
                    </div>
                    <p class="text-gray-600">{{ step.description }}</p>
                  </div>
                  <div class="hidden lg:block w-2/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full flex-col justify-start items-center lg:gap-12 gap-8 inline-flex">
          <div class="w-full flex-col justify-start items-center gap-4 flex">
            <h2 class="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">আমাদের প্রতিশ্রুতি</h2>
            <p class="max-w-3xl text-center text-gray-500 text-lg font-normal leading-8">
              আমরা আমাদের গ্রাহকদের প্রতি যে প্রতিশ্রুতি রাখি
            </p>
          </div>
          
          <div class="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 justify-center items-center gap-8 w-full">
            <div
              v-for="(promise, index) in promises"
              :key="index"
              class="w-full p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 flex flex-col items-center text-center"
            >
              <div class="p-4 bg-[#E61C24]/10 rounded-full mb-4">
                <Icon icon="mdi:check" width="32" height="32" class="text-[#E61C24]" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ promise.title }}</h3>
              <p class="text-gray-600">{{ promise.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-16 bg-white border-t border-gray-100">
      <div class="max-w-4xl mx-auto px-4">
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী
        </h3>
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="border border-gray-200 rounded-xl p-5 cursor-pointer hover:border-primary transition"
            @click="toggleFAQ(index)"
          >
            <div class="flex justify-between items-center">
              <h4 class="text-lg font-semibold text-gray-800">
                {{ faq.question }}
              </h4>
              <Icon :icon="faq.open ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="w-6 h-6 text-primary" />
            </div>
<transition name="fade">
  <p v-if="faq.open" class="mt-3 text-gray-600 leading-relaxed animate-fade-in">
    {{ faq.answer }}
  </p>
</transition>

          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>