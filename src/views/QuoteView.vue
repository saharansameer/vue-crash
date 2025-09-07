<script setup lang="ts">
import Quote from '@/components/Quote.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <h4 class="text-muted-foreground">Quote Id: {{ route.params.id }}</h4>
  <div class="flex justify-center mt-10">
    <Quote :id="route.params.id" />
  </div>
</template>
