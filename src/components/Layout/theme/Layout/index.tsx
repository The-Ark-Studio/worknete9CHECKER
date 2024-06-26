// import { Authenticated, Refine } from "@refinedev/core";

// import { ThemedLayoutV2, useNotificationProvider } from "@refinedev/antd";
// import "@refinedev/antd/dist/reset.css";

// import dataProvider from "@refinedev/simple-rest";
// // import { dataProvider } from "./api/providers/mockDataProvider";
// import { ApprovalProcessingList } from "@src/pages/admin/approval-processing";
// import { ForgotPassword } from "@pg/forgot-password";
// import { Login } from "@pg/login";
// import { Register } from "@pg/register";
// import routerBindings, { NavigateToResource } from "@refinedev/react-router-v6";
// import { CatchAllNavigate } from "@src/components/Layout/Authentication/CatchAllNavigate";
// import { Header } from "@src/components/Layout/Theme/Header";
// import { authProvider } from "@src/providers/auth-provider-api";
// import { Outlet, Route, useLocation } from "react-router-dom";
// // import { authProvider } from "@src/api/providers/authProvider";
// import { AppstoreOutlined } from "@ant-design/icons";
// import { Landing } from "@src/pages/user/landing";
// import { CustomSider } from "@src/components/Layout/Theme/Sider";

// const Layout = () => {
//     const location = useLocation();
//     if (location.pathname == "/") return <Landing />;

//     return (
//         <ThemedLayoutV2 Header={() => <Header sticky />} Sider={(props) => <CustomSider {...props} fixed />}>
//             <Outlet />
//         </ThemedLayoutV2>
//     );
// };

// export const PrivateRoute = () => {
//     const { t } = useTranslation();

//     return (
//         <Refine
//             authProvider={authProvider}
//             dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
//             notificationProvider={useNotificationProvider}
//             options={{
//                 syncWithLocation: false,
//                 warnWhenUnsavedChanges: true,
//                 useNewQueryKeys: true,
//                 projectId: "ANRfnA-imNw4M-JNXP8l"
//             }}
//             resources={[
//                 {
//                     name: "dashboard",
//                     list: "dashboard"
//                 },
//                 {
//                     name: "approval_processing",
//                     list: "/admin/approval-processings",
//                     // create: "/admin/approval-processings/create",
//                     // edit: "/admin/approval-processings/edit/:id",
//                     // show: "/admin/approval-processings/show/:id",
//                     meta: {
//                         canDelete: true
//                     },
//                     options: {
//                         label: t("APPROVAL_PROCESSING.LABEL"),
//                         route: "/admin/approval-processing"
//                     },
//                     icon: <AppstoreOutlined twoToneColor="C2282AFF" />
//                 }
//             ]}
//             routerProvider={routerBindings}
//         >
//             <Route
//                 element={
//                     <Authenticated fallback={<CatchAllNavigate to="/admin/login" />} key="authenticated-inner">
//                         <Layout />
//                     </Authenticated>
//                 }
//             >
//                 <Route element={<NavigateToResource resource="approval_processing" />} index />
//                 <Route path="/admin/approval-processings">
//                     <Route element={<ApprovalProcessingList />} index />
//                     {/* <Route element={<ApprovalProcessingShow />} path="show/:id" /> */}
//                 </Route>
//                 <Route
//                     element={
//                         <Authenticated fallback={<Outlet />} key="authenticated-outer">
//                             <NavigateToResource resource="approval_processing" />
//                         </Authenticated>
//                     }
//                 >
//                     <Route element={<Login />} path="/admin/login" />
//                 </Route>
//                 <Route element={<Register />} path="/admin/register" />
//                 <Route element={<ForgotPassword />} path="/admin/forgot-password" />
//             </Route>
//         </Refine>
//     );
// };
