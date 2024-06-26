import { DownOutlined } from "@ant-design/icons";
import E9Icon from "@asset/e9-icon.jpeg";

import styles from "@asset/styles.module.css";

import { Avatar, Button, Col, Dropdown, Flex, Menu, Row, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { NavbarWithSearch } from "./nav";
import { BackgroundFrame } from "./background-frame";
import { OnlineFrom } from "./online-from";
import { Topic } from "./topic";
import { FooterMain } from "./footer";

export const MainSite = () => {
    const { t } = useTranslation("main");

    return (
        <Flex style={{ width: "100%" }} vertical>
            <NavbarWithSearch />
            <Menu mode="horizontal" style={{ display: 'flex', justifyContent: 'center' }}>
                {/* Your Menu.Item components go here */}
                <Menu.Item
                    className={styles.menu_item}
                    key="1"
                    style={{ marginRight: "0.5vw" }}
                >{t("VISA")}</Menu.Item>
                <Menu.Item key="2" className={styles.menu_item} style={{ marginRight: "0.5vw" }}>{t("E_SERVICES")}</Menu.Item>
                <Menu.Item key="3" className={styles.menu_item} style={{ marginRight: "0.5vw" }}>{t("INFORMATION")}</Menu.Item>
                <Menu.Item key="4" className={styles.menu_item}>{t("EPS")}</Menu.Item>
            </Menu>
            <BackgroundFrame />
            <OnlineFrom />
            <Topic />
            <FooterMain />
        </Flex>
    );
};
