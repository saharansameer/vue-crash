<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen text-center gap-y-5">
    <div class="space-y-2">
      <h2 class="font-bold text-3xl">404 - Page Not Found</h2>
      <p class="text-sm text-muted-foreground">
        This page does not exist
      </p>
    </div>
    <RouterLink to="/" class="bg-primary hover:bg-primary/80 rounded-sm p-2 w-40 font-medium">
      Back to home
    </RouterLink>
  </div>
</template>
