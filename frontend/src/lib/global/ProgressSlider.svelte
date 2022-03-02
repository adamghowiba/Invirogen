<script lang="ts">
import { browser } from '$app/env';

	import { createEventDispatcher, onMount } from 'svelte';

	export let itemSelected = null;

	let optionsElement: HTMLElement;
	let progressLineElement: HTMLElement;

	const dispatch = createEventDispatcher();

	const options = ['Home', 'Office', 'Business'] as const;

	const setSelectedOption = (index: number) => {
		if (index > options.length - 1 || index < 0) return;

		const optionsItem = optionsElement.querySelectorAll('.options__item');
		const selectedItem = optionsItem[index] as HTMLElement;

		progressLineElement.style.width = `${selectedItem.offsetLeft + selectedItem.clientWidth}px`;
		console.log(selectedItem.offsetLeft + selectedItem.clientWidth);

		dispatch('itemSelected', index);
	};

	$: if (browser && (itemSelected || itemSelected === 0)) {
		// console.log(itemSelected);
		setSelectedOption(itemSelected);
	}

	onMount(() => {
		itemSelected = 0;
	})
</script>

<div class="slider">
	<div class="slider__line" bind:this={progressLineElement} />
	<div class="options" bind:this={optionsElement}>
		{#each options as option, i}
			<div class="options__item" on:click={() => setSelectedOption(i)}>
				<span>0{i + 1}.</span>
				<span>{option}</span>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.slider {
		width: 100%;
		height: 2px;
		background-color: #a6a6a663;
		margin-bottom: 1rem;

		&__line {
			height: 100%;
			width: 80px;
			background-color: black;
			transition: width 0.25s ease-out;
		}
	}
	.options {
		display: flex;
		justify-content: space-between;
		margin-top: 5px;

		&__item {
			display: flex;
			gap: 10px;
			font-weight: 500;
		}

		&__item:hover {
			cursor: pointer;
		}
	}
</style>
