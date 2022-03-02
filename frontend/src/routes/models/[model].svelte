<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { MODELS } from '$lib/data/models';

	export const load: Load = ({ params }) => {
		const slug = params.model;
		const modelData = MODELS.find(
			(model) => decodeURIComponent(model.title) === decodeURIComponent(slug)
		);

		return {
			props: {
				modelData,
				modelName: slug
			}
		};
	};
</script>

<script lang="ts">
	import type { Models } from '$lib/data/models';
	import Arrow from '$lib/global/Arrow.svelte';
	import Button from '$lib/global/Button.svelte';
	import Footer from '$lib/global/Footer.svelte';
	import Carousel from '$lib/global/Carousel.svelte';
	import ModelSpec from '$lib/model/ModelSpec.svelte';
	import FeatureCard from '$lib/global/FeatureCard.svelte';

	export let modelData: Models;
	export let modelName: string;

	let featureModalOpen = false;
</script>

{#if featureModalOpen}
	<Carousel>
		<FeatureCard color="blue"/>
		<FeatureCard color="green"/>
		<FeatureCard color="yellow"/>
		<FeatureCard color="coral"/>
		<FeatureCard color="gray"/>
	</Carousel>
	{/if}
<section>
	<div class="top">
		<div class="arrow arrow--right">
			<Arrow rotate={180} />
		</div>
		<div class="arrow arrow--left">
			<Arrow rotate={360} />
		</div>
		<img src="/images/{modelData.imgSrc}" alt="" />
	</div>
	<div class="bottom-left">
		<h3>{modelData.title}</h3>
		<div class="content">
			<p>{modelData.desc}</p>
		</div>
	</div>
	<div class="bottom-right">
		<h3>Specs</h3>
		<div class="specs">
			{#each modelData.specs as specs}
				<ModelSpec name={specs.name} value={specs.value} />
			{/each}
		</div>
	</div>
</section>

<Footer>
	<div class="buttons">
		<Button
			color="gray"
			download={{ fileName: 'Model Specs', location: '/pdfs/HO2-TYPE1-RIGHT.pdf' }}
		>
			Download Specs
		</Button>
		<Button color="blue" href="/design/{encodeURIComponent(modelName)}">Design Your Model</Button>
		<Button color="light" on:click={() => (featureModalOpen = !featureModalOpen)}
			>Feature Details</Button
		>
	</div>
</Footer>

<style lang="scss">
	.bottom-left,
	.bottom-right {
		padding: 20px;
		display: flex;
		gap: 10px;
		flex-direction: column;
	}

	.buttons {
		display: flex;
		gap: 2rem;
	}

	section {
		display: grid;
		grid-template-rows: 1fr 0.7fr;
		grid-template-columns: 0.5fr 1fr;

		.top {
			padding: 3rem;
			position: relative;
			width: 100%;
			grid-column: 1/-1;

			img {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 50%;
				max-width: 550px;
			}
		}

		.bottom-left {
			border: 1px solid var(--tran-4);
			overflow-y: hidden;

			p {
				line-height: 1.5;
			}
		}

		.bottom-right {
			border: 1px solid var(--tran-4);
			border-left: none;

			.specs {
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				gap: 1rem;
				max-height: 200px;
			}
		}
	}

	.arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);

		&--right {
			right: 30px;
		}
		&--left {
			left: 30px;
		}
	}
</style>
