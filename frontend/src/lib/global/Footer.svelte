<script>
import { createEventDispatcher } from "svelte";
import Button from "./Button.svelte";

const dispatch = createEventDispatcher();
</script>

<footer>
    <div class="line line--hor" />
    <Button on:click={() => dispatch('previous')}>Previous Transition</Button>
    <Button on:click={() => dispatch('next')}>Next Transition</Button>
</footer>

<style>
    footer {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .line--hor {
        width: 100%;
        height: 1px;
        position: absolute;
        top: 0;
    }
</style>