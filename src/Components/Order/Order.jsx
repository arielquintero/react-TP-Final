import { useNavigate } from "react-router-dom";
import "./Order.css"
const Order = ({ order }) => {
	const navigate = useNavigate();

	return (
		<>
			<h2 className="title animate__animated animate__shakeY">Orden Numero:{order.id}</h2>
			<table className="table">
				<thead className="thead-dark">
					<tr>
						<th scope="col">Comprador</th>
						<th scope="col">Telefono</th>
						<th scope="col">Email</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						{order.buyer && <td>{order.buyer?.name}</td>}
						{order.buyer && <td>{order.buyer?.email}</td>}
						{order.buyer && <td>{order.buyer?.phone}</td>}
					</tr>
				</tbody>
			</table>
			<table className="table">
				<thead className="thead-dark">
					<tr>
						<th scope="col">ID Producto</th>
						<th scope="col">Producto</th>
						<th scope="col">SubTotal</th>
					</tr>
				</thead>
				<tbody>
					{order.items &&
						order.items.map(({ id, name, price }) => (
							<tr key={id}>
								{id && <td>Id Producto: {id}</td>}
								{name && <td>Producto: {name}</td>}
								{price && <td>Total a Pagar: {price}</td>}
							</tr>
						))}
				</tbody>
				<tfoot>
					<td>Total a Pagar: {order.price}</td>
				</tfoot>
			</table>
			<button className="btn-action" onClick={() => navigate("/")}>
				Ir al Home
			</button>
		</>
	);
};

export default Order;
