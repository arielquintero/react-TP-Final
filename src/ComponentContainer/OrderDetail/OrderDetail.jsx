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