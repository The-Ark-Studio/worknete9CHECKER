import { Modal } from "antd/lib";

export const ModalComp = (props) => {
    const [modalOpen, setModalOpen] = useState(true);

    if (props.show === false || modalOpen === false) {
        return null;
    }

    const handleOk = () => {
        props.handleOpenModal();
    };

    return (
        <Modal
            open={props.show}
            onOk={handleOk}
            cancelButtonProps={{ hidden: true }}

        ><p>{props.text}</p>
        </Modal>
    );
}