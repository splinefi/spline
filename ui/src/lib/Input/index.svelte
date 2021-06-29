<input type="text">

<style>
    input {
        border: 0;
        border-radius: 16px;
        box-shadow: rgba(100, 100, 111, .2) 0 2px 8px 0;
        font-size: 18px;
        height: 40px;
        padding: 16px;
        width: 100%;
        &:hover, &:focus {
            border: 1px solid #aaa;
            box-shadow: #aaa 0 2px 8px 0;
            filter: brightness(.99);
        }
        &:focus {
            border-color: var(--color-6);
            box-shadow: #aaa 0 2px 8px 0, 0 0 0 5px rgba(64, 145, 108, .25), 0 0 0 2px var(--color-6);
        }
    }
    :global {
        [data-theme='dark'] input {
            background-color: #333;
            color: #fafafa;
            &:focus {
                box-shadow: #aaa 0 2px 8px 0, 0 0 0 5px rgba(160, 196, 255, .25), 0 0 0 2px var(--color-6);
            }
        }
    }
</style>