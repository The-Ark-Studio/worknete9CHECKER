/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { Authenticated, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { ErrorComponent, ThemedLayoutV2, useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

// import dataProvider from "@refinedev/simple-rest";
import { dataProvider } from "./api/providers/dataProvider";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import routerBindings, {
    CatchAllNavigate,
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier
} from "@refinedev/react-router-v6";
import { BlogPostCreate, BlogPostEdit, BlogPostList, BlogPostShow } from "./pages/blog-posts";
import { CategoryCreate, CategoryEdit, CategoryList, CategoryShow } from "./pages/categories";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { Header } from "./components/Layout/Header";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ForgotPassword } from "./pages/forgot-password";
import { authProvider } from "@src/api/providers/authProvider";
import { CustomSider } from "./components/Layout/Sider";

const App = () => {
    return (
        <BrowserRouter>
            <RefineKbarProvider>
                <ColorModeContextProvider>
                    <AntdApp>
                        <DevtoolsProvider>
                            <Refine
                                authProvider={authProvider}
                                dataProvider={dataProvider("http://localhost:8080/api")}
                                notificationProvider={useNotificationProvider}
                                options={{
                                    syncWithLocation: true,
                                    warnWhenUnsavedChanges: true,
                                    useNewQueryKeys: true,
                                    projectId: "ANRfnA-imNw4M-JNXP8l"
                                }}
                                resources={[
                                    {
                                        name: "approval_processings",
                                        list: "/approval-processings",
                                        create: "/approval-processings/create",
                                        edit: "/approval-processings/edit/:id",
                                        show: "/approval-processings/show/:id",
                                        meta: {
                                            canDelete: true
                                        }
                                    },
                                    {
                                        name: "blog_posts",
                                        list: "/blog-posts",
                                        create: "/blog-posts/create",
                                        edit: "/blog-posts/edit/:id",
                                        show: "/blog-posts/show/:id",
                                        meta: {
                                            canDelete: true
                                        }
                                    },
                                    {
                                        name: "categories",
                                        list: "/categories",
                                        create: "/categories/create",
                                        edit: "/categories/edit/:id",
                                        show: "/categories/show/:id",
                                        meta: {
                                            canDelete: true
                                        }
                                    }
                                ]}
                                routerProvider={routerBindings}
                            >
                                <Routes>
                                    <Route
                                        element={
                                            <Authenticated
                                                fallback={<CatchAllNavigate to="/login" />}
                                                key="authenticated-inner"
                                            >
                                                <ThemedLayoutV2
                                                    Header={() => <Header sticky />}
                                                    Sider={(props) => <CustomSider {...props} fixed />}
                                                >
                                                    <Outlet />
                                                </ThemedLayoutV2>
                                            </Authenticated>
                                        }
                                    >
                                        <Route element={<NavigateToResource resource="blog_posts" />} index />
                                        <Route path="/approval-processings">
                                            <Route element={<BlogPostList />} index />
                                            <Route element={<BlogPostCreate />} path="create" />
                                            <Route element={<BlogPostEdit />} path="edit/:id" />
                                            <Route element={<BlogPostShow />} path="show/:id" />
                                        </Route>
                                        {/* <Route path="/blog-posts">
                                            <Route element={<BlogPostList />} index />
                                            <Route element={<BlogPostCreate />} path="create" />
                                            <Route element={<BlogPostEdit />} path="edit/:id" />
                                            <Route element={<BlogPostShow />} path="show/:id" />
                                        </Route> */}
                                        <Route path="/categories">
                                            <Route element={<CategoryList />} index />
                                            <Route element={<CategoryCreate />} path="create" />
                                            <Route element={<CategoryEdit />} path="edit/:id" />
                                            <Route element={<CategoryShow />} path="show/:id" />
                                        </Route>
                                        <Route element={<ErrorComponent />} path="*" />
                                    </Route>
                                    <Route
                                        element={
                                            <Authenticated fallback={<Outlet />} key="authenticated-outer">
                                                <NavigateToResource />
                                            </Authenticated>
                                        }
                                    >
                                        <Route element={<Login />} path="/login" />
                                        <Route element={<Register />} path="/register" />
                                        <Route element={<ForgotPassword />} path="/forgot-password" />
                                    </Route>
                                </Routes>

                                <RefineKbar />
                                <UnsavedChangesNotifier />
                                <DocumentTitleHandler />
                            </Refine>
                            {/* <DevtoolsPanel /> */}
                        </DevtoolsProvider>
                    </AntdApp>
                </ColorModeContextProvider>
            </RefineKbarProvider >
        </BrowserRouter >
    );
};

export default App;
