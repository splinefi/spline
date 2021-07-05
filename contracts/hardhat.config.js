`use strict`;

require(`hardhat-watcher`);

const defaultNetwork = `localhost`; // Change this if you want to deploy on a real network.

var config = require(`./config`);

module.exports = {
    defaultNetwork,
    networks: {
        hardhat: {
            chainId: 1337, // You can keep your local RPC url at 31337. We included this to prevent a recent Metamask bug (see https://hardhat.org/metamask-issue)
        },
        localhost: {
            url: `http://127.0.0.1:8545`,
        },
        localMainnet: {
            forking: {
                url: `https://eth-mainnet.alchemyapi.io/v2/${config.ALCHEMY_KEY}`,
                blockNumber: 12456366, // Use specific block number to enable local caching.
            },
            url: `https://localhost:8545`,
        },
        mainnet: {
            url: `https://cloudflare-eth.com/`,
            accounts: {
                mnemonic: config.mnemonic,
            },
        },
        localArbitrum: {
            url: `http://127.0.0.1:8547`,
            gasPrice: 0,
            accounts: {
                mnemonic: config.mnemonic,
            },
        },
        arbitrumTest: {
            url: `https://kovan5.arbitrum.io/rpc`,
            gasPrice: 0,
            accounts: {
                mnemonic: config.mnemonic,
            },
        },
    },
    solidity: {
        compilers: [
            {
                version: `0.8.6`,
                settings: {
                    optimizer: {
                        enabled: false, // Enable during production, disable during testing.
                        runs: 200,
                    },
                },
            },
        ],
    },
    watcher: {
        watch: { tasks: [{ command: `run`, params: { script: `scripts/deploy.js`, }, }] },
    },
};
