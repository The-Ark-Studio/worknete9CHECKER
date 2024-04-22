import React from "react";
import { Button, CardProps, FormProps, Layout, LayoutProps, Select, Space, Typography } from "antd";
import { AuthPageProps } from "@refinedev/core";

import { Col, Divider, Row } from 'antd';
import { Flex } from 'antd';

// import {
//     LoginPage,
//     RegisterPage,
//     ForgotPasswordPage,
//     UpdatePasswordPage,
// } from "@refinedev/antd/components";
import { LoginPage } from "../../login"
import { Footer } from "../FooterLayout";
import i18n from "@src/language";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "@src/hooks/useLocalStorage";
import image from "@asset/bg-auth.jpeg";
import styles from "@asset/styles.module.css";

export type AuthProps = AuthPageProps<LayoutProps, CardProps, FormProps> & {
    renderContent?: (
        content: React.ReactNode,
        title: React.ReactNode,
    ) => React.ReactNode;
    title?: React.ReactNode;
};

/**
 * **refine** has a default auth page form served on the `/login` route when the `authProvider` configuration is provided.
 *
 * @see {@link https://refine.dev/docs/api-reference/antd/components/antd-auth-page/} for more details.
 */
export const AuthPage: React.FC<AuthProps> = (props) => {
    const { type } = props;
    const { t } = useTranslation();
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


    const renderView = () => {
        // switch (type) {
        //     case "register":
        //         return <RegisterPage {...props} />;
        //     case "forgotPassword":
        //         return <ForgotPasswordPage {...props} />;
        //     case "updatePassword":
        //         return <UpdatePasswordPage {...props} />;
        //     default:
        //         return <LoginPage {...props} />;
        // }
        return <LoginPage {...props} />;
    };

    return (
        <Row
            style={{
                width: "100vw",
                height: "100%",
                minHeight: "100vh",
                overflowX: "hidden"
            }}>
            <Col span={12}>
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        minHeight: "100vh",
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}>
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
                <Flex gap="small" wrap="wrap" style={{ display: "flex", justifyContent: "flex-end", marginRight: "2%" }}>
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
                {renderView()}
                <Footer />
            </Col>
        </Row >
    );

};
