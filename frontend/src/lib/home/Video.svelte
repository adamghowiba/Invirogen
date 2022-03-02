<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap, Power4 } from 'gsap';
	import { transparent } from '$lib/stroes/interface';
	import { scrollBehavior } from '$lib/stroes/animation';
	import Button from '$lib/global/Button.svelte';

	export let animation: gsap.core.Timeline;

	let sectionElement: HTMLElement;

	onMount(() => {
		scrollBehavior.unfreeze('both');

		const timeline = gsap.timeline({});

		timeline.fromTo(
			sectionElement,
			{
				opacity: 0,
				duration: 0.25
			},
			{
				opacity: 1,
				duration: 0.25
			}
		);

		animation = timeline;

		// $transparent = true;
	});

	onDestroy(() => {
		$transparent = false;
	});
</script>

<section bind:this={sectionElement}>
	<video src="/videos/movein.webm" type="video/webm" autoplay loop />
	<div class="content">
		<h1>Welcome Home</h1>
		<p>New neighborhood, not required.</p>
		<Button color="white">Explore Models</Button>
	</div>
	<div class="overlay" />
</section>

<style lang="scss">
	section {
		background-color: black;
		display: grid;
		gap: 2rem;
		align-items: center;
	}
	.overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.171);
	}
	video {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.content {
		text-align: center;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
		z-index: 100;

		h1 {
			color: White;
			font-size: 50px;
		}

		p {
			color: var(--color-gray-s3);
		}
	}
</style>
