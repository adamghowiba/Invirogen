<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let layout;
	// grid-template-rows: 80px 1fr 80px;
	// 	grid-template-columns: 40px 1fr;

	$: console.log(layout);
</script>

<div class="grid layout--{layout}">
	<div class="scroll">
		<div class="line line--vert line--scroll" />
	</div>

	<div class="nav">
		<div class="line line--hor line--nav" />
	</div>

	<div class="body">
		<div class="line line--vert line--body" />

		<div class="image">
			<div class="image-curtain" />
			<img class="hero-img" src="/images/hero_image.png" alt="Hero" />
		</div>

		<div class="content">
			<h1>Inspiring & Innovative Designs</h1>
			<p>
				Our homes are meticulously designed for extreme durability, efficiency and right-sized for
				modern living. Our homes are meticulously designed for extreme durability, efficiency and
				right-sized for modern living.
			</p>
		</div>
	</div>
	<div class="body-bottom">
		<div class="line line--hor line--bbt" />
		<div class="line line--vert line--bbl" />
	</div>

	<div class="footer">
		<div class="line line--hor line--footer" />
		<button on:click={() => dispatch('changeLayout', 'l1')}>Layout 1</button>
		<button on:click={() => dispatch('changeLayout', 'l2')}>Layout 2</button>
		<button on:click={() => dispatch('changeLayout', 'l5')}>Layout 5</button>
	</div>
</div>

<style>
	.grid {
		display: grid;
		height: 100%;
		width: 100%;
	}
	.layout--l1,
	.layout--l2 {
		grid-template-rows: 80px 1fr 80px;
		grid-template-columns: 40px 1fr;

		grid-template-areas:
			'scroll nav'
			'scroll body'
			'scroll footer';
	}
	.layout--l5 {
		grid-template-rows: 80px 1fr 0.5fr 80px;
		grid-template-columns: 40px 1fr;

		grid-template-areas:
			'scroll nav'
			'scroll body'
			'scroll b2'
			'scroll footer';
	}
	.body-bottom {
		grid-area: b2;
		position: relative;
	}
	/* Content Styles */
	.hero-img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.image-curtain {
		position: absolute;
		background-color: white;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	.image {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.content {
		justify-items: center;
		max-width: 50ch;
		margin: 0 auto;
	}

	/* Line Styles */
	.line {
		position: absolute;
		background-color: rgba(0, 0, 0, 0.158);
	}
	.line--nav {
		bottom: 0;
	}
	.line--scroll {
		right: 0;
	}
	.line--body {
		left: 50%;
		top: 0;
		transform: translateX(-50%);
		z-index: 10;
	}
	.line--bbl {
		left: 24%;
	}
	.line--footer {
		top: 0;
	}
	.line--hor {
		width: 100%;
		height: 3px;
	}
	.line--vert {
		height: 100%;
		width: 3px;
	}

	/* Layout Styles */
	.scroll {
		grid-area: scroll;
		height: 100%;
	}
	.nav {
		grid-area: nav;
	}
	.body {
		grid-area: body;
		display: grid;
		grid-template-columns: 50% 50%;
		align-items: center;
	}
	.footer {
		grid-area: footer;
	}
	.nav,
	.body,
	.footer,
	.scroll {
		position: relative;
	}
</style>
