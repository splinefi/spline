<script>
    import Level from '$lib/Level/index.svelte';
    import Card from '$lib/Card/index.svelte';
</script>

<Card />
<Level>
    <div slot="left">
        <Card />
    </div>
    <div slot="right">
        <Card />
    </div>
</Level>