<script lang="ts">
	type OptionSize = 'large' | 'small';

	export let name: string;
	export let label: string;
	export let value: any = 0;
	export let imgSrc: string;
	export let size: OptionSize = 'small';

    export let selectedValue = ''
</script>

<div class="wrapper">
	<div class="image-wrapper {size}">
		<input type="radio" {name} {value} bind:group={selectedValue} />
		<img src={imgSrc} alt="Customzation Open" />
	</div>

	<label for={name}> {label}</label>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 4px;
		align-items: center;
	}
	.image-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		position: relative;
		width: 45px;
		height: 45px;

		img {
			width: inherit;
			height: inherit;
			border-radius: inherit;
		}

		&.large {
			width: 70px;
			height: 70px;
		}
	}
	input {
		position: absolute;
		appearance: none;
		padding: 0;
		margin: 0;
		width: inherit;
		height: inherit;
		border-radius: 50%;
	}
	input:checked + img {
		border: 3px solid var(--color-blue);
	}
</style>
