<script setup>
const route = useRoute()
const slug = route.params.slug
const { $api } = useNuxtApp();
const { data: pageData } = await useAsyncData(`single-page-${slug}`, () => $api(`/frontend/v1/single-page/${slug}`))

</script>
<template>
    <section class="bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div class="relative w-full py-6">
            <div class="container mx-auto p-4">
                <div v-if="pageData">
                    <div v-html="pageData?.content"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>