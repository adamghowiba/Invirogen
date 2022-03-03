<script lang="ts">
	import Footer from '$lib/global/Footer.svelte';
	import Nav from '$lib/global/Nav.svelte';
	import { overlay } from '$lib/stroes/interface';
	import { fade } from 'svelte/transition';
</script>

{#if $overlay}
	<div class="overlay" on:click={() => ($overlay = false)} transition:fade={{ duration: 250 }} />
{/if}

<div class="grid">
	<Nav />
	<slot />
	<!-- <Footer /> -->
</div>

<style>
	.grid {
		display: grid;
		grid-template-rows: 80px 1fr 80px;
		height: 100%;
		/* overflow: hidden; */
	}
	.overlay {
		position: absolute;
		z-index: 100;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.247);
		backdrop-filter: blur(2px);
	}
</style>
