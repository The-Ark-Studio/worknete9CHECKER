/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { DeleteButton, EditButton, List, ShowButton, useTable } from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";

export const CategoryList = () => {
    const { tableProps } = useTable({
        syncWithLocation: true
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="ID" />
                <Table.Column dataIndex="title" title="title" />
                <Table.Column
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            <EditButton hideText recordItemId={record.id} size="small" />
                            <ShowButton hideText recordItemId={record.id} size="small" />
                            <DeleteButton hideText recordItemId={record.id} size="small" />
                        </Space>
                    )}
                    title="Actions"
                />
            </Table>
        </List>
    );
};
