<script lang="ts">
	import { AnimationSequence, fadeInLines } from '$lib/animations/controller';
	import Footer from '$lib/global/Footer.svelte';
	import Nav from '$lib/global/Nav.svelte';
	import Hero from '$lib/home/Hero.svelte';
	import Showcase from '$lib/home/Showcase.svelte';
	import Sketch from '$lib/home/Sketch.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let heroAnimation;
	let showcaseAnimation;
	let sketchAnimation;

	let currentSection = 1;

	const layouts = ['hero', 'sketch'];
	const currentLayout = layouts[0];

	const sections = ['section--1', 'section--2', 'section--3'];
	let sectionIndex = 0;
	const homeAnimation = new AnimationSequence();

	function switchSectionVisability(sectionId) {
		document.querySelectorAll('section').forEach((elem) => {
			if (elem.id == sectionId) return (elem.style.display = 'grid');
			elem.style.display = 'none';
		});
		console.log('Switched section visability to', sectionId);
	}
	function nextAnimation(event: Event) {
		sectionIndex++;
		if (sectionIndex == 1) {
			currentLayout == layouts[1]
			console.log('Sketch section activated');
		}
		homeAnimation.transition(
			(index) => index + 1,
			() => switchSectionVisability(`section--${++currentSection}`)
		);
	}

	function previousAnimation(event: Event) {
		homeAnimation.transition(
			(index) => index - 1,
			() => switchSectionVisability(`section--${--currentSection}`)
		);
	}

	onMount(() => {
		homeAnimation.refresh([heroAnimation, showcaseAnimation, sketchAnimation]);
		homeAnimation.current.play();

		switchSectionVisability('section--1');
		const timeline = gsap.timeline({ delay: 0.5 });
		timeline.add(fadeInLines('.line--hor', 'horizontal'));
		timeline.add(fadeInLines('.line--vert', 'vertical'));
	});

	const handleMouseWheel = (event: WheelEvent) => {
		if (event.deltaY > 0) {
			console.log('Scrolled Down');
		}

		if (event.deltaY < 0) {
			console.log('Scrolled Up');
		}
	};
</script>

<!-- <svelte:window on:wheel={handleMouseWheel} /> -->

<div class="grid">
	<Nav />
	<Hero bind:animation={heroAnimation} />
	<Showcase bind:animation={showcaseAnimation} />
	{#if sectionIndex == 2}
		<Sketch bind:animation={sketchAnimation} />
	{/if}
	<Footer on:next={nextAnimation} on:previous={previousAnimation} />
</div>

<style>
	.grid {
		display: grid;
		grid-template-rows: 80px 1fr 80px;
		height: 100%;
		overflow: hidden;
	}
	.space {
		height: 1vh;
	}
</style>
