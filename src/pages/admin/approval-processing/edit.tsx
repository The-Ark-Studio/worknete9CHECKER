/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { Edit, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";

export const ApprovalProcessingEdit = () => {
    const { formProps, saveButtonProps, queryResult, formLoading } = useForm({});

    const blogPostsData = queryResult?.data?.data;

    const { selectProps: categorySelectProps } = useSelect({
        resource: "categories",
        defaultValue: blogPostsData?.category?.id,
        queryOptions: {
            enabled: !!blogPostsData?.category?.id
        }
    });

    return (
        <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Title"
                    name={["title"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Content"
                    name="content"
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <MDEditor data-color-mode="light" />
                </Form.Item>
                <Form.Item
                    initialValue={formProps?.initialValues?.category?.id}
                    label="Category"
                    name={["category", "id"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Select {...categorySelectProps} />
                </Form.Item>
                <Form.Item
                    initialValue="draft"
                    label="Status"
                    name={["status"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Select
                        defaultValue="draft"
                        options={[
                            { value: "draft", label: "Draft" },
                            { value: "published", label: "Published" },
                            { value: "rejected", label: "Rejected" }
                        ]}
                        style={{ width: 120 }}
                    />
                </Form.Item>
            </Form>
        </Edit>
    );
};
