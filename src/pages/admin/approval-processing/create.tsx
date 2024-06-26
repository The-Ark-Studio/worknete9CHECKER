/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { Create, useForm } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";

export const ApprovalProcessingCreate = () => {
    const { formProps, saveButtonProps } = useForm({});

    // const { selectProps: categorySelectProps } = useSelect({
    //     resource: "approval_processing"
    // });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Professional Title"
                    name={["professionalTitle"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Hometown"
                    name={["hometownAddress"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Expected salary"
                    name={["expectedSalary"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Expected ocupation"
                    name={["preferredWork"]}
                    rules={[
                        {
                            required: true
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
                            required: true
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
                            required: true
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Family income(High, middle, low)"
                    name={["numberOfFamily"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Family status"
                    name={["familySituation"]}
                    rules={[
                        {
                            required: true
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
                            required: true
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
                            required: true
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
                            required: true
                        }
                    ]}
                >
                    <MDEditor data-color-mode="light" />
                </Form.Item>
                <Form.Item
                    label="TOPIK (optional)"
                    name="koreanExamImg"
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <MDEditor data-color-mode="light" />
                </Form.Item>
                <Form.Item
                    label="ID card (front)"
                    name="idCardFrontImg"
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <MDEditor data-color-mode="light" />
                </Form.Item>
                <Form.Item
                    label="ID card (back)"
                    name="idCardBackImg"
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <MDEditor data-color-mode="light" />
                </Form.Item>
                {/* <Form.Item
                    label="Category"
                    name={["category", "id"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Select {...categorySelectProps} />
                </Form.Item> */}
                <Form.Item
                    initialValue="draft"
                    label="Application status"
                    name={["status"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Select
                        defaultValue="waiting"
                        options={[
                            { value: "waiting", label: "Waiting" },
                            { value: "verify", label: "Verify" },
                            { value: "rejected", label: "Rejected" }
                        ]}
                        style={{ width: 120 }}
                    />
                </Form.Item>
            </Form>
        </Create>
    );
};
