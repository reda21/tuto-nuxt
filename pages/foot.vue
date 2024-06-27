<template>
  <div class="rss-feed">
    <h1>{{ flux?.title }}</h1>
    <ul>
      <li v-for="item in flux?.items" :key="item.guid">
        <h2>item : {{ item.title }}</h2>
        <div> {{ item['contentSnippet'] }}</div> 
        <pre>{{ item }}  </pre>     
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getHihi2RSSDataAsJSON } from "~/lib/getRss";
import type { Feed } from "~/types/foot";

const flux = ref<Feed | null>(null);

onMounted(async () => {
  flux.value = await getHihi2RSSDataAsJSON("https://hihi2.com/category/football-news/feed");
});
</script>

<style>
.rss-feed {
  font-family: Arial, sans-serif;
}

.rss-feed h1 {
  text-align: center;
}

.rss-feed ul {
  list-style: none;
  padding: 0;
}

.rss-feed li {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.rss-feed h2 {
  font-size: 1.5em;
  margin: 0 0 10px;
}

.rss-feed p {
  color: #777;
  font-size: 0.9em;
}

.rss-feed a {
  color: #007bff;
  text-decoration: none;
}

.rss-feed a:hover {
  text-decoration: underline;
}
</style>