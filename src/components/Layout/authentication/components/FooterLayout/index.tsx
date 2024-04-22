import Layout from "antd/es/layout/layout";
import { useTranslation } from "react-i18next";

import { Col, Divider, Flex, Row } from 'antd';


export const Footer = () => {

    const { t } = useTranslation();

    return (
        <Flex style={{ width: "100%", bottom: "2%" }} vertical>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: "wrap", fontSize: "14px", fontWeight: "500" }}>
                {t("FOOTER.MANAGE_BY")}&nbsp;
                <a target="_blank" style={{ color: "black" }}>
                    {t("FOOTER.MANAGER_NAME")}
                </a>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: "wrap", fontSize: "14px", fontWeight: "500" }}>
                {t("FOOTER.MAKE_BY")}&nbsp;
                <a href={t("COMPANY_URL")} target="_blank" style={{ color: "black" }}>
                    {t("FOOTER.COMPANY_NAME")}
                </a>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: "wrap", fontSize: "12px", fontWeight: "500", color: "#bfbfbf" }}>
                {t("FOOTER.COMPANY_ADDRESS")}
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: "wrap", fontSize: "12px", fontWeight: "500", color: "#bfbfbf" }}>
                {t("FOOTER.COPY_RIGHT")}
            </div>
        </Flex>
    );

}