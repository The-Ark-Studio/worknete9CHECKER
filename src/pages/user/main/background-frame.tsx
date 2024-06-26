import styles from "@asset/styles.module.css";
import { Button, Row, Typography } from "antd";

import bg from "@asset/main/bg.png";
import sub from "@asset/main/sub.png";

export const BackgroundFrame = () => {
    const { t } = useTranslation();

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
                        backgroundImage: `url(${sub})`,
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 1,
                        height: "100%",
                        width: "40%",
                        objectFit: "contain"
                    }}
                >
                </div>

            </div>
        </Row >
    )
}