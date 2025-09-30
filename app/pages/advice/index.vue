<script setup lang="ts">
const founderMessage = `
প্রিয় পাঠকবৃন্দ,

আপনাদের সালসাবীল পাবলিকেশন্সে স্বাগতম জানাতে পেরে আমি অত্যন্ত আনন্দিত। প্রতিষ্ঠাতা হিসেবে আমি গর্বিত যে আমরা কুরআন, হাদীস, তাফসীর, ফিকহ, ইসলামি সাহিত্য এবং শিশুতোষ ইসলামি বই পাঠকদের হাতে পৌঁছে দেওয়ার জন্য নিরলস প্রচেষ্টা চালিয়ে যাচ্ছি।

আমাদের শুরু থেকেই লক্ষ্য ছিল—বিশ্বস্ত ইসলামি বই সুলভ মূল্যে সরবরাহ করা এবং পাঠকদের আস্থা অর্জন করা। প্রতিটি বই আমরা যত্নের সাথে নির্বাচন করি যাতে তা হয় নির্ভরযোগ্য, প্রামাণ্য এবং পাঠকের আত্মিক ও নৈতিক উন্নয়নে সহায়ক।

আমাদের মিশন হলো স্বচ্ছতা, আমানতদারিতা এবং দীর্ঘস্থায়ী সম্পর্কের ভিত্তিতে কাজ করা। আপনি যদি কুরআন, হাদীস, তাফসীর, বা শিশুদের জন্য ইসলামি বই খুঁজে থাকেন—সালসাবীল পাবলিকেশন্স সবসময় আপনাদের পাশে আছে।

আমাদের উপর ভরসা করার জন্য ধন্যবাদ। আসুন, একসাথে ইসলামি জ্ঞান ও আলোকে আগামী প্রজন্মের কাছে পৌঁছে দিই।
`;

const founderAdvice = `
জীবনে সফলতা আসে ধৈর্য, পরিশ্রম এবং সততার মাধ্যমে। আমি আমাদের পাঠক ও সহযোগীদের প্রতি আহ্বান জানাই—বড় স্বপ্ন দেখুন, সৎ থাকুন, এবং চ্যালেঞ্জের মুখে কখনো হাল ছাড়বেন না।

সালসাবীল পাবলিকেশন্সের লক্ষ্য কেবল বই প্রকাশ নয়, বরং একটি আস্থা, উন্নয়ন এবং ইসলামি জ্ঞানচর্চার সংস্কৃতি তৈরি করা, যা প্রজন্ম থেকে প্রজন্মে ছড়িয়ে পড়বে।
`;
</script>

<template>
  <section
    class="w-full relative overflow-hidden py-12 md:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100"
  >
    <div class="relative z-50 container mx-auto px-4 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-12 mb-20">
        <div
          class="lg:w-1/3 flex justify-center"
        >
          <img
            src="/image/avater1.png"
            alt="Founder of Salsabil Publications"
            class="shadow-xl w-full h-full object-cover rounded-2xl border-4 border-white"
          />
        </div>
        <div
          class="lg:w-2/3 space-y-6"
        >
          <div class="text-center lg:text-left">
            <h1 class="text-4xl font-bold text-gray-800 mb-2">
              আমাদের প্রতিষ্ঠাতার ব্যক্তিগত বার্তা
            </h1>
            <p class="text-xl text-gray-600">
              আমাদের যাত্রা ও প্রতিশ্রুতির গল্প
            </p>
          </div>

          <div
            class="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg leading-relaxed"
          >
            <p
              v-for="(para, i) in founderMessage.split('\n').filter(Boolean)"
              :key="i"
              class="text-gray-700 mb-4 text-lg"
            >
              {{ para }}
            </p>

            <div class="mt-6 pt-6 border-t border-gray-200 text-right">
              <p class="font-semibold text-red-400 text-lg">
                — [প্রতিষ্ঠাতার নাম]
              </p>
              <p class="text-gray-500 text-sm">
                প্রতিষ্ঠাতা ও প্রধান নির্বাহী, সালসাবীল পাবলিকেশন্স
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row-reverse items-center gap-12">
        <div
          class="lg:w-1/3 flex justify-center"
        >
          <img
            src="/image/avater2.png"
            alt="Founder"
            class="shadow-xl w-full h-full object-cover rounded-2xl border-4 border-white"
          />
        </div>
        <div
          class="lg:w-2/3 space-y-6"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <div class="text-center lg:text-left">
            <h1 class="text-4xl font-bold text-gray-800 mb-2">
              আমাদের প্রতিষ্ঠাতার পরামর্শ
            </h1>
            <p class="text-xl text-gray-600">
              আমাদের দৃষ্টিভঙ্গি ও ভবিষ্যৎ পরিকল্পনা
            </p>
          </div>

          <div
            class="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg leading-relaxed"
          >
            <blockquote
              v-for="(para, i) in founderAdvice.split('\n').filter(Boolean)"
              :key="i"
              class="text-gray-700 mb-4 text-lg italic border-l-4 border-red-400 pl-4"
            >
              {{ para }}
            </blockquote>

            <div class="mt-6 pt-6 border-t border-gray-200 text-right">
              <p class="text-sm text-gray-500 italic">
                "সফলতা শেষ কথা নয়, ব্যর্থতা চূড়ান্ত নয়; এগিয়ে যাওয়ার সাহসই আসল বিষয়।"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
