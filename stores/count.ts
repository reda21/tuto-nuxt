import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
  }, // Closing brace for actions
}); // Closing brace for defineStore
