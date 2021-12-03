<script lang="ts">
	import Button from '$lib/global/Button.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	function a1() {
		const timeline = gsap.timeline({ paused: true });
		timeline.to('.block--1', {
			yPercent: -150
		});
		timeline.to('.block--1', {
			rotate: 90
		});

		return timeline;
	}

	const a2 = () => {
		const timeline = gsap.timeline({ paused: true });
		timeline.to('.block--2', {
			yPercent: -150
		});
		timeline.to('.block--2', {
			rotate: 90
		});

		return timeline;
	};
	const a3 = () => {
		const timeline = gsap.timeline({ paused: true });
		timeline.to('.block--3', {
			yPercent: -150
		});
		timeline.to('.block--3', {
			rotate: 90
		});

		return timeline;
	};

	class AnimationSqquence {
		count: number;
		animations: Array<() => gsap.core.Timeline>;
		currentAnimation: gsap.core.Timeline;

		constructor(animations: Array<() => gsap.core.Timeline>, current: number = 0) {
			this.count = current;
			this.animations = animations;
		}

		get nextAnimation(): gsap.core.Timeline {
			return (this.currentAnimation = this.animations[++this.count]());
		}
		get prevAnimation(): gsap.core.Timeline {
			return (this.currentAnimation = this.animations[--this.count]());
		}
		init(): void {
			this.currentAnimation = this.animations[this.count]();
		}
	}

	const blockAnimation = new AnimationSqquence([a1, a2, a3], 0);

	function nextAnimation() {
		blockAnimation.currentAnimation.reverse();
		blockAnimation.nextAnimation.play();
	}

	function previousAnimation() {
		blockAnimation.currentAnimation.reverse();
		blockAnimation.prevAnimation.play();
		console.log('Previous Fired');
	}

	onMount(() => {
		blockAnimation.init();
		// blockAnimation.currentAnimation.play();
	});
</script>

<div class="wrap">
	<div class="block block--1" />
	<div class="block block--2" />
	<div class="block block--3" />
</div>
<div class="buttons">
	<Button on:click={previousAnimation}>Previous</Button>
	<Button on:click={nextAnimation}>Next</Button>
</div>

<style>
	.block {
		width: 100px;
		height: 100px;
		background-color: brown;
	}
	.wrap {
		display: grid;
		justify-content: center;
		align-items: center;
		gap: 5rem;
		width: 100%;
		height: 90%;
		grid-template-columns: repeat(auto-fit, 100px);
	}
	.buttons {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3em;
	}
</style>
