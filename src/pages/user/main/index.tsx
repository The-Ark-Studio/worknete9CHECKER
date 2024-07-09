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
import { ModalComp } from "@src/components/Layout/ModalComp";

export const MainSite = () => {
    const { t } = useTranslation("main");
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(!modalOpen);
    }


    return (
        <Flex style={{ width: "100%" }} vertical>
            <NavbarWithSearch handleOpenModal={handleOpenModal} />
            {/* <Menu mode="horizontal" style={{ display: 'flex', justifyContent: 'center' }}>
                <Menu.Item
                    className={styles.menu_item}
                    key="1"
                    style={{ marginRight: "0.5vw" }}
                    onClick={handleOpenModal}
                >{t("VISA")}</Menu.Item>
                <Menu.Item
                    key="2"
                    className={styles.menu_item}
                    style={{ marginRight: "0.5vw" }}
                    onClick={handleOpenModal}
                >
                    {t("E_SERVICES")}
                </Menu.Item>
                <Menu.Item
                    key="3"
                    className={styles.menu_item}
                    style={{ marginRight: "0.5vw" }}
                    onClick={handleOpenModal}
                >
                    {t("INFORMATION")}

                </Menu.Item>
                <Menu.Item
                    key="4"
                    className={styles.menu_item}
                    onClick={handleOpenModal}
                >
                    {t("EPS")}
                </Menu.Item>
            </Menu> */}
            <BackgroundFrame />
            <OnlineFrom />
            <Topic />
            <FooterMain />
            <ModalComp show={modalOpen} handleOpenModal={handleOpenModal} text="Coming soon!" />
        </Flex>
    );
};
