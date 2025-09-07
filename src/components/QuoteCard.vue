<script setup lang="ts">
import { defineProps } from 'vue'
import { type QuoteType } from '@/types'

const props = defineProps<{ quote: QuoteType }>()
</script>

<template>
  <div class="max-w-96 bg-card border rounded-xl shadow-sm hover:shadow-xl transition-all duration-200 ease-initial p-4">
    <div class="flex flex-col gap-4 justify-between h-full">
      <p class="font-semibold font-mono">{{ props.quote.content }}</p>
      <p class="text-right font-medium text-muted-foreground">{{ "~ " + props.quote.author }}</p>
    </div>
  </div>
</template>
