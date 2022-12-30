import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartItem = ({ id, name, img, categoria, quantity }) => {
	const { splitPrice, deleteItemToCart } = useCartContext();
	const navigate = useNavigate();
	const subTotal = splitPrice(price, quantity);
	return (
		<>
			<li key={id} className="cart_item-list-product">
				{" "}
				<p
					className="back-item-detail"
					onClick={() => navigate(`/detail/${id}`)}
				>
					Nombre: {name} - Categoria: {categoria} - precio: ${" "}
					{subTotal[0]},{subTotal[1]} - cantidad: {quantity}{" "}
				</p>
				<button
					className="btn-empty-item"
					onClick={() => deleteItemToCart(product)}
				>
					X
				</button>
			</li>
		</>
	);
};

export default CartItem;
