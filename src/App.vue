<template>
  <BTabs v-model="selectedTab">
    <BTab :value="0">Tab 1</BTab>
    <BTab :value="1">Tab 2</BTab>
    <BTab :value="2">Tab 3</BTab>
  </BTabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BTabs from "./components/BTabs.vue";
import BTab from "./components/BTab.vue";
import { ITab } from "./types";

/* Data for rendering tabs via props */
const tabs = ref<Array<ITab>>([
  { title: "Tab 1", value: 1 },
  { title: "Tab 1", value: 2 },
  { title: "Tab 1", value: 3 },
]);

const selectedTab = ref(1);
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
