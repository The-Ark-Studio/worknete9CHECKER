import { Create, useForm } from "@refinedev/antd";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { DatePicker, Form, Input, Select, Upload } from "antd";
import React, { useState } from 'react';
import { PlusOutlined } from "@ant-design/icons";

import {
    StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import {
    file2Base64,
} from "@refinedev/core";

interface CountryData {
    countryCode: string;
    dialCode: string;
}

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
};

export const AdministratorCreate = (buttonStyle) => {
    const { form, formProps, saveButtonProps } = useForm({});
    const { t } = useTranslation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [countryCode, setCountryCode] = useState("vn");
    const [phoneCode, setPhoneCode] = useState("+84");

    const handleLocationChange = (value) => {
        form.setFieldsValue({ location: value.name })
    };

    const handleImageChange = async ({ fileList: newFileList }) => {
        const file = newFileList[0];
        if (file) {
            file.base64 = await getBase64(file.originFileObj);
        }
        console.log("base64: ", file.base64)
        form.setFieldsValue({ avatarImg: file.base64 })
    };

    return (
        <Create
            saveButtonProps={saveButtonProps}
            headerButtonProps={{ style: buttonStyle }}
        >
            <Form form={form}
                {...formProps}
                initialValues={{
                    roleId: 2,
                    phoneCode: phoneCode,
                    countryCode: countryCode,
                    location: "",
                    avatarImg: "https://i.pravatar.cc/300"
                }}
                layout="vertical"
            >
                <Form.Item
                    label="Name"
                    name={["name"]}
                    rules={[
                        {
                            required: true
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
                            required: true
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
                            required: true
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
                            required: true
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
                            required: true
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
                    hidden
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input value={countryCode} hidden disabled />

                </Form.Item>
                <Form.Item
                    label="Phone Code"
                    name={["phoneCode"]}
                    hidden
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input value={phoneCode} hidden disabled />
                </Form.Item>
                <Form.Item
                    label="Username"
                    name={["username"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input style={{ width: '50%' }} />
                </Form.Item>
                <Form.Item
                    label={t("AUTHENTICATION.EMAIL")}
                    name="email"
                    rules={[
                        { required: true },
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
                    rules={[{ required: true }]}
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
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
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
                    label="Role"
                    name={["roleId"]}
                    hidden
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Input hidden disabled />
                </Form.Item>
                <Form.Item
                    label="Company Name"
                    name={["companyName"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                    style={{ width: '50%' }}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Location"
                    name={["location"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                    style={{ width: '50%' }}
                >
                    <StateSelect
                        countryid={116}
                        value={location}
                        onChange={handleLocationChange}
                        placeHolder="Select Location"
                    />
                </Form.Item>
                <Form.Item
                    label="Established Years"
                    name={["establishedYears"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <DatePicker picker="year" />
                </Form.Item>
                <Form.Item
                    label="Avatar"
                    name={["avatarImg"]}
                >
                    <Upload
                        listType="picture-circle"
                        className="avatar-uploader"
                        multiple={false}
                        beforeUpload={() => false}
                        onChange={handleImageChange}
                        maxCount={1}
                    >
                        <button style={{ border: 0, background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>
            </Form>
        </Create >
    );
};