/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { CheckOutlined, CloseOutlined, MoreOutlined, WechatOutlined } from "@ant-design/icons";
import academicImg from "@asset/base/academic-background.svg";
import ageImg from "@asset/base/age.svg";
import expectedAreaImg from "@asset/base/expected-area.svg";
import expectedSalary from "@asset/base/expected-salary.svg";
import familySituationImg from "@asset/base/family-situation.svg";
import genderImg from "@asset/base/gender.svg";
import hometownImg from "@asset/base/hometown.svg";
import numberFamily from "@asset/base/number-family.svg";
import preferredWorkImg from "@asset/base/preferred-work.svg";
import styles from "@asset/styles.module.css";
import { useApiUrl, useCustom, useNotification, useOne } from "@refinedev/core";
import { ModalComp } from "@src/components/Layout/ModalComp";
import { Applications } from "@src/utils/applications";
import { Avatar, Button, Col, Flex, Modal, Row, Typography, Input } from "antd";
import httpCommon from "@api/http-common-api";
import IGeneralResponse from "@src/providers/interface/general-response";

const { Title } = Typography;
const axiosInstance = httpCommon;
const getTotalAttachment = (applicationDetails) => {
    var totalAttachment = 0;
    if (applicationDetails?.hasPassportImg)
        totalAttachment++;
    if (applicationDetails?.hasPoliceCheckImg)
        totalAttachment++;
    if (applicationDetails?.hasIdCardBackImg)
        totalAttachment++;
    if (applicationDetails?.hasIdCardFrontImg)
        totalAttachment++;
    if (applicationDetails?.hasKoreanExamImg)
        totalAttachment++;
    if (applicationDetails?.hasHealthCheckImg)
        totalAttachment++;
    return totalAttachment;
}



export const ApprovalProcessingShow = ({ application }) => {
    const apiUrl = useApiUrl();
    const { data, isLoading, isError } = useOne({
        resource: "approval-processing",
        id: application.applicationId
    });
    const { open } = useNotification();
    const { t } = useTranslation();
    const [openModal, setOpenModal] = useState(false);
    const [imgList, setImgList] = useState(null);
    const [titleStr, setTitleStr] = useState("");
    const [isReject, setIsReject] = useState(false);
    const [reason, setReason] = useState("");
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState("Content of the modal");
    // const { application } = props.application;
    const applicationDetails = data?.data.data;

    // console.log(applicationDetails)

    const showModal = (action) => {
        setOpenModal(true);
        if (action) setIsReject(true);
    };

    const handleCancel = () => {
        // console.log("Clicked cancel button");
        setOpenModal(false);
    };

    const onApproval = async () => {
        // console.log("reject");
        await axiosInstance.patch(
            `${apiUrl}/approval-processing/${applicationDetails?.applicationId}`,
            {
                status: 'A',
                note: '',
            }
        ).then((response) => {
            // console.log(response.data);
            setModalText("The modal will be closed soon.");
            setConfirmLoading(true);
            setTimeout(() => {
                setOpenModal(false);
                setConfirmLoading(false);
            }, 2000);
            location.reload();
            open?.({
                type: "success",
                message: "Successfully approved.",
                key: applicationDetails?.applicationId,
            });
        })
            .catch((error) => {
                console.error(error);
                open?.({
                    type: "error",
                    message: error,
                    key: applicationDetails?.applicationId,
                });
            });
    };

    const handleReject = async () => {
        await axiosInstance.patch(
            `${apiUrl}/approval-processing/${applicationDetails?.applicationId}`,
            {
                status: 'R',
                note: reason,
            }
        ).then((response) => {
            // console.log(response.data);
            setModalText("The modal will be closed soon.");
            setConfirmLoading(true);
            setTimeout(() => {
                setOpenModal(false);
                setConfirmLoading(false);
            }, 2000);
            location.reload();
            open?.({
                type: "success",
                message: "Successfully rejected.",
                key: applicationDetails?.applicationId,
            });
        })
            .catch((error) => {
                console.error(error);
                open?.({
                    type: "error",
                    message: error,
                    key: applicationDetails?.applicationId,
                });
            });
    };

    const [modalOpen, setModalOpen] = useState(false);

    const handlePreviewImage = async (title, imageType) => {
        setImgList(null);
        setTitleStr(title);
        await axiosInstance.get(
            `${apiUrl}/applications/${applicationDetails?.applicationId}/images?imageType=${imageType}`
        ).then((response) => {
            if (response.data.success) {
                let imgStr = response.data.data;
                setImgList(imgStr);
            } else {
                open?.({
                    type: "error",
                    message: response.data.message,
                    key: applicationDetails?.applicationId,
                });
            }

        })
            .catch((error) => {
                open?.({
                    type: "error",
                    message: error,
                    key: applicationDetails?.applicationId,
                });
            });
        // console.log(imgList)
        setModalOpen(!modalOpen);
    }

    const handleOpenModal = () => {
        setModalOpen(!modalOpen);
    }

    const { TextArea } = Input;

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log('Change:', e.target.value);
        setReason(e.target.value)
    };

    const ButtonProcessing = ({ status }) => {
        if (status != 'V')
            return null;
        return (
            <div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "wrap",
                        fontSize: "2vw",
                        fontWeight: "500",
                        marginTop: "2vw"
                    }}
                >
                    <Button
                        onClick={onApproval}
                        style={{
                            color: "white",
                            backgroundColor: "var(--success65)",
                            fontFamily: "Abhaya Libre",
                            opacity: 1,
                            border: "none",
                            borderRadius: "0.6vw",
                            left: "0%",
                            width: "20vw",
                            height: "2.3vw",
                            fontSize: "1vw"
                        }}
                    >
                        <CheckOutlined />
                        {t("BUTTONS.APPROVE")}
                    </Button>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "wrap",
                        fontSize: "2vw",
                        fontWeight: "500",
                        marginTop: "0.5vw"
                    }}
                >
                    <Button
                        onClick={() => showModal(true)}
                        style={{
                            color: "white",
                            backgroundColor: "#9095A1FF",
                            fontFamily: "Abhaya Libre",
                            opacity: 1,
                            border: "none",
                            borderRadius: "0.6vw",
                            left: "0%",
                            width: "20vw",
                            height: "2.3vw",
                            fontSize: "1vw"
                        }}
                    >
                        <CloseOutlined />
                        {t("BUTTONS.REJECT")}
                    </Button>
                </div>
            </div>
        );
    }


    if (isLoading) return <div>Loading...</div>;

    return (
        <Flex style={{ marginLeft: "15%" }} vertical>
            <Row style={{ width: "100%" }}>
                <Col md={20} xs={24}>
                    <Row>
                        {" "}
                        <Avatar
                            alt="avatar"
                            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                            src={applicationDetails?.avatarImg === null ? "https://i.pravatar.cc/300" : applicationDetails?.avatarImg}
                        />
                    </Row>
                    <Row>
                        <Typography className={styles.title_h5}>{applicationDetails?.userFullname}</Typography>
                    </Row>
                    <Row>
                        <Typography className={styles.title_t6} style={{ color: "#9095A1FF" }}>
                            {applicationDetails?.professionalTitle}
                        </Typography>
                    </Row>
                </Col>

                <Col md={4} xs={24}>
                    <div style={{ right: 0 }}>
                        {/* <Avatar
                            alt="avatar"
                            icon={<WechatOutlined />}
                            size={{ xs: 24, sm: 32, md: 40 }}
                            style={{ backgroundColor: "var(--primary)" }}
                        />
                        <Avatar
                            alt="avatar"
                            icon={<MoreOutlined />}
                            size={{ xs: 24, sm: 32, md: 40 }}
                            style={{ backgroundColor: "var(--primary)" }}
                        /> */}
                    </div>
                </Col>
            </Row>
            {/* Gender */}
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={2}>
                        <img src={genderImg} />
                    </Col>
                    <Col span={11} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={styles.label} style={{ display: "flex" }}>
                            {t("APPROVAL_PROCESSING.GENDER")}:
                        </Typography>
                    </Col>
                    <Col span={9}>
                        <Typography className={styles.text}>{t("GENDER." + applicationDetails?.gender)}</Typography>
                    </Col>
                </Row>
            </Flex>
            {/* Age */}
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={2}>
                        <img src={ageImg} />
                    </Col>
                    <Col span={11} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.AGE")}</Typography>
                    </Col>
                    <Col span={9}>
                        <Typography className={styles.text}>{applicationDetails?.age}</Typography>
                    </Col>
                </Row>
            </Flex>
            {/* Hometown  */}
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={2}>
                        <img src={hometownImg} />
                    </Col>
                    <Col span={11} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.HOMETOWN")}</Typography>
                    </Col>
                    <Col span={9}>
                        <Typography className={styles.text}>{applicationDetails?.homeTown}</Typography>
                    </Col>
                </Row>
            </Flex>
            {/* Expected salary  */}
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={2}>
                        <img src={expectedSalary} />
                    </Col>
                    <Col span={11} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.EXPECTED_SALARY")}</Typography>
                    </Col>
                    <Col span={9}>
                        <Typography className={styles.text}>{parseInt(applicationDetails?.expectedSalary).toLocaleString("en-US")}&nbsp; {applicationDetails?.currency}</Typography>
                    </Col>
                </Row>
            </Flex>
            {/* Preferred work  */}
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={2}>
                        <img src={preferredWorkImg} />
                    </Col>
                    <Col span={11} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.PREFERRED_WORK")}</Typography>
                    </Col>
                    <Col span={9}>
                        <Typography className={styles.text}>

                            {applicationDetails?.preferredWork.length > 1 ? applicationDetails?.preferredWork :
                                (t("PREFER_WORK." + applicationDetails?.preferredWork))
                            }

                        </Typography>
                    </Col>
                </Row>
            </Flex>
            {/* Academic  */}
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={2}>
                        <img src={academicImg} />
                    </Col>
                    <Col span={11} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.ACADEMIC_BACKGROUND")}</Typography>
                    </Col>
                    <Col span={9}>
                        <Typography className={styles.text}>
                            {applicationDetails?.academicBackground.length > 1 ? applicationDetails?.academicBackground :
                                (t("EDUCATION." + applicationDetails?.academicBackground))
                            }
                        </Typography>
                    </Col>
                </Row>
            </Flex>
            {/* Expected Area  */}
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={2}>
                        <img src={expectedAreaImg} />
                    </Col>
                    <Col span={11} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.EXPECTED_AREA")}</Typography>
                    </Col>
                    <Col span={9}>
                        <Typography className={styles.text}>
                            {applicationDetails?.expectedArea}</Typography>
                    </Col>
                </Row>
            </Flex>
            {/* Family situation  */}
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={2}>
                        <img src={familySituationImg} />
                    </Col>
                    <Col span={11} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={styles.label}>
                            {t("APPROVAL_PROCESSING.FAMILY_SITUATION")}</Typography>
                    </Col>
                    <Col span={9}>
                        <Typography className={styles.text}>
                            {t("FAMILY_SITUATION." + applicationDetails?.familySituation)}
                        </Typography>
                    </Col>
                </Row>
            </Flex>
            {/* Number of family  */}
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={2}>
                        <img src={numberFamily} />
                    </Col>
                    <Col span={11} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.FAMILY_NUMBER")}</Typography>
                    </Col>
                    <Col span={9}>
                        <Typography className={styles.text}>{applicationDetails?.numberOfFamily}</Typography>
                    </Col>
                </Row>
            </Flex>
            {/* Attachment  */}
            <Row>
                <Typography className={styles.title_h5} style={{ color: "#565D6DFF", marginTop: "2vw" }}>
                    {t("GLOBAL.ATTACHMENTS")} ({getTotalAttachment(applicationDetails)}/6)
                </Typography>
            </Row>
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={13} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.PASSPORT")}</Typography>
                    </Col>
                    <Col span={9}>
                        {
                            !applicationDetails?.hasPassportImg ? (
                                <Button
                                    type="link" disabled>
                                    Link
                                </Button>
                            )
                                : (
                                    <Button
                                        type="link" onClick={() => handlePreviewImage(t("APPROVAL_PROCESSING.PASSPORT"), "S")}>
                                        Link
                                    </Button>
                                )

                        }

                    </Col>
                </Row>
            </Flex>
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={13} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.MEDICAL_CHECKUP")}</Typography>
                    </Col>
                    <Col span={9}>
                        {
                            !applicationDetails?.hasHealthCheckImg ? (
                                <Button
                                    type="link" disabled>
                                    Link
                                </Button>
                            )
                                : (
                                    <Button
                                        type="link"
                                        style={{ marginBottom: "-1vw" }}
                                        onClick={() => handlePreviewImage(t("APPROVAL_PROCESSING.MEDICAL_CHECKUP"), "H")}>
                                        Link
                                    </Button>
                                )
                        }

                    </Col>
                </Row>
            </Flex>
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={13} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.CRIMINIAL_RECORD")}</Typography>
                    </Col>
                    <Col span={9}>
                        {
                            !applicationDetails?.hasPoliceCheckImg ? (
                                <Button
                                    type="link" disabled>
                                    Link
                                </Button>
                            )
                                : (
                                    <Button type="link" onClick={() => handlePreviewImage(t("APPROVAL_PROCESSING.CRIMINIAL_RECORD"), "P")}>
                                        Link
                                    </Button>
                                )
                        }

                    </Col>
                </Row>
            </Flex>
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={13} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.TOPIK")}</Typography>
                    </Col>
                    <Col span={9}>
                        {
                            !applicationDetails?.hasKoreanExamImg ? (
                                <Button
                                    type="link" disabled>
                                    Link
                                </Button>
                            )
                                : (
                                    <Button type="link" onClick={() => handlePreviewImage(t("APPROVAL_PROCESSING.TOPIK"), "K")}>
                                        Link
                                    </Button>
                                )
                        }

                    </Col>
                </Row>
            </Flex>
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={13} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.ID_CARD_FRONT")}</Typography>
                    </Col>
                    <Col span={9}>
                        {
                            !applicationDetails?.hasIdCardFrontImg ? (
                                <Button
                                    type="link" disabled>
                                    Link
                                </Button>
                            )
                                : (
                                    <Button type="link" onClick={() => handlePreviewImage(t("APPROVAL_PROCESSING.ID_CARD_FRONT"), "F")}>
                                        Link
                                    </Button>
                                )
                        }

                    </Col>
                </Row>
            </Flex>
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={13} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.ID_CARD_BACK")}</Typography>
                    </Col>
                    <Col span={9}>
                        {
                            !applicationDetails?.hasIdCardBackImg ? (
                                <Button
                                    type="link" disabled>
                                    Link
                                </Button>
                            )
                                : (
                                    <Button type="link" onClick={() => handlePreviewImage(t("APPROVAL_PROCESSING.ID_CARD_BACK"), "B")}>
                                        Link
                                    </Button>
                                )
                        }

                    </Col>
                </Row>
            </Flex>
            <ButtonProcessing status={applicationDetails?.status} />
            <Modal
                cancelText={t("APPROVAL_PROCESSING.MODAL.BUTTON_BACK")}
                confirmLoading={confirmLoading}
                okButtonProps={{ style: { backgroundColor: "#C2282AFF" } }}
                okText={t("APPROVAL_PROCESSING.MODAL.BUTTON_CONFIRM")}
                onCancel={handleCancel}
                onOk={handleReject}
                open={openModal}
                title={t("APPROVAL_PROCESSING.MODAL.TITLE")}
            >
                {/* <p>{t("APPROVAL_PROCESSING.MODAL.BODY")}</p>
                <br />
                <p>{t("APPROVAL_PROCESSING.MODAL.NOTE")}</p> */}
                <TextArea
                    showCount
                    maxLength={100}
                    onChange={onChange}
                    // placeholder="disable resize"
                    style={{ height: "7vw", resize: 'none', marginBottom: "2vw" }}
                />
            </Modal>

            <ModalComp
                show={modalOpen}
                handleOpenModal={handleOpenModal}
                title={titleStr}
                img={imgList}
                width={1000}
            />
        </Flex>
    );
};
