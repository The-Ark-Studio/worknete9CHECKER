import React from 'react';
import { Menu, Input, Avatar, Typography, Button, Modal, Row, Col } from 'antd';
import E9Icon from "@asset/e9-icon.jpeg";
import styles from "@asset/styles.module.css";
import { UserLoginForm } from './login';

const { Search } = Input;

export const NavbarWithSearch = () => {
    const onSearch = value => console.log(value);
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
        <Menu mode="horizontal">
            <Menu.Item>
                <Avatar size={{ xs: 6, sm: 10, md: 16, lg: 24, xl: 40, xxl: 50 }} alt="e9-logo" className={styles.header_e9_logo} src={E9Icon} />
            </Menu.Item>
            <Menu.Item disabled>
                <Typography className={styles.header_sub_title}>{t("SUB_TITLE")}</Typography>
                <Typography className={styles.header_title}>{t("SYSTEM_NAME")}</Typography>
            </Menu.Item>

            <Menu.Item style={{ marginLeft: 'auto' }}>
                <Search
                    placeholder={t("SEARCH")}
                    onSearch={onSearch}
                    style={{
                        width: "25vw",
                        borderRadius: "4px",
                        borderWidth: "1px",
                        borderColor: "var(--text-natural5)"
                    }}
                />
            </Menu.Item>
            <Menu.Item style={{
                marginLeft: 'auto',
                borderRadius: "4px",
                boxShadow: "0px 0px 1px #9095a1ff, 0px 0px 2px #9095a1ff",
                height: "2.5vw"
            }}>
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
                    onClick={showModalAuthentication}
                >
                    {t("APPLICATION")}
                </Button>
                <Modal
                    open={openAuthentication}
                    // onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                    okButtonProps={{ hidden: true }}
                    // cancelButtonProps={{ hidden: true }}
                    width={1000}
                >
                    {/* <p>The feature is in development mode.</p> */}
                    <Row gutter={16} justify="space-around">
                        <Col key={1} span={8} >
                            <Typography className={styles.title_h6}> Login</Typography>
                            <UserLoginForm />
                        </Col>
                        <Col key={2} span={10} >
                            <Typography className={styles.title_h6}> Signup</Typography>
                        </Col>
                    </Row>
                </Modal>
            </Menu.Item>
        </Menu>

    );
};