/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { DownOutlined, MessageOutlined } from "@ant-design/icons";
import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";
import { useGetIdentity } from "@refinedev/core";
import IUserData from "@src/providers/interface/user";
import { Layout as AntdLayout, Avatar, Button, Dropdown, Menu, Space, Typography, theme } from "antd";
import React from "react";
// import { Language } from "../../../languages";
import { useGetLocale, useSetLocale } from "@refinedev/core";
import { useTranslation } from "react-i18next";

const { Text } = Typography;
const { useToken } = theme;
const defaultImg = "https://i.pravatar.cc/300";

// export const Header = () => {
export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({ sticky }) => {
    const { token } = useToken();
    const { data: user } = useGetIdentity<IUserData>();
    const { i18n } = useTranslation();
    const locale = useGetLocale();
    const changeLanguage = useSetLocale();
    const currentLocale = locale();

    const menu = (
        <Menu selectedKeys={currentLocale ? [currentLocale] : []}>
            {[...(i18n.languages || [])].sort().map((lang: string) => (
                <Menu.Item
                    icon={
                        <span style={{ marginRight: 8 }}>
                            <Avatar size={16} src={`/images/flags/${lang}.svg`} />
                        </span>
                    }
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                >
                    {lang === "kor" ? "Korean" : lang === "en" ? "English" : "Vietnamese"}
                </Menu.Item>
            ))}
        </Menu>
    );

    const headerStyles: React.CSSProperties = {
        backgroundColor: token.colorBgElevated,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0px 24px",
        height: "64px"
    };

    // if (sticky) {
    //     headerStyles.position = "sticky";
    //     headerStyles.top = 0;
    //     headerStyles.zIndex = 1;
    // }

    return (
        <AntdLayout.Header style={headerStyles}>
            <Space>
                {/* <Switch
                    checkedChildren="🌛"
                    defaultChecked={mode === "dark"}
                    onChange={() => setMode(mode === "light" ? "dark" : "light")}
                    unCheckedChildren="🔆"
                /> */}
                {/* <Language /> */}
                <Dropdown overlay={menu}>
                    <Button type="link">
                        <Space>
                            <Avatar size={16} src={`/images/flags/${currentLocale}.svg`} />
                            {currentLocale === "kor" ? "Korean" : currentLocale === "en" ? "English" : "Vietnamese"}
                            <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>
                <Space size="middle" style={{ marginLeft: "8px" }}>
                    <MessageOutlined style={{ fontSize: "20px" }} />
                    {user?.avatarImg ? (
                        <Avatar alt={user?.name} src={user?.avatarImg} />
                    ) : (
                        <Avatar alt={user?.name} src={defaultImg} />
                    )}
                    {user?.name ? (
                        <Text strong>
                            {user.name}
                        </Text>
                    ) : null}
                </Space>
            </Space>
        </AntdLayout.Header>
    );
};
