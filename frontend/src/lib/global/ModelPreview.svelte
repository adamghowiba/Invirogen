<script lang="ts">
	export let imgSrc: string;
	export let desc: string;
	export let title: string;
	export let urlModelName: string;
</script>

<a href="/models/{encodeURIComponent(title)}" class="wrapper">
	<div class="model">
		<div class="graident" />
		<img src={imgSrc} alt="" />
	</div>

	<div class="content">
		<h4>{title}</h4>
		<p>
			{desc.substring(0, 105)}...
		</p>
	</div>
</a>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 2rem;
		text-decoration: none;
		color: inherit;
		cursor: pointer;

		.content {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		p {
			max-width: 30ch;
		}

		&:hover img {
			max-width: 100%;
		}

		&:hover .graident {
			opacity: 1;
			animation: pulse 7s infinite;
		}
	}
	.model {
		display: block;
		width: 270px;
		height: 270px;
		border-radius: 50%;
		border: 1px solid var(--tran-4);
		position: relative;

		.graident {
			background-color: red;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			opacity: 0;
			background-image: linear-gradient(to top, #d1cfcf 0%, #f8f8f8 100%);
			transition: opacity 0.15s ease-out;
		}

		img {
			position: absolute;
			top: 55%;
			left: 55%;
			transform: translate(-50%, -50%);
			max-width: 95%;
			transition: max-width 0.35s ease-out;
		}
	}

	@keyframes pulse {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
