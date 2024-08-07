import type { InjectionKey } from "vue";
import { CurrentTabInjectionPayload } from './types';

export const CURRENT_TAB_INJECTION_KEY = Symbol('current-tab') as InjectionKey<CurrentTabInjectionPayload>;