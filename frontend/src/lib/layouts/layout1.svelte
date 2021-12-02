<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="body">
	<div class="scroll">
		<div class="line line--left" />
	</div>

	<!-- Page -->
	<div class="page">
		<!-- Navbar -->
		<div class="nav">
			<div class="line line--top line--vert" />
		</div>

		<!-- Center -->
		<div class="center">
			<div class="line line--center" />
			<img class="hero-img" src="/images/hero_image.png" alt="Hero" />

			<div class="content">
				<h1>Insprational design from Dickhead</h1>
				<p>
					Our homes are meticulously designed for extreme durability, efficiency and right-sized for
					modern living. Our homes are meticulously designed for extreme durability, efficiency and
					right-sized for modern living.
				</p>
			</div>
		</div>

		<!-- Footer -->
		<div class="footer">
			<div class="line line--bottom line--vert" />
			<button on:click={() => dispatch('playInAnimation')}>Restart In</button>
			<button on:click={() => dispatch('playOutAnimation')}>Restart Out</button>
		</div>
	</div>
</div>

<style>
	.body {
		width: 100%;
		height: 100%;
		display: flex;
	}
	.page {
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		flex-shrink: 1;
	}
	.center {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 50% 50%;
		position: relative;
	}
	.hero-img {
		display: block;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 50%;
		padding: 5rem;
	}
	.line {
		/* background-color: var(--tran-4); */
		position: absolute;
		border: 1px solid var(--tran-4);
	}
	.line--left {
		bottom: 0;
		height: 100%;
		width: 3px;
		right: 0;
	}
	.line--top {
		bottom: 0;
		right: 0;
		left: 0;
	}
	.line--bottom {
		right: 0;
		left: 0;
		top: 0;
	}
	.line--center {
		/* align-self: center; */
		bottom: 0;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	/* Body Parts */
	.nav {
		position: relative;
		height: 100%;
		flex-basis: 80px;
		width: 100%;
		background-color: red;
	}
	.footer {
		height: 100%;
		flex-basis: 80px;
		margin-top: auto;
		width: 100%;
		position: relative;
	}
	.scroll {
		position: relative;
		width: 40px;
		height: 100%;
	}
</style>
