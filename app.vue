<script setup lang="ts">
import Navbar from './components/Navbar.vue'

const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'TesT', to: '/test' },
  { label: 'Parent (index)', to: '/parent' },
  { label: 'Parent (id)', to: '/parent/id' },

]

const router = useRouter()
</script>

<template>
  <NuxtExample dir="routing/pages" :nav="nav" current-route>
    <NuxtLoadingIndicator />
    <Navbar class="mb-3" />
    <div class="container mx-auto">
      <NuxtPage />
    </div>
  </NuxtExample>
</template>
