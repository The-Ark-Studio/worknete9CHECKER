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

import { AppstoreOutlined, BookOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import routerBindings, {
    CatchAllNavigate,
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Outlet, Route, Routes, Navigate, useLocation } from "react-router-dom";

import { Header } from "@comp/Layout/Header";
import { CustomSider } from "@comp/Layout/Sider";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { AdministratorList } from "@pg/admin/administrators";
import { ApprovalProcessingList, ApprovalProcessingListNew } from "@pg/admin/approval-processing";
import { ForgotPassword } from "@pg/authentication/forgot-password";
import { Login } from "@pg/authentication/login";
import { Register } from "@pg/authentication/register";
import { authProviderAdmin } from "./providers/auth-provider-admin-api";
import { dataProvider } from "./providers/data-provider-api";
import IRole from "./providers/interface/role";
import { EPermissions } from "./providers/interface/permission-enum";
import IPermission from "./providers/interface/permission";
import { AdministratorEdit } from "@pg/admin/administrators/edit";
import { AdministratorCreate } from "@pg/admin/administrators/create";
import NoPermission from "@comp/Common/NoPermissionPage";
import { ApprovalProcessingCreate } from "@pg/admin/approval-processing/create";
import { ApplicationList } from "@pg/admin/applications";
import { AddApplications } from "@pg/admin/applications/create";

const Layout = () => {
    const location = useLocation();
    // if (location.pathname == "/") return null;

    return (
        <ThemedLayoutV2 Header={() => <Header sticky />} Sider={(props) => <CustomSider {...props} fixed />}>
            <Outlet />
        </ThemedLayoutV2>
    );
};




const urlProduction = "https://services.worknete9.com/api";
const urlLocal = "http://localhost:8080/api";

const App: React.FC = () => {
    const { t, i18n } = useTranslation();

    const RoleAccess = ({ allowPermission, outletElement }) => {
        if (allowPermission === undefined)
            return <Navigate to="/unauthorized" replace />;

        const userRole: IRole = JSON.parse(localStorage.getItem("role") || "{}");
        const userPermissions: Array<IPermission> = userRole?.permissions;

        let hasPermission = false;
        userPermissions.forEach(up => {
            if (up.name == allowPermission)
                hasPermission = true
        });

        if (hasPermission)
            return outletElement;
        return <Navigate to="/unauthorized" replace />;
    };

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
                            <Refine
                                authProvider={authProviderAdmin}
                                dataProvider={dataProvider(urlProduction)}
                                i18nProvider={i18nProvider}
                                notificationProvider={useNotificationProvider}
                                options={{
                                    syncWithLocation: true,
                                    warnWhenUnsavedChanges: true,
                                    useNewQueryKeys: true,
                                    projectId: "ANRfnA-imNw4M-JNXP8l",
                                }}
                                resources={[
                                    {
                                        name: "approval-processing",
                                        list: "/approval-processing",
                                        // create: "/-========/ edit: "/approval-processing/edit/:id",
                                        show: "/approval-processing/:id",
                                        meta: {
                                            canDelete: true
                                        },
                                        options: {
                                            label: t("APPROVAL_PROCESSING.LABEL"),
                                            route: "/approval-processing"
                                        },
                                        icon: <AppstoreOutlined twoToneColor="C2282AFF" />
                                    },
                                    {
                                        name: "administrators",
                                        list: "/administrators",
                                        create: "/administrators/create",
                                        edit: "/administrators/edit/:id",
                                        // show: "/administrators/:id",
                                        meta: {
                                            canDelete: true
                                        },
                                        options: {
                                            label: t("ADMINISTRATORS.LABEL"),
                                            route: "/administrators"
                                        },
                                        icon: <BookOutlined twoToneColor="C2282AFF" />
                                    },
                                    {
                                        name: "applications",
                                        list: "/applications",
                                        create: "/applications/create",
                                        edit: "/applications/edit/:id",
                                        show: "/applications/:id",
                                        meta: {
                                            canDelete: true
                                        },
                                        options: {
                                            label: t("APPLICATIONS.LABEL"),
                                            route: "/applications"
                                        },
                                        icon: <UsergroupAddOutlined twoToneColor="C2282AFF" />
                                    }
                                ]}
                                routerProvider={routerBindings}
                            >
                                {/* <DocumentTitleHandler /> */}
                                <Routes>
                                    <Route path="/" element={<NavigateToResource resource="approval-processing" />} index />
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
                                        {/* <Route path="/" element={<NavigateToResource resource="approval-processing" />} index /> */}
                                        <Route element={<RoleAccess allowPermission={EPermissions.ViewApprovalProcessing} outletElement={<Outlet />} />} path="/approval-processing">
                                            <Route element={<ApprovalProcessingListNew />} index />
                                        </Route>
                                        <Route element={<RoleAccess allowPermission={EPermissions.ViewApplications} outletElement={<Outlet />} />} path="/applications">
                                            <Route element={<ApplicationList />} index />
                                            <Route path="create" element={<RoleAccess allowPermission={EPermissions.AddApplications} outletElement={<AddApplications />} />} />
                                        </Route>
                                        <Route path="/administrators" element={<RoleAccess allowPermission={EPermissions.ViewAdministrators} outletElement={<Outlet />} />}>
                                            <Route element={<AdministratorList />} index />

                                            <Route path="create" element={<RoleAccess allowPermission={EPermissions.AddAdministrations} outletElement={<AdministratorCreate />} />} />
                                            <Route path="edit/:id"
                                                element={<RoleAccess allowPermission={EPermissions.EditAdministrations} outletElement={<AdministratorEdit />} />} />
                                        </Route>
                                        <Route
                                            element={<NavigateToResource resource="approval-processing" />}
                                            path="/*"
                                        />
                                        <Route element={<NoPermission />} path="/unauthorized" />
                                        <Route element={<ErrorComponent />} path="/*" />
                                    </Route>
                                    <Route
                                        element={
                                            <Authenticated fallback={<Outlet />} key="authenticated-outer">
                                                <NavigateToResource />
                                            </Authenticated>
                                        }
                                    />
                                    <Route element={<Login />} path="/login" />
                                    <Route element={<Register />} path="/register" />
                                    <Route element={<ForgotPassword />} path="/forgot-password" />
                                </Routes>
                                <RefineKbar />
                                <UnsavedChangesNotifier />
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
