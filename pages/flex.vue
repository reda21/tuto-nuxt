import { Base } from '../.nuxt/components';
<template>
  <div>
    <h1>Tuto flex</h1>
    <div class="parent">
      <div class="bg-blue-500 text-white p-4">alpha 01</div>
      <div class="bg-green-500 text-white p-4">alpha 02</div>
      <div class="bg-orange-500 text-white p-4">alpha 03</div>
      <div class="bg-red-500 text-white p-4">alpha 04</div>
      <div class="bg-yellow-500 text-white p-4">alpha 05</div>
      <div class="bg-purple-500 text-white p-4">alpha 06</div>
      <div class="bg-pink-500 text-white p-4">alpha 07</div>
      <div class="bg-indigo-500 text-white p-4">alpha 08</div>
      <div class="bg-teal-500 text-white p-4">alpha 09</div>
    </div>
    section {{ generatePassword() }}
  </div>
</template>

<style scoped>
.parent {
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: space-around;
  gap: 1rem;
}

.parent>div {
  flex: 1 1 300px;
  /* Ensure that the divs can shrink if needed */
}


</style>

<script setup lang="ts">
  function generatePassword(length: number = 12) {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*_*-+veisdfhjk';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  // Example usage:
  console.log(generatePassword(10)); // Generates a password of 10 characters
</script>