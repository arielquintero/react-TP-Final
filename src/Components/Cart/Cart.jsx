import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import Table from "../Table/Table";
import AddOrder from "../../ComponentContainer/AddOrder/AddOrder";

const Cart = () => {
	const { emptyCart } = useCartContext();
	const [finish, setFinish] = useState(false);

	const showButtons = (
		<>
			<button className="cart_btn-empty-cart"
				onClick={() => {
					setFinish(!finish);
				}}

			>
				Voy a terminar la Compra
			</button>
			<button className="cart_btn-empty-cart" onClick={emptyCart}>
				Vaciar carrito
			</button>
		</>
	);

	return (
		<>
			{!finish ? (
				<>
					<Table />
					{showButtons}
				</>
			) : (
				<AddOrder />
			)}
		</>
	);
};

export default Cart;
