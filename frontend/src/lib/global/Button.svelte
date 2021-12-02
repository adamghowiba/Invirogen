<script>
	// export let type = 'link'
	export let href = '/';
	export let type = 'button';
</script>

{#if type == 'link'}
	<a {href} on:click><slot /></a>
{/if}

{#if type == 'button'}
	<button on:click><slot /></button>
{/if}

<style>
	a, button {
		text-decoration: none;
		background-color: #2d2d2d;
		color: white;
		font-weight: bold;
		padding: 5px 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		width: max-content;
		min-height: 35px;
		border-radius: 40px;
	}
    button {
        appearance: none;
        border: none;
        outline: none;
    }
</style>
