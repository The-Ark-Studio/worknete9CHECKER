/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { PlusOutlined } from "@ant-design/icons";
import { Create, useForm } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, InputNumber, Select, Upload } from "antd";
import {
    StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
};


export const ApprovalProcessingCreate = () => {
    const { form, formProps, saveButtonProps } = useForm({});
    const { t } = useTranslation();

    const handleImageChange = async (event, fieldName) => {
        const newFileList = event.fileList;
        const file = newFileList[0];
        if (file) {
            file.base64 = await getBase64(file.originFileObj);
        }
        // console.log("base64: ", file.base64)
        form.setFieldsValue({ [fieldName]: file.base64 })
        // console.log(form.getFieldsValue([fieldName]))
    };

    const handleLocationChange = (value) => {
        form.setFieldsValue({ location: value.name })
    };

    return (
        <Create saveButtonProps={saveButtonProps}
        // headerButtonProps={{ style: buttonStyle }}
        >
            <Form {...formProps}
                form={form}

                layout="vertical">
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
                        // style={{ width: '50%' }}
                        options={[
                            { value: "F", label: "Female" },
                            { value: "M", label: "Male" }
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Age"
                    name={["age"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Professional Title"
                    name={["professionalTitle"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Hometown"
                    name={["homeTown"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Expected salary (VND)"
                    name={["expectedSalary"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Expected ocupation"
                    name={["preferredWork"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Highest education"
                    name={["academicBackground"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Expected working area"
                    name={["expectedArea"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <StateSelect
                        countryid={116}
                        value={location}
                        onChange={handleLocationChange}
                        placeHolder="Select Location"
                    />
                </Form.Item>
                <Form.Item
                    label="Family income(High, middle, low)"
                    name={["familySituation"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Select
                        // style={{ width: '50%' }}
                        options={[
                            { value: "H", label: "High" },
                            { value: "M", label: "Middle" },
                            { value: "L", label: "Low" }
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Number of family"
                    name={["numberOfFamily"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Passport file"
                    name="passportImg"
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <MDEditor data-color-mode="light" />
                </Form.Item>
                <Form.Item
                    label="Medical checkup"
                    name="healthCheckImg"
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <MDEditor data-color-mode="light" />
                </Form.Item>
                <Form.Item
                    label="Criminal record"
                    name="policeCheckImg"
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <MDEditor data-color-mode="light" />
                </Form.Item>
                <Form.Item
                    label="TOPIK (optional)"
                    name={["koreanExamImg"]}
                >
                    <Upload
                        listType="picture-circle"
                        className="avatar-uploader"
                        multiple={false}
                        beforeUpload={() => false}
                        onChange={(event) => handleImageChange(event, "koreanExamImg")}
                        maxCount={1}
                    >
                        <button style={{ border: 0, background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    label="ID Card (front)"
                    name={["idCardFrontImg"]}
                >
                    <Upload
                        listType="picture-circle"
                        className="avatar-uploader"
                        multiple={false}
                        beforeUpload={() => false}
                        onChange={(event) => handleImageChange(event, "idCardFrontImg")}
                        maxCount={1}
                    >
                        <button style={{ border: 0, background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    label="ID Card (back)"
                    name={["idCardBackImg"]}
                >
                    <Upload
                        listType="picture-circle"
                        className="avatar-uploader"
                        multiple={false}
                        beforeUpload={() => false}
                        onChange={(event) => handleImageChange(event, "idCardBackImg")}
                        maxCount={1}
                    >
                        <button style={{ border: 0, background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    initialValue="W"
                    label="Application status"
                    name={["status"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Select
                        defaultValue="W"
                        options={[
                            { value: "W", label: "Waiting" },
                            { value: "V", label: "Verify" },
                            { value: "R", label: "Rejected" }
                        ]}
                        style={{ width: 120 }}
                    />
                </Form.Item>
            </Form>
        </Create>
    );
};
