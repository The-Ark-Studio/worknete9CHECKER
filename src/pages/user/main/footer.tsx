import React from 'react';
import "@asset/styles.module.css"
import { Menu, Row, Typography } from 'antd';
import styles from "@asset/styles.module.css";
import topicImg from "@asset/main/eligible.png";
import { LanguageSelector } from '@src/components/Common/LanguageSelector';
import { TwitterOutlined, LinkedinFilled, FacebookFilled, YoutubeFilled } from '@ant-design/icons';

const { Title } = Typography;

export const FooterMain = () => {
    const { t } = useTranslation("common");
    return (
        <div className={styles.footer_main}>
            <Menu mode="horizontal" style={{ display: 'flex', justifyContent: 'center' }}>
                {/* Your Menu.Item components go here */}
                <Menu.Item style={{ marginRight: 'auto' }}>
                    <LanguageSelector />
                </Menu.Item>
                <Menu.Item className={styles.menu_item_footer}
                    key="1"
                    style={{ marginRight: "0.5vw" }}
                >{t("BUTTONS.PRIVACY")}</Menu.Item>
                <Menu.Item className={styles.menu_item_footer}
                    key="2"
                    style={{ marginRight: "0.5vw" }}
                >{t("BUTTONS.ABOUT_US")}</Menu.Item>
                <Menu.Item className={styles.menu_item_footer}
                    key="3"
                    style={{ marginRight: "0.5vw" }}
                >{t("BUTTONS.TERMS")}</Menu.Item>
                <Menu.Item className={styles.menu_item_footer}
                    key="4"
                    style={{ marginRight: "0.5vw" }}
                >{t("BUTTONS.HELP_CENTER")}</Menu.Item>
                <Menu.Item className={styles.menu_item_footer}
                    key="5"
                    style={{ marginRight: "0.5vw" }}
                >{t("BUTTONS.CONTACT_US")}</Menu.Item>
                <Menu.Item className={styles.menu_item_footer}
                    key="6"
                    style={{ marginRight: "0.5vw" }}
                >{t("BUTTONS.FAQS")}</Menu.Item>
                <Menu.Item className={styles.menu_item_footer}
                    key="7"
                    style={{ marginRight: "0.5vw" }}
                >{t("BUTTONS.SITEMAP")}</Menu.Item>
                <Menu.Item key="8" className={styles.menu_item_footer} style={{ marginLeft: 'auto' }}>
                    <TwitterOutlined style={{ fontSize: '1.4vw', color: '#08c', marginRight: "1vw" }} />
                    <FacebookFilled style={{ fontSize: '1.4vw', color: '#2E6FE8FF', backgroundColor: "#fff", marginRight: "1.4vw" }} />
                    <LinkedinFilled style={{ fontSize: '1.4vw', color: '#2148A5FF', backgroundColor: "#fff", marginRight: "1.5vw" }} />
                    <YoutubeFilled style={{ fontSize: '1.4vw', color: '#E82E2EFF', backgroundColor: "#fff" }} />
                </Menu.Item>
            </Menu>
            <div className={styles.div_container_center} style={{ marginTop: "1vw", fontSize: "0.6vw" }}>
                {t("FOOTER.MANAGE_BY")}&nbsp;
                <a style={{ color: "black" }} target="_blank">
                    {t("FOOTER.MANAGER_NAME")}
                </a>
                &nbsp;| {t("FOOTER.MAKE_BY")}&nbsp;
                <a href={t("COMPANY_URL")} style={{ color: "black" }} target="_blank">
                    {t("FOOTER.COMPANY_NAME")}
                </a>
                &nbsp;{t("FOOTER.COMPANY_ADDRESS")}
                &nbsp;{t("FOOTER.COPY_RIGHT")}
            </div>
        </div >
    )
}