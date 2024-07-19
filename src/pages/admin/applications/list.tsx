/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { EyeOutlined, WalletOutlined } from "@ant-design/icons";
import { DateField, List, useTable } from "@refinedev/antd";
import { BaseRecord, useApiUrl, useNotification, useTranslate, } from "@refinedev/core";
import { Applications } from "@src/utils/applications";
// import { IListApprovalProcessing } from "@src/utils/list-approval-processing";
// import { Users } from "@src/utils/users";
import { Button, Col, Row, Select, Space, Table, Tag, Typography } from "antd";
import React from "react";
// import { ApprovalProcessingShow } from "./show";
import httpCommon from "@api/http-common-api";
import { ApplicationShow } from "./show";
const axiosInstance = httpCommon;

// interface DataType {
//     applicationId: React.Key;
//     phone: string;
//     age: number;
//     candidateGender: string;
//     dateApplying: string;
//     checkerName: string;
//     invoiceId: number;
// }

export const ApplicationList = () => {
    const { tableProps } = useTable({
        syncWithLocation: true
    });
    // console.log("table props: ", tableProps);

    const t = useTranslate();
    const [isShow, setIsShow] = useState(false);
    const [application, setApplication] = useState({});
    const userId = JSON.parse(localStorage.getItem("userId") as string);
    const userRole = localStorage.getItem("role");
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const { open } = useNotification();
    const apiUrl = useApiUrl();

    // const onSelectChange = (newSelectedRowKeys: React.Key[], selectedRows: BaseRecord[]) => {
    //     console.log(newSelectedRowKeys)
    //     setIsShow(true);
    //     setApplication(selectedRows);
    //     setSelectedRowKeys(newSelectedRowKeys);
    // };

    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: BaseRecord[]) => {
            setIsShow(true);
            setApplication(selectedRows[0]);
        },
    };

    // const hasSelected = selectedRowKeys.length > 0;
    // {...tableProps}

    const onClickUpdateStatus = async (applicationId, status, note) => {
        await axiosInstance.patch(
            `${apiUrl}/approval-processing/${applicationId}`,
            {
                status: status,
                note: note,
            }
        ).then((response) => {
            // console.log(response.data);
            open?.({
                type: "success",
                message: "Status updated.",
                key: applicationId,
            });
            location.reload();
        })
            .catch((error) => {
                console.error(error);
                open?.({
                    type: "error",
                    message: error,
                    key: applicationId,
                });
            });
        // setIsShow(true);
        // setApplication(application);
        // onSelectChange([applicationId]);
    }

    const getFullTextGender = (key) => {
        return t("GENDER." + key)
    }

    const getColorStatus = (status) => {
        if (status == 'A')
            return "var(--success65)";
        else if (status == 'R')
            return "red";
        else if (status == 'V')
            return "#8F4E20FF";
        return "#5bc0de";
    }

    return (
        <Row>
            <Col span={tableProps.dataSource?.length === 0 ? 24 : 16}>
                <List>
                    <Table {...tableProps} rowKey="applicationId"
                        rowSelection={{
                            type: "radio",
                            ...rowSelection

                        }}>
                        <Table.Column dataIndex="applicationId" hidden={true} title="ID" />
                        <Table.Column dataIndex="phone" title={t("APPROVAL_PROCESSING.PHONE")} />
                        <Table.Column dataIndex="age" title={t("APPROVAL_PROCESSING.AGE")} />
                        <Table.Column
                            dataIndex="candidateGender"
                            title={t("APPROVAL_PROCESSING.GENDER")}
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
                            title={t("APPROVAL_PROCESSING.DATE_APPLYING")}
                        />

                        <Table.Column dataIndex="checkerName" title={t("APPROVAL_PROCESSING.CHECKER")} />
                        <Table.Column dataIndex="transactionId" title={t("APPROVAL_PROCESSING.INVOICE")} />
                        {/* <Table.Column
                    dataIndex="status"
                    title={t("APPROVAL_PROCESSING.STATUS")}
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
                            {t("APPLICATION_STATUS." + record.status)}
                        </Tag>
                    )}
                /> */}
                        <Table.Column
                            dataIndex="actions"
                            render={(_, record: BaseRecord) => (
                                <Space>
                                    {/* <Button
                                className="refine-show-button"
                                data-testid="refine-show-button"
                                icon={<EyeOutlined />}
                                key={record.applicationId}
                                onClick={() => onClickShowDetails(record)}
                                size="small"
                            /> */}
                                    {/* {
                                record.status === "W" ?
                                    <Button
                                        className="refine-show-button"
                                        data-testid="refine-show-button"
                                        icon={<WalletOutlined />}
                                        key={record.applicationId}
                                        onClick={() => onClickUpdateStatus(record.applicationId)}
                                        size="small"
                                    /> : null
                            } */}
                                    <Select
                                        style={{ width: '8vw' }}
                                        defaultValue={record.status}
                                        onChange={(e) => onClickUpdateStatus(record.applicationId, e, '')}
                                        options={[
                                            { value: "A", label: t("APPLICATION_STATUS." + "A") },
                                            { value: "R", label: t("APPLICATION_STATUS." + "R") },
                                            { value: "V", label: t("APPLICATION_STATUS." + "V") },
                                            { value: "W", label: t("APPLICATION_STATUS." + "W") },
                                            { value: "S", label: t("APPLICATION_STATUS." + "S") },
                                            { value: "E", label: t("APPLICATION_STATUS." + "E") }
                                        ]}
                                    />
                                </Space>
                            )}
                            title={t("GLOBAL.ACTIONS")}
                        />
                    </Table>
                </List>
            </Col>
            <Col span={8}>{isShow ? <ApplicationShow application={application} /> : null}</Col>
        </Row>
    );
};
