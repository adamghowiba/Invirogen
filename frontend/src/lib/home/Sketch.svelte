<script lang="ts">
	import { gsap } from 'gsap';
	import Button from '$lib/global/Button.svelte';
	import { scrollBehavior } from '$lib/stroes/animation';
	import ProgressSlider from '$lib/global/ProgressSlider.svelte';
	import ContentBlock from '$lib/content/ContentBlock.svelte';
	import { onDestroy, onMount } from 'svelte';

	export let animation: gsap.core.Timeline;
	export let scrollTop = 0;

	let showcaseImageIndex = 0;

	let img: HTMLElement;
	let header: HTMLElement;
	let contentWrapperElement: HTMLElement;

	const images = ['sketch_1.png', 'sketch_2.png', 'sketch_3.png'];
	let currentShowcaseImage = images[0];

	const processData: { heading: string; desc: string }[] = [
		{
			heading: 'Plan',
			desc: 'Invirogen reviews the site to ensure it can properly accomodate your Model. For additonal fees, we can assit with adding utitlites'
		},
		{
			heading: 'Customize',
			desc: 'Invirogen reviews the site to ensure it can properly accomodate your Model. For additonal fees, we can assit with adding utitlites'
		},
		{
			heading: 'Build',
			desc: 'Invirogen reviews the site to ensure it can properly accomodate your Model. For additonal fees, we can assit with adding utitlites'
		}
	];

	const changeShowcaseImage = (index: number) => {
		currentShowcaseImage = images[index];
	};

	const callback: IntersectionObserverCallback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				showcaseImageIndex++;
				changeShowcaseImage(parseInt(entry.target.getAttribute('data-index')));
				console.log('Changed image');
			}
		});
	};

	const handleMouseWheel = (event: WheelEvent) => {
		if (scrollTop > 0) scrollBehavior.freeze('both');
		if (scrollTop == 0) scrollBehavior.unfreeze('up');
		if (scrollTop >= 1400) scrollBehavior.unfreeze('down');

		if (event.deltaY > 0 && scrollTop < contentWrapperElement.scrollHeight - 250) {
			scrollTop += 100;
			contentWrapperElement.style.transform = `translateY(-${scrollTop}px)`;
		}

		if (event.deltaY < 0 && scrollTop > 0) {
			scrollTop -= 100;
			contentWrapperElement.style.transform = `translateY(-${scrollTop}px)`;
		}
	};

	onMount(() => {
		const timeline = gsap.timeline({ paused: true });

		timeline.fromTo(
			img,
			{
				duration: 0.45,
				opacity: 0
			},
			{
				duration: 0.45,
				opacity: 1
			}
		);
		timeline.from(header, {
			yPercent: -20,
			opacity: 0,
			duration: 0.45
		});

		animation = timeline;

		const contentItem = document.querySelectorAll('.content__item');

		const oberse = new IntersectionObserver(callback, { rootMargin: '-100px', threshold: 0.5 });
		contentItem.forEach((elem) => {
			oberse.observe(elem);
		});
	});

	onDestroy(() => {
		scrollBehavior.unfreeze('both');
	});
</script>

<svelte:window on:wheel={handleMouseWheel} />

<section id="section--3">
	<div class="image">
		<img bind:this={img} class="img" src="/images/{currentShowcaseImage}" alt="Hero" />
	</div>

	<div class="line line--vert" />

	<div class="content-wrapper">
		<div class="content" bind:this={contentWrapperElement}>
			<div class="content__block">
				{#each processData as process, i}
					<div
						class="content__item content__item--{i}"
						data-index={i}
						style={i > 0 ? 'margin-top: 120%' : ''}
					>
						<ContentBlock heading={process.heading}>
							{process.desc}
						</ContentBlock>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		position: relative;
		height: 100%;
		width: 100%;
		overflow-y: hidden;
	}
	.content-wrapper {
		position: relative;
		padding: 0 20px;
	}
	.content {
		display: flex;
		position: absolute;
		flex-direction: column;
		transition: transform 0.25s ease-out;

		&__block {
			top: 30%;
		}

		&__item {
			margin-top: 20%;
		}
	}
	.image {
		position: relative;
		overflow: hidden;
		width: 100%;

		img {
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			height: 100%;
			width: 100%;
			object-fit: contain;
			position: absolute;
		}
	}
	.line {
		height: 100%;
		width: 1px;
		left: 50%;
		transform: translateX(-50%);
		position: absolute;
	}
</style>
