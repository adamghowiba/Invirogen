<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createEventDispatcher, dataset_dev } from 'svelte/internal';

	export let title: string;
	export let description: string;
	export let activeCircleIndex: number = 0;

	const circleRotations = [0, -90, 180, 90];

	const dispatch = createEventDispatcher();

	interface CircleData {
		rotation: number;
		iconName: string;
		id: string;
	}

	// TODO Should `PROCESS_DATA` and `CIRCLE_DATA` be merged?
	const CIRCLE_DATA: CircleData[] = [
		{
			rotation: 0,
			iconName: 'bi:gear-fill',
			id: 'top'
		},
		{
			rotation: -90,
			iconName: 'fa-solid:dollar-sign',
			id: 'right'
		},
		{
			rotation: 180,
			iconName: 'mdi:tools',
			id: 'bottom'
		},
		{
			rotation: 90,
			iconName: 'fa-solid:truck',
			id: 'left'
		}
	];

	let wrapperElement: HTMLElement;
	let iconSize = 30;

	const rotateCircle = (circleIndex: number) => {
		dispatch('onCircleClick', circleIndex)
		activeCircleIndex = circleIndex;
		// wrapperElement.style.transform = `translate(-50%, -50%) rotate(${CIRCLE_DATA[circleIndex].rotation}deg)`;
	};
</script>

<!-- Dobule wrapper to avoid text rotating -->
<div class="wrapper">
	<div class="circle-wrapper" bind:this={wrapperElement}>
		{#each CIRCLE_DATA as data, i}
			<div
				class="circle circle--{data.id}"
				class:circle--active={activeCircleIndex === i}
				on:click={() => rotateCircle(i)}
			>
				<Icon
					icon={data.iconName}
					width={iconSize}
					height={iconSize}
					color={activeCircleIndex == i ? '#555555' : 'white'}
				/>
			</div>
		{/each}

		<!-- <div class="circle circle--right" on:click={() => rotateCircle(-90)}>
			<Icon icon="fa-solid:dollar-sign" width={iconSize} height={iconSize} color="white" />
		</div>
		<div class="circle circle--bottom" on:click={() => rotateCircle(180)}>
			<Icon icon="mdi:tools" width={iconSize} height={iconSize} color="white" />
		</div>
		<div class="circle circle--left" on:click={() => rotateCircle(90)}>
			<Icon icon="fa-solid:truck" width={iconSize} height={iconSize} color="white" />
		</div> -->
	</div>
	<div class="content">
		<h3>{title}</h3>
		<p>
			{description}
		</p>
	</div>
</div>

<style lang="scss">
	.wrapper,
	.circle-wrapper {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
	}
	.wrapper {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 480px;
		height: 480px;
	}
	.circle-wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		border: 1px solid #a6a6a6;
		backdrop-filter: blur(6px);
		background-color: rgba(90, 90, 90, 0.425);
		z-index: 100;
		transition: transform 0.45s ease-out;
	}
	.circle {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80px;
		height: 80px;
		background-color: rgb(155, 155, 155);
		border-radius: 50%;
		position: absolute;

		&--active {
			background-color: rgb(231, 231, 231);
		}

		&--top {
			top: 0;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		&--right {
			top: 50%;
			right: 0;
			transform: translate(50%, -50%);
		}
		&--left {
			top: 50%;
			left: 0;
			transform: translate(-50%, -50%);
		}
		&--bottom {
			bottom: 0;
			left: 50%;
			transform: translate(-50%, 50%);
		}
	}
	.content {
		position: relative;
		z-index: 100;
		text-align: center;
		max-width: 72%;

		h3 {
			color: white;
			margin-bottom: 4px;
		}
		p {
			color: rgb(219, 219, 219);
		}
	}
</style>
