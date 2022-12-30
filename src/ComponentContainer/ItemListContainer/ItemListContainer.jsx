import { getCollectionFirestore } from "../../firestore/getsFirestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import Loading from "../../Components/Loading/Loading";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const { isLoading, setIsLoading } = useCartContext();
	const { idCategory } = useParams();

	const choice = {
		choiceId: idCategory,
		choiceCollections: "productos"
	};
	useEffect(() => {
		getCollectionFirestore(choice)
			.then((data) =>
				setProducts(
					data.docs.map((product) => ({
						id: product.id,
						...product.data(),
					})),
				),
			)
			.catch((err) => console.error(err))
			.finally(() => setIsLoading(false));
	}, [idCategory]);

	return <>{isLoading ? <Loading /> : <ItemList products={products} />}</>;
};

export default ItemListContainer;
