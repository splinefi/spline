import { writable } from "svelte/store";

function getTheme() {
    const { subscribe, set, update } = writable(`light`);

    return {
        subscribe,
        toggle: () => update((n) => (n === `light` ? `dark` : `light`)),
        reset: () => set(`light`),
    };
}

export const theme = getTheme();
