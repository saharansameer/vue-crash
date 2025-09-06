<script lang="ts">
export default {
  data() {
    return {
      name: 'Ranga Doe',
      status: true,
      tasks: ['T-One', 'T-Two', 'T-Three', 'T-Four'],
      link: 'https://google.com',
    }
  },
  methods: {
    toggleStatus() {
      this.status = !this.status
    }
  }
}
</script>

<template>
  <h1>Vue Basics</h1>
  <br />
  <p v-if="status === true">User is healthy</p>
  <p v-else-if="status === false">User is unhealthy</p>
  <p v-else>User is unknown</p>
  <br />
  <h3>Tasks:</h3>
  <br />
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <br />
  <!-- <a v-bind:href="link" target="_blank">Visit Google</a> -->
   <a :href="link">Nice Google</a>
   <br>
   <button v-on:click="toggleStatus">Change Status</button>
</template>

<style scoped>
h1 {
  color: yellow;
}
</style>
