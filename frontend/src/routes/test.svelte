<script lang="ts">
	import Button from '$lib/global/Button.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	const a1 = () => {
		const t1 = gsap.timeline({ paused: true });
		t1.to('.block--1', {
			yPercent: -150
		});
		t1.to('.block--1', {
			rotate: 90
		});

		return t1;
	};
	const a2 = () => {
		return gsap.to('.block--2', {
			yPercent: -150
		});
	};
	const a3 = () => {
		return gsap.to('.block--3', {
			yPercent: -100
		});
	};

	let animations = [a1, a2, a3];
	let currentCount = 0;
	let current, previous;
	let rendered = false;

	function nextAnimation() {
		currentCount >= animations.length-1 ? (currentCount = 0) : currentCount++;
		console.log('Next animation fired', currentCount);
	}
	function previousAnimation() {
		currentCount -= currentCount && 1;
		console.log('Previous Fired', currentCount);
	}

	onMount(() => {
		rendered = true;
	});

	$: if (rendered) {
		previous = current;
		current = animations[currentCount]();
		
		previous && previous.reverse();
		current.play();
		console.log(currentCount);
	}
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
