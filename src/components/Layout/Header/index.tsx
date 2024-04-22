/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";
import { useGetIdentity } from "@refinedev/core";
import { Avatar, Layout as AntdLayout, Space, Switch, theme, Typography, Flex, Button } from "antd";
import React, { useContext } from "react";
import { ColorModeContext } from "@ctx/color-mode";
import IUserData from "@src/api/authenticated/response/userData";
import i18n from "@src/language";
import { useLocalStorage } from "@src/hooks/useLocalStorage";
import { MessageOutlined } from "@ant-design/icons";

const { Text } = Typography;
const { useToken } = theme;
const defaultImg = "https://i.pravatar.cc/300";

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({ sticky }) => {
    const { token } = useToken();
    const { data: user } = useGetIdentity<IUserData>();
    const { mode, setMode } = useContext(ColorModeContext);

    const listLanguages = [
        {
            "name": "English",
            "value": "en"
        },
        {
            "name": "Vietnamese",
            "value": "vn"
        },
        {
            "name": "Korea",
            "value": "kor"
        }
    ];

    const [defaultLanguage, setDefaultLanguage] = useLocalStorage(
        "language",
        "kor"
    );
    function changeLanguage(language) {
        i18n.changeLanguage(language);
        setDefaultLanguage(language);
    }

    useEffect(() => {
        i18n.changeLanguage(defaultLanguage);
    }, [defaultLanguage]);


    const headerStyles: React.CSSProperties = {
        backgroundColor: token.colorBgElevated,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0px 24px",
        height: "64px"
    };

    if (sticky) {
        headerStyles.position = "sticky";
        headerStyles.top = 0;
        headerStyles.zIndex = 1;
    }

    return (
        <AntdLayout.Header style={headerStyles}>
            <Space>
                {/* <Switch
                    checkedChildren="🌛"
                    defaultChecked={mode === "dark"}
                    onChange={() => setMode(mode === "light" ? "dark" : "light")}
                    unCheckedChildren="🔆"
                /> */}
                <Flex gap="small" wrap="wrap" style={{ display: "flex", justifyContent: "flex-end", marginRight: "2%", width: "100%" }}>
                    {
                        listLanguages.map(function (language, idx) {
                            return <Button
                                style={{ color: defaultLanguage == language.value ? "#C2282AFF" : "black" }}
                                type="text"
                                onClick={() => changeLanguage(language.value)}
                                key={idx}
                            >
                                {language.name}
                            </Button>
                        })
                    }
                </Flex>
                <Space size="middle" style={{ marginLeft: "8px" }}>
                    <MessageOutlined style={{ fontSize: '20px' }} />
                    {user?.avatarImg ? <Avatar alt={user?.name} src={user?.avatarImg} /> : null}
                    {/* <Avatar alt={user?.name} src={defaultImg} /> */}
                    {user?.name ? <Text strong>{user.name}&nbsp;{user.givenName}</Text> : null}
                </Space>
            </Space>
        </AntdLayout.Header>
    );
};
