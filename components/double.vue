<script setup lang="ts">
import { useCountStore } from "../stores/count"

const store = useCountStore()
</script>

<template>
    <div>
        <p>double counter: {{ store.doubleCount }} </p>
        
    </div>
</template>