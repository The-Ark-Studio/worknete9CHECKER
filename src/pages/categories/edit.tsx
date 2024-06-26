/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export const CategoryEdit = () => {
    const { formProps, saveButtonProps } = useForm({});

    return (
        <Edit saveButtonProps={saveButtonProps}>
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
            </Form>
        </Edit>
    );
};
