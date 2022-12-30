import { BsCartX } from "react-icons/bs";
import { useCartContext } from "../../context/CartContext";
import OrderForm from "../OrderForm/OrderForm";
import { useNavigate } from "react-router-dom";

const Cart = ({ children }) => {
	const {
		priceTotal,
		emptyCart,
		cartList,
		closeModal,
		confirmation,
		anOrderId,
		setViewModal,
	} = useCartContext();

	const navigate = useNavigate();
	let strigURL = location.href;

	const handleFinish = () => {
		return <OrderForm />;
	};

	console.log(cartList);
	console.log(anOrderId);
	console.log(confirmation);
	console.log(strigURL);

	if (cartList.length === 0 && anOrderId === " ") {
		return (
			<div className="cart_cart-empty">
				{/* {strigURL.indexOf("cart") > -1 ? ( */}
				{strigURL ? (
					<div className="view-cart">
						{setViewModal(false)}
						<p>Tu carrito esta vacio! :(</p>
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
			</div>
		);
	} else if (confirmation && anOrderId) {
		return (
			<div className="">
				<div className="">
					<h3>
						Su Orden No.{" "}
						<span className="validation">{anOrderId}</span> ha sido
						confirmada
					</h3>
					<button className="btn-back" onClick={() => navigate("/")}>
						Continuar Comprando
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="cart_wrapper-products">
			<div className="show-cart">
				{cartList.map(({ id, name, img, categoria, quantity }) => (
					<Cart
						key={id}
						name={name}
						img={img}
						categoria={categoria}
						quantity={quantity}
					/>
				))}
				<h4>El precio total es: $ {priceTotal()}</h4>

				<button onClick={() => handleFinish()}>Terminar Compra</button>

				<button className="btn-empty-cart" onClick={emptyCart}>
					Vaciar carrito
				</button>
				{children}
			</div>
		</div>
	);
};

export default Cart;
