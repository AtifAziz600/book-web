<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const { $api } = useNuxtApp();
const route = useRoute();
const order = ref(null);
const isLoading = ref(true);
const error = ref(null);

onMounted(async () => {
  const orderId = route.query.order_id;
  if (!orderId) {
    error.value = 'No order ID provided';
    isLoading.value = false;
    return;
  }
  try {
    const response = await $api(`/frontend/v1/order/${orderId}`);
    order.value = response; 
  } catch (err) {
    console.error('Error fetching order:', err);
    error.value = 'Failed to load order details';
  } finally {
    isLoading.value = false;
  }
});

const downloadPdf = async () => {
  if (!order.value) return;
  const pdfContent = `
    <html>
      <head><title>Invoice</title></head>
      <body>
        <h1>Order Invoice</h1>
        <p>Order ID: ${order.value.id}</p>
        <p>Institution: ${order.value.institution_name}</p>
        <table>
          <thead>
            <tr><th>Product</th><th>Quantity</th><th>Price</th></tr>
          </thead>
          <tbody>
            ${order.value.orderDetails?.map(detail => `
              <tr>
                <td>${detail.product?.title || 'N/A'}</td>
                <td>${detail.quantity}</td>
                <td>${detail.price}</td>
              </tr>
            `).join('') || ''}
          </tbody>
        </table>
      </body>
    </html>
  `;
  
  const { generatePdf } = usePdfEasy();
  await generatePdf({
    content: pdfContent,
    filename: `invoice-${order.value.id}.pdf`
  });
};

const viewOrder = () => {
  if (order.value) {
    navigateTo(`/order/invoice?order_id=${order.value.id}`);
  }
};
</script>

<template>
  <section class="py-12 flex items-center justify-center">
    <div class="relative bg-white rounded-lg shadow-xl w-full max-w-sm p-6 m-4 transform transition-all duration-300">
      <div class="flex justify-center mb-4">
        <Icon name="heroicons:check-circle" class="h-24 w-24 text-green-500" />
      </div>
      <div class="flex justify-center items-center text-center mb-4">
        <h3 class="font-semibold text-xl">Order Successful!</h3>
      </div>
      <div v-if="isLoading">Loading order details...</div>
      <div v-else-if="error" class="text-red-500">{{ error }}</div>
      <div v-else-if="order">
        <p class="text-sm text-center mb-4">Order ID: {{ order.id }}</p>
        <div class="flex justify-center space-x-4">
          <button @click="viewOrder" class="flex-1 px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-150">
            Generate Pdf
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
