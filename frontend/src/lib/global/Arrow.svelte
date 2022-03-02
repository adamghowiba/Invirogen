<script lang="ts">
	export let rotate: number;
</script>

<img src="/icons/arrow-button.svg" alt="Arrow right" style="--rotate: {rotate}deg" />

<style lang="scss">
	img {
		transform: rotate(var(--rotate));
		width: 30px;
		height: 30px;

        &:hover {
            cursor: pointer;
        }
	}
</style>
