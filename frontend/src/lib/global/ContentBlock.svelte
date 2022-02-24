<script lang="ts">
	import Button from './Button.svelte';

	export let heading: string;
	export let desc: string;
	export let button: { text: string; link: string } = null;
</script>

<article>
	<h1>{heading}</h1>
	<p>
		{desc}
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
