

import styles from "@asset/styles.module.css";

import { Flex, Typography } from "antd";
import { useTranslation } from "react-i18next";

import { FooterMain } from "../main/footer";
import { NavbarWithSearch } from "../main/nav";
import { ModalComp } from "@src/components/Layout/ModalComp";

const { Title } = Typography;


export const FAQs = () => {
    const { t } = useTranslation("faqs");
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

                {/* Q1 */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("Q1.LABEL")}</b>
                </Typography>
                <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("Q1.A1", { joinArrays: "" }) }}
                >
                </ul>

                {/* Q2 */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("Q2.LABEL")}</b>
                </Typography>
                <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("Q2.A2", { joinArrays: "" }) }}
                >
                </ul>

                {/* Q3 */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line" }}>
                    <b>{t("Q3.LABEL")}</b>
                </Typography>
                <Typography className={styles.d4} style={{ whiteSpace: "pre-line", paddingBottom: "0.3vw" }}>
                    {t("Q3.TEXT")}
                </Typography>
                <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("Q3.A3", { joinArrays: "" }) }}
                >
                </ul>

                {/* Q4 */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("Q4.LABEL")}</b>
                </Typography>
                <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("Q4.A4", { joinArrays: "" }) }}
                >
                </ul>

                {/* Q5 */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("Q5.LABEL")}</b>
                </Typography>
                <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("Q5.A5", { joinArrays: "" }) }}
                >
                </ul>

                {/* Q6 */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("Q6.LABEL")}</b>
                </Typography>
                <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("Q6.A6", { joinArrays: "" }) }}
                >
                </ul>


                {/* Q7 */}
                <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                    <b>{t("Q7.LABEL")}</b>
                </Typography>
                <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}
                    dangerouslySetInnerHTML={{ __html: t("Q7.A7", { joinArrays: "" }) }}
                >
                </ul>

            </div >
            <FooterMain />
            <ModalComp show={modalOpen} handleOpenModal={handleOpenModal} text="Coming soon!" />
        </Flex >
    );
};
