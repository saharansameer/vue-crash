<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue';
import QuoteCard from './QuoteCard.vue';
import { type QuoteType } from '@/types';
import { defineProps } from 'vue';

const quote: Ref<QuoteType | null> = ref(null)

const props = defineProps({
  id: String
})

onMounted(async() => {
  const {statusCode, data} = await fetch(`https://api.freeapi.app/api/v1/public/quotes/${props.id}`)
  .then((res) => res.json())
  .catch((err) => console.error(err))

  if (statusCode !== 200) {
    quote.value = null
    return
  }

  quote.value = data
})

</script>

<template>
  <div v-if="quote" class="py-5">
    <QuoteCard :quote="quote"/>
  </div>
  <div v-else class="py-10">
    <h3 class="font-semibold text-center">Invalid Quote Id</h3>
  </div>
</template>
