import WalletStores from "web3w";
import { TorusModuleLoader } from "web3w-torus-loader";
import { WalletConnectModuleLoader } from "web3w-walletconnect-loader";
import chainConfigs from "$lib/contracts.json";
import { finality, nodeUrl, chainId } from "$lib/config";
import { base } from "$app/paths";

const walletStores = ((WalletStores as any).default || WalletStores)({
    chainConfigs,
    builtin: { autoProbe: true },
    transactions: { autoDelete: false, finality },
    flow: { autoUnlock: true },
    autoSelectPrevious: true,
    localStoragePrefix:
        base.startsWith("/ipfs/") || base.startsWith("/ipns/")
            ? base.slice(6)
            : undefined, // this is to prevent web3w-related conflicts
    options: [
        "builtin",
        new TorusModuleLoader({ verifier: "google", nodeUrl, chainId }),
        new TorusModuleLoader({ verifier: "facebook", nodeUrl, chainId }),
        new TorusModuleLoader({ verifier: "discord", nodeUrl, chainId }),
        new WalletConnectModuleLoader({ nodeUrl, chainId, infuraId: "" }),
    ],
    fallbackNode: nodeUrl,
});

export const { wallet, transactions, builtin, chain, balance, flow, fallback } =
    walletStores;

if (typeof window !== "undefined") (window as any).walletStores = walletStores;
