import { Row, Image } from "antd";
import { Modal } from "antd/lib";

export const ModalComp = (props) => {
    const [modalOpen, setModalOpen] = useState(true);

    if (props.show === false || modalOpen === false) {
        return null;
    }

    const handleOk = () => {
        props.handleOpenModal();
    };
    console.log("list: ", props.img)
    const imgList = () => {
        var imgList = props.img;

        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                {imgList.map((url, index) => (
                    <Image
                        style={{ maxWidth: '100%', height: 'auto' }}
                        key={index} src={url} alt={`Image ${index + 1}`} />
                ))}
            </div>
        );
    }
    return (
        <Modal
            open={props.show}
            onOk={handleOk}
            title={props.title}
            onCancel={handleOk}
            cancelButtonProps={{ hidden: true }}
            style={{
                height: "20vw"
            }}
            width={1000}
        >
            {
                props.img === null || props.img === undefined ? null
                    : imgList()
                // props.img.length > 1 ? imgList()

                //     : (<Row style={{ padding: '20px', textAlign: 'center' }}>
                //         <Image src={props.img}
                //             style={{ maxWidth: '100%', height: 'auto' }}
                //             alt="Preview" />
                //     </Row>)

            }
            {
                props.text === null || props.text === undefined ? null
                    : <p>{props.text}</p>
            }
        </Modal>
    );
}