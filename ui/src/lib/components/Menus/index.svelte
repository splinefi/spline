<script>
    import ripple from '../../effects/ripple.js';

    let socialsBtn;
    let socialsMenu;
    let languageBtn;
    let languageMenu;

    const openSocials = (e) => {
        e.stopPropagation();
        ripple(e, socialsBtn);
        languageMenu.style.display = `none`;
        socialsMenu.style.display === `none` ? socialsMenu.style.display = `block` : socialsMenu.style.display = `none`;
    };

    const openLanguage = (e) => {
        e.stopPropagation();
        ripple(e, languageBtn);
        socialsMenu.style.display = `none`;
        languageMenu.style.display === `none` ? languageMenu.style.display = `block` : languageMenu.style.display = `none`;
    };

    const close = (e) => {
        socialsMenu.style.display = `none`;
        languageMenu.style.display = `none`;
    };
</script>

<svelte:window on:click={close} />

<button bind:this={socialsBtn} on:click={openSocials}>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 29.96" aria-hidden="true">
        <title>3-horizontal-dots</title><path fill-rule="evenodd" d="M0,15A15,15,0,1,1,15,30,15,15,0,0,1,0,15Zm92.93,0a15,15,0,1,1,15,15,15,15,0,0,1-15-15ZM46.46,15a15,15,0,1,1,15,15,15,15,0,0,1-15-15Z"/>
    </svg>
</button>

<ul class="socials" bind:this={socialsMenu}>
    <li role="menuitem" on:click={openSocials}>
        <a role="button">
            <svg height="13px" viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M333328 63295c-12254 5480-25456 9122-39241 10745 14123-8458 24924-21861 30080-37819-13200 7807-27871 13533-43416 16596-12499-13281-30252-21537-49919-21537-37762 0-68336 30591-68336 68330 0 5326 591 10537 1748 15562-56820-2880-107194-30081-140915-71467-6049 10435-9250 22300-9250 34367v8c0 23696 12031 44654 30389 56876-11202-333-21739-3457-30991-8519v854c0 33138 23554 60789 54852 67039-5734 1557-11787 2417-18023 2417-4417 0-8673-455-12905-1224 8742 27139 33975 46923 63857 47500-23430 18356-52858 29286-84939 29286-5537 0-10931-339-16318-984 30326 19458 66251 30727 104844 30727 125735 0 194551-104198 194551-194543 0-3002-67-5911-191-8852 13354-9553 24932-21609 34097-35333l31-31-6 4z" fill="#1da1f2"/></svg>
            <span>Twitter</span>
        </a>
    </li>
    <li role="menuitem" on:click={openSocials}>
        <a role="button">
            <svg height="13px" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/></svg>
            <span>GitHub</span>
        </a>
    </li>
</ul>

<button bind:this={languageBtn} on:click={openLanguage}>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve">
        <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path>
    </svg>
</button>

<ul class="language" bind:this={languageMenu}>
    <li role="menuitem" on:click={openLanguage}>
        <a role="button">
            <svg version="1.1" height="13px" id="Layer_1" x="0px" y="0px" viewBox="0 0 55.2 38.4" style="enable-background:new 0 0 55.2 38.4" xml:space="preserve" aria-hidden="true"><style type="text/css">.st0{fill:#FEFEFE;} .st1{fill:#C8102E;} .st2{fill:#012169;}</style><g><path class="st0" d="M2.87,38.4h49.46c1.59-0.09,2.87-1.42,2.87-3.03V3.03c0-1.66-1.35-3.02-3.01-3.03H3.01 C1.35,0.01,0,1.37,0,3.03v32.33C0,36.98,1.28,38.31,2.87,38.4L2.87,38.4z"/><polygon class="st1" points="23.74,23.03 23.74,38.4 31.42,38.4 31.42,23.03 55.2,23.03 55.2,15.35 31.42,15.35 31.42,0 23.74,0 23.74,15.35 0,15.35 0,23.03 23.74,23.03"/><path class="st2" d="M33.98,12.43V0h18.23c1.26,0.02,2.34,0.81,2.78,1.92L33.98,12.43L33.98,12.43z"/><path class="st2" d="M33.98,25.97V38.4h18.35c1.21-0.07,2.23-0.85,2.66-1.92L33.98,25.97L33.98,25.97z"/><path class="st2" d="M21.18,25.97V38.4H2.87c-1.21-0.07-2.24-0.85-2.66-1.94L21.18,25.97L21.18,25.97z"/><path class="st2" d="M21.18,12.43V0H2.99C1.73,0.02,0.64,0.82,0.21,1.94L21.18,12.43L21.18,12.43z"/><polygon class="st2" points="0,12.8 7.65,12.8 0,8.97 0,12.8"/><polygon class="st2" points="55.2,12.8 47.51,12.8 55.2,8.95 55.2,12.8"/><polygon class="st2" points="55.2,25.6 47.51,25.6 55.2,29.45 55.2,25.6"/><polygon class="st2" points="0,25.6 7.65,25.6 0,29.43 0,25.6"/><polygon class="st1" points="55.2,3.25 36.15,12.8 40.41,12.8 55.2,5.4 55.2,3.25"/><polygon class="st1" points="19.01,25.6 14.75,25.6 0,32.98 0,35.13 19.05,25.6 19.01,25.6"/><polygon class="st1" points="10.52,12.81 14.78,12.81 0,5.41 0,7.55 10.52,12.81"/><polygon class="st1" points="44.63,25.59 40.37,25.59 55.2,33.02 55.2,30.88 44.63,25.59"/></g></svg>
            <span>English</span>
        </a>
    </li>
</ul>

<style>
    button {
        background-color: #fff;
        border: 0;
        border-radius: 50%;
        cursor: pointer;
        display: block;
        height: 40px;
        margin-left: 8px;
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
    ul {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 3px 12px -1px rgba(7, 10, 25, .2), 0 11px 9px -20px;
        display: none;
        list-style-type: none;
        padding: 1em;
        position: absolute;
        top: 40px;
        &.socials {
            margin-right: 216px;
        }
        &.language {
            margin-right: 160px;
        }
        li {
            cursor: pointer;
            font-size: 18px;
            padding: .5em;
            &:hover {
                background-color: #ddd;
                border-radius: 4px;
            }
            a {
                text-decoration: none;
            }
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
            ul {
                background-color: #333 !important;
                li:hover {
                    background-color: #444 !important;
                }
            }
        }
    }
</style>