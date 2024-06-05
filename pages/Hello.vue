<script setup lang="ts">
// alternatively, you can also use it here
const { $hello } = useNuxtApp()

const {isDesktop, isTablet} = useDevice();
</script>

<template>
  <div>
    {{ $hello('fatah cherfaoui') }}
    <p>{{ formatNumber(15800000) }}</p>
    <section>
    <div v-if="isDesktop">
      Desktop
    </div>
    <div v-else-if="isTablet">
      Tablet
    </div>
    <div v-else>
      Mobile
    </div>
  </section>
  </div>
</template>