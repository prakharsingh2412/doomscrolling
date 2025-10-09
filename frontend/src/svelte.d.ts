/// <reference types="svelte" />

declare module '*.svelte' {
  import type { SvelteComponentTyped } from 'svelte';
  export default SvelteComponentTyped<
    Record<string, any>, // Props
    Record<string, any>, // Events
    Record<string, any>  // Slots
  >;
}
