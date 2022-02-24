<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';

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

<nav>
	<img class="logo" src="/images/logo.png" alt="Invirogen Logo" />
	<div class="links">
		<span>Models</span>
		<span>Energy</span>
		<span>Process</span>
		<span>Products</span>
	</div>
	<div class="hamburger" />
	<div class="line line--hor" />
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		position: relative;
		align-items: center;
		padding: 0 3rem;
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
