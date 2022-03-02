<script lang="ts">
	import { scrollBehavior } from '$lib/stroes/animation';
	export let rotate: number = 0;
    export let left: boolean = false;

	$: {
		scrollBehavior.freeze('both');
	}
</script>

<div class="wrapper" style="--rotate: {rotate}deg;" class:left>
	<div class="row row--1">
		<img src="/images/black_home.png" alt="" />
		<img src="/images/building.png" alt="" />
		<img src="/images/hero_image.png" alt="" />
	</div>
	<div class="row row--2">
		<img src="/images/info_image.png" alt="" />
		<img src="/images/wideshot.png" alt="" />
	</div>

	<div class="row row--3">
		<img src="/images/hero_image.png" alt="" />
	</div>
</div>

<style lang="scss">
	.wrapper,
	.row {
		gap: 1rem;
	}
	.wrapper {
		display: flex;
		align-items: center;
		transform: rotate(var(--rotate));
	}
	.row {
		display: flex;
		flex-direction: column;
	}
	img {
		width: 100%;
		max-width: 250px;
		height: 231px;
		object-fit: cover;
		display: block;
		border-radius: 4px;
		transform: rotate(var(--rotate));
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        animation: floating-right 4s ease-in-out infinite;
	}
    .left img {
        animation: floating-left 3.5s ease-in-out infinite;
    }

	@keyframes floating-right {
		0% {
			transform: rotate(var(--rotate)) translate(0, 0px);
		}
		50% {
			transform: rotate(var(--rotate)) translate(-3px,3px);
		}
		100% {
			transform: rotate(var(--rotate)) translate(0, -0px);
		}
	}

    @keyframes floating-left {
		0% {
			transform: rotate(var(--rotate)) translate(0, 0px);
		}
		50% {
			transform: rotate(var(--rotate)) translate(2px, 3px);
		}
		100% {
			transform: rotate(var(--rotate)) translate(0, -0px);
		}
	}
</style>
