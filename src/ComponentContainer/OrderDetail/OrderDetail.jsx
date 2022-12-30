// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getAllTheCollection } from "../../firestore/getsFirestore";
// import Order from "../../Components/Order/Order";

// const AddOrderDetail = () => {
// 	const { orderId } = useParams();
// 	const [myOrders, setMyOrders] = useState([]);
// 	// const [loadOrder, setLoadOrder] = useState([]);

// 	useEffect(() => {
// 		let isMounted = true;

// 		if (isMounted) {
// 			const getmyOrders = (setMyOrders) => {
// 				getAllTheCollection("orders")
// 					.then((res) => {
// 						let theOrders = res.docs.map((order) => ({
// 							id: order.id,
// 							...order.data(),
// 						}));
// 						setMyOrders(theOrders.reverse());
// 					})
// 					.catch((err) => console.log(err))
// 					.finally();
// 			};
// 			getmyOrders(setMyOrders);
// 			return () => {
// 				isMounted = false;
// 			};
// 		}
// 	}, [orderId]);

// 	// setLoadOrder(myOrders.find((el) => el.id === orderId));
// 	const order = myOrders.find((el) => el.id === orderId);
//     console.log(order)
// 	return <Order order={order} />;
// };

// export default AddOrderDetail;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {  getDocFirestore } from "../../firestore/getsFirestore";
import Order from "../../Components/Order/Order";

const AddOrderDetail = () => {
	const { orderId } = useParams();
	const [myOrder, setMyOrder] = useState({});

	useEffect(() => {
		const choice = { choiceId: orderId , choiceCollection: "orders" };
		getDocFirestore(choice)
			.then((data) => setMyOrder({ id: data.id, ...data.data() }))
			.catch((error)=> console.log(error))
	}, [orderId]);

	return <Order order={myOrder} />;
};

export default AddOrderDetail;