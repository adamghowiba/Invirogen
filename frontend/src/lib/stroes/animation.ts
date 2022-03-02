import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const currentAnimation = writable([]);

export const createScrollBehavior = () => {
	const store: Writable<{ up: boolean; down: boolean }> = writable({ up: false, down: false });

	const freeze = (direction: 'up' | 'down' | 'both') => {
		if (direction == 'up') {
			store.update((value) => {
				value.up = true;
				return value;
			});
		}

		if (direction == 'down') {
			store.update((value) => {
				value.down = true;
				return value;
			});
		}

		if (direction == 'both') {
			store.set({ up: true, down: true });
		}
	};

	const unfreeze = (direction: 'up' | 'down' | 'both') => {
		if (direction == 'up') {
			store.update((value) => {
				value.up = false;
				return value;
			});
		}

		if (direction == 'down') {
			store.update((value) => {
				value.down = false;
				return value;
			});
		}

		if (direction == 'both') store.set({ up: false, down: false });
	};

	return {
		subscribe: store.subscribe,
		freeze,
		unfreeze
	};
};

export const scrollBehavior = createScrollBehavior();
