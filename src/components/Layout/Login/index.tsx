import { LoginFormTypes, LoginPageProps, useActiveAuthProvider, useLink, useRouterType } from "@refinedev/core";
import {
    Button,
    Card,
    CardProps,
    Checkbox,
    Col,
    Divider,
    Form,
    FormProps,
    Input,
    Layout,
    LayoutProps,
    Row,
    Typography,
    theme
} from "antd";
import React from "react";

import { MailOutlined, SecurityScanOutlined } from "@ant-design/icons";
import { useLogin, useRouterContext } from "@refinedev/core";

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
    hideForm
}) => {
    const { token } = theme.useToken();
    const [form] = Form.useForm<LoginFormTypes>();
    const routerType = useRouterType();
    const Link = useLink();
    const { Link: LegacyLink } = useRouterContext();

    const ActiveLink = routerType === "legacy" ? LegacyLink : Link;

    const authProvider = useActiveAuthProvider();
    const { mutate: login, isLoading } = useLogin<LoginFormTypes>({
        v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy)
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
                    fontSize: "20px"
                }}
            />
        );

    const renderProviders = () => {
        if (providers && providers.length > 0) {
            return (
                <>
                    {providers.map((provider) => {
                        return (
                            <Button
                                block
                                icon={provider.icon}
                                key={provider.name}
                                onClick={() =>
                                    login({
                                        providerName: provider.name
                                    })
                                }
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    marginBottom: "8px"
                                }}
                                type="default"
                            >
                                {provider.label}
                            </Button>
                        );
                    })}
                    {!hideForm ? (
                        <Divider>
                            <Typography.Text
                                style={{
                                    color: token.colorTextLabel
                                }}
                            />
                        </Divider>
                    ) : null}
                </>
            );
        }
        return null;
    };

    const CardContent = (
        <Card
            bordered={false}
            style={{
                backgroundColor: token.colorBgElevated,
                width: "100%",
                boxShadow: "none",
                position: "relative"
            }}
            {...(contentProps ?? {})}
        >
            {renderProviders()}
            {!hideForm ? (
                <Form<LoginFormTypes>
                    form={form}
                    initialValues={{
                        remember: false
                    }}
                    layout="vertical"
                    onFinish={(values) => login(values)}
                    requiredMark={false}
                    {...formProps}
                >
                    <Form.Item
                        label={
                            <Typography style={{ fontSize: "1.25rem", fontWeight: "500" }}>
                                {t("AUTHENTICATION.EMAIL")}
                            </Typography>
                        }
                        name="email"
                        rules={[
                            { required: true },
                            {
                                type: "email",
                                message: t("AUTHENTICATION.INVALID_EMAIL")
                            }
                        ]}
                        style={{ fontFamily: "Helvetica" }}
                    >
                        <Input
                            placeholder={t("AUTHENTICATION.EMAIL_PLACEHOLDER")}
                            prefix={<MailOutlined style={{ color: "black" }} />}
                            size="large"
                            style={{ backgroundColor: "#F3F4F6FF", borderRadius: "4px" }}
                        />
                    </Form.Item>
                    <Form.Item
                        label={
                            <Typography style={{ fontSize: "1.25rem", fontWeight: "500" }}>
                                {t("AUTHENTICATION.PASSWORD")}
                            </Typography>
                        }
                        name="password"
                        rules={[{ required: true }]}
                        style={{ fontFamily: "Helvetica" }}
                    >
                        <Input.Password
                            autoComplete="current-password"
                            placeholder={t("AUTHENTICATION.PASSWORD_PLACEHOLDER")}
                            prefix={<SecurityScanOutlined style={{ color: "black" }} />}
                            size="large"
                            style={{ backgroundColor: "#F3F4F6FF", borderRadius: "4px" }}
                            type="password"
                            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                        />
                    </Form.Item>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "24px"
                        }}
                    >
                        {rememberMe ?? (
                            <Form.Item name="remember" noStyle valuePropName="checked">
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
                                    color: token.colorPrimaryTextHover,
                                    fontFamily: "Helvetica",
                                    fontSize: "12px",
                                    marginLeft: "auto"
                                }}
                                to="/forgot-password"
                            >
                                {t("AUTHENTICATION.TEXT_RESET_PASSWORD")}
                            </ActiveLink>
                        )}
                    </div>
                    {!hideForm ? (
                        <Form.Item>
                            <Button
                                block
                                htmlType="submit"
                                loading={isLoading}
                                size="large"
                                style={{ fontFamily: "Helvetica", fontSize: "1.5rem", minHeight: "50px" }}
                                type="primary"
                            >
                                {t("AUTHENTICATION.TEXT_SIGN_IN")}
                            </Button>
                        </Form.Item>
                    ) : null}
                </Form>
            ) : null}
        </Card>
    );

    return (
        <Layout style={{ marginTop: "-6%" }} {...(wrapperProps ?? {})}>
            <Row
                align={hideForm ? "top" : "middle"}
                justify="center"
                style={{
                    padding: "16px 0",
                    minHeight: "90dvh",
                    paddingTop: hideForm ? "15dvh" : "16px"
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
