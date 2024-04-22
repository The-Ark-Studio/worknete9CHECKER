/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import * as path from "path";
import { resolve } from "path";
import type { ConfigEnv, UserConfig } from "vite";
import { loadEnv } from "vite";
import pkg from "./package.json";
import setupVitePlugins from "./setup/index";
import { buildPath, wrapperEnv } from "./setup/utils";
import { createProxy } from "./setup/setupProxy";
import * as process from "process";

import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import rollupNodePolyFill from "rollup-plugin-polyfill-node";

const { dependencies, devDependencies, name, version } = pkg;

// This env prefix will impact application entirely, please carefully use.
const ENV_PREFIX = "EHM";
const ENV_DIR = "env";
const FALLBACK_PORT = 8888;
const PLATFORM = process.platform;
const API_URL = "/api/ehm";
// Read all environment variable configuration files to process.env
const __APP_INFO__ = {
    pkg: { dependencies, devDependencies, name, version },
    lastBuildTime: new Date(),
    lastBuildTimeMs: Date.now(),
    envPrefix: ENV_PREFIX,
    platform: PLATFORM,
    env: process.env
};

function pathResolve(dir: string) {
    return resolve(process.cwd(), ".", dir);
}

function isProdMode(): boolean {
    return process.env.NODE_ENV === "production";
}

function loadEnvByMode(mode: string) {
    console.debug(`PATH ${buildPath(process.cwd(), ENV_DIR)}`);
    return loadEnv(mode, path.join(process.cwd(), ENV_DIR).toString(), [ENV_PREFIX]);
}

function getCurrentEnvContext(rawName: string): string {
    return `${ENV_PREFIX}${rawName}`;
}

function loadSAEnv() {
    return process.env[getCurrentEnvContext("_SYS_ENV_ENABLED")] === "true" ? process.env : loadEnvByMode("production");
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
    const isBuild = command === "build";
    const root = process.cwd();

    const env = isBuild ? loadSAEnv() : loadEnvByMode(mode);

    // The boolean type read by loadEnv is a string. This function can be converted to boolean type
    const viteEnv = wrapperEnv(env, __APP_INFO__);
    // For Debug Building
    console.debug("Using Env with MODE ", mode);
    console.debug("Node Production Mode Enabled ", isProdMode());
    console.debug(viteEnv);
    console.debug("At ", root);
    console.debug("Platform ", PLATFORM);

    return {
        base: viteEnv[getCurrentEnvContext("_PUBLIC_PATH")],
        root,
        envDir: root.concat(`/${ENV_DIR}`),
        envPrefix: ENV_PREFIX,
        resolve: {
            alias: {
                "@mui/styled-engine": "@mui/styled-engine-sc",
                "@pub": `${pathResolve("public")}`,
                "@api": `${pathResolve("src")}/api`,
                "@asset": `${pathResolve("src")}/assets`,
                "@store": `${pathResolve("src")}/stores`,
                "@comp": `${pathResolve("src")}/components`,
                "@const": `${pathResolve("src")}/constants`,
                "@ctx": `${pathResolve("src")}/contexts`,
                "@intf": `${pathResolve("src")}/interfaces`,
                "@pg": `${pathResolve("src")}/pages`,
                "@pvd": `${pathResolve("src")}/api/providers`,
                "@rts": `${pathResolve("src")}/routes`,
                "@util": `${pathResolve("src")}/utils`,
                "@setup": `${pathResolve("setup")}`,
                "@routes": `${pathResolve("src")}/routes`,
                "@hooks": `${pathResolve("src")}/hooks`
            }
        },

        server: {
            // Listening on all local IPs
            host: true,
            open: false,
            port: viteEnv[`${ENV_PREFIX}_PORT`] ? Number(viteEnv[`${ENV_PREFIX}_PORT`]) : FALLBACK_PORT,
            // Load proxy configuration from .env
            proxy: viteEnv[`${ENV_PREFIX}_PROXY_ENABLED`]
                ? createProxy(
                    // Object.keys(API_URL).map((key) => [API_URL[key], String(viteEnv[`${ENV_PREFIX}_APP_API_HOST`])])
                    [[API_URL, String(viteEnv[`${ENV_PREFIX}_APP_API_HOST`])]]
                )
                : undefined,
            cors: true
        },
        preview: {
            host: true,
            open: true,
            port: FALLBACK_PORT,
            cors: true
        },

        build: {
            rollupOptions: {
                external: [/^\/images*:.*/, /^\/fonts*:.*/, /^\/locales*:.*/, /^\/mock-data*:.*/],
                output: {
                    manualChunks: (id: string) => {
                        if (id.includes("node_modules")) {
                            return "vendor_ehm";

                            // return `vendor
                            // .${id.split("/node_modules/.pnpm/")
                            // [1].split("/node_modules/")[0]}`;
                        }
                    }
                },
                plugins: [rollupNodePolyFill()]
            },
            cssCodeSplit: true,
            emptyOutDir: true,
            manifest: true,
            chunkSizeWarningLimit: 626
        },

        optimizeDeps: {
            esbuildOptions: {
                // Node.js global to browser globalThis
                define: {
                    global: "globalThis"
                },
                // Enable esbuild polyfill plugins
                plugins: [
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    NodeGlobalsPolyfillPlugin({
                        buffer: true,
                        process: true
                    })
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    // NodeModulesPolyfillPlugin(),
                ]
            }
        },

        esbuild: {
            pure: viteEnv[`${ENV_PREFIX}_DOUCI`] ? [] : ["console.error", "console.warn", "console.log", "debugger"]
        },

        define: {
            __APP_INFO__: JSON.stringify(__APP_INFO__),
            __API_URL__: JSON.stringify(API_URL)
        },
        // The vite plugin used by the project. The quantity is large, so it is separately extracted and managed
        plugins: setupVitePlugins(viteEnv, isBuild)
    };
};
