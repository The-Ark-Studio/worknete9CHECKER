/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */
import landingIntro1 from "@asset/landing/intro/landing-intro-1.jpeg";
import landingIntro2 from "@asset/landing/intro/landing-intro-2.jpeg";
import landingIntro3 from "@asset/landing/intro/landing-intro-3.jpeg";
import landingIntro4 from "@asset/landing/intro/landing-intro-4.jpeg";
import landingIntro5 from "@asset/landing/intro/landing-intro-5.jpeg";
import landingIntro6 from "@asset/landing/intro/landing-intro-6.jpeg";
import landingIntro7 from "@asset/landing/intro/landing-intro-7.jpeg";
import landingIntro8 from "@asset/landing/intro/landing-intro-8.jpeg";

import styles from "@asset/styles.module.css";
import { Button, Row, Typography } from "antd";

export const Introduction = () => {
    const { t } = useTranslation();

    return (
        <Row style={{ height: "30vw" }}>
            <div
                className={styles.div_bg_img}
                style={{
                    backgroundColor: "var(--primary)"
                }}
            >
                <div
                    className={styles.circle1}
                    style={{
                        backgroundImage: `url(${landingIntro1})`
                    }}
                />
                <div
                    className={styles.circle2}
                    style={{
                        backgroundImage: `url(${landingIntro2})`
                    }}
                />
                <div
                    className={styles.circle3}
                    style={{
                        backgroundImage: `url(${landingIntro3})`
                    }}
                />
                <div
                    className={styles.circle4}
                    style={{
                        backgroundImage: `url(${landingIntro4})`
                    }}
                />
                <div
                    className={styles.circle5}
                    style={{
                        backgroundImage: `url(${landingIntro5})`
                    }}
                />
                <div
                    className={styles.circle6}
                    style={{
                        backgroundImage: `url(${landingIntro6})`
                    }}
                />
                <div
                    className={styles.circle7}
                    style={{
                        backgroundImage: `url(${landingIntro7})`
                    }}
                />
                <div
                    className={styles.circle8}
                    style={{
                        backgroundImage: `url(${landingIntro8})`
                    }}
                />
                <Typography
                    className={styles.intro_title_text_intro}
                    style={{ fontFamily: "Abhaya Libre", marginTop: "7vw" }}
                >
                    {t("SYSTEM_NAME")}
                </Typography>
                <Typography className={styles.intro_title_text_intro} style={{ fontFamily: "Abhaya Libre" }}>
                    {t("LANDPAGE.SUB_TITLE")}
                </Typography>
                <div className={styles.div_container_center}>
                    <Button className={styles.button_verify_container} style={{ fontFamily: "Abhaya Libre" }}>
                        {t("BUTTONS.VERIFY_NOW")}
                    </Button>
                </div>
            </div>
        </Row>
    );
};
