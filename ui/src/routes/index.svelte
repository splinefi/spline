<script>
    import Level from '$lib/Level/index.svelte';
    import Input from '$lib/Input/index.svelte';
    import Switch from '$lib/Switch/index.svelte';
    import Grid from '$lib/Grid/index.svelte';
    import GridItem from '$lib/GridItem/index.svelte';

    let layout = `card`;
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
    <GridItem pair="SPL-ETH LP" />
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