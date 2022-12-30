import { getDocFirestore } from "../../firestore/getsFirestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import Loading from "../../Components/Loading/Loading";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const { isLoading, setIsLoading } = useCartContext();
	const { productId } = useParams();

	const choice = { choiceId: productId, choiceCollection: "productos" };

	useEffect(() => {
		getDocFirestore(choice)
			.then((data) => setProduct({ id: data.id, ...data.data() }))
			.catch((err) => console.log(err))
			.finally(() => setIsLoading(false));
	}, [productId]);
	return isLoading ? <Loading /> : <ItemDetail product={product} />;
};

export default ItemDetailContainer;
