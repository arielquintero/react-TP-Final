import { doc, getDoc, getFirestore } from "firebase/firestore";
// import { getDocFirestore } from "../../firestore/getsFirestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useCartContext } from "../../context/CartContext";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
// import Loading from "../../Components/Loading/Loading";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	// const { isLoading, setIsLoading } = useCartContext();
	const { productId } = useParams();
		// getDocFirestore(productId, setProduct, setIsLoading);

	 useEffect(() => {
        const db = getFirestore();
        const queryDoc = doc(db, "productos", productId);
        getDoc(queryDoc).
        then((data) => setProduct({ id: data.id, ...data.data() }));
    }, [productId]);


    return <ItemDetail product={product} />;
    // isLoading ? <Loading /> : <ItemDetail product={product} /> ;
};

export default ItemDetailContainer;
