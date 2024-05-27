<script lang="ts" setup>
import DoubleComponent from "../components/double"
import { useCountStore } from "../stores/count"

const store = useCountStore()
</script>

<template>
  <div>
    <p>counter: {{ store.count }} </p>
    <DoubleComponent />
    <div class="flex gap-2 mt-3">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="store.increment">increment</button>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="store.decrement">decrement</button>
    </div>
  </div>
</template>