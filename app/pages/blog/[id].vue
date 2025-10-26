<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { $api } = useNuxtApp()

const {data : blogData, status, refresh} = useAsyncData(`blog-${route.params.id}`, ()=> $api(`/frontend/v1/blog/${route.params.id}`))

</script>


<template>
  <section class="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
    <div class="mt-10">
      <div>
        <div class="mb-4 md:mb-0 w-full max-w-7xl mx-auto relative" style="height: 24em;">
          <div class="absolute left-0 bottom-0 w-full h-full z-10"
            style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));"></div>
          <img :src="blogData?.image_url" class="absolute left-0 top-0 w-full h-full z-0 object-cover" />
          <div class="p-4 absolute bottom-0 left-0 z-20">
            <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
              {{ blogData?.title }}
            </h2>
            <div class="flex mt-3">
              <img src="/image/avater1.png"
                class="h-10 w-10 rounded-full mr-2 object-cover" />
              <div>
                <p class="font-semibold text-gray-200 text-sm"> {{ blogData?.publisher }} </p>
                <p class="font-semibold text-gray-400 text-xs"> {{ new Date(blogData?.created_at).toLocaleDateString('bn-BD') }} </p>
              </div>
            </div>
          </div>
        </div>

        <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <h4 class="pb-6" v-html="blogData?.excerpt"></h4>
        </div>
        <div class="px-4 lg:px-0 text-gray-700 max-w-screen-md mx-auto text-lg">
          <p class="pb-6" v-html="blogData?.description"></p>
          </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>