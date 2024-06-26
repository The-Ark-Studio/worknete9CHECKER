import aboutCurve from "@asset/landing/about/about-curve.jpeg";
import aboutImg from "@asset/landing/about/about-img.jpeg";

import styles from "@asset/styles.module.css";
import { Col, Image, Row, Typography } from "antd";

export const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <Row
            className={styles.about_us}
            style={{
                height: "25vw",
                margin: "3vw 5vw 3vw 5vw"
            }}
        >
            <Col offset={2} span={14} style={{ marginTop: "1vw" }}>
                <Typography
                    className={styles.text}
                    style={{
                        fontFamily: "Abhaya Libre"
                    }}
                >
                    {t("LANDPAGE.ABOUT.NOTE")}
                </Typography>
                <Typography
                    className={styles.title_h1}
                    style={{
                        fontFamily: "Abhaya Libre",
                        fontWeight: "700",
                        paddingTop: "2%"
                    }}
                >
                    {t("LANDPAGE.ABOUT.TITLE")}
                </Typography>
                <Image
                    preview={false}
                    src={aboutCurve}
                    style={{
                        width: "100%",
                        maxWidth: "10vw",
                        height: "auto"
                    }}
                />
                <Typography
                    className={styles.title_h6}
                    style={{
                        fontFamily: "Abhaya Libre",
                        paddingTop: "1%"
                    }}
                >
                    {t("LANDPAGE.ABOUT.TEXT_A")}
                </Typography>
                <Typography
                    className={styles.title_h6}
                    style={{
                        fontFamily: "Abhaya Libre",
                        paddingTop: "1.5vw",
                        fontSize: "18px"
                    }}
                >
                    {t("LANDPAGE.ABOUT.TEXT_B")}
                </Typography>
                <Typography
                    className={styles.title_h6}
                    style={{
                        fontFamily: "Abhaya Libre",
                        paddingTop: "1.5vw",
                        fontSize: "18px"
                    }}
                >
                    {t("LANDPAGE.ABOUT.TEXT_C")}
                </Typography>
                <div
                    className={styles.button_learn}
                    style={{ display: "flex", fontFamily: "Abhaya Libre", flex: "wrap" }}
                >
                    <a className={styles.a}>{t("BUTTONS.LEARN_MORE")}</a>
                </div>
            </Col>
            <Col span={7}>
                <Image className={styles.about_img} preview={false} src={aboutImg} />
            </Col>
        </Row>
    );
};
