<script lang="ts">
	import ContentBlock from '$lib/content/ContentBlock.svelte';
	import Grid from '$lib/grid/Grid.svelte';
	import ProcessCircle from '$lib/process/ProcessCircle.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { quadIn } from 'svelte/easing';
	import { beforeNavigate } from '$app/navigation';
import Footer from '$lib/global/Footer.svelte';

	let currentSectionIndex = 0;
	let observer: IntersectionObserver;
	let timeout: NodeJS.Timeout;

	// Used to disbable the background image to avoid transition firing onDestory
	let backimageImageHidden = false;

	interface ProcessData {
		title: string;
		subtitle: string;
		imageUrl?: string;
		circle: { title: string; description: string };
	}

	const PROCESS_DATA: ProcessData[] = [
		{
			title: 'Plan & Design',
			subtitle:
				'This is where it gets fun. Choose from the high-end, standard finishes, fixtures and appliances of your dreams — all hand selected based on design, performance, affordability and sustainability. Upgrade your space with our option packages to personalize your Invirogen space. Need a garage? Done. Dreaming of a deck? Done and done.',
			imageUrl: 'wideshot.png',
			circle: {
				title: 'Built tailord to you',
				description:
					'We partner with high security companies and reliable source of container material to provide outstanding'
			}
		},
		{
			title: 'Get permits and approval',
			subtitle:
				'With your Model customizations on paper, we’ll submit the drawings for local city permits. While approval timelines can vary based on location, we’ll do our best to move from paper to prefab factory faster than you can choose your Model',
			imageUrl: 'info_image.png',
			circle: {
				title: 'We handle the paperwork',
				description:
					'We’ll submit the drawings for local city permits, we’ll do our best to move from paper to prefab factory faster than you can choose your Model'
			}
		},
		{
			title: 'Build your Invirogen Space',
			subtitle:
				'This is where the magic happens. We build your Model in our prefab factory in Orlando, FL — using assembly-line construction that cuts the time, waste and headaches associated with building or remodeling a home. Goodbye, sticker shock. Hello, cost savings.',
			imageUrl: 'building.png',
			circle: {
				title: 'Innovative Engineering',
				description:
					'our local General Contractor will get your property ready for installation. We will coordinate with your site team to make sure the foundation and utilities are ready'
			}
		},
		{
			title: 'Deliver your Invirogen Space',
			subtitle:
				'This is the moment you’ve been waiting for. Your Model Home will arrive from our factory nearly finished — complete with siding, windows, plumbing and appliances. Seeing is believing as you and the family witness the transformation from empty lot into domestic paradise in the blink of an eye. Modern living has arrived (literally).',
			circle: {
				title: 'Low-cost dilevery anywhere in the US',
				description:
					'We’ll button up the seams, install the appliances, and add the finishing touches to ensure your Model is fully ready.'
			}
		}
	];

	const onContentScrollIntoView: IntersectionObserverCallback = (entries, observer) => {
		const [contentElement] = entries;
		const target = contentElement.target as HTMLElement;

		if (contentElement.isIntersecting) {
			currentSectionIndex = parseInt(target.dataset.id) || 0;
		}
	};

	const handleCircleClick = (event: { detail: any }) => {
		const circleIndex = event.detail;
		currentSectionIndex = circleIndex;

		const contentBlocks = document.querySelectorAll('.content-block');

		contentBlocks.forEach((contentElement: HTMLElement) => {
			observer.unobserve(contentElement);
			
			if (parseInt(contentElement.dataset.id) === circleIndex) {
				contentElement.scrollIntoView({ behavior: 'smooth' });
			}

			timeout = setTimeout(() => {
				observer.observe(contentElement);
			}, 1000);
		});
	};

	onMount(() => {
		const contentContainer = document.querySelector('.left');
		const contentBlocks = document.querySelectorAll('.content-block');
		observer = new IntersectionObserver(onContentScrollIntoView, {
			root: contentContainer,
			threshold: 0.8
		});

		contentBlocks.forEach((contentBlock) => {
			observer.observe(contentBlock);
		});

		return () => {
			contentBlocks.forEach((contentBlock) => {
				observer.unobserve(contentBlock);
			});
		};
	});

	onDestroy(() => {
		if (timeout) clearTimeout(timeout);
	});

	beforeNavigate(() => {
		backimageImageHidden = true;
	});

	$: currentProcessData = PROCESS_DATA[currentSectionIndex];
</script>

<Grid layout="layout-2">
	<div class="left">
		{#each PROCESS_DATA as data, i}
			<div class="content-block" data-id={i} style="margin-bottom: {i != 3 ? '80vh' : '61.5vh'}">
				<ContentBlock heading={data.title}>
					{data.subtitle}
				</ContentBlock>
			</div>
		{/each}
	</div>

	<div class="right">
		{#if !backimageImageHidden}
			{#key currentProcessData.imageUrl}
				<img
					transition:fade={{ easing: quadIn, duration: 400 }}
					src="/images/{currentProcessData.imageUrl || 'wideshot.png'}"
					alt="Wideshot of container home"
				/>
			{/key}
		{/if}

		<div class="overlay" />

		<ProcessCircle
			on:onCircleClick={handleCircleClick}
			activeCircleIndex={currentSectionIndex}
			title={currentProcessData.circle.title}
			description={currentProcessData.circle.description}
		/>
	</div>
</Grid>

<Footer />

<style lang="scss">
	.left {
		padding: 20px;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;

		.content-block {
			scroll-snap-align: start;
			padding-top: 20px;
		}
	}
	.right {
		position: relative;
		overflow: hidden;

		.overlay {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.596);
		}

		img {
			position: absolute;
			z-index: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
