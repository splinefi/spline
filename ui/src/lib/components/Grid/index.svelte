<script>
    export let value;

    let grid;

    $: if (grid) value === `card` ? grid.classList.remove(`row`) : grid.classList.add(`row`);
</script>

<div bind:this={grid} class="grid">
    <slot />
</div>

<style>
    .grid {
        @media (max-width: 768px) {
            & {
                flex-direction: column;
            }
        }
        align-items: flex-start;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 auto;
        max-width: 1400px;
    }
    :global {
        .grid.row {
            flex-direction: column;
        }
    }
</style>