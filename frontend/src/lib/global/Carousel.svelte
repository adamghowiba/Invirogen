<script lang="ts">
	import Icon from '@iconify/svelte';
import { fade } from 'svelte/transition';
	import Arrow from './Arrow.svelte';
	import Button from './Button.svelte';

	export let slideCount = 0;

	let modalElement: HTMLElement;

	let currentSlideIndex = 0;
	let slideSize = 820;
	// let transformAmount = 0;

	const transformSlide = (amount: number) => {
		modalElement.style.transform = `translateX(${amount}px)`;
	};

	const selectSlide = (index: number) => {
		if (index < 0 || index >= slideCount) return;

		currentSlideIndex = index;
		transformSlide(index === 0 ? -0 : -(index * slideSize));
	};

	const handleControlClick = (event: Event) => {
		const target = event.target as HTMLElement;
		const controlId = parseInt(target.dataset.id) || 0;

		selectSlide(controlId);
	};
</script>

<div class="modal" transition:fade={{duration: 250}}>
	<div class="cards" bind:this={modalElement}>
		<slot />
	</div>
</div>

<div class="arrow-wrapper arrow-wrapper--left">
	<div class="arrow arrow--left" on:click={() => selectSlide(currentSlideIndex - 1)}>
		<!-- <Arrow rotate={0} iconSize={20} /> -->
		<Icon
			icon="fluent:triangle-16-filled"
			color="rgba(255, 255, 255, 0.863)"
			width={24}
			height={25}
			rotate="270deg"
		/>
	</div>
</div>

<div class="arrow-wrapper arrow-wrapper--right" on:click={() => selectSlide(currentSlideIndex + 1)}>
	<div class="arrow arrow--right">
		<Icon
			icon="fluent:triangle-16-filled"
			color="rgba(255, 255, 255, 0.863)"
			width={24}
			height={25}
			rotate="90deg"
		/>
	</div>
</div>
<div class="controls">
	{#each Array(slideCount) as _, i}
		<div
			class="controls__button"
			class:controls__button-active={i === currentSlideIndex}
			data-id={i}
			on:click={handleControlClick}
		/>
	{/each}
</div>

<style lang="scss">
	.modal {
		display: flex;
		position: fixed;
		top: 50%;
		left: 50%;
		padding: 1rem;
		transform: translate(-420px, -50%);
		z-index: 100;
	}
	.cards {
		display: flex;
		transition: transform 0.35s ease-out;
		gap: 20px;
	}
	.arrow-wrapper {
		position: absolute;
		height: 100%;
		width: 70px;
		z-index: 300;

		&--left {
			left: 0;
		}

		&--right {
			right: 0;
		}

		&:hover .arrow {
			opacity: 1;
		}
	}
	.arrow {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 70px;
		height: 70px;
		background-color: rgba(73, 73, 73, 0.342);
		backdrop-filter: blur(4px);
		z-index: 500;
		border-radius: 50%;
		top: 50%;
		transform: translateY(-50%);
		opacity: 0;
		transition: opacity 0.25s ease-out;
		box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

		&--left {
			left: 40px;
		}

		&--right {
			right: 40px;
		}
	}
	.controls {
		display: flex;
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
		gap: 10px;
		z-index: 200;
		bottom: 15%;

		&__button {
			width: 9px;
			height: 9px;
			border-radius: 50%;
			background-color: rgba(255, 255, 255, 0.486);
			border: 1px solid transparent;
			transition: border 0.15s linear;
		}

		&__button:hover {
			border: 1px solid white;
		}

		&__button-active {
			background-color: white;
		}
	}
</style>
