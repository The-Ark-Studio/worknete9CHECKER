/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { PlusOutlined } from "@ant-design/icons";
import { Create, useForm } from "@refinedev/antd";
import { useApiUrl } from "@refinedev/core";
import { Form, Input, InputNumber, Select, Upload } from "antd";
import {
    StateSelect, CountrySelect
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import httpCommon from "@api/http-common-api";

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
};


export const ApprovalProcessingCreate = () => {
    const { form, formProps, saveButtonProps } = useForm({});
    const { t } = useTranslation();
    const axiosInstance = httpCommon;
    const apiUrl = useApiUrl();
    const [activeUsers, setActiveUsers] = useState([]);

    const getActiveUsers = async () => {
        await axiosInstance.get(
            `${apiUrl}/users/active`
        ).then((response) => {
            // console.log(response.data);
            let result = response.data.data;
            setActiveUsers(result);

        })
            .catch((error) => {
                console.error(error);

            });
    }

    const handleImageChange = async (event, fieldName) => {
        const newFileList = event.fileList;
        const file = newFileList[0];
        if (file) {
            file.base64 = await getBase64(file.originFileObj);
        }
        // console.log("base64: ", file.base64)
        if (fieldName == "healthCheckImg")
            form.setFieldsValue({ [fieldName]: [file.base64] })
        else
            form.setFieldsValue({ [fieldName]: file.base64 })
        // console.log(form.getFieldsValue([fieldName]))
    };

    const handleLocationChange = (value) => {
        console.log(value.name)
        form.setFieldsValue({ expectedArea: value.name })
    };

    const handleHometownChange = (value) => {
        console.log(value)
        form.setFieldsValue({ homeTown: value.name })
    };


    const [listPreferWork, setListPreferWork] = useState([]);


    useEffect(() => {
        getActiveUsers()
    }, [])

    return (
        <Create saveButtonProps={saveButtonProps}
        // headerButtonProps={{ style: buttonStyle }}
        >
            <Form {...formProps}
                form={form}

                layout="vertical">
                <Form.Item
                    label="User"
                    name={["userId"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Select>
                        {
                            activeUsers.map((item) => {
                                return <option key={item["userId"]} value={item["userId"]}>
                                    {item["username"]}
                                </option>
                            })
                        }
                    </Select>

                </Form.Item>
                <Form.Item
                    label="Gender"
                    name={["gender"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Select
                        // style={{ width: '50%' }}
                        options={[
                            { value: "F", label: t("GENDER." + "F") },
                            { value: "M", label: t("GENDER." + "M") }
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Age"
                    name={["age"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Professional Title"
                    name={["professionalTitle"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Hometown"
                    name={["homeTown"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    {/* <Input /> */}

                    <StateSelect
                        countryid={240}
                        onChange={handleHometownChange}
                        placeHolder="Select Location"
                    />
                </Form.Item>

                <Form.Item
                    label="Expected salary (VND)"
                    name={["expectedSalary"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <InputNumber
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="Expected ocupation"
                    name={["preferredWork"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Select
                        // style={{ width: '50%' }}
                        options={[
                            { value: "A", label: t("PREFER_WORK." + "A") },
                            { value: "C", label: t("PREFER_WORK." + "C") },
                            { value: "R", label: t("PREFER_WORK." + "R") },
                            { value: "F", label: t("PREFER_WORK." + "F") },
                            { value: "H", label: t("PREFER_WORK." + "H") }
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Highest education"
                    name={["academicBackground"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Select
                        // style={{ width: '50%' }}
                        options={[
                            { value: "H", label: t("EDUCATION." + "H") },
                            { value: "C", label: t("EDUCATION." + "C") },
                            { value: "U", label: t("EDUCATION." + "U") }
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Expected working area"
                    name={["expectedArea"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <StateSelect
                        countryid={116}
                        onChange={handleLocationChange}
                        placeHolder="Select Location"
                    />
                </Form.Item>
                <Form.Item
                    label="Family income(High, middle, low)"
                    name={["familySituation"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Select
                        // style={{ width: '50%' }}
                        options={[
                            { value: "H", label: t("FAMILY_SITUATION." + "H") },
                            { value: "M", label: t("FAMILY_SITUATION." + "M") },
                            { value: "Lß", label: t("FAMILY_SITUATION." + "L") }
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Number of family"
                    name={["numberOfFamily"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Passport file"
                    name={["passportImg"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Upload
                        listType="picture-circle"
                        className="avatar-uploader"
                        multiple={false}
                        beforeUpload={() => false}
                        onChange={(event) => handleImageChange(event, "passportImg")}
                        maxCount={1}
                    >
                        <button style={{ border: 0, background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    label="Medical checkup"
                    name={["healthCheckImg"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Upload
                        listType="picture-circle"
                        className="avatar-uploader"
                        multiple={false}
                        beforeUpload={() => false}
                        onChange={(event) => handleImageChange(event, "healthCheckImg")}
                        maxCount={1}
                    >
                        <button style={{ border: 0, background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    label="Criminal record"
                    name={["policeCheckImg"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Upload
                        listType="picture-circle"
                        className="avatar-uploader"
                        multiple={false}
                        beforeUpload={() => false}
                        onChange={(event) => handleImageChange(event, "policeCheckImg")}
                        maxCount={1}
                    >
                        <button style={{ border: 0, background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    label="TOPIK (optional)"
                    name={["koreanExamImg"]}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Upload
                        listType="picture-circle"
                        className="avatar-uploader"
                        multiple={false}
                        beforeUpload={() => false}
                        onChange={(event) => handleImageChange(event, "koreanExamImg")}
                        maxCount={1}
                    >
                        <button style={{ border: 0, background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    label="ID Card (front)"
                    name={["idCardFrontImg"]}
                >
                    <Upload
                        listType="picture-circle"
                        className="avatar-uploader"
                        multiple={false}
                        beforeUpload={() => false}
                        onChange={(event) => handleImageChange(event, "idCardFrontImg")}
                        maxCount={1}
                    >
                        <button style={{ border: 0, background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    label="ID Card (back)"
                    name={["idCardBackImg"]}
                >
                    <Upload
                        listType="picture-circle"
                        className="avatar-uploader"
                        multiple={false}
                        beforeUpload={() => false}
                        onChange={(event) => handleImageChange(event, "idCardBackImg")}
                        maxCount={1}
                    >
                        <button style={{ border: 0, background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    initialValue="W"
                    label="Application status"
                    name={["status"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Select
                        defaultValue="W"
                        options={[
                            { value: "W", label: "Waiting" },
                            { value: "V", label: "Verify" },
                            { value: "R", label: "Rejected" }
                        ]}
                        style={{ width: 120 }}
                    />
                </Form.Item>
            </Form>
        </Create>
    );
};
