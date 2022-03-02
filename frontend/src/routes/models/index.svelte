<script lang="ts">
	import ModelPreview from '$lib/global/ModelPreview.svelte';
	import { MODELS } from '$lib/data/models';
	import Footer from '$lib/global/Footer.svelte';
</script>

<section>
	<header>
		<h2>Models</h2>
		<p>
			Our homes are meticulously designed for extreme durability, efficiency and right-sized for
			modern living.
		</p>
	</header>
	<div class="models">
		{#each MODELS as model}
			<ModelPreview
				title={model.title}
				desc={model.desc}
				imgSrc="/images/{model.imgSrc}"
				urlModelName={model.slug}
			/>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		padding: 4rem 2rem;
		justify-content: center;
	}
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

		p {
			max-width: 40ch;
		}
	}
	.models {
		display: flex;
		height: 100%;
		gap: 1rem;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
	}
</style>
