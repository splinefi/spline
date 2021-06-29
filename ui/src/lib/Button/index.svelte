<script>
    import ripple from '../ripple.js';

    export let text;
    export let action;

    let button;

    const click = (e) => {
        ripple(e, button);
        if (action !== undefined) action();
    };
</script>

<button bind:this={button} class="button" on:click={click}>
    {text}
</button>

<style>
    .button {
        background-color: #fff;
        border: 0;
        border-radius: 6px;
        color: #000;
        cursor: pointer;
        display: block;
        font-size: 20px;
        font-weight: 500;
        overflow: hidden;
        padding: 8px 24px;
        position: relative;
        &:hover {
            background-color: #eee;
        }
    }
    :global {
        [data-theme='dark'] {
            .button {
                background-color: #000;
                color: #fefefe;
            }
            .button:hover {
                background-color: #222;
            }
        }
    }
</style>