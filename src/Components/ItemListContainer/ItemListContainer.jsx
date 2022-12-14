import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "../../ComponentContainer/ItemList/ItemList";
import {
    getProducts,
    getProductsByCategory,
} from "../../ComponentContainer/ShowProdApi/showProdApi";
import "./ItemListConteiner.scss";
import Loading from "../Loading/Loading";

const ItemListContainer = ({ greeting, myName }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { idCategory } = useParams();

    // console.log(idCategory);

    useEffect(() => {
        if (idCategory) {
            setTimeout(() => {
                getProductsByCategory(idCategory)
                    .then((products) => setProducts(products))
                    .catch((err) => console.error(err))
                    .finally(() => setLoading(false));
            }, 1000);
        } else {
            getProducts()
                .then((products) => setProducts(products))
                .catch((err) => console.error(err))
                .finally(() => setLoading(false));
        }
    }, [idCategory]);

    return (
        <div className="item-list-container">
            <section className="loading">
                {greeting}
                {myName}
            </section>
            <section className="list-products">
                {loading ? <Loading /> : <ItemList products={products} />}
            </section>
        </div>
    );
};

export default ItemListContainer;

// showProdApi()
//     .then((data) =>
//         setProducts(data.filter((prod) => prod.category === id))
//     )
//     .catch((err) => console.error(err));
