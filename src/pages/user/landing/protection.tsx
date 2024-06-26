import seamlessImg from "@asset/landing/seamless/seamless-img.png";

import styles from "@asset/styles.module.css";
import { Col, Row, Typography } from "antd";

export const Protection = () => {
    const { t } = useTranslation();
    return (
        <Row className={styles.protection}>
            <Col offset={2} span={7} style={{ marginTop: "0" }}>
                <div
                    className={styles.img}
                    style={{
                        backgroundImage: `url(${seamlessImg})`
                    }}
                />
            </Col>
            <Col span={14} style={{ marginTop: "5vw" }}>
                <Typography
                    className={styles.title_h2}
                    style={{
                        fontFamily: "var(--landing-font-family)",
                        fontWeight: "700",
                        paddingTop: "1vw",
                        color: "var(--primary)"
                    }}
                >
                    {t("LANDPAGE.SEAMLESS.TITLE")}
                </Typography>
                <Typography
                    className={styles.title_h6}
                    style={{
                        fontFamily: "var(--landing-font-family)",
                        paddingTop: "1.5vw",
                        color: "#323743FF"
                    }}
                >
                    {t("LANDPAGE.SEAMLESS.TEXT_A")}
                </Typography>
                <br />
                <Typography
                    className={styles.title_h6}
                    style={{
                        fontFamily: "var(--landing-font-family)",
                        paddingTop: "1vw",
                        fontSize: "1vw"
                    }}
                >
                    {t("LANDPAGE.SEAMLESS.TEXT_B")}
                </Typography>
            </Col>
        </Row>
    );
};
