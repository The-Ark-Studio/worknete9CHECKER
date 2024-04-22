/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import ErrorBoundary from "@comp/Common/ErrorBoundary";
import PageSplashScreen from "@comp/Common/PageSplashScreen";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <React.Suspense fallback={PageSplashScreen()}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </React.Suspense>
    </React.StrictMode>
);
