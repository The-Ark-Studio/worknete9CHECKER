/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { EyeOutlined } from "@ant-design/icons";
import { DateField, List, useTable } from "@refinedev/antd";
import { BaseRecord, useTranslate } from "@refinedev/core";
import { Applications } from "@src/utils/applications";
// import { IListApprovalProcessing } from "@src/utils/list-approval-processing";
// import { Users } from "@src/utils/users";
import { Button, Col, Row, Space, Table } from "antd";
import React from "react";
import { ApprovalProcessingShow } from "./show";

export const ApprovalProcessingList = () => {
    const { tableProps } = useTable({
        syncWithLocation: true
    });
    console.log("table props: ", tableProps);

    const translate = useTranslate();
    const [isShow, setIsShow] = useState(false);
    const [application, setApplication] = useState({});
    const userId = JSON.parse(localStorage.getItem("userId") as string);
    const userRole = localStorage.getItem("role");
    // const results: IListApprovalProcessing[] = [];
    // const getList = Applications.forEach((app) => {
    //     if (app.checkerId === parseInt(userId)) {
    //         const candidate = Users.find((u) => u.userId === app.candidateId);

    //         if (candidate !== undefined) {
    //             const data = {
    //                 applicationId: app.applicationId,
    //                 candidateId: app.candidateId,
    //                 candidateName: candidate?.name + " " + candidate?.givenName,
    //                 candidateEmail: candidate?.email,
    //                 candidateGender: candidate?.gender,
    //                 candidateAge: candidate?.age,
    //                 dateApplying: app.dateApplying
    //             };
    //             results.push(data);
    //         }
    //     }
    // });
    // const [listAppliations, setListApplication] = useState(results);

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

    return (
        <Row>
            <Col span={tableProps.dataSource?.length === 0 ? 24 : 16}>
                <List>
                    <Table {...tableProps} rowKey="applicationId" rowSelection={rowSelection}>
                        <Table.Column dataIndex="applicationId" hidden={true} title="ID" />
                        <Table.Column dataIndex="candidateName" title={translate("APPROVAL_PROCESSING.NAME")} />
                        <Table.Column dataIndex="candidateEmail" title={translate("APPROVAL_PROCESSING.EMAIL")} />
                        <Table.Column dataIndex="candidateGender" title={translate("APPROVAL_PROCESSING.GENDER")} />
                        {/* <Table.Column dataIndex="status" title="Status" /> */}
                        <Table.Column
                            dataIndex={["dateApplying"]}
                            render={(value: any) => <DateField format="LL" value={value} />}
                            title={translate("APPROVAL_PROCESSING.DATE_APPLYING")}
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
            </Col>
            <Col span={8}>{isShow ? <ApprovalProcessingShow application={application} /> : null}</Col>
        </Row>
    );
};
