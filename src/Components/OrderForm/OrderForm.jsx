import { useNavigate, useParams } from "react-router-dom";
// import OrderDetail from "../../ComponentContainer/OrderDetail/OrderDetail";
// import { useState } from "react";
import { useCartContext } from "../../context/CartContext";

const OrderForm = () => {
	const { orderId } = useParams();
	const navigate = useNavigate();
     const { newOrderId } = useCartContext();
	// const [leGo, setLeGo] = useState(false);

	return (
		<div className="orderform_container">
			<div className="wrapper">
				<h2 className="msj-thank animate__animated animate__shakeY">
					¡Gracias por elegirnos!
				</h2>
				<h4 className="msj-success">
					La compra se ha realizado exitosamente.
				</h4>
				<strong>El ID de tu compra es `${newOrderId}`</strong>
				<p className="msj-danger">
					Obtenga un descuento de 15% en su próxima compra con este{" "}
					{orderId}
				</p>
				<div className="btns-actions">
					<button
						className="btn-action"
						onClick={() => navigate("/")}
					>
						Ir al Home
					</button>
					<button
						className="btn-action"
						onClick={() => navigate(`/order/${newOrderId}`)}
					>
						{/* {leGo ? <OrderDetail /> : " "} */}
						Ver la Orden
					</button>
				</div>
			</div>
		</div>
	);
};

export default OrderForm;
