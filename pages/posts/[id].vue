<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const route = useRoute()
const { data, pending, error } = await useAsyncData(
  `post-${route.params.id}`,
  () => $fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
)

watchEffect(() => {
  if (data.value) {
    useHead({
      title: data.value?.title
    })
  }
})
</script>

<template>
  <div class="p-6">
    <div v-if="pending" class="text-gray-500">Loading...</div>
    <div v-else-if="error" class="text-red-500">Error loading data</div>
    <div v-else>
      <h1 class="text-2xl font-bold mb-4">{{ data.title }}</h1>
      <p class="text-gray-700">{{ data.body }}</p>
      <NuxtLink to="/posts" class="text-blue-500 hover:underline">Back to posts</NuxtLink>
    </div>
  </div>
</template>
