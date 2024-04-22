/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";

export default function setupAutoImport() {
    return AutoImport({
        include: [
            /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            /\.md$/ // .md
        ],
        imports: ["react", "react-router", "react-i18next"],
        dts: "typing/dependencies.d.ts",
        dirs: [
            "src/api/**",
            "src/common/constants/**",
            "src/common/enums/**",
            "src/common/utils/**",
            "src/store/**",
            "setup/ioc/**.ts"
        ],
        resolvers: [
            IconsResolver({
                prefix: "Icon",
                extension: "jsx",
                customCollections: ["base", "magenta"]
            })
        ]
    });
}
