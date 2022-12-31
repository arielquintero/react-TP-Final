import { useNavigate } from "react-router-dom";
import { Form } from "../../Components/Form/Form";
import { useCartContext } from "../../context/CartContext";
import { addCollectionFirestore } from "../../firestore/getsFirestore";

const AddOrder = () => {
	const {
		priceTotal,
		cartList,
		formData,
		fullOrder,
		setFullOrder,
		emptyCart,
	} = useCartContext();
    const navigate = useNavigate()
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
        order.date = firebase.firestore.Timestamp.fromDate( new Date());
		addCollectionFirestore(order)
			.then((res) => {
				console.log(res.id);
                navigate(`/order/${res.id}`)
				emptyCart();
			})
			.catch((error) => console.log(error));
        setFullOrder(!fullOrder);
	};

	return (
		<>
			<Form addOrder={addOrder} />
		</>
	);
};

export default AddOrder;
