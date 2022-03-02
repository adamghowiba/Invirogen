<script lang="ts">
	export let heading: string;
	export let subheading: string = null;
</script>

<header>
	<h3>{heading}</h3>
	{#if subheading}
		<span>{subheading}</span>
	{/if}
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-transform: capitalize;
		gap: 4px;
	}
</style>
