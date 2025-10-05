<template>
  
  <div class="w-full relative">
        <header>
      <MobileNavbar/>
      <Header />
    </header>
    <main>
          <slot />
    </main>
        <footer>
      <Footer />
    </footer>
    <BottomNavbar />
  </div>
</template>
