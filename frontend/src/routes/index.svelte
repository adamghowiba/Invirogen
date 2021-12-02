<script lang="ts">
	import Button from '$lib/global/Button.svelte';
	import Footer from '$lib/global/Footer.svelte';
	import Nav from '$lib/global/Nav.svelte';
	import Hero from '$lib/home/Hero.svelte';
	import {
		gsap,
		Power0,
		Power1,
		Power2,
		Power3,
		Power4,
		Linear,
		Quad,
		Cubic,
		Quart,
		Quint,
		Strong,
		Elastic,
		Back,
		SteppedEase,
		Bounce,
		Sine,
		Expo,
		Circ
	} from 'gsap';
	import { onMount } from 'svelte';
	import { fadeInLines, globalTimeline } from '$lib/animations/controller';
	import type { AnimationPhase } from '$lib/types/type';
	import Showcase from '$lib/home/Showcase.svelte';
	import { currentAnimation } from '$lib/stroes/animation';

	let heroAnimation: (phase: AnimationPhase) => gsap.core.TimelineChild;
	let showcaseAnimation: (phase: AnimationPhase) => gsap.core.TimelineChild;

	const sections = ['section--1', 'section--2', 'section--3'];
	let rendered = false;

	function switchSectionVisability(sectionId) {
		document.querySelectorAll('section').forEach((elem) => {
			if (elem.id == sectionId) return (elem.style.display = 'grid');
			elem.style.display = 'none';
		});
		console.log('Switched section visability to', sectionId);
	}

	onMount(() => {
		rendered = true;
		$currentAnimation = sections[0];
		const timeline = gsap.timeline({ delay: 0.5 });
		timeline.add(fadeInLines('.line--hor', 'horizontal'));
		timeline.add(fadeInLines('.line--vert', 'vertical'));
		timeline.add(heroAnimation('in'));
	});

	$: if (rendered && $currentAnimation) {
		switchSectionVisability($currentAnimation);
	}

	function nextAnimation(event: Event) {
		const timeline = gsap.timeline();

		timeline.add(heroAnimation('in'));
		timeline.add(showcaseAnimation('in'), '>+5%');
	}

	function previousAnimation(event: Event) {

	}
</script>

<div class="grid">
	<Nav />
	<Hero bind:animation={heroAnimation} />
	<Showcase bind:animation={showcaseAnimation} />
	<Footer on:next={nextAnimation} on:previous={previousAnimation} />
</div>
<div class="space" />

<style>
	.grid {
		display: grid;
		grid-template-rows: 80px 1fr 80px;
		height: 100%;
		overflow-x: hidden;
	}
	.space {
		height: 1vh;
	}
</style>
