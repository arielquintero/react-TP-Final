import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const Table = () => {
	const { deleteItemToCart, cartList, priceTotal } = useCartContext();
	const navigate = useNavigate();

	return (
		<div className="table-data">
			<div className="table-data__title">
				<h1>Carrito</h1>
			</div>
			<table className="table">
				<thead className="thead-dark">
					<tr>
						<th scope="col">Cantidad</th>
						<th scope="col">Artículo</th>
						<th scope="col">Precio</th>
						<th scope="col">Total</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					{cartList &&
						cartList?.map((product, id) => (
							<tr key={id}>
								<th scope="row">{product.quantity}</th>
								<td
									onClick={() =>
										navigate(`/detail/${product.id}`)
									}
								>
									{product.name}
								</td>
								<td>${product.price}</td>
								<td>${product.quantity * product.price}</td>
								<td>
									<button
										className="btn btn-danger"
										onClick={() => deleteItemToCart(product)}
									>
										X
									</button>
								</td>
							</tr>
						))}
				</tbody>
				<tfoot>
					<td>{priceTotal}</td>
				</tfoot>
			</table>
		</div>
	);
};

export default Table;
