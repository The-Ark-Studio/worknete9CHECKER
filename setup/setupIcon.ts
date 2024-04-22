/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import Icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";

const ICONS_DIR = "src/assets/icons";
const MAGENTA_ICONS_DIR = "src/assets/icons/magenta";

export default function setupIcon() {
    return Icons({
        autoInstall: true,
        compiler: "jsx",
        jsx: "react",
        defaultClass: "svg-icon",
        customCollections: {
            base: FileSystemIconLoader(ICONS_DIR, (svg) => svg),
            magenta: FileSystemIconLoader(MAGENTA_ICONS_DIR, (svg) => svg)
        }
    });
}
