import { Ref } from "vue";

export interface ITab {
  title: string;
  value: number;
}

export interface CurrentTabInjectionPayload {
  currentTab: Ref<number>;
  setCurrentTab: (newTab: number) => void;
}