/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { EyeOutlined } from "@ant-design/icons";
import { DateField, List, useTable } from "@refinedev/antd";
import { BaseRecord, useTranslate } from "@refinedev/core";
// import { Applications } from "@src/utils/applications";
// import { IListApprovalProcessing } from "@src/utils/list-approval-processing";
// import { Users } from "@src/utils/users";
import { Button, Col, Row, Space, Table, Tag, Typography } from "antd";
import React from "react";
import { ApprovalProcessingShow } from "./show";

export const ApprovalProcessingList = () => {
    const { tableProps } = useTable({
        syncWithLocation: true
    });
    // console.log("table props: ", tableProps);

    const translate = useTranslate();
    const [isShow, setIsShow] = useState(false);
    const [application, setApplication] = useState({});
    const userId = JSON.parse(localStorage.getItem("userId") as string);
    const userRole = localStorage.getItem("role");
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

    // const rowSelection = {
    //     selectedRowKeys,
    //     onChange: onSelectChange
    // };
    // const hasSelected = selectedRowKeys.length > 0;
    // {...tableProps}

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: BaseRecord[]) => {
            setIsShow(true);
            setApplication(selectedRows[0]);
        },
    };

    function onClickShowDetails(application) {
        setIsShow(true);
        setApplication(application);
        onSelectChange([application.applicationId]);
    }

    const getFullTextGender = (key) => {
        return translate("GENDER." + key)
    }

    const getColorStatus = (status) => {
        if (status == 'A')
            return "var(--success65)";
        else if (status == 'R')
            return "red";
        else if (status == 'V')
            return "#8F4E20FF";
    }
    return (
        <Row>
            <Col span={tableProps.dataSource?.length === 0 ? 24 : 16}>
                <List>
                    <Table {...tableProps}
                        rowKey="applicationId"
                        rowSelection={{
                            type: "radio",
                            ...rowSelection

                        }}
                    >
                        <Table.Column dataIndex="applicationId" hidden={true} title="ID" />
                        <Table.Column dataIndex="phone" title={translate("APPROVAL_PROCESSING.PHONE")} />
                        <Table.Column dataIndex="email" title={translate("APPROVAL_PROCESSING.EMAIL")} />
                        <Table.Column dataIndex="age" title={translate("APPROVAL_PROCESSING.AGE")} />
                        <Table.Column
                            dataIndex="candidateGender"
                            title={translate("APPROVAL_PROCESSING.GENDER")}
                            render={(_, record: BaseRecord) => (
                                <Typography
                                    key={record.candidateGender}
                                >
                                    {getFullTextGender(record.candidateGender)}
                                </Typography>
                            )}

                        />
                        {/* <Table.Column dataIndex="status" title="Status" /> */}
                        <Table.Column
                            dataIndex={["dateApplying"]}
                            render={(value: any) => <DateField format="LL" value={value} />}
                            title={translate("APPROVAL_PROCESSING.DATE_APPLYING")}
                        />
                        <Table.Column
                            dataIndex="status"
                            title={translate("APPROVAL_PROCESSING.STATUS")}
                            // key="roleName"
                            render={(_, record: BaseRecord) => (
                                <Tag
                                    key={record.roleName}
                                    style={{
                                        backgroundColor: record.roleTagBgColor,
                                        color: getColorStatus(record.status),
                                        borderRadius: "0.4vw"
                                    }}
                                >
                                    {translate("APPLICATION_STATUS." + record.status)}
                                </Tag>
                            )}
                        />
                        <Table.Column dataIndex="transactionId" title={translate("APPROVAL_PROCESSING.INVOICE")} />
                        {/* <Table.Column
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
                        /> */}
                    </Table>
                </List>
            </Col>
            <Col span={8}>{isShow ? <ApprovalProcessingShow application={application} /> : null}</Col>
        </Row>
    );
};
