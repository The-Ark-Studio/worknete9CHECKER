import { FacebookFilled, LinkedinFilled, MailOutlined, TwitchOutlined, YoutubeFilled } from "@ant-design/icons";

import styles from "@asset/styles.module.css";
import { Button, Flex, Input, Space, Typography } from "antd";

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <Flex style={{ width: "100%", height: "40vh", marginTop: "10vh", fontFamily: "Abhaya Libre" }} vertical>
            <div className={styles.div_container_center}>
                <Typography className={styles.title_h5} style={{ fontWeight: "600" }}>
                    {t("LANDPAGE.FOOTER.SUBSCRIBE")}
                </Typography>
            </div>

            <div className={styles.div_container_center}>
                <Space.Compact style={{ width: "20%", height: "20%vh", marginTop: "1%" }}>
                    <Input
                        placeholder={t("LANDPAGE.FOOTER.INPUT_EMAIL_PLACEHOLDER")}
                        prefix={<MailOutlined />}
                        style={{
                            backgroundColor: "#EAECF0FF",
                            borderRadius: "22px 0px 0px 22px"
                        }}
                    />
                    <Button
                        style={{
                            borderRadius: "0px 22px 22px 0px",
                            height: "20%vh"
                        }}
                        type="primary"
                    >
                        {t("BUTTONS.SUBSCRIBE")}
                    </Button>
                </Space.Compact>
            </div>
            <div className={styles.div_container_center} style={{ marginTop: "5vw" }}>
                <a className={styles.footer_link}>{t("BUTTONS.PRIVACY")}</a>
                <a className={styles.footer_link}>{t("BUTTONS.ABOUT_US")}</a>
                <a className={styles.footer_link}>{t("BUTTONS.TERMS")}</a>
                <a className={styles.footer_link}>{t("BUTTONS.HELP_CENTER")}</a>
                <a className={styles.footer_link}>{t("BUTTONS.CONTACT_US")}</a>
                <a className={styles.footer_link}>{t("BUTTONS.FAQS")}</a>
                <a className={styles.footer_link}>{t("BUTTONS.SITEMAP")}</a>
                <a>
                    <TwitchOutlined style={{ color: "#2EBAE8FF", marginRight: "0.5vw" }} />
                </a>
                <a>
                    <FacebookFilled style={{ color: "#2E6FE8FF", marginRight: "0.5vw" }} />
                </a>
                <a>
                    <LinkedinFilled style={{ color: "#2148A5FF", marginRight: "0.5vw" }} />
                </a>
                <a>
                    <YoutubeFilled style={{ color: "#E82E2EFF" }} />
                </a>
            </div>
            <hr style={{ color: "white", width: "80%" }} />
            <div className={styles.div_container_center} style={{ marginTop: "1vw" }}>
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
        </Flex>
    );
};
