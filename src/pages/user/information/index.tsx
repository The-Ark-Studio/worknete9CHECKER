

import styles from "@asset/styles.module.css";

import { Flex, Table, Typography } from "antd";
import { useTranslation } from "react-i18next";

import { FooterMain } from "../main/footer";
import { NavbarWithSearch } from "../main/nav";

const { Title } = Typography;


export const Information = () => {
    const { t } = useTranslation("information");
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(!modalOpen);
    }

    return (
        <Flex style={{ width: "100%" }} vertical>
            <NavbarWithSearch handleOpenModal={handleOpenModal} />
            <div className={styles.frame}>
                <Title className={styles.title_h2}>{t("TITLE")}</Title>
                <Typography className={styles.title_h5} style={{ whiteSpace: "pre-line", paddingBottom: "2vw", color: "var(--primary)" }}>
                    {t("NOTE")}
                </Typography>

                {/* I. RESIDENCY */}
                <div>
                    <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                        <b>{t("RESIDENCY.LABEL")}</b>
                    </Typography>

                    {/* I. RESIDENCY.FOREIGNER*/}
                    <div>
                        <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw", marginLeft: "2vw" }}>
                            <b>{t("RESIDENCY.FOREIGNER.LABEL")}</b>{t("RESIDENCY.FOREIGNER.TEXT")}
                        </Typography>
                        <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw", marginLeft: "3vw" }}
                            dangerouslySetInnerHTML={{ __html: t("RESIDENCY.FOREIGNER.LIST", { joinArrays: "" }) }}
                        >
                        </ul>
                    </div>

                    {/* I. RESIDENCY.EXTENSION  */}
                    <div>
                        <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw", marginLeft: "2vw" }}>
                            <b>{t("RESIDENCY.EXTENSION.LABEL")}</b>{t("RESIDENCY.EXTENSION.TEXT")}
                        </Typography>
                    </div>

                </div>


                {/* II. SALARY_INSURANCE */}
                <div>
                    <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                        <b>{t("SALARY_INSURANCE.LABEL")}</b>
                    </Typography>

                    {/* 1. SALARY_INSURANCE.SALARY  */}
                    <div>
                        <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw", marginLeft: "2vw" }}>
                            <b>{t("SALARY_INSURANCE.SALARY.LABEL")}</b>{t("SALARY_INSURANCE.SALARY.TEXT")}
                        </Typography>
                    </div>

                    <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1.5vw" }}>
                        {t("SALARY_INSURANCE.SALARY.NOTE")}
                    </Typography>

                    <div
                        className={styles.title_h7}
                        style={{ paddingBottom: "2vw" }}
                        dangerouslySetInnerHTML={{
                            __html: t("SALARY_INSURANCE.SALARY.TABLE", { joinArrays: "" })

                        }}>

                    </div>

                    {/* 2. SALARY_INSURANCE.INSURANCE  */}
                    <div>
                        <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "0.5vw", marginLeft: "2vw" }}>
                            <b>{t("SALARY_INSURANCE.INSURANCE.LABEL")}</b>
                        </Typography>
                        <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw", marginLeft: "2vw" }}>
                            {t("SALARY_INSURANCE.INSURANCE.TEXT")}
                        </Typography>

                        {/* 2.1 SALARY_INSURANCE.INSURANCE.REPATRIATIONREPATRIATION  */}
                        <div>
                            <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "0.5vw", marginLeft: "3vw" }}>
                                <b>{t("SALARY_INSURANCE.INSURANCE.REPATRIATION.LABEL")}</b>
                            </Typography>

                            <ul className={styles.title_h7} style={{
                                whiteSpace: "pre-line",
                                paddingBottom: "1vw",
                                marginLeft: "3vw",
                                listStyleType: "circle"
                            }}
                                dangerouslySetInnerHTML={{ __html: t("SALARY_INSURANCE.INSURANCE.REPATRIATION.TEXT", { joinArrays: "" }) }}
                            >
                            </ul>
                        </div>

                        {/* 2.1 SALARY_INSURANCE.INSURANCE.RISK  */}
                        <div>
                            <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "0.5vw", marginLeft: "3vw" }}>
                                <b>{t("SALARY_INSURANCE.INSURANCE.RISK.LABEL")}</b>
                            </Typography>

                            <ul className={styles.title_h7} style={{
                                whiteSpace: "pre-line",
                                paddingBottom: "1vw",
                                marginLeft: "3vw",
                                listStyleType: "circle"
                            }}
                                dangerouslySetInnerHTML={{ __html: t("SALARY_INSURANCE.INSURANCE.RISK.LIST", { joinArrays: "" }) }}
                            >
                            </ul>
                        </div>


                        {/* 2.1 SALARY_INSURANCE.INSURANCE.WORKPLACE */}
                        <div>
                            <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "0.5vw", marginLeft: "3vw" }}>
                                <b>{t("SALARY_INSURANCE.INSURANCE.WORKPLACE.LABEL")}</b>
                            </Typography>

                            <ul className={styles.title_h7} style={{
                                whiteSpace: "pre-line",
                                paddingBottom: "1vw",
                                marginLeft: "3vw",
                                listStyleType: "circle"
                            }}
                                dangerouslySetInnerHTML={{ __html: t("SALARY_INSURANCE.INSURANCE.WORKPLACE.TEXT", { joinArrays: "" }) }}
                            >
                            </ul>
                        </div>

                        {/* 2.1 SALARY_INSURANCE.INSURANCE.HEALTH */}
                        <div>
                            <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "0.5vw", marginLeft: "3vw" }}>
                                <b>{t("SALARY_INSURANCE.INSURANCE.HEALTH.LABEL")}</b>
                            </Typography>

                            <ul className={styles.title_h7} style={{
                                whiteSpace: "pre-line",
                                paddingBottom: "1vw",
                                marginLeft: "3vw",
                                listStyleType: "circle"
                            }}
                                dangerouslySetInnerHTML={{ __html: t("SALARY_INSURANCE.INSURANCE.HEALTH.TEXT", { joinArrays: "" }) }}
                            >
                            </ul>
                        </div>

                        <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "2.5vw" }}>
                            {t("SALARY_INSURANCE.INSURANCE.NOTE")}
                        </Typography>
                    </div>
                </div>


                {/* III. EMPLOYMENT_WORKPLACE_CHANGES */}
                <div>
                    <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                        <b>{t("EMPLOYMENT_WORKPLACE_CHANGES.LABEL")}</b>
                    </Typography>

                    {/* 1. EMPLOYMENT_WORKPLACE_CHANGES.EMPLOYMENT */}
                    <div>
                        <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw", marginLeft: "2vw" }}>
                            <b>{t("EMPLOYMENT_WORKPLACE_CHANGES.EMPLOYMENT.LABEL")}</b>
                        </Typography>
                        <ul className={styles.title_h7} style={{
                            whiteSpace: "pre-line",
                            paddingBottom: "1vw",
                            marginLeft: "3vw",
                            listStyleType: "circle"
                        }}
                            dangerouslySetInnerHTML={{ __html: t("EMPLOYMENT_WORKPLACE_CHANGES.EMPLOYMENT.TEXT", { joinArrays: "" }) }}
                        >
                        </ul>
                    </div>

                    {/* 2. EMPLOYMENT_WORKPLACE_CHANGES.WORKPLACE_CHANGES */}
                    <div>
                        <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw", marginLeft: "2vw" }}>
                            <b>{t("EMPLOYMENT_WORKPLACE_CHANGES.WORKPLACE_CHANGES.LABEL")}</b>
                        </Typography>
                        <ul className={styles.title_h7} style={{
                            whiteSpace: "pre-line",
                            paddingBottom: "1vw",
                            marginLeft: "3vw",
                            listStyleType: "circle"
                        }}
                            dangerouslySetInnerHTML={{ __html: t("EMPLOYMENT_WORKPLACE_CHANGES.WORKPLACE_CHANGES.TEXT", { joinArrays: "" }) }}
                        >
                        </ul>
                    </div>

                    {/* 3. EMPLOYMENT_WORKPLACE_CHANGES.TERMINATION */}
                    <div>
                        <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw", marginLeft: "2vw" }}>
                            <b>{t("EMPLOYMENT_WORKPLACE_CHANGES.TERMINATION.LABEL")}</b>
                        </Typography>
                        <ul className={styles.title_h7} style={{
                            whiteSpace: "pre-line",
                            paddingBottom: "1vw",
                            marginLeft: "3vw",
                            listStyleType: "circle"
                        }}
                            dangerouslySetInnerHTML={{ __html: t("EMPLOYMENT_WORKPLACE_CHANGES.TERMINATION.LIST", { joinArrays: "" }) }}
                        >
                        </ul>
                    </div>

                    {/* 4. EMPLOYMENT_WORKPLACE_CHANGES.WORKER_ACCIDENT */}
                    <div>
                        <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw", marginLeft: "2vw" }}>
                            <b>{t("EMPLOYMENT_WORKPLACE_CHANGES.WORKER_ACCIDENT.LABEL")}</b>
                        </Typography>
                        <ul className={styles.title_h7} style={{
                            whiteSpace: "pre-line",
                            paddingBottom: "0.5vw",
                            marginLeft: "3vw",
                            listStyleType: "circle"
                        }} dangerouslySetInnerHTML={{ __html: t("EMPLOYMENT_WORKPLACE_CHANGES.WORKER_ACCIDENT.TEXT", { joinArrays: "" }) }}
                        >

                        </ul>
                        <ul className={styles.title_h7} style={{
                            whiteSpace: "pre-line",
                            paddingBottom: "1vw",
                            marginLeft: "5vw",
                            listStyleType: "square"
                        }}
                            dangerouslySetInnerHTML={{ __html: t("EMPLOYMENT_WORKPLACE_CHANGES.WORKER_ACCIDENT.LIST", { joinArrays: "" }) }}
                        >
                        </ul>
                    </div>

                </div>

                {/* IV. RESOLVING_DISPUTES */}
                <div>
                    <Typography className={styles.title_h4} style={{ whiteSpace: "pre-line", paddingBottom: "1vw" }}>
                        <b>{t("RESOLVING_DISPUTES.LABEL")}</b>
                    </Typography>

                    <div>

                        <ul className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "0vw", marginLeft: "3vw" }}
                            dangerouslySetInnerHTML={{ __html: t("RESOLVING_DISPUTES.LIST", { joinArrays: "" }) }}
                        >
                        </ul>
                    </div>

                    <div>
                        <ol className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "1vw", marginLeft: "5vw" }}
                            dangerouslySetInnerHTML={{ __html: t("RESOLVING_DISPUTES.SECOND_CHILD_LIST", { joinArrays: "" }) }}
                        >
                        </ol>
                    </div>


                </div>
            </div >
            <FooterMain />
        </Flex >
    );
};
