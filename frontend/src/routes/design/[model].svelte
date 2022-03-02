<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ params }) => {
		const model = params.model;

		return {
			props: {
				model
			}
		};
	};
</script>

<script lang="ts">
	import HeaderBlock from '$lib/content/HeaderBlock.svelte';
	import InfoBlock from '$lib/content/InfoBlock.svelte';
	import Button from '$lib/global/Button.svelte';
import Footer from '$lib/global/Footer.svelte';
	import OptionRadio from '$lib/global/inputs/OptionRadio.svelte';

	interface ModelSectionData {
		material: string;
		color: string;
	}
	interface ModelData {
		exterior: ModelSectionData;
		interior: ModelSectionData;
	}

	export let model: string;

	let modelData: ModelData = {
		exterior: {
			material: null,
			color: null
		},
		interior: {
			material: null,
			color: null
		}
	};

	$: console.log(modelData);
</script>

<section>
	<div class="model">
		<img src="/images/model_closed_small.png" alt="Model" />
	</div>

	<div class="options">
		<div class="options__info">
			<HeaderBlock heading="{model}" subheading="Estimated Delivery: August 2022" />
			<div class="options__info__stats">
				<InfoBlock heading="140 x 12ft" subheading="Size" />
				<InfoBlock heading="$70,000" subheading="Price" />
				<InfoBlock heading="x4" subheading="Windows" />
			</div>
		</div>

		<div class="options__block">
			<HeaderBlock heading="Exterior Material" subheading="Main Color of the Versaille" />
			<div class="options__siding">
				<OptionRadio
					imgSrc="/options/siding-gray.png"
					name="siding"
					label="Siding"
					size="large"
					value="siding"
					bind:selectedValue={modelData.exterior.material}
				/>
				<OptionRadio
					imgSrc="/options/siding-white.png"
					name="siding"
					label="Stone"
					size="large"
					value="stone"
					bind:selectedValue={modelData.exterior.material}
				/>
				<OptionRadio
					imgSrc="/options/siding-gray.png"
					name="siding"
					label="Shingles"
					size="large"
					value="shingles"
					bind:selectedValue={modelData.exterior.material}
				/>
			</div>
		</div>

		<div class="options__block">
			<HeaderBlock heading="Exterior Color" subheading="Color of the model stone" />
			<div class="options__walls">
				<OptionRadio
					imgSrc="/options/stone-brown.png"
					name="exterior_color"
					label="Brown"
					value="brown"
					bind:selectedValue={modelData.exterior.color}
				/>
				<OptionRadio
					imgSrc="/options/stone-darkgreen.png"
					name="exterior_color"
					label="Pebble"
					value="pebble"
					bind:selectedValue={modelData.exterior.color}
				/>
				<OptionRadio
					imgSrc="/options/stone-gray.png"
					name="exterior_color"
					label="Gray"
					value="gray"
					bind:selectedValue={modelData.exterior.color}
				/>
				<OptionRadio
					imgSrc="/options/stone-lightgray.png"
					name="exterior_color"
					label="Silver"
					value="silver"
					bind:selectedValue={modelData.exterior.color}
				/>
			</div>
		</div>

		<div class="options__block">
			<HeaderBlock heading="Interior Material" subheading="Color of the model stone" />
			<div class="options__walls">
				<OptionRadio
					imgSrc="/options/stone-brown.png"
					name="interior_color"
					label="Brown"
					value="brown"
					bind:selectedValue={modelData.interior.material}
				/>
				<OptionRadio
					imgSrc="/options/stone-darkgreen.png"
					name="interior_material"
					label="Pebble"
					value="pebble"
					bind:selectedValue={modelData.interior.material}
				/>
				<OptionRadio
					imgSrc="/options/stone-gray.png"
					name="interior_material"
					label="Gray"
					value="gray"
					bind:selectedValue={modelData.interior.material}
				/>
				<OptionRadio
					imgSrc="/options/stone-lightgray.png"
					name="interior_material"
					label="Silver"
					value="silver"
					bind:selectedValue={modelData.interior.material}
				/>
			</div>
		</div>
	</div>
</section>

<Footer />

<style lang="scss">
	section {
		display: grid;
		grid-template-columns: 1fr 0.6fr;
		overflow-y: auto;
		position: relative;
	}
	.model {
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			object-fit: contain;
			width: 75%;
			height: 75%;
		}
	}
	.options {
		position: relative;
		display: flex;
		align-items: center;
		overflow-y: auto;
		flex-direction: column;
		gap: 10rem;
		padding: 50px 20px;
		border-left: 1px solid var(--tran-4);

		&__block {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		&__info {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}

		&__info__stats {
			display: flex;
			justify-content: space-between;
			gap: 2rem;
		}

		&__walls,
		&__siding {
			display: flex;
			gap: 1.5rem;
		}
	}
</style>
