import { useCartContext } from "../../context/CartContext";
import { BsCartCheck, BsCartX } from "react-icons/bs";
import CartList from "../CartList/CartList";
import ModalWindow from "../ModalWindow/ModalWindow";

const CartWidget = () => {
	const {
		cartList,
		cartQuantity,
		viewModal,
		setViewModal,
		toggleModal,
		closeModal,
	} = useCartContext();

	return (
		<>
			<div className="cartwidget_cart-widget" onClick={toggleModal}>
				<div className="cart-widget">
					<>{cartList.length > 0 ? <BsCartCheck /> : <BsCartX />}</>
					<div className="my-cart">
						{" "}
						Mi carrito
						<p
							className={
								cartList.length === 0
									? "badge-empty"
									: "badge icon-full"
							}
						>
							{cartQuantity() || ""}
							{"   "}- items
						</p>
					</div>
				</div>
			</div>
			<ModalWindow
				viewModal={viewModal}
				setViewModal={setViewModal}
				title="Carrito de Compras"
			>
				<CartList>
					<button
						className="btn-link-cart"
						onClick={() => closeModal()}
					>
						Ir Carrito
					</button>
				</CartList>
			</ModalWindow>
		</>
	);
};

export default CartWidget;
