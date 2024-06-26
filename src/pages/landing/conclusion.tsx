import { CheckOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons";

import styles from "@asset/styles.module.css";
import { Button, Col, Row, Typography } from "antd";

export const Conclusion = () => {
    const { t } = useTranslation();

    return (
        <Row className={styles.conclusion}>
            <div
                className={styles.div_bg_img}
                style={{
                    backgroundColor: "var(--primary)",
                    padding: "2vw 10vw 2vw 10vw"
                }}
            >
                <Row>
                    <Col span={10}>
                        <Typography
                            className={styles.title_h3}
                            style={{
                                fontFamily: "var(--landing-font-family)",
                                fontWeight: "700",
                                paddingTop: "0.5vw",
                                color: "white"
                            }}
                        >
                            {t("LANDPAGE.CONCLUSION.TITLE")}
                        </Typography>
                        <Row style={{ marginTop: "1.5vw" }}>
                            <Col span={22}>
                                <Typography
                                    className={styles.title_h6}
                                    style={{
                                        fontFamily: "var(--landing-font-family)",
                                        fontWeight: "500",
                                        color: "white"
                                    }}
                                >
                                    {t("LANDPAGE.CONCLUSION.ORDER_LIST.A")}
                                </Typography>
                            </Col>
                            <Col span={2}>
                                <Typography
                                    className={styles.title_h6}
                                    style={{
                                        fontFamily: "var(--landing-font-family)",
                                        fontWeight: "500",
                                        // paddingTop: "0.5vw",
                                        color: "white"
                                    }}
                                >
                                    <div className={styles.div_icon}>
                                        <EditOutlined style={{ color: "white", fontSize: "1.1vw" }} />
                                    </div>
                                </Typography>
                            </Col>
                        </Row>
                        <hr style={{ color: "white" }} />
                        <Row style={{ marginTop: "1.5vw" }}>
                            <Col span={22}>
                                <Typography
                                    className={styles.title_h6}
                                    style={{
                                        fontFamily: "var(--landing-font-family)",
                                        fontWeight: "500",
                                        color: "white"
                                    }}
                                >
                                    {t("LANDPAGE.CONCLUSION.ORDER_LIST.B")}
                                </Typography>
                            </Col>
                            <Col span={2}>
                                <Typography
                                    className={styles.title_h6}
                                    style={{
                                        fontFamily: "var(--landing-font-family)",
                                        fontWeight: "500",
                                        // paddingTop: "2%",
                                        color: "white"
                                    }}
                                >
                                    <div className={styles.div_icon}>
                                        <EllipsisOutlined style={{ color: "white", fontSize: "1.1vw" }} />
                                    </div>
                                </Typography>
                            </Col>
                        </Row>
                        <hr style={{ color: "white" }} />
                        <Row style={{ marginTop: "1.5vw" }}>
                            <Col span={22}>
                                <Typography
                                    className={styles.title_h6}
                                    style={{
                                        fontFamily: "var(--landing-font-family)",
                                        fontWeight: "500",
                                        color: "white"
                                    }}
                                >
                                    {t("LANDPAGE.CONCLUSION.ORDER_LIST.C")}
                                </Typography>
                            </Col>
                            <Col span={2}>
                                <Typography
                                    className={styles.title_h6}
                                    style={{
                                        fontFamily: "var(--landing-font-family)",
                                        fontWeight: "500",
                                        color: "white"
                                    }}
                                >
                                    <div className={styles.div_icon}>
                                        <CheckOutlined style={{ color: "white", fontSize: "1.1vw" }} />
                                    </div>
                                </Typography>
                            </Col>
                        </Row>
                    </Col>
                    <Col offset={2} span={12}>
                        <Typography
                            className={styles.title_h5}
                            style={{
                                fontFamily: "var(--landing-font-family)",
                                fontWeight: "500",
                                textAlign: "center",
                                marginTop: "5vw",
                                color: "white",
                                display: "flex",
                                justifyContent: "center",
                                flex: "wrap"
                            }}
                        >
                            {t("LANDPAGE.CONCLUSION.JOIN")}
                        </Typography>
                        <Typography
                            className={styles.title_h3}
                            style={{
                                fontFamily: "var(--landing-font-family)",
                                fontWeight: "600",
                                textAlign: "center",
                                color: "white",
                                display: "flex",
                                justifyContent: "center",
                                flex: "wrap",
                                marginTop: "1vw"
                            }}
                        >
                            {t("LANDPAGE.CONCLUSION.STARTED")}
                        </Typography>
                        <div className={styles.div_container_center}>
                            <Button
                                className={styles.button_verify_container}
                                style={{
                                    fontFamily: "var(--landing-font-family)",
                                    marginTop: "2vw",
                                    color: "var(--btn-conclusion-signup)",
                                    backgroundColor: "var(--btn-conclusion-signup-bg)",
                                    height: "2vw"
                                }}
                            >
                                {t("BUTTONS.SIGNUP")}
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Row>
    );
};
