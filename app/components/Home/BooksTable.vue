<script setup>
import { ref, computed } from "vue";

const search = ref("");
const books = [
  { isbn: '978-0140449136', title: 'The Odyssey', author: 'Homer', genre: 'Epic Poetry' },
  { isbn: '978-0439023528', title: 'The Hunger Games', author: 'Suzanne Collins', genre: 'Dystopian' },
  { isbn: '978-0061120084', title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic Fiction' },
  { isbn: '978-0307277671', title: 'The Road', author: 'Cormac McCarthy', genre: 'Post-apocalyptic' },
  { isbn: '978-0316769488', title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Classic Fiction' },
  { isbn: '978-0743273565', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic Fiction' },
  { isbn: '978-0451524935', title: '1984', author: 'George Orwell', genre: 'Dystopian' },
  { isbn: '978-0547928227', title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' }
];

const filteredBooks = computed(() => {
  if (!search.value) return books;
  return books.filter(book =>
    book.isbn.toLowerCase().includes(search.value.toLowerCase()) ||
    book.title.toLowerCase().includes(search.value.toLowerCase()) ||
    book.author.toLowerCase().includes(search.value.toLowerCase()) ||
    book.genre.toLowerCase().includes(search.value.toLowerCase())
  );
});

const purchaseBook = (book) => {
  alert(`Purchasing: ${book.title} by ${book.author}`);
};
</script>

<template>
  <section class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-10">
        <div class="flex items-center justify-center gap-3 mb-4">
          <Icon name="heroicons:book-open" class="h-8 w-8 text-[#1C3B8B]" />
          <h2 class="text-3xl font-bold text-gray-800">Book Collection</h2>
        </div>
        <p class="text-gray-600">Browse our curated selection of literary classics</p>
      </div>
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="overflow-x-auto">
          <div class="max-h-[500px] overflow-y-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th class="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">ISBN</th>
                  <th class="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Title</th>
                  <th class="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Author</th>
                  <th class="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Genre</th>
                  <th class="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr 
                  v-for="(book, index) in filteredBooks" 
                  :key="index" 
                  class="hover:bg-blue-50 transition-colors duration-150"
                >
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ book.isbn }}</td>
                  <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ book.title }}</td>
                  <td class="px-6 py-4 text-sm text-gray-700">{{ book.author }}</td>
                  <td class="px-6 py-4">
                    <span class="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#FEE600] text-black">
                      {{ book.genre }}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm">
                    <button 
                      @click="purchaseBook(book)"
                      class="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md flex items-center gap-2"
                    >
                      <Icon name="heroicons:shopping-cart" class="h-4 w-4" />
                      Purchase
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-if="filteredBooks.length === 0" class="text-center py-12">
          <Icon name="heroicons:exclamation-triangle" class="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h3 class="text-lg font-medium text-gray-900 mb-1">No books found</h3>
          <p class="text-gray-500">Try adjusting your search to find what you're looking for</p>
        </div>
      </div>
      <div class="mt-4 flex items-center justify-between text-sm text-gray-500">
        <div class="flex items-center gap-2">
          <Icon name="heroicons:book" class="h-4 w-4" />
          <span>Book Collection</span>
        </div>
        <div>
          Showing {{ filteredBooks.length }} of {{ books.length }} books
        </div>
      </div>
    </div>
  </section>
</template>