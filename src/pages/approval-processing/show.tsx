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
import { Applications } from "@src/utils/applications";
import { Avatar, Button, Col, Flex, Modal, Row, Typography } from "antd";

const { Title } = Typography;

export const ApprovalProcessingShow = ({ application }) => {
    // const { data, isLoading, isError } = useOne({
    //     resource: "approval-processings",
    //     id: props.applicationId
    // });
    // const { data, isLoading } = queryResult;
    // console.log("clicked: ", props.application);
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [isReject, setIsReject] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState("Content of the modal");
    // const { application } = props.application;
    const applicationDetails = Applications.find((app) => app.applicationId == application.applicationId);

    // console.log("app: ", applicationDetails);

    const showModal = (action) => {
        setOpen(true);
        if (action) setIsReject(true);
    };

    const handleCancel = () => {
        // console.log("Clicked cancel button");
        setOpen(false);
    };

    const handleOk = () => {
        setModalText("The modal will be closed after two seconds");
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
        location.reload();
    };

    const onClickReject = () => {
        // console.log("reject");
    };

    return (
        <Flex style={{ marginLeft: "15%" }} vertical>
            <Row style={{ width: "100%" }}>
                <Col md={20} xs={24}>
                    <Row>
                        {" "}
                        <Avatar
                            alt="avatar"
                            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                            src="https://i.pravatar.cc/300"
                        />
                    </Row>
                    <Row>
                        <Typography className={styles.title_h5}>{application.candidateName}</Typography>
                    </Row>
                    <Row>
                        <Typography className={styles.title_t6} style={{ color: "#9095A1FF" }}>
                            {applicationDetails?.professionalTitle}
                        </Typography>
                    </Row>
                </Col>

                <Col md={4} xs={24}>
                    <div style={{ right: 0 }}>
                        <Avatar
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
                        />
                    </div>
                </Col>
            </Row>
            {/* Gender */}
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={2}>
                        <img src={genderImg} />
                    </Col>
                    <Col span={11}>
                        <Typography className={styles.label} style={{ display: "flex" }}>
                            {t("APPROVAL_PROCESSING.GENDER")}:
                        </Typography>
                    </Col>
                    <Col span={9}>
                        <Typography className={styles.text}>{application.candidateGender}</Typography>
                    </Col>
                </Row>
            </Flex>
            {/* Age */}
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={2}>
                        <img src={ageImg} />
                    </Col>
                    <Col span={11}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.AGE")}</Typography>
                    </Col>
                    <Col span={9}>
                        <Typography className={styles.text}>{application.candidateAge}</Typography>
                    </Col>
                </Row>
            </Flex>
            {/* Hometown  */}
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={2}>
                        <img src={hometownImg} />
                    </Col>
                    <Col span={11}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.HOMETOWN")}</Typography>
                    </Col>
                    <Col span={9}>
                        <Typography className={styles.text}>{applicationDetails?.hometownAddress}</Typography>
                    </Col>
                </Row>
            </Flex>
            {/* Expected salary  */}
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={2}>
                        <img src={expectedSalary} />
                    </Col>
                    <Col span={11}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.EXPECTED_SALARY")}</Typography>
                    </Col>
                    <Col span={9}>
                        <Typography className={styles.text}>₩{applicationDetails?.expectedSalary}</Typography>
                    </Col>
                </Row>
            </Flex>
            {/* Preferred work  */}
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={2}>
                        <img src={preferredWorkImg} />
                    </Col>
                    <Col span={11}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.PREFERRED_WORK")}</Typography>
                    </Col>
                    <Col span={9}>
                        <Typography className={styles.text}>{applicationDetails?.preferredWork}</Typography>
                    </Col>
                </Row>
            </Flex>
            {/* Academic  */}
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={2}>
                        <img src={academicImg} />
                    </Col>
                    <Col span={11}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.ACADEMIC_BACKGROUND")}</Typography>
                    </Col>
                    <Col span={9}>
                        <Typography className={styles.text}>{applicationDetails?.academicBackground}</Typography>
                    </Col>
                </Row>
            </Flex>
            {/* Expected Area  */}
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={2}>
                        <img src={expectedAreaImg} />
                    </Col>
                    <Col span={11}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.EXPECTED_AREA")}</Typography>
                    </Col>
                    <Col span={9}>
                        <Typography className={styles.text}>{applicationDetails?.expectedArea}</Typography>
                    </Col>
                </Row>
            </Flex>
            {/* Family situation  */}
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={2}>
                        <img src={familySituationImg} />
                    </Col>
                    <Col span={11}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.FAMILY_SITUATION")}</Typography>
                    </Col>
                    <Col span={9}>
                        <Typography className={styles.text}>{applicationDetails?.familySituation}</Typography>
                    </Col>
                </Row>
            </Flex>
            {/* Number of family  */}
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={2}>
                        <img src={numberFamily} />
                    </Col>
                    <Col span={11}>
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
                    {t("GLOBAL.ATTACHMENTS")} (6/6)
                </Typography>
            </Row>
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={13}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.PASSPORT")}</Typography>
                    </Col>
                    <Col span={9}>
                        <a href={applicationDetails?.passportImg} target="_blank">
                            Link
                        </a>
                    </Col>
                </Row>
            </Flex>
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={13}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.MEDICAL_CHECKUP")}</Typography>
                    </Col>
                    <Col span={9}>
                        <a href={applicationDetails?.healthCheckImg} target="_blank">
                            Link
                        </a>
                    </Col>
                </Row>
            </Flex>
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={13}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.CRIMINIAL_RECORD")}</Typography>
                    </Col>
                    <Col span={9}>
                        <a href={applicationDetails?.policeCheckImg} target="_blank">
                            Link
                        </a>
                    </Col>
                </Row>
            </Flex>
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={13}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.TOPIK")}</Typography>
                    </Col>
                    <Col span={9}>
                        <a href={applicationDetails?.koreanExamImg} target="_blank">
                            Link
                        </a>
                    </Col>
                </Row>
            </Flex>
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={13}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.ID_CARD_FRONT")}</Typography>
                    </Col>
                    <Col span={9}>
                        <a href={applicationDetails?.idCardFrontImg} target="_blank">
                            Link
                        </a>
                    </Col>
                </Row>
            </Flex>
            <Flex style={{ marginTop: "1vw" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={13}>
                        <Typography className={styles.label}>{t("APPROVAL_PROCESSING.ID_CARD_BACK")}</Typography>
                    </Col>
                    <Col span={9}>
                        <a href={applicationDetails?.idCardBackImg} target="_blank">
                            Link
                        </a>
                    </Col>
                </Row>
            </Flex>
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
                    onClick={() => showModal(false)}
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
            <Modal
                cancelText={t("APPROVAL_PROCESSING.MODAL.BUTTON_BACK")}
                confirmLoading={confirmLoading}
                okButtonProps={{ style: { backgroundColor: "#C2282AFF" } }}
                okText={t("APPROVAL_PROCESSING.MODAL.BUTTON_CONFIRM")}
                onCancel={handleCancel}
                onOk={handleOk}
                open={open}
                title={t("APPROVAL_PROCESSING.MODAL.TITLE")}
            >
                <p>{t("APPROVAL_PROCESSING.MODAL.BODY")}</p>
                <br />
                <p>{t("APPROVAL_PROCESSING.MODAL.NOTE")}</p>
            </Modal>
        </Flex>
    );
};
