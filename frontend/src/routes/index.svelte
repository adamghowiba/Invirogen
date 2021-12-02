<script lang="ts">
	import Footer from '$lib/global/Footer.svelte';
	import Nav from '$lib/global/Nav.svelte';
	import {
		gsap,
		Power0,
		Power1,
		Power2,
		Power3,
		Power4,
		Linear,
		Quad,
		Cubic,
		Quart,
		Quint,
		Strong,
		Elastic,
		Back,
		SteppedEase,
		Bounce,
		Sine,
		Expo,
		Circ
	} from 'gsap';
	import { onMount } from 'svelte';
</script>

<!-- Create grid system for top - bottom lines -->

<div class="grid">
	<Nav />

	<Footer />
</div>

<style>
</style>
