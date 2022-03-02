<script lang="ts">
	export let heading: string;
	export let subheading: string = null;
</script>

<div class="info">
	<h4>{heading}</h4>
	{#if subheading}
		<span>{subheading}</span>
	{/if}
</div>

<style lang="scss">
	.info {
		display: flex;
		align-items: center;
		flex-direction: column;
        gap: 3px;

        span {
            font-size: 14px;
        }
	}
</style>
