

import styles from "@asset/styles.module.css";

import { Flex, Typography } from "antd";
import { useTranslation } from "react-i18next";

import { FooterMain } from "../main/footer";
import { NavbarWithSearch } from "../main/nav";

const { Title } = Typography;


export const Terms = () => {
    const { t } = useTranslation("terms");
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(!modalOpen);
    }


    return (
        <Flex style={{ width: "100%" }} vertical>
            <NavbarWithSearch handleOpenModal={handleOpenModal} />
            <div className={styles.frame}>
                <Title className={styles.title_h2}>{t("TITLE")}</Title>

                {/* ACCEPTANCE */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("ACCEPTANCE.LABEL")}</b>
                </Typography>
                <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "2vw" }}>
                    {t("ACCEPTANCE.TEXT")}
                </Typography>

                {/* USE */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("USE.LABEL")}</b>
                </Typography>
                <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("USE.LIST", { joinArrays: "" }) }}
                >
                </ul>

                {/* INTELLECTUAL_PROPERTY */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("INTELLECTUAL_PROPERTY.LABEL")}</b>
                </Typography>
                <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("INTELLECTUAL_PROPERTY.LIST", { joinArrays: "" }) }}
                >
                </ul>

                {/* USER_ACCOUNT */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("USER_ACCOUNT.LABEL")}</b>
                </Typography>
                <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("USER_ACCOUNT.LIST", { joinArrays: "" }) }}
                >
                </ul>

                {/* PRIVACY */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("PRIVACY.LABEL")}</b>
                </Typography>
                <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "2vw" }}>
                    {t("PRIVACY.TEXT")}
                </Typography>

                {/* DISCLAIMERS */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("DISCLAIMERS.LABEL")}</b>
                </Typography>
                <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("DISCLAIMERS.LIST", { joinArrays: "" }) }}
                >
                </ul>

                {/* LIMITATION */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("LIMITATION.LABEL")}</b>
                </Typography>
                <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("LIMITATION.LIST", { joinArrays: "" }) }}
                >
                </ul>

                {/* GOVERNING_LAW */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("GOVERNING_LAW.LABEL")}</b>
                </Typography>
                <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "2vw" }}>
                    {t("GOVERNING_LAW.TEXT")}
                </Typography>


                {/* TERMS */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("TERMS.LABEL")}</b>
                </Typography>
                <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "2vw" }}>
                    {t("TERMS.TEXT")}
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
        </Flex >
    );
};
