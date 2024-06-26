import E9Icon from "@asset/e9-icon.jpeg";
import styles from "@asset/styles.module.css";
import { RefineLayoutThemedTitleProps } from "@refinedev/antd";
import { useLink, useRouterContext, useRouterType } from "@refinedev/core";
import { Avatar, Space, Typography, theme } from "antd";
import React from "react";

const defaultIcon = (
    <svg data-testid="refine-logo" fill="none" height={24} viewBox="0 0 24 24" width={24} xmlns={E9Icon}>
        <path
            clipRule="evenodd"
            d="M13.7889 0.422291C12.6627 -0.140764 11.3373 -0.140764 10.2111 0.422291L2.21115 4.42229C0.85601 5.09986 0 6.48491 0 8V16C0 17.5151 0.85601 18.9001 2.21115 19.5777L10.2111 23.5777C11.3373 24.1408 12.6627 24.1408 13.7889 23.5777L21.7889 19.5777C23.144 18.9001 24 17.5151 24 16V8C24 6.48491 23.144 5.09986 21.7889 4.42229L13.7889 0.422291ZM8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16V8Z"
            fill="currentColor"
            fillRule="evenodd"
        />
        <path
            d="M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z"
            fill="currentColor"
        />
    </svg>
);

export const CustomTitle: React.FC<RefineLayoutThemedTitleProps> = ({
    collapsed,
    icon = defaultIcon,
    text,
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
                textDecoration: "none"
            }}
            to="/admin/approval-processings"
        >
            <Space
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "inherit",
                    ...wrapperStyles
                }}
            >
                {/* <div
                    style={{
                        height: "24px",
                        width: "24px",
                        color: token.colorPrimary,
                    }}
                >
                    {icon}
                </div> */}
                <Avatar alt="e9-logo" className={styles.header_e9_logo} src={E9Icon} />
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
            </Space>
        </ActiveLink>
    );
};
