import { useNavigate } from "react-router-dom";
import { Form } from "../../Components/Form/Form";
import { useCartContext } from "../../context/CartContext";
import { addCollectionFirestore } from "../../firestore/getsFirestore";

const AddOrder = () => {
	const {
		priceTotal,
		cartList,
		formData,
        anOrderId,
		setAnOrderId,
		setConfirmation,
		emptyCart,
	} = useCartContext();
	const navigate = useNavigate();
	console.log(formData);

	const addOrder = (e) => {
		e.preventDefault();
		// armar la orden de un formulario
		const order = {};
		order.buyer = formData;
		order.price = priceTotal();
		order.items = cartList.map(({ id, price, name }) => ({
			id,
			price,
			name,
		}));
		addCollectionFirestore(order)
			.then((res) => {
				setAnOrderId(res.id);
				console.log(res.id);
                console.log("resOrderId"+anOrderId)
				navigate(`/order/${res.id}`);
				emptyCart();
			})
			.catch((error) => console.log(error));
		setConfirmation(true);
	};

	return (
		<>
			<Form addOrder={addOrder} />
		</>
	);
};

export default AddOrder;
