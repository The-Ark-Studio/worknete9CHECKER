import styles from "@asset/styles.module.css";
import { Button, Col, Row, Typography } from "antd";

import bg from "@asset/main/bg.png";
import industry from "@asset/main/industry.jpeg";
import farmer from "@asset/main/farmer.jpeg";
import constructor from "@asset/main/construction.jpeg";
import cleanServices from "@asset/main/clean-service.jpeg";
import fishery from "@asset/main/fishery.jpeg";
import restaurantClean from "@asset/main/restaurant.jpeg";

export const BackgroundFrame = () => {
    const { t } = useTranslation("main");

    return (
        <Row style={{ height: "18vw" }}>
            <div
                className={styles.div_bg_img}
                style={{
                    backgroundImage: `url(${bg})`,
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        // backgroundImage: `url(${sub})`,
                        backgroundColor: "var(--primary6)",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 1,
                        height: "100%",
                        width: "50%",
                        objectFit: "contain"
                    }}
                >
                    <Row gutter={0}>
                        <Col span={4}>
                            <Row>
                                <div className={styles.parallelogram_empty}></div>
                            </Row>
                            <Row>
                                <div
                                    className={styles.div_bg_img}
                                    style={{
                                        backgroundImage: `url(${industry})`,
                                        height: "14vw"
                                    }}
                                ></div>
                            </Row>
                            <Row>
                                <div
                                    className={styles.parallelogram_down}
                                    style={{
                                        background: "var(--black)",
                                        textAlign: "center",
                                        color: "white"
                                    }}
                                >
                                    {t("INDUSTRY")}</div>
                            </Row>

                        </Col>
                        <Col span={4}>
                            <Row>
                                <div
                                    className={styles.parallelogram}
                                    style={{
                                        background: "var(--black)",
                                        textAlign: "center",
                                        color: "white"
                                    }}
                                >{t("CONSTRUCTION")}</div>
                            </Row>

                            <Row>
                                <div
                                    className={styles.div_bg_img}
                                    style={{
                                        backgroundImage: `url(${constructor})`,
                                        height: "14vw"
                                    }}
                                ></div>
                            </Row>
                            <Row>
                                <div className={styles.parallelogram}></div>
                            </Row>

                        </Col>


                        <Col span={4}>
                            <Row>
                                <div className={styles.parallelogram_empty}></div>
                            </Row>
                            <Row>
                                <div
                                    className={styles.div_bg_img}
                                    style={{
                                        backgroundImage: `url(${cleanServices})`,
                                        height: "14vw"
                                    }}
                                ></div>
                            </Row>
                            <Row>
                                <div
                                    className={styles.parallelogram_down}
                                    style={{
                                        background: "var(--black)",
                                        textAlign: "center",
                                        color: "white"
                                    }}
                                >{t("HOTEL_CLEAN_SERVICES")}</div>
                            </Row>
                        </Col>
                        <Col span={4}>
                            <Row>
                                <div
                                    className={styles.parallelogram}
                                    style={{
                                        background: "var(--black)",
                                        textAlign: "center",
                                        color: "white"
                                    }}
                                >{t("FISHERY")}</div>
                            </Row>
                            <Row>
                                <div
                                    className={styles.div_bg_img}
                                    style={{
                                        backgroundImage: `url(${fishery})`,
                                        height: "14vw"
                                    }}
                                ></div>
                            </Row>

                            <Row>
                                <div className={styles.parallelogram}></div>
                            </Row>
                        </Col>
                        <Col span={4}>
                            <Row>
                                <div className={styles.parallelogram_empty}></div>
                            </Row>
                            <Row>
                                <div
                                    className={styles.div_bg_img}
                                    style={{
                                        backgroundImage: `url(${restaurantClean})`,
                                        height: "14vw"
                                    }}
                                ></div>
                            </Row>
                            <Row>
                                <div
                                    className={styles.parallelogram_down}
                                    style={{
                                        background: "var(--black)"
                                    }}
                                >{t("RESTAURANT")}</div>
                            </Row>
                        </Col>
                        <Col span={4}>
                            <Row>
                                <div
                                    className={styles.parallelogram}
                                    style={{
                                        background: "var(--black)",
                                        textAlign: "center",
                                        color: "white"
                                    }}
                                >{t("AGRICULTURE")}</div>
                            </Row>

                            <Row>
                                <div
                                    className={styles.div_bg_img}
                                    style={{
                                        backgroundImage: `url(${farmer})`,
                                        height: "14vw"
                                    }}
                                ></div>
                            </Row>
                            <Row>
                                <div className={styles.parallelogram}></div>
                            </Row>

                        </Col>
                    </Row>
                </div >

            </div >
        </Row >
    )
}