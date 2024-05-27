<script lang="ts" setup>
import Navbar from '../components/Navbar.vue';

</script>

<template>
    <div>
        <NuxtLoadingIndicator />
        <Navbar class="mb-3" />
        <div class="container mx-auto">
            <slot />
        </div>        
    </div>
</template>