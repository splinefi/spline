# Spline

**IMPORTANT: This project is a work in progress and is not yet stable.**

The cheapest yield farming (and more) in all of DeFi.

## Development

_We use pnpm for monorepo management._

If you don't yet have `pnpm`, you can install it with the following command:

```
npx pnpm add -g pnpm
```

Then, install the project dependencies:

```
npx pnpm i
```

### Front-end

Run front-end locally, by default on http://localhost:3000

```
npx pnpm run ui:dev
```

Build static files

```
npx pnpm run ui:build
```

Locally preview build directory (if it exists)

```
npx pnpm run ui:preview
```

#### Cloudflare Pages

**This repository is synced with [Cloudflare Pages](https://pages.cloudflare.com), and the latest build is always available on https://spline.pages.dev within a few minutes after each commit.**

It sees `/ui` as the root path and `src/build` as the output directory.

It uses Node `12.22.1` and NPM `7.16.0`.

Each time a commit is made to master, it runs the following command, which takes around 3-5 minutes:

```
npx pnpm add -g pnpm && npx pnpm i && npx pnpm run build
```

_Users and contributors do not need to run the above command._

### Linting

_We use ESLint and Prettier for linting._

```
npx pnpm run lint
```

You must lint before opening a PR, though Husky should do this automatically.

## License

[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.html)
