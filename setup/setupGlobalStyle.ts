/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

export const setupGlobalStyle = {
    html: {
        WebkitFontSmoothing: "auto",
        "::-webkit-scrollbar": {
            height: 8,
            width: 8
        },
        "::-webkit-scrollbar-track": {
            background: "grey"
        },
        "::-webkit-scrollbar-thumb": {
            background: "grey",
            borderRadius: 8
        },
        "::-webkit-scrollbar-thumb:hover": {
            background: "lightgrey"
        },
        "::-webkit-scrollbar-thumb:horizontal": {
            background: "lightgrey",
            borderRadius: 8
        },
        "::-webkit-scrollbar-thumb:horizontal:hover": {
            background: "lightgrey"
        }
    }
};
