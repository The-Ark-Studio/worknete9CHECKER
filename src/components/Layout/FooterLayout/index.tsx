import { useTranslation } from "react-i18next";

import { Flex } from "antd";

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <Flex style={{ width: "100%", bottom: "2%" }} vertical>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "wrap",
                    fontSize: "14px",
                    fontWeight: "500"
                }}
            >
                {t("FOOTER.MANAGE_BY")}&nbsp;
                <a style={{ color: "black" }} target="_blank">
                    {t("FOOTER.MANAGER_NAME")}
                </a>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "wrap",
                    fontSize: "14px",
                    fontWeight: "500"
                }}
            >
                {t("FOOTER.MAKE_BY")}&nbsp;
                <a href={t("COMPANY_URL")} style={{ color: "black" }} target="_blank">
                    {t("FOOTER.COMPANY_NAME")}
                </a>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "wrap",
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#bfbfbf"
                }}
            >
                {t("FOOTER.COMPANY_ADDRESS")}
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "wrap",
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#bfbfbf"
                }}
            >
                {t("FOOTER.COPY_RIGHT")}
            </div>
        </Flex>
    );
};
