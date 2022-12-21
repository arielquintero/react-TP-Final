import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "../Loading/Loading";
import ItemList from "../../ComponentContainer/ItemList/ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { idCategory } = useParams();

    useEffect(() => {
        if (idCategory) {
            const db = getFirestore();
            const queryCollection = collection(db, "productos");
            const queryFilter = query(
                queryCollection,
                where("categoria", "==", idCategory)
            );
            getDocs(queryFilter)
                .then((data) =>
                    setProducts(
                        data.docs.map((product) => ({
                            id: product.id,
                            ...product.data(),
                        }))
                    )
                )
                .catch((err) => console.error(err))
                .finally(() => setLoading(false));
        } else {
            const db = getFirestore();
            const queryCollection = collection(db, "productos");
            getDocs(queryCollection)
                .then((data) =>
                    setProducts(
                        data.docs.map((product) => ({
                            id: product.id,
                            ...product.data(),
                        }))
                    )
                )
                .catch((err) => console.error(err))
                .finally(() => setLoading(false));
        }
    }, [idCategory]);

    return (
        <div className="itemlistcontainer_item-list-container">
            <section className="loading">
            </section>
            <section className="list-products">
                {loading ? <Loading /> : <ItemList products={products} />}
            </section>
        </div>
    );
};

export default ItemListContainer;
