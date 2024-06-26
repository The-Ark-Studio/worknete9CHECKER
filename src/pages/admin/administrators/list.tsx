
// import { EditOutlined } from "@ant-design/icons";
import { EditButton, List, useTable } from "@refinedev/antd";
import { BaseRecord, useTranslate } from "@refinedev/core";
import { Avatar, Button, Space, Table, Tag } from "antd";
export const AdministratorList = () => {
    const translate = useTranslate();
    const { tableProps } = useTable({
        syncWithLocation: true
    });

    const userRole = localStorage.getItem("role");

    return (
        <List>
            <Table {...tableProps} rowKey="userId" >
                <Table.Column dataIndex="userId" hidden={true} title="ID" key="userId" />
                <Table.Column
                    dataIndex="avatarImg"
                    title={translate("ADMINISTRATORS.AVATAR")}
                    key="avatarImg"
                    render={(_, record: BaseRecord) => (
                        <Avatar alt={record?.name} src={record?.avatarImg} />
                    )}
                />
                <Table.Column dataIndex="name" title={translate("ADMINISTRATORS.NAME")} key="name" />
                <Table.Column dataIndex="username" title={translate("ADMINISTRATORS.USERNAME")} key="username" />
                <Table.Column dataIndex="email" title={translate("ADMINISTRATORS.EMAIL")} key="email" />
                <Table.Column
                    dataIndex="roleName"
                    title={translate("ADMINISTRATORS.ROLE")}
                    // key="roleName"
                    render={(_, record: BaseRecord) => (
                        <Tag
                            key={record.roleName}
                            style={{
                                backgroundColor: record.roleTagBgColor,
                                color: record.roleTagColor,
                                borderRadius: "0.4vw"
                            }}
                        >
                            {record.roleName}
                        </Tag>
                    )}
                />
                <Table.Column dataIndex="location" title={translate("ADMINISTRATORS.LOCATION")} key="location" />
                <Table.Column dataIndex="companyName" title={translate("ADMINISTRATORS.COMPANY")} key="companyName" />
                <Table.Column dataIndex="establishedYears" title={translate("ADMINISTRATORS.ESTABLISHED_YEARS")} key="establishedYears" />
                {/*  */}
                <Table.Column
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            <EditButton hideText recordItemId={record.userId} size="small" />
                            {/* <ShowButton hideText recordItemId={record.id} size="small" />
                            <DeleteButton hideText recordItemId={record.id} size="small" /> */}
                        </Space>
                    )}
                    title={translate("GLOBAL.ACTIONS")}
                />
            </Table>
        </List >
    );
};
