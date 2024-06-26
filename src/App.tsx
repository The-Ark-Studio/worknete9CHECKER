/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { Authenticated, Refine } from "@refinedev/core";
import { DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { ErrorComponent, ThemedLayoutV2, useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import { AppstoreOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import routerBindings, {
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Outlet, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { CatchAllNavigate } from "./components/Layout/Authentication/CatchAllNavigate";
import { Header } from "./components/Layout/Header";
import { CustomSider } from "./components/Layout/Sider";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { AdministratorList } from "./pages/admin/administrators";
// import { ApprovalProcessingList } from "./pages/admin/approval-processing";
import { ForgotPassword } from "./pages/authentication/forgot-password";
import { Landing } from "./pages/user/landing";
import { Login } from "./pages/authentication/login";
import { Register } from "./pages/authentication/register";
import { authProviderAdmin } from "./providers/auth-provider-admin-api";
import { authProviderUser } from "./providers/auth-provider-user-api";
import routerProvider from "@refinedev/react-router-v6";
import { dataProvider } from "./providers/data-provider-api";
import IRole from "./providers/entity/role";
import { EPermissions } from "./providers/entity/permission-enum";
import IPermission from "./providers/entity/permission";
import { AdministratorEdit } from "./pages/admin/administrators/edit";
import { AdministratorCreate } from "./pages/admin/administrators/create";
import { MainSite } from "./pages/user/main";

const Layout = () => {
    const location = useLocation();
    if (location.pathname == "/") return null;

    return (
        <ThemedLayoutV2 Header={() => <Header sticky />} Sider={(props) => <CustomSider {...props} fixed />}>
            <Outlet />
        </ThemedLayoutV2>
    );
};

const RoleAccess = ({ allowPermission, outletElement }) => {
    if (allowPermission === undefined)
        return <Navigate to="/admin/unauthorized" replace />;

    const userRole: IRole = JSON.parse(localStorage.getItem("role") || "{}");
    const userPermissions: Array<IPermission> = userRole?.permissions;

    let hasPermission = false;
    userPermissions.forEach(up => {
        if (up.name == allowPermission)
            hasPermission = true
    });

    if (hasPermission)
        return outletElement;
    return <Navigate to="/admin/unauthorized" replace />;
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
                                {/* <Route element={<Landing />} index path="/" />
                                <Route element={<MainSite />} index path="/main" /> */}
                            </Routes>
                            {/* <Refine
                                routerProvider={routerProvider}
                                i18nProvider={i18nProvider}
                                notificationProvider={useNotificationProvider}
                                options={{
                                    syncWithLocation: false,
                                    warnWhenUnsavedChanges: true,
                                    useNewQueryKeys: true,
                                    projectId: "ANRfnA-imNw4M-JNXP8l"
                                }}>
                                <Routes>
                                    <Route element={<Landing />} index path="/" />
                                    <Route element={<MainSite />} index path="/main" />
                                </Routes>
                            </Refine> */}
                            <Refine
                                authProvider={authProviderAdmin}
                                dataProvider={dataProvider("http://localhost:8080/api")}
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
                                        create: "/admin/administrators/create",
                                        edit: "/admin/administrators/edit/:id",
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
                                    <Route element={<Landing />} index path="/" />
                                    <Route element={<MainSite />} index path="/main" />
                                    <Route
                                        element={
                                            <Authenticated
                                                fallback={<CatchAllNavigate to="/login" />}
                                                key="authenticated-inner"
                                            >
                                                <Layout />
                                            </Authenticated>
                                        }
                                    >
                                        <Route element={<NavigateToResource resource="approval_processings" />} index />
                                        <Route element={<RoleAccess allowPermission={EPermissions.ViewApplications} outletElement={<Outlet />} />} path="/admin/approval-processings">
                                            {/* <Route element={<ApprovalProcessingList />} index /> */}
                                        </Route>
                                        <Route path="/admin/administrators" element={<RoleAccess allowPermission={EPermissions.ViewAdministrators} outletElement={<Outlet />} />}>
                                            <Route element={<AdministratorList />} index />

                                            <Route path="create" element={<RoleAccess allowPermission={EPermissions.AddAdministrations} outletElement={<AdministratorCreate />} />} />
                                            <Route path="edit/:id"
                                                element={<RoleAccess allowPermission={EPermissions.EditAdministrations} outletElement={<AdministratorEdit />} />} />
                                        </Route>
                                        {/* <Route
                                            element={<NavigateToResource resource="approval_processings" />}
                                            path="/admin/*"
                                        /> */}
                                        <Route element={<ErrorComponent />} path="/admin/*" />
                                    </Route>
                                    <Route
                                        element={
                                            <Authenticated fallback={<Outlet />} key="authenticated-outer">
                                                <NavigateToResource />
                                            </Authenticated>
                                        }
                                    />
                                    <Route element={<Login />} path="/login" />
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
