<script setup>

const books = [
  {
    id: 1,
    title: 'প্রাক-প্রাথমিক বাংলা সিলেবাস',
    author: 'প্রাথমিক শিক্ষা অধিদপ্তর',
    image: '/image/pre-play.jpg', 
    syllabus: '/image/Untitled presentation.pdf', 
    questionPapers: [
      { name: 'নমুনা প্রশ্নপত্র ২০২৪', url: '/image/Sisuder Bangla Pora-(Class-Play) (1).pdf' }, 
    ]
  },
  {
    id: 2,
    title: 'প্রাক-প্রাথমিক গণিত সিলেবাস',
    author: 'প্রাথমিক শিক্ষা অধিদপ্তর',
    image: '/image/pre-play.jpg',
    syllabus: '/image/Untitled presentation.pdf',
    questionPapers: [
      { name: 'নমুনা প্রশ্নপত্র ২০২৪', url: '/image/Sisuder Bangla Pora-(Class-Play) (1).pdf' },
    ]
  },
  {
    id: 3,
    title: 'প্রাক-প্রাথমিক ইংরেজি সিলেবাস',
    author: 'প্রাথমিক শিক্ষা অধিদপ্তর',
    image: '/image/pre-play.jpg',
    syllabus: '/image/Untitled presentation.pdf',
    questionPapers: [
      { name: 'নমুনা প্রশ্নপত্র ২০২৪', url: '/image/Sisuder Bangla Pora-(Class-Play) (1).pdf' },
    ]
  },
  {
    id: 4,
    title: 'প্রাক-প্রাথমিক পরিবেশ পরিচিতি',
    author: 'প্রাথমিক শিক্ষা অধিদপ্তর',
    image: '/image/pre-play.jpg',
    syllabus: '/image/Untitled presentation.pdf',
    questionPapers: [
      { name: 'নমুনা প্রশ্নপত্র ২০২৪', url: '/image/Sisuder Bangla Pora-(Class-Play) (1).pdf' },
    ]
  },
  {
    id: 5,
    title: 'প্রাক-প্রাথমিক ধর্ম ও নৈতিক শিক্ষা',
    author: 'প্রাথমিক শিক্ষা অধিদপ্তর',
    image: '/image/pre-play.jpg',
    syllabus: '/image/Untitled presentation.pdf',
    questionPapers: [
      { name: 'নমুনা প্রশ্নপত্র ২০২৪', url: '/image/Sisuder Bangla Pora-(Class-Play) (1).pdf' },
    ]
  },
  {
    id: 6,
    title: 'প্রাক-প্রাথমিক শরীরচর্চা ও স্বাস্থ্য',
    author: 'প্রাথমিক শিক্ষা অধিদপ্তর',
    image: '/image/pre-play.jpg',
    syllabus: '/image/Untitled presentation.pdf',
    questionPapers: [
      { name: 'নমুনা প্রশ্নপত্র ২০২৪', url: '/image/Sisuder Bangla Pora-(Class-Play) (1).pdf' },
    ]
  }
];

const handleViewPdf = (pdfData) => {
  console.log('View PDF:', pdfData);
  window.open(pdfData.url, '_blank');

};
</script>

<template>
  <section class="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
    <div class="container mx-auto px-4 py-12">

      <div class="text-center mb-16">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 uppercase">
          প্রাক-প্রাথমিক সিলেবাস এবং প্রশ্নপত্র
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          প্রাক-প্রাথমিক শিক্ষার্থীদের জন্য সকল বিষয়ের সিলেবাস এবং নমুনা প্রশ্নপত্র
        </p>
        <div class="w-48 h-1 bg-red-500 mx-auto rounded-full mt-6"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PdfDownLoadShow
          v-for="book in books"
          :key="book.id"
          :book="book"
          @view-pdf="handleViewPdf"
        />
      </div>

      <div class="mt-12 text-center">
        <div class="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <h3 class="text-xl font-bold text-gray-800 mb-4">সকল ফাইল একসাথে ডাউনলোড করুন</h3>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/image/Sisuder Bangla Pora-(Class-Play) (1).pdf" 
              download
              class="bg-[#1C3B8B] hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <Icon name="material-symbols:download" class="w-5 h-5 mr-2" />
              সিলেবাস ডাউনলোড
            </NuxtLink>
            <NuxtLink
              to="/image/Sisuder Bangla Pora-(Class-Play) (1).pdf" 
              download
              class="bg-green-700 hover:bg-green-900 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <Icon name="material-symbols:download" class="w-5 h-5 mr-2" />
              প্রশ্নপত্র ডাউনলোড
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>