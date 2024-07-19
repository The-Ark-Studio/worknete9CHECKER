

import styles from "@asset/styles.module.css";

import { Flex, Typography } from "antd";
import { useTranslation } from "react-i18next";

import { FooterMain } from "../main/footer";
import { NavbarWithSearch } from "../main/nav";
import { ModalComp } from "@src/components/Layout/ModalComp";

const { Title } = Typography;


export const Copyrights = () => {
    const { t } = useTranslation("copyrights");
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

                <Typography className={styles.title_h7} style={{ whiteSpace: "pre-line", paddingBottom: "2vw" }}>
                    {t("TEXT")}
                </Typography>

            </div >
            <FooterMain />
            <ModalComp show={modalOpen} handleOpenModal={handleOpenModal} text="Coming soon!" />
        </Flex >
    );
};