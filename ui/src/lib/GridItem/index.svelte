<script>
    import Level from '../Level/index.svelte';
    import Button from '../Button/index.svelte';
    import ripple from '../ripple.js';

    export let pair;

    let button;
    let stats;
    let roi;

    const click = (e) => {
        ripple(e, button);
        if (stats.style.display === `none`) {
            roi.style.display = `none`;
            stats.style.display = `block`;
        } else {
            stats.style.display = `none`;
            roi.style.display = `block`;
        }
    };
</script>

<div class="item">
    <div class="content">
        <Level>
            <div class="group" slot="left">
                <div class="icon">
                    <img src="" alt="" loading="lazy">
                </div>
                <div>
                    <span class="title">{pair}</span>
                    <br>
                    <span class="subtitle">APR 0.00%</span>
                </div>
            </div>
            <button bind:this={button} class="calculator" slot="right" on:click={click}>
                <svg version="1.1" id="Layer_1" width="24px" height="24px" x="0px" y="0px" viewBox="0 0 122.88 121.05" style="enable-background:new 0 0 122.88 121.05" xml:space="preserve"><title>calculator</title><g><path d="M105.43,92.42c0.85,0,1.61,0.34,2.17,0.9l0.04,0.05c0.53,0.55,0.85,1.3,0.85,2.12c0,0.85-0.34,1.61-0.9,2.17 c-0.55,0.55-1.32,0.9-2.17,0.9H77.28c-0.85,0-1.61-0.34-2.17-0.9c-0.55-0.55-0.9-1.32-0.9-2.17c0-0.84,0.34-1.61,0.9-2.16 c0.55-0.56,1.32-0.9,2.16-0.9H105.43L105.43,92.42z M20.77,80.74l-0.04-0.05c-0.57-0.59-0.85-1.35-0.85-2.12 c0-0.78,0.3-1.56,0.9-2.16v0c0.6-0.6,1.38-0.9,2.17-0.9s1.57,0.3,2.17,0.9l7.79,7.79l7.79-7.79c0.6-0.6,1.38-0.9,2.17-0.9 c0.78,0,1.57,0.3,2.17,0.9c0.6,0.6,0.9,1.38,0.9,2.17c0,0.78-0.3,1.57-0.9,2.17l-7.79,7.79L45,96.31c0.6,0.6,0.9,1.38,0.9,2.17 s-0.3,1.57-0.9,2.17c-0.6,0.6-1.38,0.9-2.17,0.9c-0.78,0-1.57-0.3-2.17-0.9l-7.79-7.79l-7.79,7.79c-0.6,0.6-1.38,0.9-2.17,0.9 s-1.57-0.3-2.17-0.9l-0.04-0.05c-0.57-0.59-0.85-1.35-0.85-2.12c0-0.78,0.3-1.56,0.9-2.16l7.79-7.79L20.77,80.74L20.77,80.74z M122.88,60.53v49.3c0,1.51-0.3,2.96-0.85,4.29c-0.57,1.38-1.41,2.61-2.44,3.65l-0.04,0.04c-1.03,1.02-2.25,1.84-3.6,2.4 c-1.32,0.55-2.77,0.85-4.29,0.85H11.23c-1.51,0-2.96-0.3-4.29-0.85c-1.37-0.57-2.61-1.41-3.65-2.44c-1.04-1.03-1.87-2.27-2.44-3.65 C0.3,112.78,0,111.33,0,109.82V11.23c0-1.51,0.3-2.96,0.85-4.29C1.43,5.57,2.26,4.33,3.3,3.3l0.04-0.04 c1.03-1.02,2.25-1.84,3.6-2.4C8.27,0.3,9.72,0,11.23,0h100.42c1.51,0,2.96,0.3,4.29,0.85c1.37,0.57,2.61,1.41,3.65,2.44 c1.04,1.03,1.87,2.27,2.44,3.65c0.55,1.32,0.85,2.77,0.85,4.29V60.53L122.88,60.53z M116.75,109.82V63.59H64.5v51.34h47.15 c0.69,0,1.35-0.14,1.94-0.39c0.62-0.26,1.19-0.64,1.66-1.12C116.18,112.5,116.75,111.22,116.75,109.82L116.75,109.82z M116.75,57.46V11.23c0-0.69-0.14-1.35-0.39-1.94c-0.26-0.62-0.64-1.19-1.12-1.66c-0.47-0.47-1.04-0.86-1.66-1.12 c-0.6-0.25-1.25-0.39-1.94-0.39H64.5v51.34H116.75L116.75,57.46z M6.13,11.23v46.23h52.25V6.13H11.23c-0.69,0-1.35,0.14-1.94,0.39 C8.67,6.77,8.1,7.15,7.63,7.63C6.7,8.55,6.13,9.83,6.13,11.23L6.13,11.23z M6.13,63.59v46.23c0,0.69,0.14,1.35,0.39,1.94 c0.26,0.62,0.64,1.19,1.12,1.66c0.47,0.47,1.04,0.86,1.66,1.12c0.6,0.25,1.25,0.39,1.94,0.39h47.15V63.59H6.13L6.13,63.59z M29.82,16.92c0-0.85,0.34-1.61,0.9-2.17c0.55-0.55,1.32-0.9,2.17-0.9c0.85,0,1.61,0.34,2.17,0.9c0.55,0.55,0.9,1.32,0.9,2.17 v11.01h11.01c0.85,0,1.61,0.34,2.17,0.9c0.55,0.55,0.9,1.32,0.9,2.17c0,0.85-0.34,1.61-0.9,2.17c-0.55,0.55-1.32,0.9-2.17,0.9 H35.95v11.01c0,0.85-0.34,1.61-0.9,2.17c-0.55,0.55-1.32,0.9-2.17,0.9c-0.85,0-1.61-0.34-2.17-0.9c-0.55-0.55-0.9-1.32-0.9-2.17 V34.06H18.81c-0.85,0-1.61-0.34-2.17-0.9c-0.55-0.55-0.9-1.32-0.9-2.17c0-0.85,0.34-1.61,0.9-2.17s1.32-0.9,2.17-0.9h11.01V16.92 L29.82,16.92z M105.43,27.93c0.85,0,1.61,0.34,2.17,0.9c0.55,0.55,0.9,1.32,0.9,2.17c0,0.85-0.34,1.61-0.9,2.17 c-0.55,0.55-1.32,0.9-2.17,0.9H77.28c-0.85,0-1.61-0.34-2.17-0.9c-0.55-0.55-0.9-1.32-0.9-2.17c0-0.85,0.34-1.61,0.9-2.17 c0.55-0.55,1.32-0.9,2.17-0.9H105.43L105.43,27.93z M105.43,79.02c0.85,0,1.61,0.34,2.17,0.9l0.04,0.05 c0.53,0.55,0.85,1.3,0.85,2.12c0,0.85-0.34,1.61-0.9,2.17c-0.55,0.55-1.32,0.9-2.17,0.9H77.28c-0.85,0-1.61-0.34-2.17-0.9 c-0.55-0.55-0.9-1.32-0.9-2.17c0-0.84,0.34-1.61,0.9-2.16c0.55-0.56,1.32-0.9,2.16-0.9H105.43L105.43,79.02z"/></g></svg>
            </button>
        </Level>
        <div bind:this={stats}>
            <Level>
                <div class="shrink" slot="left"><span class="key">TVL</span></div>
                <div class="shrink" slot="right"><span class="value">$0.00</span></div>
            </Level>
            <Level>
                <div class="shrink" slot="left"><span class="key">Deposited</span></div>
                <div class="shrink" slot="right"><span class="value">0.0000</span></div>
            </Level>
            <Level>
                <div class="shrink" slot="left"><span class="key">Available</span></div>
                <div class="shrink" slot="right"><span class="value">0.0000</span></div>
            </Level>
            <div class="bottom">
                <!--
                <Level>
                    <div slot="left">
                        <Button text={`Deposit`} click={() => console.log(``)} />
                    </div>
                    <div slot="right">
                        <Button text={`Withdraw`} click={() => console.log(``)} />
                    </div>
                </Level>
                -->
            </div>
        </div>
        <div bind:this={roi} style="display: none;">
            <Level>
                <div class="shrink" slot="left"><span class="key">1D</span></div>
                <div class="shrink" slot="right"><span class="value">0.00%</span></div>
            </Level>
            <Level>
                <div class="shrink" slot="left"><span class="key">7D</span></div>
                <div class="shrink" slot="right"><span class="value">0.00%</span></div>
            </Level>
            <Level>
                <div class="shrink" slot="left"><span class="key">30D</span></div>
                <div class="shrink" slot="right"><span class="value">0.00%</span></div>
            </Level>
            <Level>
                <div class="shrink" slot="left"><span class="key">365D</span></div>
                <div class="shrink" slot="right"><span class="value">0.00%</span></div>
            </Level>
        </div>
    </div>
</div>

<style>
    .item {
        @media (max-width: 768px) {
            & {
                max-width: 100%;
                .icon {
                    flex: none;
                    height: 40px;
                    min-width: 40px;
                }
            }
        }
        background-color: #fafafa;
        border-radius: 16px;
        box-shadow: 0 3px 12px -1px rgba(7, 10, 25, .2), 0 11px 9px -20px;
        color: #1c1c1c;
        flex: 1 0 26%;
        height: 270px;
        margin: 10px;
        max-width: 440px;
        min-width: 300px;
        transform: translate(0, 0);
        width: calc(100% - 20px);
        :global(.grid.row &) {
            flex: none;
            height: 64px;
        }
        &:hover {
            filter: brightness(1.01);
            transform: translate(0, -1px);
        }
        .content {
            height: 250px !important;
            :global(.grid.row &) {
                height: 64px !important;
            }
            .group {
                display: flex;
                margin: 12px;
                .icon {
                    background-color: #ddd;
                    border-radius: 50%;
                    height: 60px;
                    min-width: 60px;
                }
                .title, .subtitle {
                    font-size: 24px;
                    font-weight: 600;
                    margin-left: 8px;
                }
                .title {
                    font-weight: 700;
                }
                .subtitle {
                    font-size: 16px;
                    color: var(--color-6);
                }
            }
            .calculator {
                background-color: #fafafa;
                border: 0;
                border-radius: 50%;
                cursor: pointer;
                display: block;
                height: 40px;
                margin-right: 12px;
                min-width: 40px;
                overflow: hidden;
                padding: 8px;
                position: relative;
                &:hover {
                    background-color: #ccc;
                }
                svg {
                    height: 24px;
                    width: 24px;
                }
            }
            .shrink {
                margin-bottom: 0;
                .key, .value {
                    font-size: 18px;
                }
                .key {
                    font-weight: 600;
                }
                .value {
                    color: var(--color-8);
                    font-family: Lato, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    font-weight: 700;
                }
            }
            .bottom {
                bottom: 0;
                position: absolute;
                width: 100%;
            }
        }
    }
    :global {
        [data-theme='dark'] {
            .item {
                background-color: #222 !important;
                box-shadow: rgba(0, 0, 0, .25) 0 2px 5px -1px, rgba(0, 0, 0, .3) 0 1px 3px -1px !important;
                color: #fafafa !important;
                .icon {
                    background-color: #555 !important;
                }
                .calculator {
                    background-color: #222 !important;
                    &:hover {
                        background-color: #444 !important;
                    }
                }
            }
        }
        .grid.row .item {
            max-width: 100%;
            .icon {
                flex: none;
                height: 40px;
                min-width: 40px;
            }
        }
    }
</style>