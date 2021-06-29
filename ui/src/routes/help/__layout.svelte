<script>
    import { page } from '$app/stores';
</script>

<div class="overlay">
    <div class="container">
        <nav>
            <ol>
                <li class="{$page.path === `/help/` ? `active` : ``} padded"><a href="/help/" sveltekit:prefetch>Introduction</a></li>
                <li class={$page.path === `/help/protocol/` ? `active` : ``}><a href="/help/protocol/" sveltekit:prefetch>Protocol</a></li>
                <li class={$page.path === `/help/strategies/` ? `active` : ``}><a href="/help/strategies/" sveltekit:prefetch>Strategies</a></li>
                <li class={$page.path === `/help/deposit/` ? `active` : ``}><a href="/help/deposit/" sveltekit:prefetch>Deposit</a></li>
                <li class="{$page.path === `/help/withdraw/` ? `active` : ``} padded"><a href="/help/withdraw/" sveltekit:prefetch>Withdraw</a></li>
                <li class="{$page.path === `/help/referrals/` ? `active` : ``} padded"><a href="/help/referrals/" sveltekit:prefetch>Referrals</a></li>
                <li class="{$page.path === `/help/faq/` ? `active` : ``} padded"><a href="/help/faq/" sveltekit:prefetch>FAQ</a></li>
                <li class={$page.path === `/help/dac/` ? `active` : ``}><a href="/help/dac/" sveltekit:prefetch>DAC</a></li>
                <li class={$page.path === `/help/spl/` ? `active` : ``}><a href="/help/spl/" sveltekit:prefetch>$SPL</a></li>
            </ol>
        </nav>
        <div class="main">
            <slot />
        </div>
    </div>
</div>

<style>
    .overlay {
        background-color: #fff;
        left: 0;
        min-height: 100vh;
        position: absolute;
        width: 100vw;
    }
    .container {
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            nav {
                margin: 0 auto 100px auto !important;
                position: relative !important;
                width: 100%;
            }
        }
        background-color: #fff;
        display: grid;
        grid-template-columns: 15em .8fr;
        margin: 0 auto;
        max-width: 1200px;
        nav {
            align-self: start;
            border-radius: 8px;
            margin: 0 2rem;
            padding: .5rem 0;
            position: -webkit-sticky;
            position: sticky;
            top: 110px;
            ol {
                list-style: none;
                margin: 0;
                padding: 0;
            }
            li {
                margin-left: 1rem;
            }
            li.active > a {
                color: var(--color-6);
                font-weight: 500;
            }
            li.padded {
                margin-bottom: 1rem;
            }
            a {
                color: #ccc;
                display: block;
                font-size: 22px;
                padding: .125rem 0;
                text-decoration: none;
                transition: all .05s ease-in-out;
                &:hover, &:focus {
                    color: #666;
                }
            }

        }
        .main {
            max-width: 1000px;
        }
    }
    :global {
        .main {
            h1, h2, h3, h4, h5, h6 {
                font-weight: 700;
                a {
                    color: #000;
                    text-decoration: none;
                    &:hover {
                        color: #222;
                        text-decoration: underline;
                    }
                }
            }
            p, li {
                font-size: 18px;
                font-weight: 500;
                line-height: 1.5em;
                em {
                    color: var(--color-6);
                    font-weight: 600;
                }
            }
            blockquote {
                color: red; // temporary
            }
        }
        [data-theme='dark'] {
            .overlay {
                background-color: #111 !important;
            }
            .container {
                background-color: #111 !important;
                color: #fafafa;
            }
            .main {
                h1, h2, h3, h4, h5, h6 {
                    a {
                        color: #fafafa;
                        &:hover {
                            color: #ddd;
                        }
                    }
                }
            }
        }
    }
</style>