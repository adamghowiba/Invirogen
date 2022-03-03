<script lang="ts">
	export let imgSrc: string;
	export let title: string;
	export let desc: string;
</script>

<div class="modal">
	<img src={imgSrc} alt="Building feature" />
	<div class="content">
		<h3>{title}</h3>
		<p>{desc}</p>
	</div>
</div>

<style lang="scss">
	.modal {
		display: grid;
		grid-template-columns: 1fr 0.7fr;
		position: relative;
		width: 100%;
		height: 100%;
		background-color: var(--color);
		border-radius: inherit;

		img {
			position: relative;
			display: block;
			border-top-left-radius: inherit;
			border-bottom-left-radius: inherit;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.content {
			display: flex;
			flex-direction: column;
			gap: 5px;
			padding: 20px;
		}
	}
</style>
