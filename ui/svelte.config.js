`use strict`;
import { mdsvex } from "mdsvex";
import { mdsvexConfig } from "./mdsvex.config.js";
/** @type {import('@sveltejs/kit').Config} */
import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";

const config = {
    extensions: [`.svelte`, ...mdsvexConfig.extensions],
    kit: {
        adapter: adapter({
            assets: `src/build`,
            fallback: null,
            pages: `src/build`,
        }),
        files: {
            assets: `static`,
            hooks: `src/hooks`,
            lib: `src/lib`,
            routes: `src/routes`,
            serviceWorker: `src/service-worker`,
            template: `src/app.html`,
        },
        floc: false,
        target: `body`,
        trailingSlash: `always`,
    },
    preprocess: [
        mdsvex(mdsvexConfig),
        preprocess({
            defaults: { style: `scss` },
            postcss: { plugins: [autoprefixer()] },
            scss: { prependData: `@charset 'UTF-8';` },
            sourceMap: true,
        }),
    ],
};

export default config;
