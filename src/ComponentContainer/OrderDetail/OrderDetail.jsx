import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllTheCollection } from "../../firestore/getsFirestore";
import Order from "../../Components/Order/Order";

const AddOrderDetail = () => {
	const { orderId } = useParams();
	const [myOrders, setMyOrders] = useState([]);
	// const [loadOrder, setLoadOrder] = useState([]);

	useEffect(() => {
		let isMounted = true;

		if (isMounted) {
			const getmyOrders = (setMyOrders) => {
				getAllTheCollection("orders")
					.then((res) => {
						let theOrders = res.docs.map((order) => ({
							id: order.id,
							...order.data(),
						}));
						setMyOrders(theOrders.reverse());
					})
					.catch((err) => console.log(err))
					.finally();
			};
			getmyOrders(setMyOrders);
			return () => {
				isMounted = false;
			};
		}
	}, [orderId]);

	// setLoadOrder(myOrders.find((el) => el.id === orderId));
	const order = myOrders.find((el) => el.id === orderId);
    console.log(order)
	return <Order order={order} />;
};

export default AddOrderDetail;
