<script>
    import Level from '$lib/components/Level/index.svelte';
    import Introduction from '../help/introduction.md';
    import Deposits from '../help/deposits.md';
    import Withdrawals from '../help/withdrawals.md';
    import Protocol from '../help/protocol.md';
    import Security from '../help/security.md';
    import FAQ from '../help/faq.md';
</script>

<svelte:window on:load={refresh} />

<div class="container">
    <div class="main">
        {#if tab === `deposits`}
            <Deposits />
        {:else if tab === `withdrawals`}
            <Withdrawals />
        {:else if tab === `protocol`}
            <Protocol />
        {:else if tab === `security`}
            <Security />
        {:else if tab === `faq`}
            <FAQ />
        {:else}
            <Introduction />
        {/if}
    </div>
    <nav>
        <ol>
            <li class={(tab === `introduction` || tab === `help`) ? `active` : ``}><a href="#/help#introduction">Introduction</a></li>
            <li class={tab === `deposits` ? `active` : ``}><a href="#/help#deposits">Deposits</a></li>
            <li class={tab === `withdrawals` ? `active` : ``}><a href="#/help#withdrawals">Withdrawals</a></li>
            <li class={tab === `protocol` ? `active` : ``}><a href="#/help#protocol">Protocol</a></li>
            <li class={tab === `security` ? `active` : ``}><a href="#/help#security">Security</a></li>
            <li class={tab === `faq` ? `active` : ``}><a href="#/help#faq">FAQ</a></li>
        </ol>
    </nav>
</div>

<style>
    .container {
        background-color: #fff;
        display: grid;
        grid-template-columns: 1fr 15em;
        margin: 0 auto;
        max-width: 100em;
        width: 90%;
        .main {
            max-width: 1000px;
        }
        nav {
            align-self: start;
            padding-left: 0;
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
            a {
                color: #ccc;
                display: block;
                padding: .125rem 0;
                text-decoration: none;
                transition: all .05s ease-in-out;
                &:hover, &:focus {
                    color: #666;
                }
            }
        }
    }
    :global {
        [data-theme='dark'] .container {
            background-color: #111 !important;
            color: #fafafa;
        }
        .main h1 {
            font-weight: 700;
        }
        .main p {
            font-size: 22px;
            font-weight: 500;
            line-height: 1.5em;
            em {
                color: var(--color-6);
                font-weight: 600;
            }
        }
    }
</style>