import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocFirestore } from "../../firestore/getsFirestore";
import Order from "../../Components/Order/Order";
import { useCartContext } from "../../context/CartContext";
import Loading from "../../Components/Loading/Loading";

const OrderDetail = () => {
	const { orderId } = useParams();
    const {isLoading} = useCartContext
	const [myOrder, setMyOrder] = useState({});
   

	useEffect(() => {
		const choice = { choiceId: orderId, choiceCollection: "orders" };
		getDocFirestore(choice)
			.then((data) => setMyOrder({ id: data.id, ...data.data() }))
			.catch((error) => console.log(error));
	}, [orderId]);

	return isLoading ? <Loading /> : <Order order={myOrder} />;
};

export default OrderDetail;
