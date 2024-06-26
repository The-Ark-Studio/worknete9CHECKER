import {
    BarsOutlined,
    DashboardOutlined,
    LeftOutlined,
    LogoutOutlined,
    RightOutlined,
    UnorderedListOutlined
} from "@ant-design/icons";
import {
    CanAccess,
    ITreeMenu,
    pickNotDeprecated,
    useActiveAuthProvider,
    useIsExistAuthentication,
    useLink,
    useLogout,
    useMenu,
    useRefineContext,
    useRouterContext,
    useRouterType,
    useTitle,
    useWarnAboutChange
} from "@refinedev/core";
import { Button, Drawer, Grid, Image, Layout, Menu, Space, theme } from "antd";
import React from "react";

// import { drawerButtonStyles } from "@refinedev/antd";
import promtionImg from "@asset/promotion.jpeg";
import styles from "@asset/styles.module.css";
import { RefineThemedLayoutV2SiderProps, useThemedLayoutContext } from "@refinedev/antd";
import { useTranslate } from "@refinedev/core";
import { CustomTitle } from "./SliderTitle";

export const CustomSider: React.FC<RefineThemedLayoutV2SiderProps> = ({
    Title: titleFromProps,
    render,
    meta,
    fixed,
    activeItemDisabled = false
}) => {
    const { token } = theme.useToken();
    const { siderCollapsed, setSiderCollapsed, mobileSiderOpen, setMobileSiderOpen } = useThemedLayoutContext();

    const isExistAuthentication = useIsExistAuthentication();
    const routerType = useRouterType();
    const NewLink = useLink();
    const { warnWhen, setWarnWhen } = useWarnAboutChange();
    const { Link: LegacyLink } = useRouterContext();
    const Link = routerType === "legacy" ? LegacyLink : NewLink;
    const TitleFromContext = useTitle();
    const { menuItems, selectedKey, defaultOpenKeys } = useMenu({ meta });
    const breakpoint = Grid.useBreakpoint();
    const { hasDashboard } = useRefineContext();
    const authProvider = useActiveAuthProvider();
    const { mutate: mutateLogout } = useLogout({
        v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy)
    });
    const translate = useTranslate();

    const isMobile = typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;

    const RenderToTitle = titleFromProps ?? TitleFromContext ?? CustomTitle;

    const renderTreeView = (tree: ITreeMenu[], selectedKey?: string) => {
        return tree.map((item: ITreeMenu) => {
            const { icon, label, route, key, name, children, parentName, meta, options } = item;
            if (children.length > 0) {
                return (
                    <CanAccess
                        action="list"
                        key={item.key}
                        params={{
                            resource: item
                        }}
                        resource={name.toLowerCase()}
                    >
                        <Menu.SubMenu icon={icon ?? <UnorderedListOutlined />} key={item.key} title={label}>
                            {renderTreeView(children, selectedKey)}
                        </Menu.SubMenu>
                    </CanAccess>
                );
            }
            const isSelected = key === selectedKey;
            const isRoute = !(
                pickNotDeprecated(meta?.parent, options?.parent, parentName) !== undefined && children.length === 0
            );

            const linkStyle: React.CSSProperties = activeItemDisabled && isSelected ? { pointerEvents: "none" } : {};

            return (
                <CanAccess
                    action="list"
                    key={item.key}
                    params={{
                        resource: item
                    }}
                    resource={name.toLowerCase()}
                >
                    <Menu.Item icon={icon ?? (isRoute && <UnorderedListOutlined />)} key={item.key} style={linkStyle}>
                        <Link style={linkStyle} to={route ?? ""}>
                            {label}
                        </Link>
                        {!siderCollapsed && isSelected ? <div className="ant-menu-tree-arrow" /> : null}
                    </Menu.Item>
                </CanAccess>
            );
        });
    };

    const handleLogout = () => {
        if (warnWhen) {
            const confirm = window.confirm(translate("WARNING_UNSAVE_CHANGES"));

            if (confirm) {
                setWarnWhen(false);

                mutateLogout();
            }
        } else {
            mutateLogout();
        }
    };

    const logout = isExistAuthentication && (
        <Menu.Item icon={<LogoutOutlined />} key="logout" onClick={() => handleLogout()}>
            {translate("BUTTONS.LOGOUT")}
        </Menu.Item>
    );

    const dashboard = hasDashboard ? (
        <Menu.Item icon={<DashboardOutlined />} key="dashboard">
            <Link to="/">{translate("DASHBOARD.SUB_TITLE")}</Link>
            {!siderCollapsed && selectedKey === "/" ? <div className="ant-menu-tree-arrow" /> : null}
        </Menu.Item>
    ) : null;

    const items = renderTreeView(menuItems, selectedKey);

    const renderSider = () => {
        if (render) {
            return render({
                dashboard,
                items,
                logout,
                collapsed: siderCollapsed
            });
        }
        return (
            <>
                {dashboard}
                {items}
                {logout}
            </>
        );
    };

    const renderMenu = () => {
        return (
            <Menu
                defaultOpenKeys={defaultOpenKeys}
                mode="inline"
                onClick={() => {
                    setMobileSiderOpen(false);
                }}
                selectedKeys={selectedKey ? [selectedKey] : []}
                style={{
                    paddingTop: "8px",
                    border: "none",
                    overflow: "auto",
                    height: "calc(100% - 72px)",
                    width: "250px"
                }}
            >
                {renderSider()}
                <Space className={styles.div_container_center} style={{ marginTop: "5vw" }}>
                    <Image preview={false} src={promtionImg} />
                </Space>
                <Space className={styles.div_container_center} style={{ marginTop: "2vw" }}>
                    <Image preview={false} src={promtionImg} />
                </Space>
            </Menu>
        );
    };

    const renderDrawerSider = () => {
        return (
            <>
                <Drawer
                    bodyStyle={{
                        padding: 0
                    }}
                    closable={false}
                    maskClosable={true}
                    onClose={() => setMobileSiderOpen(false)}
                    open={mobileSiderOpen}
                    placement="left"
                    width={200}
                >
                    <Layout>
                        <Layout.Sider
                            style={{
                                height: "100vh",
                                backgroundColor: token.colorBgContainer,
                                borderRight: `1px solid ${token.colorBgElevated}`
                            }}
                        >
                            <div
                                style={{
                                    width: "200px",
                                    padding: "0 16px",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    height: "64px",
                                    backgroundColor: token.colorBgElevated
                                }}
                            >
                                <RenderToTitle collapsed={false} />
                            </div>
                            {renderMenu()}
                        </Layout.Sider>
                    </Layout>
                </Drawer>
                <Button
                    // style={drawerButtonStyles}
                    icon={<BarsOutlined />}
                    onClick={() => setMobileSiderOpen(true)}
                    size="large"
                />
            </>
        );
    };

    if (isMobile) {
        return renderDrawerSider();
    }

    const siderStyles: React.CSSProperties = {
        backgroundColor: token.colorBgContainer,
        borderRight: `1px solid ${token.colorBgElevated}`
    };

    if (fixed) {
        siderStyles.position = "fixed";
        siderStyles.top = 0;
        siderStyles.height = "100vh";
        siderStyles.zIndex = 999;
    }

    return (
        <>
            {fixed ? (
                <div
                    style={{
                        width: siderCollapsed ? "80px" : "250px",
                        transition: "all 0.2s"
                    }}
                />
            ) : null}
            <Layout.Sider
                breakpoint="lg"
                collapsed={siderCollapsed}
                collapsedWidth={80}
                collapsible
                onCollapse={(collapsed, type) => {
                    if (type === "clickTrigger") {
                        setSiderCollapsed(collapsed);
                    }
                }}
                style={siderStyles}
                trigger={
                    <Button
                        style={{
                            borderRadius: 0,
                            height: "100%",
                            width: "100%",
                            backgroundColor: token.colorBgElevated
                        }}
                        type="text"
                    >
                        {siderCollapsed ? (
                            <RightOutlined
                                style={{
                                    color: token.colorPrimary
                                }}
                            />
                        ) : (
                            <LeftOutlined
                                style={{
                                    color: token.colorPrimary
                                }}
                            />
                        )}
                    </Button>
                }
            >
                <div
                    style={{
                        width: siderCollapsed ? "80px" : "200px",
                        padding: siderCollapsed ? "0" : "0 16px",
                        display: "flex",
                        justifyContent: siderCollapsed ? "center" : "flex-start",
                        alignItems: "center",
                        height: "64px",
                        backgroundColor: token.colorBgElevated,
                        fontSize: "14px"
                    }}
                >
                    <RenderToTitle collapsed={siderCollapsed} />
                </div>
                {renderMenu()}
            </Layout.Sider>
        </>
    );
};
