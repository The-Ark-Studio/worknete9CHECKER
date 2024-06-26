import React from 'react';
import "@asset/styles.module.css"
import { Col, Input, Row, Typography } from 'antd';
import styles from "@asset/styles.module.css";

const { Title } = Typography;

export const OnlineFrom = () => {
    const { t } = useTranslation("main");
    return (
        <div className={styles.footer_main}>
            <Title className={styles.title_h3}>{t("ONLINE_FORM.TITLE")}</Title>
            <Row gutter={16} justify="space-around">
                <Col key={1} span={4} className={styles.online_form_box}>
                    <Typography className={styles.text}>
                        {t("ONLINE_FORM.STEP1")}
                    </Typography>
                </Col>
                <Col key={2} span={4} className={styles.online_form_box}>
                    <Typography className={styles.text}>
                        {t("ONLINE_FORM.STEP2")}
                    </Typography>
                </Col>
                <Col key={3} span={4} className={styles.online_form_box}>
                    <Typography className={styles.text}>
                        {t("ONLINE_FORM.STEP3")}
                    </Typography>
                </Col>
                <Col key={4} span={4} className={styles.online_form_box}>
                    <Typography className={styles.text}>
                        {t("ONLINE_FORM.STEP4")}
                    </Typography>
                </Col>
                <Col key={5} span={4} className={styles.online_form_box}>
                    <Typography className={styles.text}>
                        {t("ONLINE_FORM.STEP5")}
                    </Typography>
                </Col>
            </Row>
        </div>
    )
}