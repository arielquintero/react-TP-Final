import { VscClose } from "react-icons/vsc";

const ModalWindow = ({ children, viewModal, setViewModal }) => {
    console.log(viewModal)
    return (
        viewModal && (
            // <div className={`${!viewModal ? "container-modal show-modal" : "container-modal"}`}>
            <label className="modalwindow_wrapper-modal">
                <div className="container-modal">
                    <div className="header-modal">
                        <h3>Titulo</h3>
                    </div>
                    <button
                        className="close-modal"
                        onClick={() => setViewModal(false)}>
                        <VscClose className="VscClose" />
                    </button>
                    {children}
                </div>
                
            </label>
        )
    );
};
export default ModalWindow;
