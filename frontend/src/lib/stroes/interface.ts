import { writable } from "svelte/store";

export const blackedOut = writable(false);
export const transparent = writable(false);
export const overlay = writable(false);