/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */
import * as process from "process";

export function wrapperEnv(envConf: Recordable, __APP_INFO__: any): IViteEnv {
    const ret: any = {};
    for (const envName of Object.keys(envConf)) {
        let realName = envConf[envName].replace(/\\n/g, "\n");

        switch (realName) {
            case "true":
                realName = true;
                break;
            case "false":
                realName = false;
                break;
            default:
                break;
        }

        if (envName === `${__APP_INFO__.envPrefix}_PORT`) {
            realName = Number(realName);
        }
        if (envName === `${__APP_INFO__.envPrefix}_PROXY` && realName) {
            try {
                realName = JSON.parse(realName.replace(/'/g, '"'));
            } catch (error) {
                realName = "";
            }
        }
        ret[envName] = realName;
        if (typeof realName === "string") {
            process.env[envName] = realName;
        } else if (typeof realName === "object") {
            process.env[envName] = JSON.stringify(realName);
        }
    }

    return ret;
}

export function buildPath(...args): string {
    const isWin = process.platform === "win32";
    const trueSplash = isWin ? "\\" : "/";

    return args.join(trueSplash);
}
