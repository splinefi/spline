# Spline smart contracts

Here's the developer environment guide!

## Basic onfiguration

```bash
cp config.js.example config.js
```

Then, modify `config.js` as needed.

## Install dependencies

```bash
yarn
```

## Script overview

Here is the list of npm scripts you can execute:

### Preinstall

Automatically executed upon install. Sets up TypeChain.

```bash
`yarn prepare`
```

### Lint code (ESLint)

Checks code for opionated standard violations.

```bash
yarn lint
```

### Lint & modify code (ESLint)

Modifies code to meet aforementioned opionated standards.

```bash
yarn lint:fix
```

### Lint code (Prettier)

Checks code for opionated standard violations.

```bash
yarn format
```

### Lint & modify code (Prettier)

Modifies code to meet aforementioned opionated standards.

```bash
yarn format:fix
```

### Compile contracts

Compiles contracts.

```bash
yarn compile
```

### Deploy contracts

Deploys contracts to whichever Hardhat network is active and exits.

```bash
yarn void:deploy
```

### Test contracts

Uses Mocha to test contracts. Extra Mocha arguments can be passed.

```bash
yarn test
```

## Generate coverage report

Generates a coverage report in `coverage/`.

```bash
yarn coverage
```

### Generate gas report

Generates a gas report based on the Mocha tests.

```bash
yarn gas
```

### Run Hardhat network

Starts a local Hardhat network on `localhost:8545`, deploys the contracts onto it, and automatically redeploys the contracts on file changes.

```bash
yarn dev
```

### Use Hardhat network

Assumes a local Hardhat network is already running on `localhost:8545`, deploys the contracts onto it, and automatically reploys the contracts on file changes.

```bash
yarn local:dev
```

### Run script

`yarn execute <network> <file.ts> [args...]`

This will execute the script `<file.ts>` against the specified network
<br/><br/>

`yarn deploy <network> [args...]`

This will deploy the contract on the specified network.

Behind the scene it uses `hardhat deploy` command so you can append any argument for it
<br/><br/>

### Export ABIs and addresses

`yarn export <network> <file.json>`

This will export the abi+address of deployed contract to `<file.json>`
<br/><br/>

### Fork network

`yarn fork:execute <network> [--blockNumber <blockNumber>] [--deploy] <file.ts> [args...]`

This will execute the script `<file.ts>` against a temporary fork of the specified network

if `--deploy` is used, deploy scripts will be executed
<br/><br/>

### Deploy contract on fork

`yarn fork:deploy <network> [--blockNumber <blockNumber>] [args...]`

This will deploy the contract against a temporary fork of the specified network.

Behind the scene it uses `hardhat deploy` command so you can append any argument for it
<br/><br/>

### Test contract on fork

`yarn fork:test <network> [--blockNumber <blockNumber>] [mocha args...]`

This will test the contract against a temporary fork of the specified network.
<br/><br/>

### Deploy contract on fork, but keep running as a node

`yarn fork:dev <network> [--blockNumber <blockNumber>] [args...]`

This will deploy the contract against a fork of the specified network and it will keep running as a node.

Behind the scene it uses `hardhat node` command so you can append any argument for it
