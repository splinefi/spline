<script>
    import ripple from '../../effects/ripple.js';

    let button;

    const click = (e) => {
        ripple(e, button);
        localStorage.getItem(`theme`) === `light` ? localStorage.setItem(`theme`, `dark`) : localStorage.setItem(`theme`, `light`);
        localStorage.getItem(`theme`) === `light` ? document.documentElement.setAttribute(`data-theme`, `light`) : document.documentElement.setAttribute(`data-theme`, `dark`);
    };
</script>

<button bind:this={button} on:click={click}>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 123 123" aria-hidden="true" style="enable-background:new 0 0 123 123" xml:space="preserve">
        <g>
            <path cpli-rule="evenodd" fill-rule="evenodd" d="M122.88,61.44L122.88,61.44L122.88,61.44c0,8.47-1.5,16.34-4.5,23.58c-0.49,1.19-1.02,2.35-1.59,3.49 c-2.92,5.89-6.89,11.35-11.92,16.36l0,0l0,0l0,0l0,0l0,0c-1.67,1.68-3.4,3.24-5.17,4.68c-1.78,1.45-3.61,2.78-5.48,3.98 c-9.65,6.23-20.58,9.34-32.78,9.34h0v0c-8.47,0-16.33-1.5-23.58-4.5c-1.19-0.49-2.35-1.02-3.49-1.59 c-5.89-2.92-11.35-6.89-16.36-11.92l0,0l0,0l0,0l0,0l0,0c-1.68-1.67-3.24-3.4-4.68-5.17c-1.45-1.78-2.78-3.61-3.98-5.48 C3.11,84.58,0,73.64,0,61.44v0h0c0-8.47,1.5-16.33,4.5-23.58c0.49-1.19,1.02-2.35,1.59-3.49c2.92-5.89,6.89-11.35,11.92-16.36l0,0 l0,0l0,0l0,0l0,0c1.67-1.68,3.4-3.24,5.17-4.68c1.78-1.45,3.61-2.78,5.48-3.98C38.3,3.11,49.24,0,61.44,0h0v0 c8.47,0,16.33,1.5,23.58,4.5c1.19,0.49,2.35,1.02,3.49,1.59c5.89,2.92,11.35,6.89,16.36,11.92l0,0l0,0l0,0l0,0l0,0 c1.68,1.67,3.24,3.4,4.68,5.17c1.45,1.78,2.78,3.61,3.98,5.48C119.77,38.3,122.88,49.24,122.88,61.44L122.88,61.44z M61.44,10.96 c0.11,0,0.22,0,0.32,0v100.96c-0.11,0-0.22,0-0.32,0c-27.88,0-50.48-22.6-50.48-50.48C10.96,33.56,33.56,10.96,61.44,10.96 L61.44,10.96z"></path>
        </g>
    </svg>
</button>

<style>
    button {
        background-color: #fff;
        border: 0;
        border-radius: 50%;
        cursor: pointer;
        display: block;
        height: 40px;
        margin: 0 16px 0 8px;
        overflow: hidden;
        padding: 8px;
        position: relative;
        width: 40px;
        &:hover {
            background-color: #ccc;
        }
        svg {
            height: 24px;
            width: 24px;
        }
    }
    :global {
        [data-theme='dark'] {
            button {
                background-color: #000 !important;
                &:hover {
                    background-color: #333 !important;
                }
                svg {
                    fill: #fff;
                }
            }
        }
    }
</style>