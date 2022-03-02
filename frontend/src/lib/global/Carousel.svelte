<script lang="ts">
	import Button from './Button.svelte';

	let modalElement: HTMLElement;
	let slideAmount = 0;

	const nextCard = () => {
		slideAmount -= 620;
		modalElement.style.transform = `translateX(${slideAmount}px)`;
	};

	const previousCard = () => {
		slideAmount += 620;
		modalElement.style.transform = `translateX(${slideAmount}px)`;
	};
</script>

<div class="modal">
	<div class="cards" bind:this={modalElement}>
		<slot />
	</div>
	<div class="buttons">
		<Button on:click={previousCard}>Previous</Button>
		<Button on:click={nextCard}>Next</Button>
	</div>
</div>

<style lang="scss">
	.modal {
		display: flex;
		height: 500px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 100;
		border: 3px solid blue;
	}
	.cards {
		display: flex;
		transition: transform 0.25s linear;
		gap: 20px;
	}
	.buttons {
		display: flex;
		position: absolute;
		transform: translateX(-50%);
		left: 50%;
		gap: 10px;
		z-index: 200;
		bottom: 0;
	}
</style>
