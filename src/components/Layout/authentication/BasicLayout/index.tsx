import { AuthPageProps } from "@refinedev/core";
import { Avatar, Button, CardProps, Dropdown, Flex, FormProps, LayoutProps, Menu, Space, Typography } from "antd";
import React from "react";

import { Col, Row } from "antd";

// import {
//     LoginPage,
//     RegisterPage,
//     ForgotPasswordPage,
//     UpdatePasswordPage,
// } from "@refinedev/antd/components";
import { DownOutlined } from "@ant-design/icons";
import image from "@asset/bg-auth.jpeg";
import styles from "@asset/styles.module.css";
import { LoginPage } from "@src/components/Layout/Authentication/Login/login-page";
import { useTranslation } from "react-i18next";
import { Footer } from "../FooterLayout";
// import { Language } from "../../../languages";
import { useGetLocale, useSetLocale } from "@refinedev/core";

export type AuthProps = AuthPageProps<LayoutProps, CardProps, FormProps> & {
    renderContent?: (content: React.ReactNode, title: React.ReactNode) => React.ReactNode;
    title?: React.ReactNode;
};

export const AuthPage: React.FC<AuthProps> = (props) => {
    const { type } = props;
    const { t } = useTranslation();

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
                            <Avatar
                                size={{ xs: 6, sm: 10, md: 16, lg: 16, xl: 16, xxl: 16 }}
                                src={`/images/flags/${lang}.svg`}
                            />
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

    const renderView = () => {
        switch (type) {
            //     case "register":
            //         return <RegisterPage {...props} />;
            //     case "forgotPassword":
            //         return <ForgotPasswordPage {...props} />;
            //     case "updatePassword":
            //         return <UpdatePasswordPage {...props} />;
            default:
                return <LoginPage {...props} />;
        }
    };

    return (
        <Row
            style={{
                width: "100vw",
                height: "100%",
                minHeight: "100vh",
                overflowX: "hidden"
            }}
        >
            <Col span={12}>
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        minHeight: "100vh",
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <Typography
                        className={styles.title_h2}
                        style={{
                            fontFamily: "Helvetica",
                            fontWeight: "500",
                            color: "grey",
                            textAlign: "center",
                            marginTop: "20%"
                        }}
                    >
                        {t("MODULE")}
                    </Typography>
                    <Typography
                        className={styles.title_h1}
                        style={{
                            fontFamily: "Abhaya Libre",
                            fontWeight: "600",
                            textAlign: "center",
                            color: "white"
                        }}
                    >
                        {t("SYSTEM_NAME")}
                    </Typography>
                </div>
            </Col>
            <Col span={12}>
                <Flex
                    style={{
                        position: "absolute",
                        right: 0
                    }}
                >
                    <Dropdown overlay={menu}>
                        <Button type="link">
                            <Space>
                                <Avatar
                                    size={{ xs: 6, sm: 10, md: 16, lg: 16, xl: 16, xxl: 16 }}
                                    src={`/images/flags/${currentLocale}.svg`}
                                />
                                {currentLocale === "kor" ? "Korean" : currentLocale === "en" ? "English" : "Vietnamese"}
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </Flex>

                {renderView()}
                <Footer />
            </Col>
        </Row>
    );
};
