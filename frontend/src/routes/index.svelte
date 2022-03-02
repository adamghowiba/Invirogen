<script lang="ts">
	import { AnimationSequence, fadeInLines } from '$lib/animations/controller';
	import Footer from '$lib/global/Footer.svelte';
	import Explore from '$lib/home/Explore.svelte';
	import Hero from '$lib/home/Hero.svelte';
	import Showcase from '$lib/home/Showcase.svelte';
	import Sketch from '$lib/home/Sketch.svelte';
	import Video from '$lib/home/Video.svelte';
	import { scrollBehavior } from '$lib/stroes/animation';
	import { blackedOut } from '$lib/stroes/interface';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	// Animations from child components
	let heroAnimation: gsap.core.Timeline;
	let showcaseAnimation: gsap.core.Timeline;
	let sketchAnimation: gsap.core.Timeline;
	let exploreAnimation: gsap.core.Timeline;
	let videoAnimation: gsap.core.Timeline;

	// The index of the section thats displayed
	let sectionIndex = 0;

	// Currently displayed section
	let sectionDisplay = 0;

	// Check if animation is in progress
	let animationInProgress: boolean;

	let scrolledDownCount = 0;
	let scrolledUpCount = 0;

	$: animations = [
		heroAnimation,
		showcaseAnimation,
		sketchAnimation,
		exploreAnimation,
		videoAnimation
	];

	function nextAnimation() {
		animationInProgress = true;
		animations[sectionIndex++].reverse().eventCallback('onReverseComplete', () => {
			sectionDisplay++;
			setTimeout(() => {
				animations[sectionIndex].play().eventCallback('onComplete', () => {
					animationInProgress = false;
				});
			}, 200);
		});
	}

	function previousAnimation() {
		animationInProgress = true;
		animations[sectionIndex].reverse().eventCallback('onReverseComplete', () => {
			sectionDisplay--;
			setTimeout(() => {
				animations[--sectionIndex].play().eventCallback('onComplete', () => {
					animationInProgress = false;
				});
			}, 200);
		});
		console.log('Previous animation triggerd');
	}

	const handleMouseWheel = (event: WheelEvent) => {
		if (animationInProgress) return;

		if (event.deltaY > 0 && sectionDisplay != 4 && !$scrollBehavior.down) scrolledDownCount++;
		if (event.deltaY < 0 && !$scrollBehavior.up && sectionDisplay != 0) scrolledUpCount++;

		if (scrolledDownCount == 5) {
			nextAnimation();
			scrolledDownCount = 0;
		}

		if (scrolledUpCount == 5) {
			previousAnimation();
			scrolledUpCount = 0;
		}

		console.log($scrollBehavior, scrolledUpCount);
	};

	onMount(() => {
		const timeline = gsap.timeline({ delay: 0.5 });
		timeline.add(fadeInLines('.line--hor', 'horizontal'));
		timeline.add(fadeInLines('.line--vert', 'vertical'));

		timeline.eventCallback('onComplete', () => {
			heroAnimation.play();
			// exploreAnimation.play();
		});
	});
</script>

<svelte:window on:wheel={handleMouseWheel} />

{#if sectionDisplay == 0}
	<Hero bind:animation={heroAnimation} />
{/if}
{#if sectionDisplay == 1}
	<Showcase bind:animation={showcaseAnimation} />
{/if}
{#if sectionDisplay == 2}
	<Sketch bind:animation={sketchAnimation} />
{/if}
{#if sectionDisplay == 3}
	<Explore bind:animation={exploreAnimation} />
{/if}
{#if sectionDisplay == 4}
	<Video bind:animation={videoAnimation} />
{/if}

<Footer />

<style>
	/* .grid {
		display: grid;
		grid-template-rows: 80px 1fr 80px;
		height: 100%;
		overflow: hidden;
	} */
</style>
