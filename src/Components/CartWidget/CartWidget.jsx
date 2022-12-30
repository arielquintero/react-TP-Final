// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { BsCartCheck, BsCartX } from "react-icons/bs";
import Cart from "../Cart/Cart";
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
				<p className="cart-widget">
					<>{cartList.length > 0 ? <BsCartCheck /> : <BsCartX />}</>
					<p className="my-cart">
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
					</p>
				</p>
			</div>
			<ModalWindow
				viewModal={viewModal}
				setViewModal={setViewModal}
				title="Carrito de Compras"
			>
				<Cart>
					<button
						className="btn-link-cart"
						onClick={() => closeModal()}
					>
						Ir Carrito
					</button>
				</Cart>
			</ModalWindow>
		</>
	);
};

export default CartWidget;
