import { Edit, useForm } from "@refinedev/antd";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { DatePicker, Form, Input, Select, Upload, Image } from "antd";
import {
    StateSelect,
    GetState
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import moment from "moment";
import { PlusOutlined } from "@ant-design/icons";
import { image } from "@uiw/react-md-editor";

interface CountryData {
    countryCode: string;
    dialCode: string;
}
interface StateData {
    id: number;
    name: string;
    state_code: string
}


const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
};

export const AdministratorEdit = () => {
    const { form, formProps, formLoading, saveButtonProps } = useForm();


    const { t } = useTranslation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [countryCode, setCountryCode] = useState(formProps?.initialValues?.countryCode);
    const [phoneCode, setPhoneCode] = useState(formProps?.initialValues?.phoneCode);
    const [selectedState, setSelectedState] = useState(formProps?.initialValues?.location);
    const [imageUrlDefault, setImageUrlDefault] = useState(formProps?.initialValues?.avatarImg);

    const handleLocationChange = (value) => {
        // console.log(value)
        form.setFieldsValue({ location: value })
        setSelectedState(value)
    };

    const [stateList, setStateList] = useState([]);
    const countryId = 116;

    const handleImageChange = async ({ fileList: newFileList }) => {
        const file = newFileList[0];
        if (file) {
            file.base64 = await getBase64(file.originFileObj);
        }
        // console.log("base64: ", file.base64)
        form.setFieldsValue({ avatarImg: file.base64 })
        setImageUrlDefault(null)
    };

    useEffect(() => {
        GetState(countryId).then((result) => {
            setStateList(result);
        });
    }, []);

    // console.log(formProps)
    if (formLoading) return <div>Loading...</div>;

    return (
        <Edit
            saveButtonProps={saveButtonProps}
            isLoading={formLoading}
        >
            <Form form={form}
                {...formProps}
                initialValues={{
                    roleId: 2,
                    phoneCode: phoneCode,
                    countryCode: countryCode,
                    location: formProps?.initialValues?.location,
                    avatarImg: "https://i.pravatar.cc/300"
                }}
                layout="vertical"
            >
                <Form.Item
                    label="Name"
                    name={["name"]}
                    initialValue={formProps?.initialValues?.name}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Input style={{ width: '50%' }} />
                </Form.Item>
                <Form.Item
                    label="Given Name"
                    name={["givenName"]}
                    initialValue={formProps?.initialValues?.givenName}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Input style={{ width: '50%' }} />
                </Form.Item>
                <Form.Item
                    label="Gender"
                    name={["gender"]}
                    initialValue={formProps?.initialValues?.gender}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Select
                        style={{ width: '50%' }}
                        options={[
                            { value: "F", label: "Female" },
                            { value: "M", label: "Male" }
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Birthday"
                    name={["birthday"]}
                    initialValue={moment(formProps?.initialValues?.birthday)}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <DatePicker format="DD/MM/YYYY" disabled />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name={["phone"]}
                    initialValue={formProps?.initialValues?.phoneNumber}
                    valuePropName="phone"
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <PhoneInput
                        country={countryCode}
                        enableSearch={true}
                        value={formProps?.initialValues?.phoneNumber}
                        onChange={(phone, country: CountryData) => {
                            form.setFieldsValue({ phone: phone })
                            form.setFieldsValue({ countryCode: country.countryCode })
                            form.setFieldsValue({ phoneCode: "+" + country.dialCode })
                        }
                        }
                    />
                </Form.Item>
                <Form.Item
                    label="Country Code"
                    name={["countryCode"]}
                    initialValue={formProps?.initialValues?.countryCode}
                    hidden
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Form.Item
                        label="Phone Code"
                        name={["phoneCode"]}
                        initialValue={formProps?.initialValues?.phoneCode}
                        hidden
                        rules={[
                            {
                                required: false
                            }
                        ]}
                    ></Form.Item>
                </Form.Item>
                <Form.Item
                    label={t("AUTHENTICATION.EMAIL")}
                    name="email"
                    initialValue={formProps?.initialValues?.email}
                    rules={[
                        { required: false },
                        {
                            type: "email",
                            message: t("AUTHENTICATION.INVALID_EMAIL")
                        }
                    ]}
                >
                    <Input
                        placeholder={t("AUTHENTICATION.EMAIL_PLACEHOLDER")}
                        style={{ width: '50%' }}
                    />
                </Form.Item>
                <Form.Item
                    label={t("AUTHENTICATION.PASSWORD")}
                    name={["password"]}
                    rules={[{ required: false }]}
                >
                    <Input.Password
                        autoComplete="current-password"
                        placeholder={t("AUTHENTICATION.PASSWORD_PLACEHOLDER")}
                        type="password"
                        visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                        style={{ width: '50%' }}
                    />
                </Form.Item>
                <Form.Item
                    label={t("AUTHENTICATION.CONFIRM_NEW_PASSWORD")}
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        {
                            required: false,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The new password that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        autoComplete="current-password"
                        placeholder={t("AUTHENTICATION.CONFIRM_NEW_PASSWORD_PLACEHOLDER")}
                        type="password"
                        visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                        style={{ width: '50%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="Company Name"
                    name={["companyName"]}
                    initialValue={formProps?.initialValues?.companyName}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <Input style={{ width: '50%' }} />
                </Form.Item>
                <Form.Item
                    label="Location"
                    name={["location"]}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                    // hidden
                    style={{ width: '50%' }}
                >

                    {/* <StateSelect
                        defaultValue={selectedState}
                        countryid={116}
                        value={selectedState}
                        onChange={handleLocationChange}
                        placeHolder="Select Location"

                    /> */}

                    <Select
                        onChange={handleLocationChange}
                        value={selectedState}
                    >
                        {stateList.map((item: StateData, index) => (
                            <option key={item.name} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Established Years"
                    name={["establishedYears"]}
                    initialValue={moment(formProps?.initialValues?.establishedYears)}
                    rules={[
                        {
                            required: false
                        }
                    ]}
                >
                    <DatePicker picker="year" />
                </Form.Item>
                <Form.Item
                    label="Avatar"
                    name={["avatarImg"]}
                >
                    <Upload
                        // action="/upload.do" 
                        listType="picture-circle"
                        className="avatar-uploader"
                        multiple={false}
                        beforeUpload={() => false} // Prevents auto-uploading
                        onChange={handleImageChange}
                        maxCount={1}
                    >
                        <button style={{ border: 0, background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>
                {
                    imageUrlDefault ? (
                        <Image
                            width="5vw" height="5vw"
                            src={imageUrlDefault}
                        />
                    ) : null
                }
            </Form>
        </Edit>
    );
};