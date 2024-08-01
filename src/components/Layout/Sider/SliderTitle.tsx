
import E9Logo from "@asset/e9-logo.svg";
import styles from "@asset/styles.module.css";
import { RefineLayoutThemedTitleProps } from "@refinedev/antd";
import { useLink, useRouterContext, useRouterType } from "@refinedev/core";
import { Avatar, Space, Typography, theme } from "antd";
import React from "react";


export const CustomTitle: React.FC<RefineLayoutThemedTitleProps> = ({
    collapsed,
    // icon = defaultIcon,
    // text,
    wrapperStyles
}) => {
    const { token } = theme.useToken();
    const routerType = useRouterType();
    const Link = useLink();
    const { Link: LegacyLink } = useRouterContext();
    const { t } = useTranslation();

    const ActiveLink = routerType === "legacy" ? LegacyLink : Link;

    return (
        <ActiveLink
            style={{
                display: "inline-block",
                textDecoration: "none",
                marginLeft: "-1vw"
            }}
            to="/approval-processing"
        >
            {/* <Space
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "inherit",
                    ...wrapperStyles
                }}
            > */}
            {/* <div
                    style={{
                        height: "24px",
                        width: "24px",
                        color: token.colorPrimary,
                    }}
                >
                    {icon}
                </div> */}
            {/* <Avatar alt="e9-logo" className={styles.header_e9_logo} src={E9Logo} />
                {!collapsed ? (
                    <div style={{ width: "200px", marginTop: "10%" }}>
                        <Typography
                            style={{
                                fontSize: "small",
                                marginBottom: 0,
                                fontWeight: 700,
                                color: "#565D6DFF",
                                width: "50vw"
                            }}
                        >
                            {t("DASHBOARD.SUB_TITLE")}
                        </Typography>
                        <Typography
                            style={{
                                fontSize: "large",
                                marginBottom: 0,
                                fontWeight: 700
                            }}
                        >
                            {t("SYSTEM_NAME")}
                        </Typography>
                    </div>
                ) : null}
            </Space> */}
            <Space className={styles.header_left}>
                <Avatar alt="e9-logo"
                    className={styles.header_e9_logo}
                    src={E9Logo}
                    onClick={() => window.open("/", '_blank', "noopener,noreferrer")}
                />
                <div style={{ width: "22vw" }} onClick={() => window.open("/", '_blank', "noopener,noreferrer")}>
                    <Typography className={styles.header_sub_title}>{t("DASHBOARD.SUB_TITLE")}</Typography>
                    <Typography className={styles.header_title}>{t("SYSTEM_NAME")}</Typography>
                </div>
            </Space>
        </ActiveLink>
    );
};
