<template>
  
  <div class="w-full relative">
        <header>
      <!-- <MobileHeader/> -->
      <Header />
    </header>
    <main class="pt-16 lg:pt-0">
          <slot />
    </main>
        <footer>
      <Footer />
    </footer>
  </div>
</template>
