/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { AuthPage } from "@src/components/Layout/BasicLayout";
// import { AuthPage } from "@refinedev/antd";
import { Flex } from "antd";

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
