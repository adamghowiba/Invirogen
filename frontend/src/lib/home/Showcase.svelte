<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { globalTimeline } from '$lib/animations/controller';
	import Button from '$lib/global/Button.svelte';
	import type { AnimationPhase } from '$lib/types/type';

	export let animation: (phase: AnimationPhase) => void;
	let img, header;

	const inAnimation = () => {
		const timeline = gsap.timeline();

		timeline.from(img, {
			width: 0,
			duration: 0.6
		});
		timeline.from(header, {
			yPercent: -20,
			opacity: 0,
			duration: 0.45
		});

		return timeline;
	};

	const outAnimation = () => {
		const timeline = gsap.timeline();

		timeline.to(img, {
			width: 0,
			duration: 0.6
		});
		timeline.to(header, {
			yPercent: -20,
			opacity: 0,
			duration: 0.45
		});

		return timeline;
	};

	animation = (phase: AnimationPhase) => {
		return phase == 'in' ? inAnimation() : outAnimation();
	};
</script>

<section id="section--2">
	<div class="image">
		<img bind:this={img} class="img" src="/images/info_image.png" alt="Hero" />
	</div>

	<div class="line line--vert" />
	<div class=" content">
		<header bind:this={header}>
			<h1>Versatility at its finest</h1>
			<p>
				We know what you need when it comes to materials. You get everything delivered to your front
				door sourced from your local building shops.
			</p>
			<Button>Models</Button>
		</header>
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 50% 50%;
		position: relative;
		height: 100%;
		width: 100%;
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	header {
		max-width: 50ch;
		margin: 0 auto;
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
