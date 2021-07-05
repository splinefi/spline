<script>
    import Level from '$lib/components/Level/index.svelte';
    import vaults from '$lib/vaults.json';
</script>

<Level>
    <div slot="left">
        <div>
            <h2>Total Value Locked</h2>
            <h3>Ξ0</h3>
        </div>
    </div>
    <div slot="center">
        <div>
            <h2>Vaults</h2>
            <h3>{vaults.length}</h3>
        </div>
    </div>
    <div slot="right">
        <div>
            <h2>Protocol Version</h2>
            <h3>v0</h3>
        </div>
    </div>
</Level>

<style>
    h3 {
        font-size: 64px;
        text-align: center;
    }
    :global {
        [data-theme='dark'] {
            h2, h3 {
                color: #fafafa;
            }
        }
    }
</style>