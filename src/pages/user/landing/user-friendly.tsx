import centerImg from "@asset/landing/user_friendly/center.jpeg";
import left1Img from "@asset/landing/user_friendly/left1.jpeg";
import left2Img from "@asset/landing/user_friendly/left2.jpeg";
import right1Img from "@asset/landing/user_friendly/right1.jpeg";
import right2Img from "@asset/landing/user_friendly/right2.jpeg";

import styles from "@asset/styles.module.css";
import { Row, Typography } from "antd";

export const UserFriendly = () => {
    const { t } = useTranslation();
    return (
        <Row className={styles.user_friendly}>
            <div
                className={styles.circle_left1}
                style={{
                    backgroundImage: `url(${left1Img})`
                }}
            />
            <div
                className={styles.circle_left2}
                style={{
                    backgroundImage: `url(${left2Img})`
                }}
            />
            <div
                className={styles.circle_center}
                style={{
                    backgroundImage: `url(${centerImg})`
                }}
            />
            <div
                className={styles.circle_right1}
                style={{
                    backgroundImage: `url(${right1Img})`
                }}
            />
            <div
                className={styles.circle_right2}
                style={{
                    backgroundImage: `url(${right2Img})`
                }}
            />
            <div className={styles.div_container_center}>
                <Typography
                    className={styles.title_h3}
                    style={{
                        fontFamily: "var(--landing-font-family)",
                        fontWeight: "600",
                        marginTop: "5vw",
                        color: "var(--primary)"
                    }}
                >
                    {t("LANDPAGE.USER_FRIENDLY.TITLE")}
                </Typography>
            </div>
            <div className={styles.div_container_center}>
                <Typography
                    className={styles.title_h6}
                    style={{
                        fontFamily: "var(--landing-font-family)",
                        width: "45%",
                        textAlign: "center",
                        marginTop: "-10vw"
                    }}
                >
                    {t("LANDPAGE.USER_FRIENDLY.TEXT")}
                </Typography>
            </div>
        </Row>
    );
};
