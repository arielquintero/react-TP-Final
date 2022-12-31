import { useState, useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import OrderForm from "../OrderForm/OrderForm";
import Table from "../Table/Table";

const Cart = () => {
	const { emptyCart } = useCartContext();
	const [finish, setFinish] = useState(false);
	const [mount, setMount] = useState(true);

	const showButtons = (
		<>
        <button onClick={() => {setFinish(!finish)}}>
				Voy a terminar la Compra
			</button>
			<button className="btn-empty-cart" onClick={emptyCart}>
				Vaciar carrito
			</button>
		</>
	);

	return (
		<>
			<Table />
			{!finish && mount ? showButtons  : <OrderForm /> }
		</>
	);
};

export default Cart;
