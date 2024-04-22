import React from "react";
import {
    LoginPageProps,
    LoginFormTypes,
    useLink,
    useRouterType,
    useActiveAuthProvider,
} from "@refinedev/core";
import {
    Row,
    Col,
    Layout,
    Card,
    Typography,
    Form,
    Input,
    Button,
    Checkbox,
    CardProps,
    LayoutProps,
    Divider,
    FormProps,
    theme,
} from "antd";

import styles from "@asset/styles.module.css";
import { useLogin, useRouterContext } from "@refinedev/core";
import { MailOutlined, SecurityScanOutlined } from '@ant-design/icons';


// import {
//   bodyStyles,
//   containerStyles,
//   headStyles,
//   layoutStyles,
//   titleStyles,
// } from "../styles";
// import { ThemedTitleV2 } from "@components";

type LoginProps = LoginPageProps<LayoutProps, CardProps, FormProps>;
/**
 * **refine** has a default login page form which is served on `/login` route when the `authProvider` configuration is provided.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/antd/components/antd-auth-page/#login} for more details.
 */
export const LoginPage: React.FC<LoginProps> = ({
    providers,
    registerLink,
    forgotPasswordLink,
    rememberMe,
    contentProps,
    wrapperProps,
    renderContent,
    formProps,
    title,
    hideForm,
}) => {
    const { token } = theme.useToken();
    const [form] = Form.useForm<LoginFormTypes>();
    const routerType = useRouterType();
    const Link = useLink();
    const { Link: LegacyLink } = useRouterContext();

    const ActiveLink = routerType === "legacy" ? LegacyLink : Link;

    const authProvider = useActiveAuthProvider();
    const { mutate: login, isLoading } = useLogin<LoginFormTypes>({
        v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
    });

    const { t } = useTranslation();
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const PageTitle =
        title === false ? null : (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "32px",
                    fontSize: "20px",
                }}
            >
            </div>
        );

    const renderProviders = () => {
        if (providers && providers.length > 0) {
            return (
                <>
                    {providers.map((provider) => {
                        return (
                            <Button
                                key={provider.name}
                                type="default"
                                block
                                icon={provider.icon}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    marginBottom: "8px",
                                }}
                                onClick={() =>
                                    login({
                                        providerName: provider.name,
                                    })
                                }
                            >
                                {provider.label}
                            </Button>
                        );
                    })}
                    {!hideForm && (
                        <Divider>
                            <Typography.Text
                                style={{
                                    color: token.colorTextLabel,
                                }}
                            >
                            </Typography.Text>
                        </Divider>
                    )}
                </>
            );
        }
        return null;
    };

    const CardContent = (
        <Card
            // title={CardTitle}
            //   headStyle={headStyles}
            //   bodyStyle={bodyStyles}
            bordered={false}
            style={{
                // ...containerStyles,
                backgroundColor: token.colorBgElevated,
                width: "100%",
                boxShadow: "none",
                position: "relative"
            }}
            {...(contentProps ?? {})}
        >
            {renderProviders()}
            {!hideForm && (
                <Form<LoginFormTypes>
                    layout="vertical"
                    form={form}
                    onFinish={(values) => login(values)}
                    requiredMark={false}
                    initialValues={{
                        remember: false,
                    }}
                    {...formProps}
                >
                    <Form.Item
                        name="email"
                        style={{ fontFamily: "Helvetica" }}
                        label={<Typography style={{ fontSize: "1.25rem", fontWeight: "500" }}>{t("AUTHENTICATION.EMAIL")}</Typography>}
                        rules={[
                            { required: true },
                            {
                                type: "email",
                                message: t("AUTHENTICATION.INVALID_EMAIL")
                            },
                        ]}
                    >
                        <Input
                            size="large"
                            style={{ backgroundColor: "#F3F4F6FF", borderRadius: "4px" }}
                            placeholder={t("AUTHENTICATION.EMAIL_PLACEHOLDER")}
                            prefix={<MailOutlined style={{ color: "black" }} />}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        style={{ fontFamily: "Helvetica" }}
                        label={<Typography style={{ fontSize: "1.25rem", fontWeight: "500" }}>{t("AUTHENTICATION.PASSWORD")}</Typography>}
                        rules={[{ required: true }]}
                    >
                        <Input.Password
                            type="password"
                            autoComplete="current-password"
                            placeholder={t("AUTHENTICATION.PASSWORD_PLACEHOLDER")}
                            size="large"
                            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                            prefix={<SecurityScanOutlined style={{ color: "black" }} />}
                            style={{ backgroundColor: "#F3F4F6FF", borderRadius: "4px" }}
                        />
                    </Form.Item>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "24px",
                        }}
                    >
                        {rememberMe ?? (
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox
                                    style={{
                                        fontSize: "0.8rem",
                                        fontFamily: "Helvetica",
                                        borderRadius: "none"
                                    }}
                                >
                                    {t("AUTHENTICATION.TEXT_REMEMBER_ME")}
                                </Checkbox>
                            </Form.Item>
                        )}
                        {forgotPasswordLink ?? (
                            <ActiveLink
                                style={{
                                    color: token.
                                        colorPrimaryTextHover,
                                    fontFamily: "Helvetica",
                                    fontSize: "12px",
                                    marginLeft: "auto",
                                }}
                                to="/forgot-password"
                            >
                                {
                                    t("AUTHENTICATION.TEXT_RESET_PASSWORD")
                                }
                            </ActiveLink>
                        )}
                    </div>
                    {!hideForm && (
                        <Form.Item>
                            <Button
                                style={{ fontFamily: "Helvetica", fontSize: "1.5rem", minHeight: "50px" }}
                                type="primary"
                                size="large"
                                htmlType="submit"
                                loading={isLoading}
                                block
                            >
                                {t("AUTHENTICATION.TEXT_SIGN_IN")}
                            </Button>
                        </Form.Item>
                    )}
                </Form>
            )}
        </Card>
    );

    return (
        <Layout style={{ marginTop: "-6%" }} {...(wrapperProps ?? {})}>
            <Row
                justify="center"
                align={hideForm ? "top" : "middle"}
                style={{
                    padding: "16px 0",
                    minHeight: "90dvh",
                    paddingTop: hideForm ? "15dvh" : "16px",
                }}
            >
                <Col xs={22}>
                    {renderContent ? (
                        renderContent(CardContent, PageTitle)
                    ) : (
                        <>
                            {PageTitle}
                            {CardContent}
                        </>
                    )}
                </Col>
            </Row>
        </Layout>
    );
};
