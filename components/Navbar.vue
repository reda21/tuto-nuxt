<!-- components/Navbar.vue -->
<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <div class="text-white text-xl">My Blog</div>
      <button @click="toggleMenu" class="text-white md:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <div :class="menuOpen ? 'block' : 'hidden'" class="w-full md:flex md:items-center md:w-auto">
        <ul class="text-white md:flex">
          <li class="md:mx-2 my-2 md:my-0">
            <nuxtLink to="/" class="block">Home</nuxtLink>
          </li>
          <li class="md:mx-2 my-2 md:my-0">
            <nuxtLink to="/about" class="block">About</nuxtLink>
          </li>
          <li class="md:mx-2 my-2 md:my-0">
            <nuxtLink to="/posts" class="block">Posts</nuxtLink>
          </li>
          <li class="md:mx-2 my-2 md:my-0">
            <nuxtLink to="/test" class="block">Test</nuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>