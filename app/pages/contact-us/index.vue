<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const { $api } = useNuxtApp();
const toast = useToast();

const form = ref({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const handleSubmit = async () => {
  const formData = new FormData();
  formData.append("name", form.value.name);
  formData.append("email", form.value.email);
  formData.append("phone", form.value.phone);
  formData.append("subject", form.value.subject);
  formData.append("message", form.value.message);

  try {
    await $api("/frontend/v1/contact-us", {
      method: "post",
      body: formData,
    });

    toast.add({
      title: "Success",
      description: "আপনার বার্তা সফলভাবে পাঠানো হয়েছে!",
      color: "green",
      icon: "i-heroicons-check-circle",
    });

    form.value = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };
  } catch (error) {
    console.error("Submission error:", error);

    toast.add({
      title: "Error",
      description: "বার্তা পাঠাতে ব্যর্থ হয়েছে। আবার চেষ্টা করুন।",
      color: "red",
      icon: "i-heroicons-x-circle",
    });
  }
};

</script>

<template>
  <section class="bg-gray-50">
    <section class="py-6 bg-white">
      <div class="text-center items-center justify-center py-12">
        <p class="text-md text-red-600">আমরা আপনার কাছ থেকে শুনতে চাই</p>
        <h3 class="text-4xl text-gray-800 text-center">
          আমাদের বই সম্প্রদায়ের সাথে সংযুক্ত হন
        </h3>
        <div class="flex justify-center items-center py-2">
          <div class="border-b bg-red-600 w-20 border-red-600 border-2"></div>
          <div class="border-b bg-red-600 w-10 border-red-600 border-2"></div>
        </div>
      </div>
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div class="bg-white p-6 flex flex-col items-center text-center shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group">
            <div class="p-3 bg-red-50 mb-4 group-hover:bg-red-100 transition-colors duration-300">
              <Icon icon="mdi:book-open-page-variant" class="w-8 h-8 text-red-600" />
            </div>
            <h4 class="font-bold text-lg mb-2 text-gray-800">আমাদের দোকান</h4>
            <p class="text-sm text-gray-600">০৩৭/৩, মফিজউল্লাহ কমপ্লেক্স</p>
            <p class="text-sm text-gray-600">বাংলাবাজার, ঢাকা-১১০০, বাংলাদেশ।</p>
          </div>
          <div class="bg-white p-6 flex flex-col items-center text-center shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group">
            <div class="p-3 bg-red-50 mb-4 group-hover:bg-red-100 transition-colors duration-300">
              <Icon icon="mdi:phone" class="w-8 h-8 text-red-600" />
            </div>
            <h4 class="font-bold text-lg mb-2 text-gray-800">আমাদের কল করুন</h4>
            <p class="text-sm text-gray-600">০১৯৭২-১৩৩৪৫</p>
            <p class="text-sm text-gray-600">০১৭৮৪-৫৬৬৩১৫</p>
          </div>
          <div class="bg-white p-6 flex flex-col items-center text-center shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group">
            <div class="p-3 bg-red-50 mb-4 group-hover:bg-red-100 transition-colors duration-300">
              <Icon icon="mdi:email-outline" class="w-8 h-8 text-red-600" />
            </div>
            <h4 class="font-bold text-lg mb-2 text-gray-800">আমাদের ইমেইল করুন</h4>
            <p class="text-sm text-gray-600">salsabilpublication13@gmail.com</p>
          </div>

          <div class="bg-white p-6 flex flex-col items-center text-center shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group">
            <div class="p-3 bg-red-50 mb-4 group-hover:bg-red-100 transition-colors duration-300">
              <Icon icon="mdi:clock-outline" class="w-8 h-8 text-red-600" />
            </div>
            <h4 class="font-bold text-lg mb-2 text-gray-800">পড়ার সময়</h4>
            <p class="text-sm text-gray-600">9AM - 6PM,</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-16 bg-gray-50">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800">
            যোগাযোগ <span class="text-red-600">সালসাবীল পাবলিকেশন্স</span>
          </h2>
          <p class="mt-2 text-gray-600">
            বই, অনুষ্ঠান, অথবা সুপারিশ সম্পর্কে কোন প্রশ্ন আছে? আমরা সাহায্য করার জন্য এখানে আছি!
          </p>
        </div>

        <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
          <div class="absolute left-0 top-0 bottom-0 w-8 bg-red-800 flex flex-col items-center justify-center">
            <div class="text-white text-xs font-bold transform -rotate-90 whitespace-nowrap">সালসাবীল পাবলিকেশন্স</div>
          </div>

          <div class="absolute left-8 top-0 bottom-0 w-4 bg-gray-100"></div>
          
          <div class="pl-16 pr-8 py-10 md:py-12">
            <div class="flex items-center mb-8">
              <div class="flex-1 h-px bg-gray-300"></div>
              <div class="px-4">
                <Icon name="mdi:book" class="w-10 h-10 text-red-600" />
              </div>
              <div class="flex-1 h-px bg-gray-300"></div>
            </div>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">আপনার নাম</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Icon icon="mdi:account-outline" class="w-5 h-5 text-gray-500" />
                    </div>
                    <input v-model="form.name" type="text" placeholder="আপনার নাম লিখুন"
                      class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none placeholder-gray-400 text-gray-900"
                      required />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">ইমেইল ঠিকানা</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Icon icon="mdi:email-outline" class="w-5 h-5 text-gray-500" />
                    </div>
                    <input v-model="form.email" type="email" placeholder="আপনার ইমেইল লিখুন"
                      class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none placeholder-gray-400 text-gray-900"
                      required />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">ফোন নম্বর</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Icon icon="mdi:phone-outline" class="w-5 h-5 text-gray-500" />
                    </div>
                    <input v-model="form.phone" type="text" placeholder="আপনার ফোন লিখুন"
                      class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none placeholder-gray-400 text-gray-900" />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">বিষয়</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Icon icon="mdi:book-open-outline" class="w-5 h-5 text-gray-500" />
                    </div>
                    <input v-model="form.subject" type="text" placeholder="তুমি কোন বিষয়টি জানতে চাও?"
                      class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none placeholder-gray-400 text-gray-900" />
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">আপনার বার্তা</label>
                <div class="relative">
                  <div class="absolute top-3 left-3 flex items-start pointer-events-none">
                    <Icon icon="mdi:lead-pencil" class="w-5 h-5 text-gray-500 mt-1" />
                  </div>
                  <textarea v-model="form.message" rows="5" placeholder="আপনি এখানে বার্তা দিন"
                    class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none placeholder-gray-400 text-gray-900"></textarea>
                </div>
              </div>

              <div class="flex justify-center pt-4">
                <button type="submit"
                  class="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition flex items-center">
                  <Icon icon="mdi:send" class="w-5 h-5 mr-2" />
                  আপনার বার্তা পাঠান
                </button>
              </div>
            </form>
            
            <div class="flex items-center mt-8">
              <div class="flex-1 h-px bg-gray-300"></div>
              <div class="px-4 text-gray-600 text-sm italic">
                "বই ছাড়া ঘর যেন আত্মা ছাড়া দেহ।" - মার্কাস তুলিয়াস সিসেরো
              </div>
              <div class="flex-1 h-px bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
<section class="py-12">
  <div class="max-w-7xl mx-auto px-4">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.645464039441!2d90.41148147159078!3d23.70584708352581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b90784ca8f35%3A0x6bac5d1ee7e5e526!2z4Ka44Ka-4Kay4Ka44Ka-4Kas4KeA4KayIOCmquCmvuCmrOCmsuCmv-CmleCnh-CmtuCmqOCnjeCmuA!5e0!3m2!1sbn!2sbd!4v1761459891605!5m2!1sbn!2sbd"
      width="100%"
      height="450"
      class="rounded-lg shadow-md"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</section>

  </section>
</template>
