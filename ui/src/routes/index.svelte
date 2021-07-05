<script context="module">
    // Within dapps, relying on third-party, closed-source, centralized APIs is a dangerously bad habit - but we'll let it pass for now...
    const yVaults = () => {
        return new Promise((resolve, reject) => {
            fetch(`https://vaults.finance/all`, { method: `GET`, }).then((response) => {
                if (response.ok) response.text().then((data) => { resolve(JSON.parse(data)) });
            })
        });
    };
</script>

<script>
    import Level from '$lib/components/Level/index.svelte';
    import Input from '$lib/components/Input/index.svelte';
    import Switch from '$lib/components/Switch/index.svelte';
    import Grid from '$lib/components/Grid/index.svelte';
    import GridItem from '$lib/components/GridItem/index.svelte';
    import { onMount } from 'svelte';
    import { wallet, flow, chain } from '$lib/stores/wallet';
    import vaults from '$lib/vaults.json';

    let layout = `card`;

    $: $wallet, refresh();

    const refresh = () => {
    };
</script>

<Level>
    <div slot="left">
        <h1 class="title">Vaults</h1>
    </div>
    <div slot="center">
        <Input />
    </div>
    <div slot="right">
        <Switch bind:value={layout} />
    </div>
</Level>
<Grid bind:value={layout}>
    {#each vaults as vault}
        <GridItem {vault} yearn={yVaults} />
    {/each}
</Grid>

<style>
    .title {
        font-weight: 600;
    }
    :global {
        [data-theme='dark'] .title {
            color: #fafafa;
        }
    }
</style>