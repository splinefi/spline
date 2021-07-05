<script>
    import Level from '../Level/index.svelte';
    import Button from '../Button/index.svelte';
</script>

<div class="item">
    <div class="content">
    </div>
</div>

<style>
    .item {
        background-color: #fafafa;
        border-radius: 16px;
        box-shadow: 0 3px 12px -1px rgba(7, 10, 25, .2), 0 22px 27px -20px;
        color: #1c1c1c;
        flex: 1 0 21%;
        height: 400px;
        margin: 10px;
        min-width: 300px;
        transform: translate(0, 0);
        width: calc(100% - 20px);
        &:hover {
            filter: brightness(1.01);
            transform: translate(0, -1px);
        }
    }
    .content {
        height: 250px !important;
    }
</style>