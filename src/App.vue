<script setup lang="ts">
import { Navbar } from '@/components'
import { RouterView } from 'vue-router';
</script>

<template>
  <header class="layout-container border-b">
    <Navbar />
  </header>
  <main class="layout-container min-h-screen">
    <RouterView/>
  </main>
  <footer class="layout-container border-t h-10 flex items-center justify-center">
    <p class="text-muted-foreground text-xs">&copy; 2025 Vue Crash. All Rights Reserved.</p>
  </footer>
</template>

<style scoped>
h1 {
  color: yellow;
}
</style>
