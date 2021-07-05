<div class="level">
    <slot name="left">
        <div class="empty"></div>
    </slot>
    <slot name="center">
        <div class="empty"></div>
    </slot>
    <slot name="right">
        <div class="empty"></div>
    </slot>
</div>

<style>
    .level {
        align-items: center;
        display: flex;
        width: 100%;
        & > div.empty {
            margin: 0;
            width: 0;
        }
    }
    :global {
        .level > div {
            align-items: center;
            display: flex;
            margin: 12px 12px;
            width: 100%;
            &:first-child {
                justify-content: left;
                text-align: left;
            }
            &:nth-child(2) {
                justify-content: center;
            }
            &:last-child {
                justify-content: flex-end;
                text-align: right;
            }
        }
    }
</style>