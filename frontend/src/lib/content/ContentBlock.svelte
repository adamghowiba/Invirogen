<script lang="ts">
	import Button from '../global/Button.svelte';

	export let heading: string;
	export let button: { text: string; link: string } = null;
</script>

<article>
	<h1>{heading}</h1>
	<p>
		<slot />
	</p>
	{#if button}
		<Button href={button.link}>{button.text}</Button>
	{/if}
</article>

<style lang="scss">
	article {
		max-width: 50ch;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		overflow-y: auto;
	}
</style>
