import React from 'react';
import { Menu, Input, Avatar, Typography, Button, Modal, Row, Col, Space, Flex } from 'antd';
import E9Icon from "@asset/e9-icon.jpeg";
import E9Logo from "@asset/e9-logo.svg"
import styles from "@asset/styles.module.css";
import { UserLoginForm } from './login';
import { useNavigate } from "react-router-dom";

const { Search } = Input;

export const NavbarWithSearch = (props) => {
    const onSearch = value => console.log(value);
    const navigate = useNavigate();
    const { t } = useTranslation("main")
    const [openAuthentication, setOpenAuthentication] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const showModalAuthentication = () => {
        setOpenAuthentication(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpenAuthentication(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpenAuthentication(false);
    };


    return (

        <Row style={{ backgroundColor: "white" }}>
            {/* Header left  */}
            <Col span={8} style={{ position: "absolute", marginTop: "0.5vw" }}>
                <Space className={styles.header_left}>
                    <Avatar alt="e9-logo"
                        className={styles.header_e9_logo}
                        src={E9Logo}
                        onClick={() => window.open("/main", '_blank', "noopener,noreferrer")}
                    />
                    <div style={{ width: "22vw" }} onClick={() => window.open("/main", '_blank', "noopener,noreferrer")}>
                        <Typography className={styles.header_sub_title}>{t("SUB_TITLE")}</Typography>
                        <Typography className={styles.header_title}>{t("SYSTEM_NAME")}</Typography>
                    </div>
                </Space>
            </Col>
            <Col span={15} offset={8}>

                <Menu mode="horizontal" style={{
                    display: 'flex',
                    borderBottom: "none"
                    // height: "2.5vw"
                    // justifyContent: 'center' 
                }}>
                    <Menu.Item
                        key="1"
                        className={styles.menu_item}
                        style={{ marginRight: "0.5vw" }}
                        onClick={props.handleOpenModal}
                    >
                        {t("E_SERVICES")}
                    </Menu.Item>
                    <Menu.Item
                        key="2"
                        className={styles.menu_item}
                        style={{ marginRight: "0.5vw" }}
                        // onClick={props.handleOpenModal}
                        onClick={() => window.open("/information", '_blank', "noopener,noreferrer")}
                    >
                        {t("INFORMATION")}

                    </Menu.Item>
                    <Menu.Item
                        className={styles.menu_item}
                        key="3"
                        style={{ marginRight: "0.5vw" }}
                        onClick={props.handleOpenModal}
                    >
                        {t("VISA")}
                    </Menu.Item>

                    <Menu.Item
                        key="4"
                        className={styles.menu_item}
                        onClick={props.handleOpenModal}
                    >
                        {t("EPS")}
                    </Menu.Item>
                    <Menu.Item
                        key="5"
                        // onClick={props.handleOpenModal}
                        onClick={() => window.open("https://worker.worknete9.com", '_blank', "noopener,noreferrer")}
                        className={styles.menu_item}

                        style={{
                            backgroundColor: "var(--tertiary1)",
                            borderRadius: "4px",
                            marginLeft: "auto",
                            marginRight: "0"
                        }}
                    >
                        {t("APPLICATION")}
                    </Menu.Item>
                </Menu>
            </Col>
            {/* <Col span={8}> */}
            {/* 
                <Flex className={styles.header_right} gap="small" wrap="wrap">
                    <Button
                        className={styles.menu_right_button}
                        style={{ backgroundColor: "var(--white)" }}
                    >
                        {t("KOREAN")}
                    </Button>
                    <Button
                        className={styles.menu_right_button}
                        style={{ backgroundColor: "var(--white)" }}
                    >
                        {t("MINISTRY")}
                    </Button>
                    <Button
                        className={styles.menu_right_button}
                        style={{ backgroundColor: "var(--tertiary1)", borderRadius: "4px" }}
                        // onClick={showModalAuthentication}
                        onClick={props.handleOpenModal}
                    >
                        {t("APPLICATION")}
                    </Button>
                </Flex> */}
            {/* </Col> */}
        </Row>

    );
};