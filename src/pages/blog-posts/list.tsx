/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { DateField, DeleteButton, EditButton, List, MarkdownField, ShowButton, useTable } from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Avatar, Col, Flex, Row, Space, Table, Typography } from "antd";
import React from "react";
import { MoreOutlined, WechatOutlined } from "@ant-design/icons";
// interface IDataType {
//     applicationId: number;
//     candidateEmail: string;
//     candidateGender: string;
//     candidateName: string;
//     dateApplyingg: string;
//     status: StringConstructor
//     userId: number;
// }
// interface IResponse {
//     data: [] | IDataType,
//     summary: {
//         matchlimit: number,
//         recordCount: number,
//         totalCount: number,
//     }
// }

export const BlogPostList = () => {
    const { tableProps } = useTable({
        syncWithLocation: true
    });
    console.log("table props: ", tableProps);
    // const { data: categoryData, isLoading: categoryIsLoading } = useMany({
    //     resource: "categories",
    //     ids: tableProps?.dataSource?.map((item) => item?.category?.id).filter(Boolean) ?? [],
    //     queryOptions: {
    //         enabled: !!tableProps?.dataSource
    //     }
    // });

    // const approvalList = [
    //     {
    //         id: 1,
    //         name: "Richard",
    //         givenName: "Richards",
    //         gender: "Male",
    //         age: "19",
    //         email: "r.richards@randatmail.com",
    //         dateOfApplications: "January 12, 2023",
    //         application: {
    //             professionalTitle: "Employee",
    //             academicBackground: "Bachelor",
    //             hometownAddress: "Ho Chi Minh",
    //             familyStatus: "Married",
    //             numberOfFamilyMember: "1",
    //             expectedSalary: "₩2,020,127",
    //             expectedArea: "Anyang",
    //             expectedJob: "Waiter/Waitress"
    //         }
    //     },

    //     {
    //         id: 2,
    //         name: "Lilianna",
    //         givenName: "Brown",
    //         gender: "Female",
    //         age: "30",
    //         email: "l.brown@randatmail.com",
    //         dateOfApplications: "May 12, 2023",
    //         application: {
    //             professionalTitle: "Employee",
    //             academicBackground: "Upper secondary",
    //             hometownAddress: "Quang Tri",
    //             familyStatus: "Single",
    //             numberOfFamilyMember: "5",
    //             expectedSalary: "₩2,323,496",
    //             expectedArea: "Gimpo",
    //             expectedJob: "Construction Worker"
    //         }
    //     },

    //     {
    //         id: 3,
    //         name: "Isabella",
    //         givenName: "Murray",
    //         gender: "Female",
    //         age: "27",
    //         email: "i.murray@randatmail.com",
    //         dateOfApplications: "March 23, 2023",
    //         application: {
    //             professionalTitle: "Employee",
    //             academicBackground: "Primary",
    //             hometownAddress: "Quang Binh",
    //             familyStatus: "Single",
    //             numberOfFamilyMember: "3",
    //             expectedSalary: "₩2,299,996",
    //             expectedArea: "Ansan",
    //             expectedJob: "Farmer"
    //         }
    //     },

    //     {
    //         id: 4,
    //         name: "John",
    //         givenName: "Allen",
    //         gender: "Male",
    //         age: "21",
    //         email: "j.allen@randatmail.com",
    //         dateOfApplications: "August 28, 2023",
    //         application: {
    //             professionalTitle: "Employee",
    //             academicBackground: "Lower secondary",
    //             hometownAddress: "Hai Duong",
    //             familyStatus: "Single",
    //             numberOfFamilyMember: "2",
    //             expectedSalary: "₩2,398,647",
    //             expectedArea: "Jinju",
    //             expectedJob: "Fruit Picker"
    //         }
    //     },

    //     {
    //         id: 5,
    //         name: "Mary",
    //         givenName: "Harris",
    //         gender: "Female",
    //         age: "25",
    //         email: "m.harris@randatmail.com",
    //         dateOfApplications: "June 22, 2023",
    //         application: {
    //             professionalTitle: "Employee",
    //             academicBackground: "Bachelor",
    //             hometownAddress: "Hai Phong",
    //             familyStatus: "Single",
    //             numberOfFamilyMember: "2",
    //             expectedSalary: "₩2,201,646",
    //             expectedArea: "Cheongju",
    //             expectedJob: "Lawner"
    //         }
    //     },

    //     {
    //         id: 6,
    //         name: "Rubie",
    //         givenName: "Turner",
    //         gender: "Female",
    //         age: "19",
    //         email: "r.turner@randatmail.com",
    //         dateOfApplications: "February 12, 2023",
    //         application: {
    //             professionalTitle: "Employee",
    //             academicBackground: "Bachelor",
    //             hometownAddress: "Ho Chi Minh",
    //             familyStatus: "Married",
    //             numberOfFamilyMember: "0",
    //             expectedSalary: "₩2,459,680",
    //             expectedArea: "Gyeongju",
    //             expectedJob: "Waiter/Waitress"
    //         }
    //     },

    //     {
    //         id: 7,
    //         name: "Derek",
    //         givenName: "Howard",
    //         gender: "Male",
    //         age: "30",
    //         email: "d.howard@randatmail.com",
    //         dateOfApplications: "March 23, 2023",
    //         application: {
    //             professionalTitle: "Employee",
    //             academicBackground: "Doctoral",
    //             hometownAddress: "Yen Bai",
    //             familyStatus: "Married",
    //             numberOfFamilyMember: "4",
    //             expectedSalary: "₩2,056,754",
    //             expectedArea: "Cheonan",
    //             expectedJob: "Construction Worker"
    //         }
    //     }
    // ];

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email"
        },
        {
            title: "Gender",
            dataIndex: "gender",
            key: "gender"
        },
        {
            title: "Date of Applying",
            dataIndex: "dateOfApplications",
            key: "dateOfApplications"
        },
        // {
        //     title: "Actions",
        //     dataIndex: "actions",
        //     key: "actions",
        //     render: (_: any, record: BaseRecord) => {
        //         <Space>
        //             <EditButton hideText recordItemId={record.id} size="small" />
        //             <ShowButton hideText recordItemId={record.id} size="small" />
        //             <DeleteButton hideText recordItemId={record.id} size="small" />
        //         </Space>
        //     }
        // }
    ]

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
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };


    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
        <Row>
            <Col span={16}>
                <List>
                    <Table {...tableProps} rowKey="id" rowSelection={rowSelection}>
                        {/* <Table.Column dataIndex="applicationId" title="ID" /> */}
                        <Table.Column dataIndex="candidateName" title="Name" />
                        <Table.Column
                            dataIndex="candidateEmail"
                            title="Email"
                        />
                        <Table.Column
                            dataIndex="candidateGender"
                            title="Gender"
                        />
                        {/* <Table.Column dataIndex="status" title="Status" /> */}
                        <Table.Column
                            dataIndex={["dateOfAdateApplyingpplying"]}
                            render={(value: any) => <DateField value={value} format="LL" />}
                            title="Date of  Applying"
                        />
                        <Table.Column
                            dataIndex="actions"
                            render={(_, record: BaseRecord) => (
                                <Space>
                                    {/* <EditButton hideText recordItemId={record.id} size="small" /> */}
                                    <ShowButton hideText recordItemId={record.id} size="small" />
                                    {/* <DeleteButton hideText recordItemId={record.id} size="small" /> */}
                                </Space>
                            )}
                            title="Actions"
                        />
                    </Table>
                </List>
            </Col>
            <Col span={8}>
                <Flex vertical style={{ marginLeft: "15%" }}>
                    <Space>
                        <Col>
                            <Row> <Avatar alt="avatar" src="https://i.pravatar.cc/300" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} /></Row>
                            <Row>
                                <Typography>Full name</Typography>
                            </Row>
                            <Row>
                                <Typography>Professional title</Typography>
                            </Row>
                        </Col>

                        <div style={{ right: 0 }}>
                            <Avatar alt="avatar" icon={<WechatOutlined />} size={{ xs: 24, sm: 32, md: 40 }} style={{ backgroundColor: '#C2282AFF' }} />
                            <Avatar alt="avatar" icon={<MoreOutlined />} size={{ xs: 24, sm: 32, md: 40 }} style={{ backgroundColor: '#C2282AFF' }} />
                        </div>

                    </Space>
                    <Space>

                    </Space>
                </Flex>
            </Col>
        </Row >
    );
};
