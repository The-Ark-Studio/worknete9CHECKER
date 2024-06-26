import { CaretUpFilled, FacebookOutlined, SmileOutlined } from "@ant-design/icons";
import serviceImg from "@asset/landing/simplified/service.png";

import styles from "@asset/styles.module.css";
import { Col, Row, Typography } from "antd";

export const Simplified = () => {
    const { t } = useTranslation();

    return (
        <Row style={{ height: "30vw", marginTop: "5vh" }}>
            <div
                className={styles.simplified}
                style={{
                    backgroundColor: "var(--primary2)"
                }}
            >
                <div
                    className={styles.img}
                    style={{
                        backgroundImage: `url(${serviceImg})`
                    }}
                />
                <div
                    className={styles.rectangle_submit_left}
                    style={{
                        padding: "1vw",
                        fontFamily: "var(--landing-font-family)"
                    }}
                >
                    <Row>
                        <Col span={20}>
                            <Typography
                                className={styles.title_h6}
                                style={{
                                    fontFamily: "var(--landing-font-family)",
                                    color: "var(--text-natural7)"
                                }}
                            >
                                {t("LANDPAGE.STREAM.SUBMIT")}
                            </Typography>
                        </Col>
                        <Col span={4}>
                            <div
                                className={styles.div_container_center}
                                style={{
                                    width: "2vw",
                                    height: "2vw",
                                    backgroundColor: "var(--primary)",
                                    borderRadius: "0.3vw"
                                }}
                            >
                                <SmileOutlined
                                    style={{
                                        fontSize: "1vw",
                                        color: "white"
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Typography
                        className={styles.title_h4}
                        style={{
                            fontFamily: "var(--landing-font-family)",
                            color: "var(--tertiary3-5)",
                            fontWeight: "700"
                        }}
                    >
                        23,000
                    </Typography>
                    <Row
                        style={{
                            bottom: "-0.5vw",
                            position: "absolute",
                            width: "100%"
                        }}
                    >
                        <Col span={8} style={{ color: "var(--success65)", fontWeight: "700", fontSize: "1.1vw" }}>
                            <CaretUpFilled style={{ color: "var(--success65)" }} />
                            <span>5.39%</span>
                        </Col>
                        <Col
                            span={12}
                            style={{
                                color: "var(--text-natural5)"
                            }}
                        >
                            <span>
                                <p style={{ fontSize: "1vw" }}>{t("LANDPAGE.STREAM.GROWTH")}</p>
                            </span>
                        </Col>
                    </Row>
                </div>
                <div
                    className={styles.rectangle_submit_right}
                    style={{
                        padding: "0.5vw",
                        color: "white",
                        fontFamily: "var(--landing-font-family)"
                    }}
                >
                    <span>
                        <FacebookOutlined
                            style={{
                                backgroundColor: "white",
                                color: "var(--primary)",
                                fontSize: "1.1vw"
                            }}
                        />
                    </span>
                    <span>
                        <p style={{ fontSize: "1vw", marginBottom: 0 }}> &nbsp;+123K</p>
                    </span>
                </div>
                <Row>
                    <Col offset={4} span={8}>
                        <Typography
                            className={styles.title_h3}
                            style={{
                                fontFamily: "var(--landing-font-family)",
                                position: "absolute",
                                top: "2vw"
                            }}
                        >
                            {t("LANDPAGE.STREAM.TITLE")}
                        </Typography>
                    </Col>
                    <Col span={10}>
                        <Typography
                            className={styles.title_h6}
                            style={{
                                fontFamily: "var(--landing-font-family)",
                                width: "100%",
                                position: "absolute",
                                top: "3vw"
                            }}
                        >
                            {t("LANDPAGE.STREAM.TEXT")}
                            <br />
                            <br />
                            <i>{t("LANDPAGE.STREAM.NOTE")}</i>
                        </Typography>
                    </Col>
                </Row>
            </div>
        </Row>
    );
};
