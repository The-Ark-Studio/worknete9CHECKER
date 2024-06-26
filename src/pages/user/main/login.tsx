import React from 'react';
import ReactDOM from 'react-dom';

import { Form, Input, Button, Checkbox } from 'antd';
import { LockOutlined, PhoneOutlined } from '@ant-design/icons';

export const UserLoginForm = () => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="Phone"
                label="Phone"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Phone!',
                    },
                ]}
            >
                <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Phone" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
            </Form.Item>
            <Form.Item>
                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

        </Form>
    );
};
