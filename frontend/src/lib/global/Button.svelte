<script lang="ts">
	type ButtonColor = 'white' | 'gray' | 'black' | 'blue' | 'light';

	// export let type = 'link'
	export let href = null;
	export let color: ButtonColor = 'gray';
	export let download: { fileName: string; location: string } = null;

	const BUTTON_COLOR: { [K in ButtonColor]: string } = {
		white: 'white',
		black: 'black',
		light: '#F4F4F4',
		gray: '#2d2d2d',
		blue: 'var(--color-blue)'
	};
</script>

{#if download}
	<a
		class={color}
		style="--buttonColor: {BUTTON_COLOR[color]}"
		href={download.location}
		download={download.fileName}
		on:click
	>
		<slot />
	</a>
{:else if href}
	<a class={color} style="--buttonColor: {BUTTON_COLOR[color]}" {href} on:click><slot /></a>
{:else}
	<button class={color} style="--buttonColor: {BUTTON_COLOR[color]}" on:click><slot /></button>
{/if}

<style lang="scss">
	a,
	button {
		text-decoration: none;
		color: rgba(255, 255, 255, 0.918);
		padding: 5px 2rem;
		font-size: 14px;
		font-weight: 500;
		display: flex;
		justify-content: center;
		align-items: center;
		width: max-content;
		min-height: 35px;
		border-radius: 40px;
		background-color: var(--buttonColor, #2d2d2d);
	}
	.gray,
	.black,
	.blue {
		color: rgba(255, 255, 255, 0.918) !important;
	}
	.white,
	.light {
		color: var(--color-black-s2) !important;
	}
	button {
		appearance: none;
		border: none;
		outline: none;
		font-weight: 500 !important;
		font-family: 'Montserrat', sans-serif;

		&:hover {
			cursor: pointer;
		}
	}
</style>
