import { Edit, useForm } from "@refinedev/antd";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { DatePicker, Form, Input, Select, Upload } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";


interface CountryData {
    countryCode: string;
    dialCode: string;
}


export const AdministratorEdit = () => {
    const { form, formProps, saveButtonProps } = useForm({});
    const { t } = useTranslation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [countryCode, setCountryCode] = useState("vn");
    const [phoneCode, setPhoneCode] = useState("+84");

    const handleLocationChange = (value) => {
        form.setFieldsValue({ location: value.name })
    };



    // const handleImageChange = async ({ fileList: newFileList }) => {
    //     const file = newFileList[0];
    //     if (file) {
    //         file.base64 = await getBase64(file.originFileObj);
    //     }
    //     console.log("base64: ", file.base64)
    //     form.setFieldsValue({ avatarImg: file.base64 })
    // };

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form form={form}
                {...formProps}
                initialValues={{
                    roleId: 2,
                    phoneCode: phoneCode,
                    countryCode: countryCode,
                    location: "",
                    avatarImg: "https://i.pravatar.cc/300"
                }}
                layout="vertical">
                <Form.Item
                    label="Name"
                    name={["name"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Input style={{ width: '50%' }} />
                </Form.Item>
                <Form.Item
                    label="Given Name"
                    name={["givenName"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Input style={{ width: '50%' }} />
                </Form.Item>
                <Form.Item
                    label="Gender"
                    name={["gender"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Select
                        style={{ width: '50%' }}
                        options={[
                            { value: "F", label: "Female" },
                            { value: "M", label: "Male" }
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Birthday"
                    name={["birthday"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <DatePicker format="DD/MM/YYYY" />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name={["phone"]}
                    valuePropName="phone"
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <PhoneInput
                        country={countryCode}
                        enableSearch={true}
                        onChange={(phone, country: CountryData) => {
                            form.setFieldsValue({ phone: phone })
                            form.setFieldsValue({ countryCode: country.countryCode })
                            form.setFieldsValue({ phoneCode: "+" + country.dialCode })
                        }
                        }
                    />
                </Form.Item>
                <Form.Item
                    label="Country Code"
                    name={["countryCode"]}
                    initialValue={countryCode}
                    hidden
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Form.Item
                        label="Phone Code"
                        name={["phoneCode"]}
                        initialValue={phoneCode}
                        hidden
                        rules={[
                            {
                                required: false
                            }
                        ]}
                    ></Form.Item>
                </Form.Item>
                <Form.Item
                    label={t("AUTHENTICATION.EMAIL")}
                    name="email"
                    rules={[
                        { required: false },
                        {
                            type: "email",
                            message: t("AUTHENTICATION.INVALID_EMAIL")
                        }
                    ]}
                >
                    <Input
                        placeholder={t("AUTHENTICATION.EMAIL_PLACEHOLDER")}
                        style={{ width: '50%' }}
                    />
                </Form.Item>
                <Form.Item
                    label={t("AUTHENTICATION.PASSWORD")}
                    name={["password"]}
                    rules={[{ required: false }]}
                >
                    <Input.Password
                        autoComplete="current-password"
                        placeholder={t("AUTHENTICATION.PASSWORD_PLACEHOLDER")}
                        type="password"
                        visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                        style={{ width: '50%' }}
                    />
                </Form.Item>
                <Form.Item
                    label={t("AUTHENTICATION.CONFIRM_NEW_PASSWORD")}
                    // name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        {
                            required: false,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The new password that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        autoComplete="current-password"
                        placeholder={t("AUTHENTICATION.CONFIRM_NEW_PASSWORD_PLACEHOLDER")}
                        type="password"
                        visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                        style={{ width: '50%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="Company Name"
                    name={["companyName"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Input style={{ width: '50%' }} />
                </Form.Item>
                <Form.Item
                    label="Location"
                    name={["location"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Input style={{ width: '50%' }} />
                </Form.Item>
                <Form.Item
                    label="Established Years"
                    name={["establishedYears"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <DatePicker picker="year" />
                </Form.Item>
                <Form.Item
                    label="Avatar"
                    name={["avatarImg"]}
                    hidden
                // valuePropName="thumbUrl"
                // getValueFromEvent={normFile}
                >
                    <Upload
                        action="/upload.do" listType="picture-circle"
                        className="avatar-uploader"
                        multiple={false}
                        maxCount={1}
                    >
                        <button style={{ border: 0, background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>
            </Form>
        </Edit>
    );
};