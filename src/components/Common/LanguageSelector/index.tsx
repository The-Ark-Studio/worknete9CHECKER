import { DownOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Menu, Space } from "antd";
import { useTranslation } from "react-i18next";
import styles from "@asset/styles.module.css";

export const LanguageSelector = () => {
    const { t, i18n } = useTranslation();
    const locale = i18n.language;
    const [currentLocale, setCurrentLocale] = useState(locale);

    function changeLanguage(lang) {
        i18n.changeLanguage(lang);
        setCurrentLocale(lang);
    }

    const menu = (
        <Menu selectedKeys={currentLocale ? [currentLocale] : []}>
            {[...(i18n.languages || [])].sort().map((lang: string) => (
                <Menu.Item
                    icon={
                        <span style={{ marginRight: 8 }}>
                            <Avatar
                                size={{ xs: 6, sm: 10, md: 16, lg: 16, xl: 16, xxl: 16 }}
                                src={`../images/flags/${lang}.svg`}
                            />
                        </span>
                    }
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                >
                    {lang === "kor" ? "Korean" : lang === "en" ? "English" : "Vietnamese"}
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <Button className={styles.header_right_button}
                style={{
                    fontSize: "0.8vw"
                }}
                type="link"
            >
                <Space>
                    <Avatar
                        size={{ xs: 6, sm: 10, md: 16, lg: 16, xl: 16, xxl: 16 }}
                        src={`../images/flags/${currentLocale}.svg`}
                    />
                    {currentLocale === "kor"
                        ? "Korean"
                        : currentLocale === "en"
                            ? "English"
                            : "Vietnamese"}
                    <DownOutlined style={{ fontSize: "0.7vw" }} />
                </Space>
            </Button>
        </Dropdown>
    );
};
