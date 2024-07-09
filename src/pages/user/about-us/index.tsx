

import styles from "@asset/styles.module.css";

import { Flex, Typography } from "antd";
import { useTranslation } from "react-i18next";

import { FooterMain } from "../main/footer";
import { NavbarWithSearch } from "../main/nav";

const { Title } = Typography;


export const AboutUs = () => {
    const { t } = useTranslation("about-us");
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(!modalOpen);
    }


    return (
        <Flex style={{ width: "100%" }} vertical>
            <NavbarWithSearch handleOpenModal={handleOpenModal} />
            <div className={styles.frame}>
                <Title className={styles.title_h2}>{t("TITLE")}</Title>

                <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "2vw" }}>
                    {t("TEXT")}
                </Typography>

                {/* COMMITMENT */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line" }}>
                    <b>{t("COMMITMENT.LABEL")}</b>
                </Typography>
                <ol className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("COMMITMENT.LIST", { joinArrays: "" }) }}
                >
                </ol>

                {/* HOW */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line" }}>
                    <b>{t("COMMITMENT.HOW.LABEL")}</b>
                </Typography>
                <ol className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("COMMITMENT.HOW.LIST", { joinArrays: "" }) }}
                >
                </ol>

                {/* COMMUNITY */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line" }}>
                    <b>{t("COMMUNITY.LABEL")}</b>
                </Typography>
                <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "2vw" }}>
                    {t("COMMUNITY.TEXT")}
                </Typography>
            </div >
            <FooterMain />
        </Flex >
    );
};
