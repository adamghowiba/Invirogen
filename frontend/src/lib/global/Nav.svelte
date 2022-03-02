<script lang="ts">
	import { browser } from '$app/env';
	import { blackedOut } from '$lib/stroes/interface';

	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let navbarElement: HTMLElement;

	function inAnimation() {
		const timeline = gsap.timeline({
			delay: 0.45
		});
		timeline.from('.logo', {
			yPercent: -20,
			opacity: 0,
			duration: 0.45
		});
		timeline.from('.links span', {
			opacity: 0,
			yPercent: -20
		});
	}

	onMount(() => {
		inAnimation();
	});
</script>

<nav bind:this={navbarElement}>
	<a href="/">
		<img class="logo" src="/images/invirogen-logo.png" alt="Invirogen Logo" />
	</a>
	<div class="links">
		<a href="/models">Models</a>
		<a href="/process">Process</a>
		<a href="/">Contact</a>
	</div>
	<div class="hamburger" />
	<div class="line line--hor" />
</nav>

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		position: relative;
		align-items: center;
		padding: 0 20px;
		background-color: transparent;
		backdrop-filter: blur(10px);
		z-index: 10;

		a {
			font-weight: 500;
			color: var(--color-black-s1);
		}
	}
	.links {
		display: flex;
		gap: 2rem;
	}
	.hamburger {
		width: 182px;
	}
	img {
		max-width: 182px;
		max-height: 22px;
	}
	.line--hor {
		left: 0;
		right: 0;
		height: 1px;
		position: absolute;
		bottom: 0;
	}
</style>
