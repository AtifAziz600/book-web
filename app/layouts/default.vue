<template>
  
  <div class="w-full relative">
        <header>
      <Header />
    </header>
    <MobileNavbar/>
    <main>
          <slot />
    </main>
        <footer>
      <Footer />
    </footer>
    <BottomNavbar />
  </div>
</template>
