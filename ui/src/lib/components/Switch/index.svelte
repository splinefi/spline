<script>
    import ripple from '../../effects/ripple.js';

    export let value;

    let card;
    let grid;

    const cardView = (e) => {
        ripple(e, card);
        grid.classList.remove(`checked`);
        grid.setAttribute(`aria-checked`, `false`);
        card.classList.add(`checked`);
        card.setAttribute(`aria-checked`, `true`);
        value = `card`;
    };

    const gridView = (e) => {
        ripple(e, grid);
        card.classList.remove(`checked`);
        card.setAttribute(`aria-checked`, `false`);
        grid.classList.add(`checked`);
        grid.setAttribute(`aria-checked`, `true`);
        value = `grid`;
    };
</script>

<div class="switch">
    <button bind:this={card} class="checked" role="checkbox" aria-checked="true" tabindex="0" on:click={cardView}>
        <svg viewBox="0 0 16 16">
            <title>Card View</title>
            <g>
                <path d="M6,0H1C0.4,0,0,0.4,0,1v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1V1C7,0.4,6.6,0,6,0z"></path>
                <path d="M15,0h-5C9.4,0,9,0.4,9,1v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1V1C16,0.4,15.6,0,15,0z"></path>
                <path d="M6,9H1c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1v-5C7,9.4,6.6,9,6,9z"></path>
                <path d="M15,9h-5c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1v-5C16,9.4,15.6,9,15,9z"></path>
            </g>
        </svg>
    </button>
    <button bind:this={grid} role="checkbox" aria-checked="false" tabindex="0" on:click={gridView}>
        <svg viewBox="0 0 16 16">
            <title>Row View</title>
            <g>
                <rect width="16" height="3"></rect>
                <rect y="6" width="16" height="3"></rect>
                <rect y="12" width="16" height="3"></rect>
            </g>
        </svg>
    </button>
</div>

<style>
    .switch {
        @media (max-width: 768px) {
            & {
                display: none;
            }
        }
        border: 0;
        display: flex;
        margin: 0;
        padding: 0;
        & > button {
            align-items: center;
            appearance: none;
            border: 0;
            border-radius: 6px 0 0 6px;
            cursor: pointer;
            display: flex;
            height: 40px;
            justify-content: center;
            line-height: inherit;
            overflow: hidden;
            padding: 12px;
            position: relative;
            user-select: none;
            width: 100%;
            &:last-child {
                border-radius: 0 6px 6px 0;
                button {
                    border-radius: 0 6px 6px 0;
                }
            }
            &:hover {
                background-color: #ddd;
            }
            &.checked {
                background-color: var(--color-6);
                svg {
                    fill: #fff;
                }
            }
            svg {
                color: inherit;
                display: block;
                height: 16px;
                width: 16px;
            }
        }
    }
    :global {
        [data-theme='dark'] {
            .switch > button {
                fill: #fff;
            }
            .switch > button:hover {
                background-color: #333 !important;
            }
            .switch > button.checked {
                background-color: var(--color-6) !important;
                svg {
                    fill: #000 !important;
                }
            }
        }
    }
</style>