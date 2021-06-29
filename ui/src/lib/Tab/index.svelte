<script>
    import ripple from '../ripple.js';
    export let link;
    export let selected;
    export let text;
    export let action;

    let tab;

    const click = (e) => {
        ripple(e, tab);
        if (action !== undefined) action();
    };
</script>

<a class="tab" bind:this={tab} href={link} aria-selected={selected} on:click={click} sveltekit:prefetch>
    {text}
</a>

<style>
    .tab {
        border: 0;
        border-radius: 6px;
        color: var(--color-6);
        cursor: pointer;
        display: block;
        font-size: 20px;
        font-weight: 500;
        margin: 0 8px;
        overflow: hidden;
        padding: 8px 16px;
        position: relative;
        text-decoration: none;
        &:hover {
            background-color: #ccc;
            color: var(--color-7);
        }
        &[aria-selected='true'] {
            background-color: #ddd;
            color: var(--color-8);
        }
    }
    :global {
        [data-theme='dark'] {
            .tab:hover {
                background-color: #333;
            }
            .tab[aria-selected='true'] {
                background-color: #222;
            }
        }
    }
</style>