<script lang="ts">
	export let rotate: number = 0;
	export let iconSize: number = 30;
</script>

<img src="/icons/arrow-button.svg" alt="Arrow right" style="--rotate: {rotate}deg; --iconSize: {iconSize}" />

<style lang="scss">
	img {
		transform: rotate(var(--rotate));
		width:  var(--iconSize, 30px);
		height: var(--iconSize, 30px);

        &:hover {
            cursor: pointer;
        }
	}
</style>
