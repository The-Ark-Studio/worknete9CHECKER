/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import connectedImg from "@asset/landing/features/connected.png";
import globalImg from "@asset/landing/features/global.png";
import linkedImg from "@asset/landing/features/linked.png";
import securityImg from "@asset/landing/features/security.png";
import styles from "@asset/styles.module.css";
import { Card, Col, Row, Typography } from "antd";
import Meta from "antd/es/card/Meta";

export const Feature = () => {
    const { t } = useTranslation();

    return (
        <Row className={styles.feature} style={{ marginTop: "0" }}>
            <Typography className={styles.title} style={{ color: "var(--primary)" }}>
                {t("LANDPAGE.FEATURES.TITLE")}
            </Typography>
            <Row className={styles.row_div}>
                <Col offset={3} sm={{ order: 1 }} span={6} xs={{ order: 1 }}>
                    <Card
                        className={styles.feature_card}
                        style={{
                            backgroundColor: "var(--tertiary1)",
                            height: "18vw"
                        }}
                    >
                        <div
                            className={styles.imgA}
                            style={{
                                backgroundImage: `url(${securityImg})`
                            }}
                        />

                        <Meta
                            description={
                                <Typography
                                    className={styles.title_h6}
                                    style={{
                                        fontFamily: "Abhaya Libre"
                                    }}
                                >
                                    {t("LANDPAGE.FEATURES.CARD_A.TEXT")}
                                </Typography>
                            }
                            style={{
                                padding: "0vw"
                            }}
                            title={
                                <Typography
                                    className={styles.title_h5}
                                    style={{
                                        fontFamily: "Abhaya Libre"
                                    }}
                                >
                                    {t("LANDPAGE.FEATURES.CARD_A.TITLE")}
                                </Typography>
                            }
                        />
                        <a className={styles.text_try_now} style={{ color: "var(--tertiary1-6)" }} target="_blank">
                            {t("LANDPAGE.FEATURES.TRY_NOW")}
                        </a>
                    </Card>
                </Col>
                <Col sm={{ order: 1 }} span={12} xs={{ order: 1 }}>
                    <Card
                        className={styles.feature_card}
                        style={{
                            backgroundColor: "var(--primary2)",
                            marginLeft: "1.5vw",
                            height: "18vw"
                        }}
                    >
                        <div
                            className={styles.imgB}
                            style={{
                                backgroundImage: `url(${globalImg})`
                            }}
                        />
                        <Meta
                            description={
                                <Typography
                                    className={styles.title_h6}
                                    style={{
                                        fontFamily: "Abhaya Libre"
                                    }}
                                >
                                    {t("LANDPAGE.FEATURES.CARD_B.TEXT")}
                                </Typography>
                            }
                            style={{ width: "70%", padding: "0vw" }}
                            title={
                                <Typography
                                    className={styles.title_h5}
                                    style={{
                                        fontFamily: "Abhaya Libre"
                                    }}
                                >
                                    {t("LANDPAGE.FEATURES.CARD_B.TITLE")}
                                </Typography>
                            }
                        />
                        <a className={styles.text_try_now} style={{ color: "var(--primary6)" }} target="_blank">
                            {t("LANDPAGE.FEATURES.TRY_NOW")}
                        </a>
                    </Card>
                </Col>
            </Row>
            <Row
                className={styles.row_div}
                // style={{ width: "100%", height: "25vw", marginTop: "1.5vw" }}
            >
                <Col offset={3} span={12}>
                    <Card
                        className={styles.feature_card}
                        style={{
                            backgroundColor: "var(--tertiary3)",
                            height: "18vw"
                        }}
                    >
                        <div
                            className={styles.imgC}
                            style={{
                                backgroundImage: `url(${connectedImg})`
                            }}
                        />
                        <Typography
                            className={styles.title_h5}
                            style={{
                                fontFamily: "Abhaya Libre",
                                width: "70%"
                            }}
                        >
                            <b>{t("LANDPAGE.FEATURES.CARD_C.TITLE")}</b>
                        </Typography>
                        <Typography
                            className={styles.title_h6}
                            style={{
                                fontFamily: "Abhaya Libre",
                                width: "70%",
                                marginTop: "0.8vw"
                            }}
                        >
                            {t("LANDPAGE.FEATURES.CARD_C.TEXT")}
                        </Typography>
                        <a className={styles.text_try_now} style={{ color: "var(--tertiary3-6)" }} target="_blank">
                            {t("LANDPAGE.FEATURES.TRY_NOW")}
                        </a>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        className={styles.feature_card}
                        style={{
                            backgroundColor: "var(--secondary1)",
                            marginLeft: "1.5vw",
                            height: "18vw"
                        }}
                    >
                        <div
                            className={styles.imgD}
                            style={{
                                backgroundImage: `url(${linkedImg})`
                            }}
                        />
                        <Meta
                            description={
                                <Typography
                                    className={styles.title_h6}
                                    style={{
                                        fontFamily: "Abhaya Libre"
                                        // paddingTop: currentLocale === "kor" ? "0vw" : "2vw"
                                    }}
                                >
                                    {t("LANDPAGE.FEATURES.CARD_D.TEXT")}
                                </Typography>
                            }
                            style={{
                                padding: "0vw"
                            }}
                            title={
                                <Typography
                                    className={styles.title_h5}
                                    style={{
                                        fontFamily: "Abhaya Libre"
                                    }}
                                >
                                    {t("LANDPAGE.FEATURES.CARD_D.TITLE")}
                                </Typography>
                            }
                        />
                        <a className={styles.text_try_now} style={{ color: "var(--secondary6)" }} target="_blank">
                            {t("LANDPAGE.FEATURES.TRY_NOW")}
                        </a>
                    </Card>
                </Col>
            </Row>
        </Row>
    );
};
