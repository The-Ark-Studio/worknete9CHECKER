/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import react from "@vitejs/plugin-react";
import { PluginOption } from "vite";
import setupAutoImport from "./setupAutoImport";
import setupIcon from "./setupIcon";
import Inspect from "vite-plugin-inspect";
import { qrcode } from "vite-plugin-qrcode";
import tsconfigPaths from "vite-tsconfig-paths";

export default function setupVitePlugins(viteEnv: IViteEnv, isBuild: boolean) {
    console.log(viteEnv, isBuild);
    const vitePlugins: (PluginOption | PluginOption[])[] = [
        react({
            include: [/\.ts$/, /\.tsx$/, /\.md$/]
        }),
        Inspect(),
        qrcode()
    ];
    vitePlugins.push(setupAutoImport());
    vitePlugins.push(setupIcon());
    vitePlugins.push(tsconfigPaths());

    return vitePlugins;
}
