import { DownOutlined } from "@ant-design/icons";
import E9Icon from "@asset/e9-icon.jpeg";

import styles from "@asset/styles.module.css";

import { Avatar, Button, Col, Dropdown, Flex, Menu, Row, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";

import { AboutUs } from "./about";
import { Conclusion } from "./conclusion";
import { Feature } from "./feature";
import { FeatureBenefits } from "./feature-benifits";
import { Introduction } from "./intro";
import { Protection } from "./protection";
import { Simplified } from "./simplified";
import { UserFriendly } from "./user-friendly";

export const Landing = () => {
    const { t, i18n } = useTranslation();
    const locale = i18n.language;
    const [currentLocale, setCurrentLocale] = useState(locale);

    function changeLanguage(lang) {
        i18n.changeLanguage(lang);
        setCurrentLocale(lang);
    }

    const menu = (
        <Menu selectedKeys={currentLocale ? [currentLocale] : []}>
            {[...(i18n.languages || [])].sort().map((lang: string) => (
                <Menu.Item
                    icon={
                        <span style={{ marginRight: 8 }}>
                            <Avatar
                                size={{ xs: 6, sm: 10, md: 16, lg: 16, xl: 16, xxl: 16 }}
                                src={`../public/images/flags/${lang}.svg`}
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

    return (
        <Flex style={{ width: "100%" }} vertical>
            <Row style={{ backgroundColor: "#FFFFFFFF" }}>
                {/* Header left  */}
                <Col span={14} style={{ position: "absolute", marginTop: "0.5vw" }}>
                    <Space className={styles.header_left}>
                        <Avatar alt="e9-logo" className={styles.header_e9_logo} src={E9Icon} />
                        <div style={{ width: "22vw" }}>
                            <Typography className={styles.header_sub_title}>{t("DASHBOARD.SUB_TITLE")}</Typography>
                            <Typography className={styles.header_title}>{t("SYSTEM_NAME")}</Typography>
                        </div>
                    </Space>
                </Col>
                {/* Header right  */}
                <Col span={12} />
                <Col span={12}>
                    <Flex className={styles.header_right} gap="small" wrap="wrap">
                        <Dropdown overlay={menu}>
                            <Button
                                style={{
                                    fontSize: "0.8vw"
                                }}
                                type="link"
                            >
                                <Space>
                                    <Avatar
                                        size={{ xs: 6, sm: 10, md: 16, lg: 16, xl: 16, xxl: 16 }}
                                        src={`../public/images/flags/${currentLocale}.svg`}
                                    />
                                    {currentLocale === "kor"
                                        ? "Korean"
                                        : currentLocale === "en"
                                            ? "English"
                                            : "Vietnamese"}
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                        <Button
                            className={styles.header_right_button}
                            onClick={() => window.open("/main", '_blank', "noopener,noreferrer")}
                        >{t("BUTTONS.VERIFY_NOW")}</Button>
                    </Flex>
                </Col>
            </Row>
            <Introduction />
            <AboutUs />
            <Feature />
            <Simplified />
            <FeatureBenefits />
            <Protection />
            <UserFriendly />
            <Conclusion />
        </Flex>
    );
};
