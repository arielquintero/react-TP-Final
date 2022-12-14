import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import { getProductId } from "../ShowProdApi/showProdApi";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    const { productId } = useParams();
    // console.log(useParams())

    // console.log(productId);

    useEffect(() => {
        setTimeout(() => {
            getProductId(productId).then((product) => setProduct(product));
        }, 2000);
    });
    // console.log(product);
    return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
