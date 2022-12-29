import { Form } from "../../Components/Form/Form";
import { useCartContext } from "../../context/CartContext";
import { addCollectionFirestore } from "../../firestore/getsFirestore";

const AddOrder = () => {

	
	const { priceTotal, cartList, formData, fullOrder, setFullOrder } = useCartContext();

    console.log(formData)

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
		addCollectionFirestore();
        setFullOrder(!fullOrder);
	};

	return (
		<>
			{fullOrder ? (
				<Form addOrder={addOrder(e)} />
			) : (
				<h4>No puede estar vacia la orden</h4>
			)}
		</>
	);
};

export default AddOrder;
