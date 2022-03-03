<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="modal">
	<div class="exit" on:click>
		<Icon icon="bi:x" width="100%" height="100%" />
	</div>
	<slot />
</div>

<style lang="scss">
	.modal {
		position: relative;
		width: 800px;
		height: 100%;
		background-color: white;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
		border-radius: 7px;

		.exit {
			position: absolute;
			z-index: 500;
			top: 7px;
			right: 7px;
			display: flex;
			width: 30px;
			height: 30px;
			align-items: center;
			justify-content: center;
			cursor: pointer;
		}
	}
</style>
