<script lang="ts">
	import { blackedOut } from '$lib/stroes/interface';
	import { gsap } from 'gsap';

	import { createEventDispatcher, onMount } from 'svelte';
	import Button from './Button.svelte';

	const dispatch = createEventDispatcher();

	let footerElement: HTMLElement;
</script>

<footer bind:this={footerElement}>
	<div class="line line--hor" />
	<slot>
		<Button on:click> Explore Models</Button>
	</slot>
	<!-- <Button on:click={() => dispatch('previous')}>PRevious Transition</Button> -->
	<!-- <Button on:click={() => dispatch('next')}>Next Transition</Button> -->
</footer>

<style>
	footer {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 100;
		background-color: transparent;
		backdrop-filter: blur(10px);
	}
	.line--hor {
		width: 100%;
		height: 1px;
		position: absolute;
		top: 0;
	}
</style>
