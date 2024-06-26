/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { Result } from "antd";
import React from "react";

const PageOops: React.FC = () => (
    <Result
        // extra={<Button type="primary">Back Home</Button>}
        status="500"
        subTitle="Sorry, something went wrong."
        title="500"
    />
);

export default PageOops;
