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
import { ApprovalProcessingList } from "./pages/admin/approval-processing";
import { ForgotPassword } from "./pages/authentication/forgot-password";
import { Landing } from "./pages/user/landing";
import { Login } from "./pages/authentication/login";
import { Register } from "./pages/authentication/register";
import { authProviderAdmin } from "./providers/auth-provider-admin-api";
import { dataProvider } from "./providers/data-provider-api";
import IRole from "./providers/interface/role";
import { EPermissions } from "./providers/interface/permission-enum";
import IPermission from "./providers/interface/permission";
import { AdministratorEdit } from "./pages/admin/administrators/edit";
import { AdministratorCreate } from "./pages/admin/administrators/create";
import { MainSite } from "./pages/user/main";
import { Privacy } from "./pages/user/privacy";
import { Terms } from "./pages/user/terms";
import { Copyrights } from "./pages/user/copyrights";
import { FAQs } from "./pages/user/faqs";
import { AboutUs } from "./pages/user/about-us";
import { Information } from "./pages/user/information";
import NoPermission from "./components/Common/NoPermissionPage";
import { ApprovalProcessingCreate } from "./pages/admin/approval-processing/create";
import { ApplicationList } from "./pages/admin/applications";
import { AddApplications } from "./pages/admin/applications/create";

const Layout = () => {
    const location = useLocation();
    if (location.pathname == "/") return null;

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
                                dataProvider={dataProvider(urlLocal)}
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
                                        list: "/admin/approval-processing",
                                        // create: "/admin/approval-processing/create",
                                        // edit: "/admin/approval-processing/edit/:id",
                                        show: "/admin/approval-processing/:id",
                                        meta: {
                                            canDelete: true
                                        },
                                        options: {
                                            label: t("APPROVAL_PROCESSING.LABEL"),
                                            route: "/admin/approval-processing"
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
                                            route: "/admin/applications"
                                        },
                                        icon: <BookOutlined twoToneColor="C2282AFF" />
                                    },
                                    {
                                        name: "applications",
                                        list: "/admin/applications",
                                        create: "/admin/applications/create",
                                        edit: "/admin/applications/edit/:id",
                                        show: "/admin/applications/:id",
                                        meta: {
                                            canDelete: true
                                        },
                                        options: {
                                            label: t("APPLICATIONS.LABEL"),
                                            route: "/admin/administrators"
                                        },
                                        icon: <UsergroupAddOutlined twoToneColor="C2282AFF" />
                                    }
                                ]}
                                routerProvider={routerBindings}
                            >
                                <DocumentTitleHandler />
                                <Routes>
                                    <Route element={<Landing />} index path="/" />
                                    <Route element={<MainSite />} index path="/main" />
                                    <Route element={<Privacy />} index path="/privacy" />
                                    <Route element={<Terms />} index path="/terms" />
                                    <Route element={<AboutUs />} index path="/about" />
                                    <Route element={<Copyrights />} index path="/copyrights" />
                                    <Route element={<FAQs
                                    />} index path="/faqs" />

                                    <Route element={<Information
                                    />} index path="/information" />
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
                                        <Route element={<NavigateToResource resource="approval-processing" />} index />
                                        <Route element={<RoleAccess allowPermission={EPermissions.ViewApprovalProcessing} outletElement={<Outlet />} />} path="/admin/approval-processing">
                                            <Route element={<ApprovalProcessingList />} index />
                                            {/* <Route path="create" element={<RoleAccess allowPermission={EPermissions.AddApplications} outletElement={<ApprovalProcessingCreate />} />} /> */}
                                        </Route>
                                        <Route element={<RoleAccess allowPermission={EPermissions.ViewApplications} outletElement={<Outlet />} />} path="/admin/applications">
                                            <Route element={<ApplicationList />} index />
                                            <Route path="create" element={<RoleAccess allowPermission={EPermissions.AddApplications} outletElement={<AddApplications />} />} />
                                        </Route>
                                        <Route path="/admin/administrators" element={<RoleAccess allowPermission={EPermissions.ViewAdministrators} outletElement={<Outlet />} />}>
                                            <Route element={<AdministratorList />} index />

                                            <Route path="create" element={<RoleAccess allowPermission={EPermissions.AddAdministrations} outletElement={<AdministratorCreate />} />} />
                                            <Route path="edit/:id"
                                                element={<RoleAccess allowPermission={EPermissions.EditAdministrations} outletElement={<AdministratorEdit />} />} />
                                        </Route>
                                        <Route
                                            element={<NavigateToResource resource="approval-processing" />}
                                            path="/admin/*"
                                        />
                                        <Route element={<NoPermission />} path="/admin/unauthorized" />
                                        <Route element={<ErrorComponent />} path="/admin/*" />
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
