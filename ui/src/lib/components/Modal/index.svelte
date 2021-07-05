<script>
    import '../../../../node_modules/sweetalert2/dist/sweetalert2.min.css';
    import {chainName} from '../../config';
    import {base} from '$app/paths';
    import {wallet, builtin, chain, flow, fallback} from '../../stores/wallet';

    export let close;

    //$: executionError = $flow.executionError;
    let options = [];
    $: builtinNeedInstallation = $wallet.options.filter((v) => v === `builtin` && !$builtin.available).length > 0;
    /*
    $: options = $wallet.options.filter((v) => v !== `builtin` || $builtin.available).map((v) => {
        return {
            img: ((v) => {
                if (v === `builtin`) {
                    if ($builtin.state === `Ready`) {
                        if ($builtin.vendor === `Metamask`) {
                            return `images/metamask.svg`;
                        } else if ($builtin.vendor === `Opera`) {
                            return `images/opera.svg`;
                        }
                    }
                    return `images/web3-default.png`;
                } else {
                    if (v.startsWith(`torus-`)) {
                        const verifier = v.slice(6);
                        return `images/torus/${verifier}.svg`;
                    }
                    return `images/${v}.svg`;
                }
            })(v),
            id: v,
            name: v,
        };
    });
    */

    let slide = `choose`;

    const keydown = (e) => {
        if (e.key === `Escape`) close();
    };

    const connectMetamask = () => {
        try {
            slide = `loading`;
            if ($chain.notSupported) {
                alert(`You are on the wrong network!`);
            }
            if ($wallet.state === `Idle`) {
                if ($wallet.loadingModule) {
                    alert(`Loading module: ${$wallet.selected}`);
                } else if ($wallet.connecting) {
                    alert(`Connecting to wallet...`);
                } else {
                    options.forEach((option) => console.log(option));
                    wallet.connect(`builtin`);
                    if (builtinNeedInstallation) {
                        alert(`You need to install that wallet!`);
                    }
                }
            } else if ($wallet.state === `Locked`) {
                if ($wallet.unlocking) {
                    alert(`Please allow Spline to access your wallet.`);
                } else {
                    wallet.unlock().then((res) => {
                        if (res === true) close(true);
                    });
                }
            } else if ($chain.state === `Idle`) {
                if ($chain.connecting) {
                    alert(`Connecting to network...`);
                }
            } else if ($chain.state === `Connected`) {
                if ($chain.loadingData) {
                    alert(`Loading contracts...`);
                } else if ($chain.notSupported) {
                    alert(`Please switch to ${chainName}`);
                }
            } else if ($wallet.pendingUserConfirmation) {
                alert(`Please accept or cancel transaction`);
            } else if (executionError) {
                if (executionError.errorCode === 4001) {
                    alert(`You rejected the request`);
                } else if (executionError.message) {
                    alert(`error: ${executionError.message}`);
                } else {
                    alert(`An unexpected error occurred.`);
                }
            }
        } catch (e) {
            alert(e.message);
            slide = `undetected`;
        }
    };

    const connectWalletConnect = () => {
        try {
            slide = `loading`;
            if ($chain.notSupported) {
                alert(`You are on the wrong network!`);
            }
            if ($wallet.state === `Idle`) {
                if ($wallet.loadingModule) {
                    alert(`Loading module: ${$wallet.selected}`);
                } else if ($wallet.connecting) {
                    alert(`Connecting to wallet...`);
                } else {
                    options.forEach((option) => console.log(option));
                    wallet.connect();
                    if (builtinNeedInstallation) {
                        alert(`You need to install that wallet!`);
                    }
                }
            } else if ($wallet.state === `Locked`) {
                if ($wallet.unlocking) {
                    alert(`Please allow Spline to access your wallet.`);
                } else {
                    wallet.unlock().then((res) => {
                        if (res === true) close(true);
                    });
                }
            } else if ($chain.state === `Idle`) {
                if ($chain.connecting) {
                    alert(`Connecting to network...`);
                }
            } else if ($chain.state === `Connected`) {
                if ($chain.loadingData) {
                    alert(`Loading contracts...`);
                } else if ($chain.notSupported) {
                    alert(`Please switch to ${chainName}`);
                }
            } else if ($wallet.pendingUserConfirmation) {
                alert(`Please accept or cancel transaction`);
            } else if (executionError) {
                if (executionError.errorCode === 4001) {
                    alert(`You rejected the request`);
                } else if (executionError.message) {
                    alert(`error: ${executionError.message}`);
                } else {
                    alert(`An unexpected error occurred.`);
                }
            }
        } catch (e) {
            alert(e.message);
            slide = `undetected`;
        }
    };

    const connectFortmatic = () => {
        slide = `unsupported`;
    };

    const connectTorus = () => {
        try {
            slide = `loading`;
            if ($chain.notSupported) {
                alert(`You are on the wrong network!`);
            }
            if ($wallet.state === `Idle`) {
                if ($wallet.loadingModule) {
                    alert(`Loading module: ${$wallet.selected}`);
                } else if ($wallet.connecting) {
                    alert(`Connecting to wallet...`);
                } else {
                    options.forEach((option) => console.log(option));
                    wallet.connect();
                    if (builtinNeedInstallation) {
                        alert(`You need to install that wallet!`);
                    }
                }
            } else if ($wallet.state === `Locked`) {
                if ($wallet.unlocking) {
                    alert(`Please allow Spline to access your wallet.`);
                } else {
                    wallet.unlock().then((res) => {
                        if (res === true) close(true);
                    });
                }
            } else if ($chain.state === `Idle`) {
                if ($chain.connecting) {
                    alert(`Connecting to network...`);
                }
            } else if ($chain.state === `Connected`) {
                if ($chain.loadingData) {
                    alert(`Loading contracts...`);
                } else if ($chain.notSupported) {
                    alert(`Please switch to ${chainName}`);
                }
            } else if ($wallet.pendingUserConfirmation) {
                alert(`Please accept or cancel transaction`);
            } else if (executionError) {
                if (executionError.errorCode === 4001) {
                    alert(`You rejected the request`);
                } else if (executionError.message) {
                    alert(`error: ${executionError.message}`);
                } else {
                    alert(`An unexpected error occurred.`);
                }
            }
        } catch (e) {
            alert(e.message);
            slide = `undetected`;
        }
    };

    const connectAuthereum = () => {
        slide = `unsupported`;
    };

    const connectBitski = () => {
        slide = `unsupported`;
    };
</script>

<svelte:window on:keydown={keydown} />

<div class="swal2-container swal2-center swal2-backdrop-show" style="overflow-y: auto;">
    <div aria-labelledby="swal2-title" aria-describedby="swal2-html-container" class="swal2-popup swal2-modal swal2-show" tabindex="-1" role="dialog" aria-live="assertive" aria-modal="true" style="display: grid;">
        <button type="button" class="swal2-close" style="display: flex;" aria-label="Close this dialog" on:click={close}>×</button>
        <ul class="swal2-progress-steps" style="display: none;"></ul>
        <div class="swal2-icon" style="display: none;"></div>
        <img class="swal2-image" alt="" style="display: none;">
        <h2 class="swal2-title" id="swal2-title" style="display: block;">Connect Wallet</h2>
        <div class="swal2-html-container" style="display: block;">
            {#if slide === `choose`}
                <div class="grid">
                    <div class="tile" role="button" on:click={connectMetamask}>
                        <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM1NSIgdmlld0JveD0iMCAwIDM5NyAzNTUiIHdpZHRoPSIzOTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiPjxwYXRoIGQ9Im0xMTQuNjIyNjQ0IDMyNy4xOTU0NzIgNTIuMDA0NzE3IDEzLjgxMDE5OHYtMTguMDU5NDlsNC4yNDUyODMtNC4yNDkyOTJoMjkuNzE2OTgydjIxLjI0NjQ1OSAxNC44NzI1MjNoLTMxLjgzOTYyNGwtMzkuMjY4ODY4LTE2Ljk5NzE2OXoiIGZpbGw9IiNjZGJkYjIiLz48cGF0aCBkPSJtMTk5LjUyODMwNSAzMjcuMTk1NDcyIDUwLjk0MzM5NyAxMy44MTAxOTh2LTE4LjA1OTQ5bDQuMjQ1MjgzLTQuMjQ5MjkyaDI5LjcxNjk4MXYyMS4yNDY0NTkgMTQuODcyNTIzaC0zMS44Mzk2MjNsLTM5LjI2ODg2OC0xNi45OTcxNjl6IiBmaWxsPSIjY2RiZGIyIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA0ODMuOTYyMjcgMCkiLz48cGF0aCBkPSJtMTcwLjg3MjY0NCAyODcuODg5NTIzLTQuMjQ1MjgzIDM1LjA1NjY1NyA1LjMwNjYwNC00LjI0OTI5Mmg1NS4xODg2OGw2LjM2NzkyNSA0LjI0OTI5Mi00LjI0NTI4NC0zNS4wNTY2NTctOC40OTA1NjUtNS4zMTE2MTUtNDIuNDUyODMyIDEuMDYyMzIzeiIgZmlsbD0iIzM5MzkzOSIvPjxwYXRoIGQ9Im0xNDIuMjE2OTg0IDUwLjk5MTUwMjIgMjUuNDcxNjk4IDU5LjQ5MDA4NTggMTEuNjc0NTI4IDE3My4xNTg2NDNoNDEuMzkxNTExbDEyLjczNTg0OS0xNzMuMTU4NjQzIDIzLjM0OTA1Ni01OS40OTAwODU4eiIgZmlsbD0iI2Y4OWMzNSIvPjxwYXRoIGQ9Im0zMC43NzgzMDIzIDE4MS42NTcyMjYtMjkuNzE2OTgxNTMgODYuMDQ4MTYxIDc0LjI5MjQ1MzkzLTQuMjQ5MjkzaDQ3Ljc1OTQzNDN2LTM3LjE4MTMwM2wtMi4xMjI2NDEtNzYuNDg3MjUzLTEwLjYxMzIwOCA4LjQ5ODU4M3oiIGZpbGw9IiNmODlkMzUiLz48cGF0aCBkPSJtODcuMDI4MzAzMiAxOTEuMjE4MTM0IDg3LjAyODMwMjggMi4xMjQ2NDYtOS41NTE4ODYgNDQuNjE3NTYzLTQxLjM5MTUxMS0xMC42MjMyMjl6IiBmaWxsPSIjZDg3YzMwIi8+PHBhdGggZD0ibTg3LjAyODMwMzIgMTkyLjI4MDQ1NyAzNi4wODQ5MDU4IDMzLjk5NDMzNHYzMy45OTQzMzR6IiBmaWxsPSIjZWE4ZDNhIi8+PHBhdGggZD0ibTEyMy4xMTMyMDkgMjI3LjMzNzExNCA0Mi40NTI4MzEgMTAuNjIzMjI5IDEzLjc5NzE3IDQ1LjY3OTg4OC05LjU1MTg4NiA1LjMxMTYxNS00Ni42OTgxMTUtMjcuNjIwMzk4eiIgZmlsbD0iI2Y4OWQzNSIvPjxwYXRoIGQ9Im0xMjMuMTEzMjA5IDI2MS4zMzE0NDgtOC40OTA1NjUgNjUuODY0MDI0IDU2LjI1LTM5LjMwNTk0OXoiIGZpbGw9IiNlYjhmMzUiLz48cGF0aCBkPSJtMTc0LjA1NjYwNiAxOTMuMzQyNzggNS4zMDY2MDQgOTAuMjk3NDUxLTE1LjkxOTgxMi00Ni4yMTEwNDl6IiBmaWxsPSIjZWE4ZTNhIi8+PHBhdGggZD0ibTc0LjI5MjQ1MzkgMjYyLjM5Mzc3MSA0OC44MjA3NTUxLTEuMDYyMzIzLTguNDkwNTY1IDY1Ljg2NDAyNHoiIGZpbGw9IiNkODdjMzAiLz48cGF0aCBkPSJtMjQuNDEwMzc3NyAzNTUuODc4MTkzIDkwLjIxMjI2NjMtMjguNjgyNzIxLTQwLjMzMDE5MDEtNjQuODAxNzAxLTczLjIzMTEzMzEzIDUuMzExNjE2eiIgZmlsbD0iI2ViOGYzNSIvPjxwYXRoIGQ9Im0xNjcuNjg4NjgyIDExMC40ODE1ODgtNDUuNjM2NzkzIDM4LjI0MzYyNy0zNS4wMjM1ODU4IDQyLjQ5MjkxOSA4Ny4wMjgzMDI4IDMuMTg2OTY5eiIgZmlsbD0iI2U4ODIxZSIvPjxwYXRoIGQ9Im0xMTQuNjIyNjQ0IDMyNy4xOTU0NzIgNTYuMjUtMzkuMzA1OTQ5LTQuMjQ1MjgzIDMzLjk5NDMzNHYxOS4xMjE4MTNsLTM4LjIwNzU0OC03LjQzNjI2eiIgZmlsbD0iI2RmY2VjMyIvPjxwYXRoIGQ9Im0yMjkuMjQ1Mjg2IDMyNy4xOTU0NzIgNTUuMTg4NjgtMzkuMzA1OTQ5LTQuMjQ1MjgzIDMzLjk5NDMzNHYxOS4xMjE4MTNsLTM4LjIwNzU0OC03LjQzNjI2eiIgZmlsbD0iI2RmY2VjMyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgNTEzLjY3OTI1MiAwKSIvPjxwYXRoIGQ9Im0xMzIuNjY1MDk2IDIxMi40NjQ1OTMtMTEuNjc0NTI4IDI0LjQzMzQyNyA0MS4zOTE1MS0xMC42MjMyMjl6IiBmaWxsPSIjMzkzOTM5IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyODMuMzcyNjQ2IDApIi8+PHBhdGggZD0ibTIzLjM0OTA1NyAxLjA2MjMyMjk2IDE0NC4zMzk2MjUgMTA5LjQxOTI2NTA0LTI0LjQxMDM3OC01OS40OTAwODU4eiIgZmlsbD0iI2U4OGYzNSIvPjxwYXRoIGQ9Im0yMy4zNDkwNTcgMS4wNjIzMjI5Ni0xOS4xMDM3NzM5MiA1OC40Mjc3NjI5NCAxMC42MTMyMDc3MiA2My43MzkzNzgxLTcuNDI5MjQ1NDEgNC4yNDkyOTIgMTAuNjEzMjA3NzEgOS41NjA5MDYtOC40OTA1NjYxNyA3LjQzNjI2MSAxMS42NzQ1Mjg0NyAxMC42MjMyMjktNy40MjkyNDU0IDYuMzczOTM4IDE2Ljk4MTEzMjMgMjEuMjQ2NDU5IDc5LjU5OTA1NzctMjQuNDMzNDI4YzM4LjkxNTA5Ni0zMS4xNjE0NzMgNTguMDE4ODY5LTQ3LjA5NjMxOCA1Ny4zMTEzMjItNDcuODA0NTMzLS43MDc1NDgtLjcwODIxNS00OC44MjA3NTYtMzcuMTgxMzAzNi0xNDQuMzM5NjI1LTEwOS40MTkyNjUwNHoiIGZpbGw9IiM4ZTVhMzAiLz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAzOTkuMDU2NjExIDApIj48cGF0aCBkPSJtMzAuNzc4MzAyMyAxODEuNjU3MjI2LTI5LjcxNjk4MTUzIDg2LjA0ODE2MSA3NC4yOTI0NTM5My00LjI0OTI5M2g0Ny43NTk0MzQzdi0zNy4xODEzMDNsLTIuMTIyNjQxLTc2LjQ4NzI1My0xMC42MTMyMDggOC40OTg1ODN6IiBmaWxsPSIjZjg5ZDM1Ii8+PHBhdGggZD0ibTg3LjAyODMwMzIgMTkxLjIxODEzNCA4Ny4wMjgzMDI4IDIuMTI0NjQ2LTkuNTUxODg2IDQ0LjYxNzU2My00MS4zOTE1MTEtMTAuNjIzMjI5eiIgZmlsbD0iI2Q4N2MzMCIvPjxwYXRoIGQ9Im04Ny4wMjgzMDMyIDE5Mi4yODA0NTcgMzYuMDg0OTA1OCAzMy45OTQzMzR2MzMuOTk0MzM0eiIgZmlsbD0iI2VhOGQzYSIvPjxwYXRoIGQ9Im0xMjMuMTEzMjA5IDIyNy4zMzcxMTQgNDIuNDUyODMxIDEwLjYyMzIyOSAxMy43OTcxNyA0NS42Nzk4ODgtOS41NTE4ODYgNS4zMTE2MTUtNDYuNjk4MTE1LTI3LjYyMDM5OHoiIGZpbGw9IiNmODlkMzUiLz48cGF0aCBkPSJtMTIzLjExMzIwOSAyNjEuMzMxNDQ4LTguNDkwNTY1IDY1Ljg2NDAyNCA1NS4xODg2OC0zOC4yNDM2MjZ6IiBmaWxsPSIjZWI4ZjM1Ii8+PHBhdGggZD0ibTE3NC4wNTY2MDYgMTkzLjM0Mjc4IDUuMzA2NjA0IDkwLjI5NzQ1MS0xNS45MTk4MTItNDYuMjExMDQ5eiIgZmlsbD0iI2VhOGUzYSIvPjxwYXRoIGQ9Im03NC4yOTI0NTM5IDI2Mi4zOTM3NzEgNDguODIwNzU1MS0xLjA2MjMyMy04LjQ5MDU2NSA2NS44NjQwMjR6IiBmaWxsPSIjZDg3YzMwIi8+PHBhdGggZD0ibTI0LjQxMDM3NzcgMzU1Ljg3ODE5MyA5MC4yMTIyNjYzLTI4LjY4MjcyMS00MC4zMzAxOTAxLTY0LjgwMTcwMS03My4yMzExMzMxMyA1LjMxMTYxNnoiIGZpbGw9IiNlYjhmMzUiLz48cGF0aCBkPSJtMTY3LjY4ODY4MiAxMTAuNDgxNTg4LTQ1LjYzNjc5MyAzOC4yNDM2MjctMzUuMDIzNTg1OCA0Mi40OTI5MTkgODcuMDI4MzAyOCAzLjE4Njk2OXoiIGZpbGw9IiNlODgyMWUiLz48cGF0aCBkPSJtMTMyLjY2NTA5NiAyMTIuNDY0NTkzLTExLjY3NDUyOCAyNC40MzM0MjcgNDEuMzkxNTEtMTAuNjIzMjI5eiIgZmlsbD0iIzM5MzkzOSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjgzLjM3MjY0NiAwKSIvPjxwYXRoIGQ9Im0yMy4zNDkwNTcgMS4wNjIzMjI5NiAxNDQuMzM5NjI1IDEwOS40MTkyNjUwNC0yNC40MTAzNzgtNTkuNDkwMDg1OHoiIGZpbGw9IiNlODhmMzUiLz48cGF0aCBkPSJtMjMuMzQ5MDU3IDEuMDYyMzIyOTYtMTkuMTAzNzczOTIgNTguNDI3NzYyOTQgMTAuNjEzMjA3NzIgNjMuNzM5Mzc4MS03LjQyOTI0NTQxIDQuMjQ5MjkyIDEwLjYxMzIwNzcxIDkuNTYwOTA2LTguNDkwNTY2MTcgNy40MzYyNjEgMTEuNjc0NTI4NDcgMTAuNjIzMjI5LTcuNDI5MjQ1NCA2LjM3MzkzOCAxNi45ODExMzIzIDIxLjI0NjQ1OSA3OS41OTkwNTc3LTI0LjQzMzQyOGMzOC45MTUwOTYtMzEuMTYxNDczIDU4LjAxODg2OS00Ny4wOTYzMTggNTcuMzExMzIyLTQ3LjgwNDUzMy0uNzA3NTQ4LS43MDgyMTUtNDguODIwNzU2LTM3LjE4MTMwMzYtMTQ0LjMzOTYyNS0xMDkuNDE5MjY1MDR6IiBmaWxsPSIjOGU1YTMwIi8+PC9nPjwvZz48L3N2Zz4=" alt="MetaMask">
                        <strong>MetaMask</strong>
                    </div>
                    <div class="tile" role="button" on:click={connectWalletConnect}>
                        <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjAlIiBjeT0iNTAlIiByPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1ZDlkZjYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDZmZmYiLz48L3JhZGlhbEdyYWRpZW50PjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTI1NiAwYzE0MS4zODQ4OTYgMCAyNTYgMTE0LjYxNTEwNCAyNTYgMjU2cy0xMTQuNjE1MTA0IDI1Ni0yNTYgMjU2LTI1Ni0xMTQuNjE1MTA0LTI1Ni0yNTYgMTE0LjYxNTEwNC0yNTYgMjU2LTI1NnoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJtNjQuNjkxNzU1OCAzNy43MDg4Mjk4YzUxLjUzMjgwNzItNTAuMjc4NDM5NyAxMzUuMDgzOTk0Mi01MC4yNzg0Mzk3IDE4Ni42MTY3OTkyIDBsNi4yMDIwNTcgNi4wNTEwOTA2YzIuNTc2NjQgMi41MTM5MjE4IDIuNTc2NjQgNi41ODk3OTQ4IDAgOS4xMDM3MTc3bC0yMS4yMTU5OTggMjAuNjk5NTc1OWMtMS4yODgzMjEgMS4yNTY5NjE5LTMuMzc3MSAxLjI1Njk2MTktNC42NjU0MjEgMGwtOC41MzQ3NjYtOC4zMjcwMjA1Yy0zNS45NTA1NzMtMzUuMDc1NDk2Mi05NC4yMzc5NjktMzUuMDc1NDk2Mi0xMzAuMTg4NTQ0IDBsLTkuMTQwMDI4MiA4LjkxNzU1MTljLTEuMjg4MzIxNyAxLjI1Njk2MDktMy4zNzcxMDE2IDEuMjU2OTYwOS00LjY2NTQyMDggMGwtMjEuMjE1OTk3My0yMC42OTk1NzU5Yy0yLjU3NjY0MDMtMi41MTM5MjI5LTIuNTc2NjQwMy02LjU4OTc5NTggMC05LjEwMzcxNzd6bTIzMC40OTM0ODUyIDQyLjgwODkxMTcgMTguODgyMjc5IDE4LjQyMjcyNjJjMi41NzY2MjcgMi41MTM5MTAzIDIuNTc2NjQyIDYuNTg5NzU5My4wMDAwMzIgOS4xMDM2ODYzbC04NS4xNDE0OTggODMuMDcwMzU4Yy0yLjU3NjYyMyAyLjUxMzk0MS02Ljc1NDE4MiAyLjUxMzk2OS05LjMzMDg0LjAwMDA2Ni0uMDAwMDEtLjAwMDAxLS4wMDAwMjMtLjAwMDAyMy0uMDAwMDMzLS4wMDAwMzRsLTYwLjQyODI1Ni01OC45NTc0NTFjLS42NDQxNi0uNjI4NDgxLTEuNjg4NTUtLjYyODQ4MS0yLjMzMjcxIDAtLjAwMDAwNC4wMDAwMDQtLjAwMDAwOC4wMDAwMDctLjAwMDAxMi4wMDAwMTFsLTYwLjQyNjk2ODMgNTguOTU3NDA4Yy0yLjU3NjYxNDEgMi41MTM5NDctNi43NTQxNzQ2IDIuNTEzOTktOS4zMzA4NDA4LjAwMDA5Mi0uMDAwMDE1MS0uMDAwMDE0LS4wMDAwMzA5LS4wMDAwMjktLjAwMDA0NjctLjAwMDA0NmwtODUuMTQzODY3NzQtODMuMDcxNDYzYy0yLjU3NjYzOTI4LTIuNTEzOTIxLTIuNTc2NjM5MjgtNi41ODk3OTUgMC05LjEwMzcxNjNsMTguODgyMzEyNjQtMTguNDIyNjk1NWMyLjU3NjYzOTMtMi41MTM5MjIyIDYuNzU0MTk5My0yLjUxMzkyMjIgOS4zMzA4Mzk3IDBsNjAuNDI5MTM0NyA1OC45NTgyNzU4Yy42NDQxNjA4LjYyODQ4IDEuNjg4NTQ5NS42Mjg0OCAyLjMzMjcxMDMgMCAuMDAwMDA5NS0uMDAwMDA5LjAwMDAxODItLjAwMDAxOC4wMDAwMjc3LS4wMDAwMjVsNjAuNDI2MTA2NS01OC45NTgyNTA4YzIuNTc2NTgxLTIuNTEzOTggNi43NTQxNDItMi41MTQwNzQzIDkuMzMwODQtLjAwMDIxMDMuMDAwMDM3LjAwMDAzNTQuMDAwMDcyLjAwMDA3MDkuMDAwMTA3LjAwMDEwNjNsNjAuNDI5MDU2IDU4Ljk1ODM1NDhjLjY0NDE1OS42Mjg0NzkgMS42ODg1NDkuNjI4NDc5IDIuMzMyNzA5IDBsNjAuNDI4MDc5LTU4Ljk1NzE5MjVjMi41NzY2NC0yLjUxMzkyMzEgNi43NTQxOTktMi41MTM5MjMxIDkuMzMwODM5IDB6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk4IDE2MCkiLz48L2c+PC9zdmc+" alt="WalletConnect">
                        <strong>WalletConnect</strong>
                    </div>
                    <div class="tile" role="button" on:click={connectTorus}>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU3IiBoZWlnaHQ9IjI3NyIgdmlld0JveD0iMCAwIDI1NyAyNzciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cmVjdCB3aWR0aD0iMTUzLjg4OSIgaGVpZ2h0PSI4Mi4wNzQxIiBmaWxsPSIjMDM2NEZGIiAvPgogICAgPHJlY3QgeD0iNzEuODEzNSIgd2lkdGg9IjgyLjA3NDEiIGhlaWdodD0iMjc3IiBmaWxsPSIjMDM2NEZGIiAvPgogICAgPHBhdGggZD0iTTIxNS40NDMgODIuMDc0MUMyMzguMTA3IDgyLjA3NDEgMjU2LjQ4IDYzLjcwMTIgMjU2LjQ4IDQxLjAzN0MyNTYuNDggMTguMzcyOSAyMzguMTA3IDAgMjE1LjQ0MyAwQzE5Mi43NzkgMCAxNzQuNDA2IDE4LjM3MjkgMTc0LjQwNiA0MS4wMzdDMTc0LjQwNiA2My43MDEyIDE5Mi43NzkgODIuMDc0MSAyMTUuNDQzIDgyLjA3NDFaIiBmaWxsPSIjMDM2NEZGIiAvPgo8L3N2Zz4=" alt="Torus">
                        <strong>Torus</strong>
                    </div>
                </div>
            {:else if slide === `loading`}
                <div class="swal2-actions swal2-loading" style="display: flex;">
                    <div class="swal2-loader" data-button-to-replace="swal2-confirm swal2-styled" style="display: flex;"></div>
                </div>
                <br>
                <br>
                <span role="button" on:click={() => (slide = `choose`)}>Back To Wallet Select</span>
            {:else if slide === `undetected`}
                <p>We could not find your wallet.</p>
                <br>
                <span role="button" on:click={() => (slide = `choose`)}>&larr; Back To Wallet Select</span>
            {:else if slide === `unsupported`}
                <p>This wallet is not yet supported.</p>
                <br>
                <span role="button" on:click={() => (slide = `choose`)}>&larr; Back To Wallet Select</span>
            {/if}
        </div>
        <input class="swal2-input" style="display: none;">
        <input type="file" class="swal2-file" style="display: none;">
        <div class="swal2-range" style="display: none;">
            <input type="range">
            <output></output>
        </div>
        <select class="swal2-select" style="display: none;"></select>
        <div class="swal2-radio" style="display: none;"></div>
        <label for="swal2-checkbox" class="swal2-checkbox" style="display: none;">
            <input type="checkbox">
            <span class="swal2-label"></span>
        </label>
        <textarea class="swal2-textarea" style="display: none;"></textarea>
        <div class="swal2-validation-message" id="swal2-validation-message" style="display: none;"></div>
        <div class="swal2-actions" style="display: none;">
            <div class="swal2-loader"></div>
            <button type="button" class="swal2-confirm swal2-styled" style="display: none;" aria-label="">OK</button>
            <button type="button" class="swal2-deny swal2-styled" style="display: none;" aria-label="">No</button>
            <button type="button" class="swal2-cancel swal2-styled" style="display: none;" aria-label="">Cancel</button>
        </div>
        <div class="swal2-footer" style="display: none;"></div>
    </div>
</div>

<style>
    .swal2-close:focus {
        box-shadow: inset 0 0 0 2px rgba(100,150,200,.5);
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        .tile {
            -moz-box-align: center;
            -moz-box-pack: center;
            align-items: center;
            border: 3px solid transparent;
            border-radius: 6px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 24px;
            transition: transform .1s ease-in;
            will-change: transform;
            &:hover {
                animation: rainbow 10s infinite;
                border-color: var(--color-7);
                transform: scale(.95);
            }
            &:focus {
                background-color: #eee;
                transform: scale(.97);
            }
            img {
                width: 45px;
                height: 45px;
                display: flex;
                border-radius: 1px;
                overflow: visible;
                box-shadow: none;
                -moz-box-pack: center;
                justify-content: center;
                -moz-box-align: center;
                align-items: center;
            }
            strong {
                margin-top: 10px;
            }
        }
    }
    span[role='button'] {
        color: #4169e1;
        cursor: pointer;
        margin-top: 2.25em;
        &:hover, &:focus {
            text-decoration: underline;
        }
    }
    :global {
        [data-theme='dark'] {
            .swal2-modal {
                background-color: #222;
                .swal2-title {
                    color: #fafafa;
                }
            }
            .tile {
                color: #fafafa;
                &:hover {
                    background-color: #333 !important;
                }
            }
            p {
                color: #eee;
            }
            span[role='button'] {
                color: #87cefa !important;
            }
        }
    }
</style>