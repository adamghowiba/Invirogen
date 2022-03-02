<script lang="ts">
	import Footer from '$lib/global/Footer.svelte';
	import Nav from '$lib/global/Nav.svelte';
</script>

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
</style>
