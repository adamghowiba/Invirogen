<script lang="ts">
	import { gsap } from 'gsap';
	import Button from '$lib/global/Button.svelte';
	import { currentAnimation } from '$lib/stroes/animation';
	import ProgressSlider from '$lib/global/ProgressSlider.svelte';
	import ContentBlock from '$lib/global/ContentBlock.svelte';
	import { onMount } from 'svelte';

	export let animation: () => gsap.core.Timeline;

	const images = ['sketch_1.png', 'black_home.png', 'building.png'];

	let img: HTMLElement;
	let header: HTMLElement;

	let currentShowcaseImage = images[0];

	animation = () => {
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

		return timeline;
	};

	const changeShowcaseImage = (event) => {
		const index = event.detail;

		currentShowcaseImage = images[index];
	};

	onMount(async () => {
		const ScrollTrigger = await import('gsap/ScrollTrigger');
		gsap.registerPlugin(ScrollTrigger.ScrollTrigger);

		gsap.to(".content", {
			scrollTrigger: {
				trigger: '.content__item--2',
				start: "top top",
				end: "+=500",
				scrub: 1,
				markers: true
			},
			duration: 1
		})
	});
</script>

<section id="section--3">
	<div class="image">
		<img bind:this={img} class="img" src="/images/{currentShowcaseImage}" alt="Hero" />
	</div>

	<div class="line line--vert" />
	<div class="content">
		<div class="content__block">
			{#each Array(5) as _, i}
				<div class="content__item content__item--{i}" style={i > 0 ? 'margin-top: 100%' : ''}>
					<ContentBlock
						heading="Plan"
						desc="Invirogen reviews the site to ensure it can properly
				accomodate your Model. For additonal fees, we can assit with adding utitlites,"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		display: grid;
		grid-template-columns: 50% 50%;
		position: relative;
		height: 100%;
		width: 100%;
		overflow-y: hidden;
	}
	.content {
		display: flex;
		position: relative;
		flex-direction: column;
		overflow-y: auto;

		&__block {
			top: 30%;
			margin-bottom: 90%;
		}

		&__item {
			margin-top: 15%;
		}
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
