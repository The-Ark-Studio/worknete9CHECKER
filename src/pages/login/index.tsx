/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { AuthPage } from "@comp/Layout/authentication/components/BasicLayout";
// import { AuthPage } from "@refinedev/antd";
import { Flex, Typography } from "antd";

const { Title } = Typography;

export const Login = () => {
    return (

        <AuthPage
            formProps={{
                initialValues: { email: "", password: "" }
            }}
            renderContent={(content) => {
                return (
                    <Flex align="center" justify="center" vertical>
                        {content}
                    </Flex>
                );
            }}
            type="login"
        />
    );
};
