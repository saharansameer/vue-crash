<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import QuoteCard from './QuoteCard.vue'
import { type QuoteType } from '@/types'
import { RouterLink } from 'vue-router'

const quotes: Ref<QuoteType[]> = ref([])

onMounted(async () => {
  const data = await fetch('https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10')
    .then((res) => res.json())
    .then((res) => res.data.data)

  quotes.value = data
})
</script>

<template>
  <div class="flex flex-wrap gap-10 py-5 px-2">
    <RouterLink v-for="quote in quotes" :to="`/quotes/${quote.id}`" :key="quote.id" class="cursor-default">
      <QuoteCard :quote="quote" />
    </RouterLink>
  </div>
</template>
