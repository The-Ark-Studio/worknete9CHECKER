/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { Result } from "antd";
import React from "react";

const NoPermission: React.FC = () => (
    <Result
        // extra={<Button type="primary">Back Home</Button>}
        status="403"
        subTitle="User doesn't have a permission to access this screen."
        title="403"
    />
);

export default NoPermission;
