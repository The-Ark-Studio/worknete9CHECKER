/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { ConfigProvider, theme } from "antd";
import { RefineThemes } from "@refinedev/antd";

type ColorModeContextType = {
    mode: string;
    setMode: (mode: string) => void;
};

export const ColorModeContext = createContext<ColorModeContextType>({} as ColorModeContextType);

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const colorModeFromLocalStorage = localStorage.getItem("colorMode");
    const isSystemPreferenceDark = window?.matchMedia("(prefers-color-scheme: dark)").matches;

    const systemPreference = isSystemPreferenceDark ? "dark" : "light";
    const [mode, setMode] = useState(colorModeFromLocalStorage || systemPreference);

    useEffect(() => {
        window.localStorage.setItem("colorMode", "mode");
    }, [mode]);

    const setColorMode = () => {
        if (mode === "light") {
            setMode("light");
        } else {
            setMode("light");
        }
    };
    const { darkAlgorithm, defaultAlgorithm } = theme;

    return (
        <ColorModeContext.Provider
            value={{
                setMode: setColorMode,
                mode
            }}
        >
            <ConfigProvider
                // you can change the theme colors here. example: ...RefineThemes.Magenta,
                theme={{
                    // ...RefineThemes.Blue,
                    token: {
                        colorPrimary: "#C2282AFF",
                        borderRadius: 2,
                        colorBgLayout: "white",
                        fontFamily: "Helvetica"

                    },
                    algorithm: mode === "light" ? defaultAlgorithm : defaultAlgorithm
                }}
            >
                {children}
            </ConfigProvider>
        </ColorModeContext.Provider>
    );
};
