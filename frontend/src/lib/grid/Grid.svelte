<script lang="ts">
	type Layout = 'layout-1' | 'layout-2' | 'layout-3' | 'layout-4' | 'layout-5';

	export let layout: Layout;
</script>

<div class="grid {layout}">
	<slot />
</div>

<style lang="scss">
	.grid {
		display: grid;
	}
	.layout-1 {
		grid-template-columns: 1fr 1fr;
	}
	.layout-2 {
		grid-template-columns: 0.4fr 1fr;
		overflow-y: auto;
	}
	.layout-3 {
		grid-template-columns: 1fr 0.4fr;
	}
	.layout-4 {
		grid-template-columns: 1fr 1fr 1fr;
	}
	.layout-5 {
		grid-template-columns: 1fr 1fr;
	}
	.layout-6 {
		grid-template-columns: 1fr 1fr;
	}
</style>
