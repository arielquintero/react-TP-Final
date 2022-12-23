import { getCollectionFirestore } from "../firestore/getsFirestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import Loading from "../Components/Loading/Loading";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const { isLoading, setIsLoading } = useCartContext();
	const { idCategory } = useParams();

	useEffect(() => {
		getCollectionFirestore(idCategory, setProducts, setIsLoading);
	}, [idCategory]);

	return <>{isLoading ? <Loading /> : <ItemList products={products} />}</>;
};

export default ItemListContainer;
