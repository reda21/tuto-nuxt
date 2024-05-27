<script setup lang="ts">
const { data, pending, error, refresh } = await useAsyncData(
  'mountains',
  () => $fetch('https://jsonplaceholder.typicode.com/posts')
)
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Test</h1>
    <div v-if="pending" class="text-gray-500">Loading...</div>
    <div v-else-if="error" class="text-red-500">Error loading data</div>
    <div v-else class="space-y-4">
      <div v-for="post in data" :key="post.id" class="p-4 border rounded shadow">
        <h2 class="text-xl font-semibold">{{ post.title }}</h2>
        <p class="text-gray-700">{{ post.body }}</p>
        <NuxtLink :to="'/posts/' + post.id" class="text-blue-500 hover:underline">Read more</NuxtLink>
      </div>
    </div>
  </div>
</template>
