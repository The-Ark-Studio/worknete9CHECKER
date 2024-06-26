/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { EyeOutlined } from "@ant-design/icons";
import { List } from "@refinedev/antd";
import { BaseRecord, useTranslate } from "@refinedev/core";
import { IListAdministrators } from "@src/utils/list-administrators";
import { Users } from "@src/utils/users";
import { Button, Space, Table, Tag, Typography } from "antd";
import React from "react";

export const AdministratorsList = () => {
    const translate = useTranslate();
    const [isShow, setIsShow] = useState(false);
    const [application, setApplication] = useState({});
    // const { tableProps } = useTable({
    //     syncWithLocation: true
    // });
    console.log("role: ");
    const userId = JSON.parse(localStorage.getItem("userId") as string);
    const userRole = localStorage.getItem("role");
    console.log("role: ", userRole);

    const results: IListAdministrators[] = [];

    const getList = Users.filter((user) => {
        if (user.role !== "User") {
            const data = {
                userId: user.userId,
                email: user.email,
                username: user.username,
                name: user.name + " " + user.givenName,
                avatarImg: user.avatarImg,
                role: user.role,
                location: user.location,
                company: user.company,
                establish_year: user.establish_year
            };
            results.push(data);
        }
    });
    const [listAdministrators, setListAdministrators] = useState(results);

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);

    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        // console.log("selectedRowKeys changed: ", newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;
    // {...tableProps}

    function onClickShowDetails(application) {
        setIsShow(true);
        setApplication(application);
        onSelectChange([application.applicationId]);
    }

    if (userRole !== "Owner") {
        return <Typography>No permissions</Typography>;
    }

    return (
        <List>
            <Table dataSource={listAdministrators} rowKey="userId" rowSelection={rowSelection}>
                <Table.Column dataIndex="userId" hidden={true} title="ID" />
                <Table.Column dataIndex="avatarImg" title={translate("ADMINISTRATORS.AVATAR")} />
                <Table.Column dataIndex="name" title={translate("ADMINISTRATORS.NAME")} />
                <Table.Column dataIndex="username" title={translate("ADMINISTRATORS.USERNAME")} />
                <Table.Column dataIndex="email" title={translate("ADMINISTRATORS.EMAIL")} />
                <Table.Column dataIndex="role" title={translate("ADMINISTRATORS.ROLE")} />

                <Table.Column
                    dataIndex={["dateApplying"]}
                    render={(value: any) => {
                        const color = value === "Owner" ? "red" : value === "Admin" ? "processing" : "error";
                        return (
                            <Tag color={color} key={value}>
                                {value.toUpperCase()}
                            </Tag>
                        );
                    }}
                    title={translate("ADMINISTRATORS.ROLE")}
                />
                <Table.Column
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            <Button
                                className="refine-show-button"
                                data-testid="refine-show-button"
                                icon={<EyeOutlined />}
                                key={record.applicationId}
                                onClick={() => onClickShowDetails(record)}
                                size="small"
                            />
                        </Space>
                    )}
                    title={translate("GLOBAL.ACTIONS")}
                />
            </Table>
        </List>
    );
};
