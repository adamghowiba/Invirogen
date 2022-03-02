<script lang="ts">
	export let color = 'red';
</script>

<div class="modal" style="--color: {color}" />

<style lang="scss">
	.modal {
		position: relative;
		width: 600px;
		height: 100%;
		background-color: var(--color);
	}
</style>
