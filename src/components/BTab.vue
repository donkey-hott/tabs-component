<template>
  <button
    :class="['tab', { 'tab--selected': isTabSelected }]"
    @click="setCurrentTab(value)"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed, inject } from "vue";
import { CURRENT_TAB_INJECTION_KEY } from "../constants";

const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
});

const { currentTab, setCurrentTab } = inject(CURRENT_TAB_INJECTION_KEY);
const isTabSelected = computed(() => props.value === currentTab.value);
</script>

<style lang="css" scoped>
.tab--selected {
  background-color: hsl(0, 0%, 20%);
}
</style>