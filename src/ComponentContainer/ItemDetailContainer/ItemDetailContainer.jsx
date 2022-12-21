import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    const { productId } = useParams();

    // Aca como solo voy a traer un solo producto no uso una collection sino doc

    useEffect(() => {
        const db = getFirestore();
        const queryDoc = doc(db, "productos", productId);
        getDoc(queryDoc).then((data) => setProduct({ id: data.id, ...data.data() }));
    }, [productId]);


    return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
