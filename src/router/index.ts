import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import QuotesView from '@/views/QuotesView.vue'
import BrowseView from '@/views/BrowseView.vue'
import QuoteView from '@/views/QuoteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/browse', name: 'Browse', component: BrowseView },
    { path: '/quotes', name: 'Quotes', component: QuotesView },
    { path: '/quotes/:id', name: 'Quote', component: QuoteView },
    { path: '/:pathMatch(.*)*', name: 'Not Found', component: NotFound },
  ],
})

export default router
