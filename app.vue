<script setup lang="ts">
import Navbar from './components/Navbar.vue'

/*
const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'TesT', to: '/test' },
  { label: 'Parent (index)', to: '/parent' },
  { label: 'Parent (id)', to: '/parent/id' },

]

<NuxtExample dir="routing/pages" :nav="nav" current-route>
  </NuxtExample>
*/

const router = useRouter()
</script>

<template>
  <NuxtLayout name="custom">
    <NuxtPage />
  </NuxtLayout>
</template>
