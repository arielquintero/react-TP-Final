import { BsCartX } from "react-icons/bs";
import { useCartContext } from "../../context/CartContext";
import Cart from "../Cart/Cart";
import OrderForm from "../OrderForm/OrderForm";
import { useNavigate } from "react-router-dom";
import { getMsgConditional } from "../../helpers/getMsgConditional";
import Table from "../Table/Table";

const CartList = ({ children }) => {
	const {
		cartList,
		emptyCart,
		priceTotal,
		closeModal,
		setViewModal,
		fullOrder,
		setFullOrder,
	} = useCartContext();

	console.log(fullOrder);
	const navigate = useNavigate();
	let strigURL = location.href;

	return (
		<div className="cartlist_wrapper-products">
			{cartList.length === 0 ? (
				<>
					{strigURL.indexOf("cart") > -1 ? (
						<div className="view-cart">
							{setViewModal(false)}
							<>{getMsgConditional}</>
							<button
								className="btn-back"
								onClick={() => navigate("/")}
							>
								Back
							</button>
						</div>
					) : (
						<div className="view-modal">
							<BsCartX fontSize={"8rem"} opacity={0.4} />
							<span>No hay productos en tu carrito</span>
							<button onClick={() => closeModal("/", false)}>
								Ir al Home
							</button>
						</div>
					)}
				</>
			) : (
				<div className="show-cart">
                    <Cart />
					{/* {cartList.map((prod) => (
						<>
							
						</>
					))} */}
					{/* <h4>El precio total es: $ {priceTotal()}</h4> */}
					{/* <button onClick={() => setFullOrder(!fullOrder)}>
						Terminar Compra
					</button>
					{fullOrder && <OrderForm />}
					<button className="btn-empty-cart" onClick={emptyCart}>
						Vaciar carrito
					</button> */}
					{children}
				</div>
			)}
		</div>
	);
};
export default CartList;
