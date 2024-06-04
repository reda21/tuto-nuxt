<template>
    <div class="rss-feed">
      <h1>Football News</h1>
      <ul>
        <li v-for="item in items" :key="item.guid">
          <h2>{{ item.title }}</h2>
          <p>{{ item.pubDate }}</p>
          <div v-html="item.content"></div>
          <a :href="item.link" target="_blank">Read more</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import Parser from 'rss-parser';
  
  interface RssItem {
    title: string;
    pubDate: string;
    content: string;
    link: string;
    guid: string;
  }
  
  const items = ref<RssItem[]>([]);
  
  onMounted(async () => {
    const parser = new Parser();
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    const feed = await parser.parseURL(CORS_PROXY + 'https://hihi2.com/category/football-news/feed');
    items.value = feed.items as RssItem[];
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
  