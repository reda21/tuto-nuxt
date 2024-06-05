<script setup lang="ts">
// alternatively, you can also use it here
const { $hello } = useNuxtApp()

const {isDesktop, isTablet} = useDevice();

const { session, refresh, update, reset } = await useSession()

onMounted(async() =>{

})

const changeValue = () => {
  update({value: 1}) 
}
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
  {{session ?? "no data"}}
  <div class="flex gap-2 mt-3">
    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="refresh">refresh</button>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="changeValue">update</button>
  <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="reset">reset</button>
  </div>
  </div>
</template>