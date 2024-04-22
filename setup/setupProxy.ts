/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

/**
 * Used to parse the .env.development proxy configuration
 */
import type { ProxyOptions } from "vite";

type ProxyItem = [string, string];

type ProxyList = ProxyItem[];

type ProxyTargetList = Record<string, ProxyOptions>;

const httpsRE = /^https:\/\//;

/**
 * Generate proxy
 * @param list
 */
export function createProxy(list: ProxyList = []) {
    const ret: ProxyTargetList = {};
    for (const [prefix, target] of list) {
        const isHttps = httpsRE.test(target);
        ret[prefix] = {
            target: target + prefix,
            changeOrigin: false,
            ws: false,
            rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ""),
            // rewrite: (path) => path.replace(`/^\/${prefix}/`, ''),
            // https is require secure=false
            ...(isHttps ? { secure: false } : {})
        };
    }
    console.log(`SETUP PROXY COMPLETED ${JSON.stringify(ret)}`);
    return ret;
}
