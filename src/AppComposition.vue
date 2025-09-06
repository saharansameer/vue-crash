<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'

const name = 'Ranga Doe'
const status = ref(true)
const tasks = ref(['Task One', 'Task Two', 'Task Three', 'Task Four'])
const link = 'https://google.com'

const toggleStatus = function () {
  status.value = !status.value
}

const newTask: Ref<string> = ref('')

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

const deleteTask = (index: number) => {
  tasks.value.splice(index, 1)
}

type QuoteType = {
  author: string
  content: string
  tags: string[]
  authorSlug: string
  length: number
  dateAdded: string
  dateModified: string
  id: number
}

const quotes: Ref<QuoteType[]> = ref([])

onMounted(async () => {
  try {
    const data = await fetch(
      'https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=human'
    )
      .then((res) => res.json())
      .then((res) => res.data.data)

    quotes.value.push(...data)
  } catch (error) {
    console.error('Error fetching quotes:', error)
  }
})
</script>

<!-- <script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const name = ref('Ranga Doe')
    const status = ref(true)
    const tasks = ref(['Task One', 'Task Two', 'Task Three', 'Task Four'])
    const link = ref('https://google.com')
    const toggleStatus = function() {
      status.value = !status.value
    }
    return { name, status, tasks, link, toggleStatus }
  }
}
</script> -->

<template>
  <div class="w-full max-w-2xl flex flex-col mx-auto py-20 gap-5">
    <div class="flex flex-col gap-2">
      <h2>{{ name }}</h2>
      <p v-if="status === true">User is healthy</p>
      <p v-else-if="status === false">User is unhealthy</p>
      <p v-else>User is unknown</p>
      <!-- <a v-bind:href="link" target="_blank">Visit Google</a> -->
      <a :href="link">Nice Google</a>
      <button style="width: 160px; height: 30px;" v-on:click="toggleStatus">Change Status</button>
    </div>

    <div class="flex flex-col gap-2">
      <h3>Tasks:</h3>
      <ul>
        <li class="flex gap-2" v-for="(task, index) in tasks" :key="task">
          <span>{{ task }}</span> <button @click="deleteTask(index)">x</button>
        </li>
      </ul>
    </div>

    <div>
      <form @submit.prevent="addTask" class="flex gap-x-2">
        <label for="newTask">New Task: </label>
        <input
        class="bg-amber-50"
          type="text"
          id="newTask"
          name="newTask"
          placeholder="type here..."
          v-model="newTask"
        />
        <button style="width: 40px; border-radius: 2px;" type="submit">Add</button>
      </form>
    </div>
    <br />
    <div>
      <ul>
        <li v-for="quote in quotes" :key="quote.id">{{ quote.author }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: orange;
}

button {
  background: #fcf7ef;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 2px;
}


</style>
