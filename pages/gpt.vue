<template>
    <div>
      <h1>tester local chatgpt</h1>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import { LMStudioClient } from "@lmstudio/sdk";
  
  onMounted(async () => {
    // import { fetchChatCompletions } from "../libs/fetchChatCompletions"
    const client = new LMStudioClient({
    baseUrl: "ws://127.0.0.1:1234",
  });

  // Load a model
  const phi3 = await client.llm.load("microsoft/Phi-3-mini-4k-instruct-gguf/Phi-3-mini-4k-instruct-q4.gguf", {
    config: { gpuOffload: "max" },
  });

    console.info(phi3)
   
  
  });
  
  async function fetchChatCompletions(url: string, data: any) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`HTTP error! status: ${response.status}, details: ${JSON.stringify(errorDetails)}`);
    }
  
    const result = await response.json();
    return result;
  }
  </script>
  