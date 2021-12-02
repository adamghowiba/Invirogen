<script lang="ts">
	import Layout1 from '$lib/layouts/layout1.svelte';
	import Layout2 from '$lib/layouts/layout2.svelte';
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

	/* INTITAL FINDINGS
    
    - Maybe we should keep track of weather the line is a center line, or bottom line. Aka how it's aligned in the contianer
    - Layouts need to be able to understand how to react based on previous layout.
    - Layouts should only change once the animation is done. 
    - This isn't going to be easy. 
    
    
    */

	let animate = true;
	let l1LayoutAnimation: gsap.core.Timeline;
	let l1ContentAnimation: gsap.core.Timeline;

	type AnimationPhase = 'in' | 'out';
	type Layout = 'l1' | 'l2' | 'l3' | 'l5';
	let currentLayout: Layout = 'l1';

	function changeLayout(event) {
		const layout: Layout = event.detail;
		const tl = gsap.timeline();

		if (layout == 'l1') {
			tl.fromTo('.line--bbl', { height: '100%' }, { height: 0 });
			tl.fromTo('.line--bbt', { width: '100%' }, { width: 0 });
			tl.to('.line--body', { height: '100%' });
			if (currentLayout == 'l2') {
				tl.to('.line--body', { left: '+=30%' });
			}
		}

		if (layout == 'l2') {
			tl.to('.line--body', { left: '-=30%' });
			playL1Content('out');
		}

		if (layout == 'l5') {
			tl.to('.line--body', { height: 0 });
			tl.fromTo('.line--bbt', { width: 0 }, { width: '100%' });
			tl.fromTo('.line--bbl', { height: 0 }, { height: '100%' });
		}
		tl.eventCallback('onComplete', () => {
			currentLayout = layout;
		});
	}

	function playL1Content(phase: AnimationPhase) {
		const contentTl = gsap.timeline({
			defaults: {
				duration: 0.7,
				ease: 'power1'
			}
		});
		/* Content Animation */
		if (phase == 'in') {
			contentTl.to('.image-curtain', {
				ease: Expo.easeInOut,
				width: 0,
				duration: 1.85
			});
			contentTl.fromTo(
				['h1', 'p'],
				{ opacity: 0, yPercent: -60 },
				{ opacity: 1, yPercent: 0, stagger: 0.4 },
				'-=60%'
			);
		}
		if (phase == 'out') {
			contentTl.to('.image-curtain', {
				ease: Expo.easeInOut,
				width: '100%',
				duration: 1.85
			});
			contentTl.to('h1', { opacity: 0, yPercent: -60 }, '<-=5%');
			contentTl.to('p', { opacity: 0, yPercent: -60 }, '>');
		}
		return contentTl;
	}

	function playL1Animation(phase: AnimationPhase): gsap.core.Timeline {
		const lineTl = gsap.timeline({
			defaults: {
				duration: 0.55,
				ease: Linear.easeInOut
			}
		});

		/* Layout Animation */
		if (phase == 'in') {
			lineTl.fromTo('.line--scroll', { height: 0 }, { height: '100%' });
			lineTl.fromTo(['.line--nav', '.line--footer'], { width: 0 }, { width: '100%' }, '>');
			lineTl.fromTo('.line--body', { height: 0 }, { height: '100%' }, '>');
		}
		if (phase == 'out') {
			lineTl.to('.line--scroll', { height: 0 });
			lineTl.to('.line--hor', { width: 0 }, '>');
			lineTl.to('.line--body', { height: 0 }, '>');
		}

		return lineTl;
	}

	onMount(() => {
		// l1LayoutAnimation = playL1Animation('in');
		playL1Animation('in');
		playL1Content('in');
	});
</script>

<Layout2 on:changeLayout={changeLayout} bind:layout={currentLayout} />

<style>
</style>
