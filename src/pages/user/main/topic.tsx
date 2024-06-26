import React from 'react';
import "@asset/styles.module.css"
import { Col, Row, Typography, Image } from 'antd';
import styles from "@asset/styles.module.css";
import topicImg from "@asset/main/eligible.png";

const { Title } = Typography;

export const Topic = () => {
    const { t } = useTranslation("main");
    return (
        <div className={styles.topic}>
            <Row gutter={24}>
                <Col key={1} span={17}>
                    <Title className={styles.title_h3}>{t("TOPIC.TITLE")}</Title>
                    <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line" }}>
                        {t("TOPIC.TEXT")}
                    </Typography>
                </Col>
                <Col span={7} style={{ height: "15vw" }}>
                    <div className={styles.div_bg_img}
                        style={{
                            backgroundImage: `url(${topicImg})`,
                            height: "100%"
                        }}
                    />
                </Col>
            </Row>
        </div >
    )
}