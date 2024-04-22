/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import React from "react";
import { Button, Result } from "antd";

const PageOops: React.FC = () => (
    <Result
        extra={<Button type="primary">Back Home</Button>}
        status="500"
        subTitle="Sorry, something went wrong."
        title="500"
    />
);

export default PageOops;
