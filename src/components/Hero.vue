<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'Welcome to Vue Crash',
  },
  subtitle: {
    type: String,
    default: 'You Heard That Right',
  },
})
</script>

<template>            
  <div>
    <h1 class="font-bold text-2xl">{{ title }}</h1>
    <p class="text-muted-foreground text-sm">{{ subtitle }}</p>
  </div>
</template>
