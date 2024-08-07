<template>
  <div class="tabs">
    <template v-if="tabs?.length">
      <BTab v-for="tab in tabs" :key="tab.value" :value="tab.value">
        {{ tab.title }}
      </BTab>
    </template>
    <slot v-else></slot>
  </div>
</template>

<script lang="ts" setup>
import { provide } from "vue";
import { PropType } from "vue";
import { ITab } from "../types";
import { CURRENT_TAB_INJECTION_KEY } from "../constants";
import BTab from "./BTab.vue";

defineProps({
  tabs: {
    type: Array as PropType<Array<ITab>>,
  },
});

const model = defineModel({
  default: 0,
  required: false,
});

const selectTab = (tabValue: number) => {
  model.value = tabValue;
};

provide(CURRENT_TAB_INJECTION_KEY, {
  currentTab: model,
  setCurrentTab: selectTab,
});
</script>

<style lang="css" scoped>
.tabs {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>

