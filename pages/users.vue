<script lang="ts" setup>
import type { User } from '../types/user'

const websiteUsers = useState<User[]>('users', () => []) // Initialize with an empty array as default

const url = "https://jsonplaceholder.typicode.com/users"

await callOnce(async () => {
    websiteUsers.value = await $fetch<User[]>(url)
})
</script>

<template>
    <h1 class="text-2xl font-bold mb-4">Users</h1>
    <div class="grid grid-cols-4 gap-4">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
        <div>08</div>
        <!-- ... -->
        <div>09</div>
    </div>
</template>

<style scoped>
.user-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}
</style>
