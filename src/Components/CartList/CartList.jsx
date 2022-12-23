import { BsCartX } from "react-icons/bs";
import { useCartContext } from "../../context/CartContext";
import Cart from "../Cart/Cart";
import OrderForm from "../OrderForm/OrderForm";
import { useNavigate } from "react-router-dom";

const CartList = ({ children }) => {
	const { cartList, emptyCart, priceTotal, closeModal, setViewModal } =
		useCartContext();
	const navigate = useNavigate();
	let strigURL = location.href;

	return (
		<>
			{cartList.length === 0 ? (
				<>
					{strigURL.indexOf("cart") > -1 ? (
						<>
							{setViewModal(false)}
							<p>Tu carrito esta vacio! :(</p>
							<button
								className="btn-back"
								onClick={() => navigate("/")}
							>
								Back
							</button>
						</>
					) : (
						<div>
							<BsCartX fontSize={"8rem"} />
							<span>No hay productos en tu carrito</span>
							<button onClick={() => closeModal("/", false)}>
								Ir al Home
							</button>
						</div>
					)}
				</>
			) : (
				<div className="cartlist_wrapper-products show-cart">
					{cartList.map((prod) => (
						<Cart key={prod.id} product={prod} />
					))}
					<h4>El precio total es: {priceTotal()} </h4>
					<button className="btn-empty-cart" onClick={emptyCart}>
						Vaciar carrito
					</button>
					<OrderForm />
					{children}
				</div>
			)}
		</>
	);
};
export default CartList;
