

import styles from "@asset/styles.module.css";

import { Flex, Modal, Typography } from "antd";
import { useTranslation } from "react-i18next";

import { FooterMain } from "../main/footer";
import { NavbarWithSearch } from "../main/nav";
import { ModalComp } from "@src/components/Layout/ModalComp";

const { Title } = Typography;


export const Privacy = () => {
    const { t } = useTranslation("privacy");
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(!modalOpen);
    }

    document.title = "Worknet E9 | " + t("TITLE");

    return (
        <Flex style={{ width: "100%" }} vertical>
            <NavbarWithSearch handleOpenModal={handleOpenModal} />
            <div className={styles.frame}>
                <Title className={styles.title_h2}>{t("TITLE")}</Title>

                {/* INTRO */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("INTRO.LABEL")}</b>
                </Typography>
                <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "2vw" }}>
                    {t("INTRO.TEXT")}
                </Typography>

                {/* INFORMATION */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line" }}>
                    <b>{t("INFORMATION.LABEL")}</b>
                </Typography>
                <Typography className={styles.d4} style={{ whiteSpace: "pre-line", paddingBottom: "0.3vw" }}>
                    {t("INFORMATION.TEXT")}
                </Typography>
                <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("INFORMATION.LIST", { joinArrays: "" }) }}
                >
                </ul>

                {/* HOW */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line" }}>
                    <b>{t("HOW.LABEL")}</b>
                </Typography>
                <Typography className={styles.d4} style={{ whiteSpace: "pre-line", paddingBottom: "0.3vw" }}>
                    {t("HOW.TEXT")}
                </Typography>
                <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("HOW.LIST", { joinArrays: "" }) }}
                >
                </ul>

                {/* AIM */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line" }}>
                    <b>{t("AIM.LABEL")}</b>
                </Typography>
                <Typography className={styles.d4} style={{ whiteSpace: "pre-line", paddingBottom: "0.3vw" }}>
                    {t("AIM.TEXT")}
                </Typography>
                <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("AIM.LIST", { joinArrays: "" }) }}
                >
                </ul>

                {/* SHARE */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line" }}>
                    <b>{t("SHARE.LABEL")}</b>
                </Typography>
                <Typography className={styles.d4} style={{ whiteSpace: "pre-line", paddingBottom: "0.3vw" }}>
                    {t("SHARE.TEXT")}
                </Typography>
                <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("SHARE.LIST", { joinArrays: "" }) }}
                >
                </ul>


                {/* CONTROL */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line" }}>
                    <b>{t("CONTROL.LABEL")}</b>
                </Typography>
                <Typography className={styles.d4} style={{ whiteSpace: "pre-line", paddingBottom: "0.3vw" }}>
                    {t("CONTROL.TEXT")}
                </Typography>
                <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("CONTROL.LIST", { joinArrays: "" }) }}
                >
                </ul>

                {/* SAVE_DELETE */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("SAVE_DELETE.LABEL")}</b>
                </Typography>
                <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("SAVE_DELETE.LIST", { joinArrays: "" }) }}
                >
                </ul>

                {/* SECURITY */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("SECURITY.LABEL")}</b>
                </Typography>
                <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "2vw" }}>
                    {t("SECURITY.TEXT")}
                </Typography>


                {/* PRIVATE_POLICY */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("PRIVATE_POLICY.LABEL")}</b>
                </Typography>
                <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "2vw" }}>
                    {t("PRIVATE_POLICY.TEXT")}
                </Typography>



                {/* CONTACT */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("CONTACT.LABEL")}</b>
                </Typography>
                <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "2vw" }}>
                    {t("CONTACT.TEXT")}
                </Typography>

            </div >
            <FooterMain />
            <ModalComp show={modalOpen} handleOpenModal={handleOpenModal} text="Coming soon!" />
        </Flex >
    );
};
