<script lang="ts">
	import Button from '$lib/global/Button.svelte';
	import ProgressSlider from '$lib/global/ProgressSlider.svelte';
	import { scrollBehavior } from '$lib/stroes/animation';
	import { gsap } from 'gsap';
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let animation: gsap.core.Timeline;

	// TODO Add Image slide over animation
	const IMAGES = ['info_image.png', 'black_home.png', 'building.png'];

	let img: HTMLElement;
	let header: HTMLElement;

	let scrolledDownCount = 0;
	let scrolledUpCount = 0;

	let currentShowcaseImage = IMAGES[0];
	let itemSelected: number = null;

	onMount(() => {
		const timeline = gsap.timeline({ paused: true });

		timeline.from(img, {
			width: 0,
			duration: 0.6
		});
		timeline.from(header, {
			yPercent: -20,
			opacity: 0,
			duration: 0.45
		});

		animation = timeline;
	});

	const changeShowcaseImage = (event) => {
		const index = event.detail;

		currentShowcaseImage = IMAGES[index];
	};

	const handleMouseWheel = (event: WheelEvent) => {
		// Scrolled Down
		if (event.deltaY > 0) scrolledDownCount++;

		// Scrolled Up
		if (event.deltaY < 0) scrolledUpCount++;

		if (scrolledDownCount >= 2) {
			scrolledDownCount = 0;
			itemSelected++;
		}

		if (scrolledUpCount >= 2) {
			scrolledUpCount = 0;
			itemSelected--;
		}
	};

	$: if (itemSelected == 0) {
		scrollBehavior.freeze('down');
		scrollBehavior.unfreeze('up');
	}

	$: if (itemSelected == 1) {
		scrollBehavior.freeze('both');
	}

	$: if (itemSelected >= 2) {
		scrollBehavior.freeze('up');
		scrollBehavior.unfreeze('down');
	}

	onDestroy(() => {
		scrollBehavior.unfreeze('both');
	});
</script>

<svelte:window on:wheel={handleMouseWheel} />

<section id="section--2">
	<div class="image">
		<img bind:this={img} class="img" src="/images/{currentShowcaseImage}" alt="Hero" />
	</div>

	<div class="line line--vert" />
	<div class="content">
		<header bind:this={header}>
			<h1>Versatility at its finest</h1>
			<ProgressSlider on:itemSelected={changeShowcaseImage} bind:itemSelected />
			<p>
				We know what you need when it comes to materials. You get everything delivered to your front
				door sourced from your local building shops.
			</p>
			<Button on:click={() => (itemSelected = 0)}>Models</Button>
		</header>
	</div>
</section>

<style lang="scss">
	section {
		display: grid;
		grid-template-columns: 50% 50%;
		position: relative;
		height: 100%;
		width: 100%;
	}
	.content {
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	header {
		max-width: 50ch;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
	}
	.image {
		position: relative;
	}
	.line {
		height: 100%;
		width: 1px;
		left: 50%;
		transform: translateX(-50%);
		position: absolute;
	}
</style>
