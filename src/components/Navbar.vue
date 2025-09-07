<script setup lang="ts">
import logo from '@/assets/logo.svg'
import { RouterLink, useRoute } from 'vue-router'

const isActiveLink = (routePath: string) => {
  const route = useRoute()
  return route.path === routePath
}

const navItems = [
  { title: 'Home', path: '/' },
  { title: 'Browse', path: '/browse' },
  { title: 'Quotes', path: '/quotes' },
]
</script>

<template>
  <nav class="h-12 flex items-center justify-between">
    <img :src="logo" alt="Vue Logo" width="30px" height="30px" />
    <div class="flex items-center gap-x-5 text-sm font-medium">
      <RouterLink
        v-for="item in navItems"
        :to="item.path"
        :key="item.title"
        :class="[isActiveLink(item.path) ? 'bg-primary/60' : 'text-muted-foreground hover:text-primary hover:bg-primary-foreground','py-1 px-2 rounded-sm transition-colors duration-200 ease-initial']"
        >{{ item.title }}</RouterLink
      >
    </div>
  </nav>
</template>
