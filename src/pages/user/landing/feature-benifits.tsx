import { CaretRightOutlined, GlobalOutlined, SettingOutlined, SmileOutlined } from "@ant-design/icons";
import styles from "@asset/styles.module.css";
import { Col, Row, Typography } from "antd";

export const FeatureBenefits = () => {
    const { t } = useTranslation();
    return (
        <Row style={{ height: "40vw", margin: "3vw" }}>
            <Typography
                className={styles.title_h1}
                style={{
                    fontFamily: "var(--landing-font-family)",
                    fontWeight: "700",
                    textAlign: "center",
                    width: "100%",
                    color: "var(--tertiary5)"
                }}
            >
                {t("LANDPAGE.BENEFITS.TITLE")}
            </Typography>
            <Row>
                <Col offset={2} span={10} style={{ marginTop: "3vh" }}>
                    <SettingOutlined
                        style={{ fontSize: "2.5vw", backgroundColor: "white", color: "var(--tertiary5)" }}
                    />
                    <Typography
                        className={styles.title_h4}
                        style={{
                            fontFamily: "var(--landing-font-family)",
                            fontWeight: "700",
                            paddingTop: "2%"
                        }}
                    >
                        {t("LANDPAGE.BENEFITS.A.TITLE")}
                    </Typography>
                    <Typography
                        className={styles.title_h6}
                        style={{
                            fontFamily: "var(--landing-font-family)",
                            paddingTop: "1%"
                        }}
                    >
                        {t("LANDPAGE.BENEFITS.A.TEXT")}
                    </Typography>
                </Col>
                <Col offset={2} span={10} style={{ marginTop: "3vh" }}>
                    <GlobalOutlined style={{ fontSize: "2.5vw", color: "var(--tertiary5)" }} />
                    <Typography
                        className={styles.title_h4}
                        style={{
                            fontFamily: "var(--landing-font-family)",
                            fontWeight: "700",
                            paddingTop: "2%"
                        }}
                    >
                        {t("LANDPAGE.BENEFITS.B.TITLE")}
                    </Typography>
                    <Typography
                        className={styles.title_h6}
                        style={{
                            fontFamily: "var(--landing-font-family)",
                            paddingTop: "1%"
                        }}
                    >
                        {t("LANDPAGE.BENEFITS.B.TEXT")}
                    </Typography>
                </Col>
            </Row>
            <Row>
                <Col offset={2} span={10} style={{ marginTop: "3vh" }}>
                    <SmileOutlined style={{ fontSize: "2.5vw", color: "var(--tertiary5)" }} />
                    <Typography
                        className={styles.title_h4}
                        style={{
                            fontFamily: "var(--landing-font-family)",
                            fontWeight: "700",
                            paddingTop: "2%"
                        }}
                    >
                        {t("LANDPAGE.BENEFITS.C.TITLE")}
                    </Typography>
                    <Typography
                        className={styles.title_h6}
                        style={{
                            fontFamily: "var(--landing-font-family)",
                            paddingTop: "1%"
                        }}
                    >
                        {t("LANDPAGE.BENEFITS.C.TEXT")}
                    </Typography>
                </Col>
                <Col offset={2} span={10} style={{ marginTop: "3vh" }}>
                    <CaretRightOutlined style={{ fontSize: "2.5vw", color: "var(--tertiary5)" }} />
                    <Typography
                        className={styles.title_h4}
                        style={{
                            fontFamily: "var(--landing-font-family)",
                            fontWeight: "700",
                            paddingTop: "2%",
                            color: "#323743FF"
                        }}
                    >
                        {t("LANDPAGE.BENEFITS.D.TITLE")}
                    </Typography>
                    <Typography
                        className={styles.title_h6}
                        style={{
                            fontFamily: "var(--landing-font-family)",
                            paddingTop: "1%"
                        }}
                    >
                        {t("LANDPAGE.BENEFITS.D.TEXT")}
                    </Typography>
                </Col>
            </Row>
        </Row>
    );
};
