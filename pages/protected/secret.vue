<!-- file: ~/pages/unprotected.vue -->
<template>
  <div>I'm protected! Only logged in users will see me</div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: "auth" });
</script>
