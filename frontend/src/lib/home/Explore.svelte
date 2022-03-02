<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap, Power4, Power2 } from 'gsap';
	import ImageTriangle from '$lib/explore/ImageTriangle.svelte';
	import { blackedOut } from '$lib/stroes/interface';
	import { scrollBehavior } from '$lib/stroes/animation';
	import Button from '$lib/global/Button.svelte';

	export let animation: gsap.core.Timeline;

	let sectionElement: HTMLElement;

	onMount(() => {
		scrollBehavior.unfreeze('both');

		const timeline = gsap.timeline({});

		// timeline.fromTo(
		// 	sectionElement,
		// 	{
		// 		yPercent: 10
		// 		// opacity: 0,
		// 		// duration: 0.25
		// 	},
		// 	{
		// 		yPercent: 0
		// 		// opacity: 1,
		// 		// duration: 0.25
		// 	}
		// );

		timeline.fromTo(
			sectionElement,
			{
				opacity: 0,
			},
			{ xPercent: 0, duration: 0.6, ease: Power2.easeIn, opacity: 1 },
			'<'
		);

		// timeline.fromTo(
		// 	'.triangle--right',
		// 	{
		// 		yPercent: 100,
		// 		opacity: 0
		// 	},
		// 	{ yPercent: 0, duration: 1, ease: Power2.easeIn, opacity: 1 },
		// 	'<'
		// );

		animation = timeline;

		// $blackedOut = true;
	});

	onDestroy(() => {
		$blackedOut = false;
	});
</script>

<section bind:this={sectionElement}>
	<div class="triangle triangle--left">
		<ImageTriangle left={true} />
	</div>

	<div class="content">
		<h2>Customize Your Model</h2>
		<p>
			We’ve rethought the entire process of how we design, build and buy homes. No delays. No
			headaches. From design to manufacture to installation, we do it all.
		</p>
		<Button color="blue">Explore Models</Button>
	</div>

	<div class="triangle triangle--right">
		<ImageTriangle rotate={180} />
	</div>
</section>

<style lang="scss">
	section {
		// background-color: black;
		display: grid;
		grid-template-columns: 1fr 0.7fr 1fr;
		gap: 2rem;
		align-items: center;
	}
	.content {
		text-align: center;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
		z-index: 100;

		h2 {
			color: var(--color-blue);
			font-weight: bold;
		}

		p {
			// color: #fdfdfd;
			// color: var(--color-gray-s3);
		}
	}
</style>
