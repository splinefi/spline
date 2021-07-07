<script>
    import Container from '../Container/index.svelte';
    import Level from '../Level/index.svelte';
    import Tab from '../Tab/index.svelte';
    import { page } from '$app/stores';
    import Menus from '../Menus/index.svelte';
    import Theme from '../Theme/index.svelte';
    import Button from '../Button/index.svelte';
    import Modal from '../Modal/index.svelte';
    import { wallet, builtin, chain, flow, fallback } from '../../stores/wallet';

    let walletButton;
    let modal = false;

    const refresh = () => {
        if ($wallet.address !== undefined) walletButton.classList.add(`connected`);
    };

    const connectWallet = () => $wallet.address === undefined ? modal = true : ``;

    const close = () => {
        modal = false;
        refresh();
    }
</script>

<svelte:window on:load={refresh} />

<nav>
    <Container>
        <Level>
            <div slot="left">
                <a href="/" sveltekit:prefetch>
                    <span>spline</span>
                    <svg version="1.1" width="32px" height="32px" viewBox="0 0 862 862" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            <linearGradient id="gradient">
                                <stop class="stop1" offset="0%"/>
                                <stop class="stop2" offset="10%"/>
                                <stop class="stop3" offset="50%"/>
                                <stop class="stop4" offset="90%"/>
                                <stop class="stop5" offset="100%"/>
                            </linearGradient>
                            <style type="text/css">
                                #main { fill: url(#gradient); }
                                .stop1 { stop-color: #fdffb6; }
                                .stop2 { stop-color: #b7e4c7; }
                                .stop3 { stop-color: #9bf6ff; }
                                .stop4 { stop-color: #bdb2ff; }
                                .stop5 { stop-color: #ffc6ff; }
                            </style>
                        </defs>
                        <g id="main" transform="translate(0,862) scale(.1,-.1)" fill="url(#gradient)" stroke="none">
                            <path d="M7935 8555 c-61 -14 -320 -100 -660 -220 -854 -301 -1417 -575 -1875 -914 -41 -31 -82 -61 -90 -68 -8 -7 -46 -38 -85 -69 -153 -124 -352 -322 -450 -448 -16 -21 -35 -44 -40 -50 -47 -50 -188 -256 -257 -376 -268 -463 -412 -900 -692 -2106 -283 -1220 -470 -1647 -903 -2065 -428 -413 -1031 -719 -2173 -1103 -173 -58 -349 -123 -390 -143 -87 -43 -180 -130 -222 -209 -100 -186 -69 -419 74 -570 119 -126 278 -181 443 -154 99 16 750 238 1160 395 312 119 751 324 992 464 455 262 829 575 1108 926 54 68 204 284 218 315 4 8 18 33 32 55 55 88 179 347 244 509 152 380 274 823 491 1781 88 389 212 806 313 1050 144 353 281 562 526 805 256 255 521 434 945 641 314 153 606 267 1196 471 206 71 402 141 435 157 274 128 373 464 211 715 -116 180 -326 261 -551 211z"/>
                        </g>
                    </svg>
                </a>
                <Tab link="/" selected="{$page.path === `/` ? `true` : `false`}" text="Vaults" />
                <Tab link="/portfolio" selected="{$page.path === `/portfolio/` ? `true` : `false`}" text="Portfolio" />
                <Tab link="/stats" selected="{$page.path === `/stats/` ? `true` : `false`}" text="Stats" />
                <Tab link="/help" selected="{$page.path.includes(`/help/`) ? `true` : `false`}" text="Help" />
            </div>
            <div slot="right">
                <Menus />
                <Theme />
                <div bind:this={walletButton} class="button{$wallet.address === undefined ? `` : ` connected`}">
                    <button on:click={connectWallet}>{$wallet.address === undefined ? `Connect Wallet` : $wallet.address.substring(0, 8)}</button>
                </div>
            </div>
        </Level>
    </Container>
</nav>
{#if modal === true}
    <Modal {close} />
{/if}

<style>
    nav {
        background-color: #fefefe;
        box-shadow: 0 0 8px 0 rgba(8, 28, 21, .8);
        height: 67px;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        a {
            align-items: center;
            display: flex;
            font-size: 24px;
            font-style: italic;
            font-weight: 600;
            height: 32px;
            margin-right: 8px;
            text-decoration: none;
            will-change: transform;
            &:focus, &:active {
                box-shadow: none;
            }
            &:active {
                transform: scale(.9);
            }
            span {
                color: #000;
                margin-bottom: 9px;
            }
        }
        .button {
            animation: rainbow 20s infinite;
            border: 3px solid #00f8ff;
            border-radius: 8px;
            width: 181px;
            &:hover {
                background-color: #eee;
            }
            button {
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
        }
    }
    :global {
        [data-theme='dark'] {
            nav {
                background-color: #000 !important;
                box-shadow: 0 8px 16px 0 #101010 !important;
                a span {
                    color: #fff !important;
                }
                button {
                    background-color: #000;
                    color: #fefefe !important;
                    &:hover {
                        background-color: #222;
                    }
                }
            }
        }
        nav .button {
            button {
                width: 100%;
            }
            &.connected {
                animation: none !important;
                border: 3px solid var(--color-2) !important;
            }
        }
    }
</style>