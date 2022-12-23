import { VscClose } from "react-icons/vsc";
import "animate.css";

const ModalWindow = ({
	children,
	viewModal,
	setViewModal,
	title = "Titulo",
}) => {
	return (
		viewModal && (
			<label className="modalwindow_wrapper-modal">
				<div className="container-modal animate__animated animate__fadeInRight">
					<div className="header-modal">
						<h3>{title}</h3>
					</div>
					<button
						className="close-modal"
						onClick={() => setViewModal(false)}
					>
						<p className="btn-content-close">
							<VscClose className="VscClose" /> Cerrar
						</p>
					</button>
					{children}
				</div>
			</label>
		)
	);
};
export default ModalWindow;
