/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { Authenticated, Refine } from "@refinedev/core";
import { DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { ThemedLayoutV2, useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import { AppstoreOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import routerBindings, {
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { App as AntdApp } from "antd";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { CatchAllNavigate } from "./components/Layout/Authentication/CatchAllNavigate";
import { Header } from "./components/Layout/Theme/Header";
import { CustomSider } from "./components/Layout/Theme/Sider";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { AdministratorsList } from "./pages/administrators";
import { ApprovalProcessingList } from "./pages/approval-processing";
import { ForgotPassword } from "./pages/forgot-password";
import { Landing } from "./pages/landing";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { authProvider } from "./providers/mock-auth-provider-api";

const Layout = () => {
    const location = useLocation();
    if (location.pathname == "/") return null;

    return (
        <ThemedLayoutV2 Header={() => <Header sticky />} Sider={(props) => <CustomSider {...props} fixed />}>
            <Outlet />
        </ThemedLayoutV2>
    );
};

const App: React.FC = () => {
    const { t, i18n } = useTranslation();

    const i18nProvider = {
        translate: (key: string, params: object) => t(key, params),
        changeLocale: (lang: string) => i18n.changeLanguage(lang),
        getLocale: () => i18n.language
    };

    return (
        <BrowserRouter>
            <RefineKbarProvider>
                <ColorModeContextProvider>
                    <AntdApp>
                        <DevtoolsProvider>
                            <Routes>
                                <Route element={<Landing />} index path="/" />
                            </Routes>

                            <Refine
                                authProvider={authProvider}
                                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                                i18nProvider={i18nProvider}
                                notificationProvider={useNotificationProvider}
                                options={{
                                    syncWithLocation: false,
                                    warnWhenUnsavedChanges: true,
                                    useNewQueryKeys: true,
                                    projectId: "ANRfnA-imNw4M-JNXP8l"
                                }}
                                resources={[
                                    {
                                        name: "approval_processings",
                                        list: "/admin/approval-processings",
                                        // create: "/admin/approval-processings/create",
                                        // edit: "/admin/approval-processings/edit/:id",
                                        show: "/admin/approval-processings/:id",
                                        meta: {
                                            canDelete: true
                                        },
                                        options: {
                                            label: t("APPROVAL_PROCESSING.LABEL"),
                                            route: "/admin/approval-processings"
                                        },
                                        icon: <AppstoreOutlined twoToneColor="C2282AFF" />
                                    },
                                    {
                                        name: "administrators",
                                        list: "/admin/administrators",
                                        // create: "/admin/manage-applications/create",
                                        // edit: "/admin/approval-processings/edit/:id",
                                        // show: "/admin/administrators/:id",
                                        meta: {
                                            canDelete: true
                                        },
                                        options: {
                                            label: t("ADMINISTRATORS.LABEL"),
                                            route: "/admin/administrators"
                                        },
                                        icon: <UsergroupAddOutlined twoToneColor="C2282AFF" />
                                    }
                                ]}
                                routerProvider={routerBindings}
                            >
                                <Routes>
                                    <Route
                                        element={
                                            <Authenticated
                                                fallback={<CatchAllNavigate to="/admin/login" />}
                                                key="authenticated-inner"
                                            >
                                                <Layout />
                                            </Authenticated>
                                        }
                                    >
                                        <Route element={<NavigateToResource resource="approval_processings" />} index />
                                        <Route path="/admin/approval-processings">
                                            <Route element={<ApprovalProcessingList />} index />
                                        </Route>
                                        <Route path="/admin/administrators">
                                            <Route element={<AdministratorsList />} index />
                                        </Route>
                                        <Route
                                            element={<NavigateToResource resource="approval_processings" />}
                                            path="/admin/*"
                                        />
                                        {/* <Route element={<ErrorComponent />} path="/admin/*" /> */}
                                    </Route>
                                    <Route
                                        element={
                                            <Authenticated fallback={<Outlet />} key="authenticated-outer">
                                                <NavigateToResource />
                                            </Authenticated>
                                        }
                                    />
                                    <Route element={<Login />} path="/admin/login" />
                                    <Route element={<Register />} path="/admin/register" />
                                    <Route element={<ForgotPassword />} path="/admin/forgot-password" />
                                </Routes>
                                <RefineKbar />
                                <UnsavedChangesNotifier />
                                <DocumentTitleHandler />
                            </Refine>

                            {/* <DevtoolsPanel /> */}
                        </DevtoolsProvider>
                    </AntdApp>
                </ColorModeContextProvider>
            </RefineKbarProvider>
        </BrowserRouter>
    );
};

export default App;
