<template>
    <form @submit.prevent="onSubmit">
        <slot/>
    </form>
</template>

<script setup lang="ts">
const emit = defineEmits(["submit"]);

const onSubmit = (env: Event) => {
    emit("submit");
};



</script>