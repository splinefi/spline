<div>
    <slot />
</div>

<style>
    div {
        @media (max-width: 768px) {
            & {
                padding: 0 10px;
            }
        }
        margin: 0 auto;
        max-width: 1400px;
        padding: 0 80px;
    }
</style>