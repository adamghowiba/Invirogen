<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Button from '$lib/global/Button.svelte';
	import type { AnimationPhase } from '$lib/types/type';
	import { currentAnimation } from '$lib/stroes/animation';
	
	export let animation;
	$currentAnimation = [...$currentAnimation, animation]

	animation = () => {
		const timeline = gsap.timeline({paused: true});

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

	let img, header, section;

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

	// animation = (phase: AnimationPhase) => {
	// 	return phase == 'in' ? inAnimation() : outAnimation();
	// };

	onMount(() => {});
</script>

<section bind:this={section} id="section--1">
	<div class="content">
		<header bind:this={header}>
			<h1>Inspiring & Innovative Designs</h1>
			<p>
				Our homes are meticulously designed for extreme durability, efficiency and right-sized for
				modern living. Our homes are meticulously designed for extreme durability, efficiency and
				right-sized for modern living.
			</p>
			<Button>Get Started</Button>
		</header>
	</div>
	<div class="line line--vert" />
	<div class="image">
		<img bind:this={img} class="img" src="/images/hero_image.png" alt="Hero" />
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
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.image {
		position: relative;
	}
	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
	}
	.line {
		height: 100%;
		width: 1px;
		left: 50%;
		transform: translateX(-50%);
		position: absolute;
	}
</style>
