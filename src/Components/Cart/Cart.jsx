import { Navigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./Cart.scss";

const Cart = ({ product }) => {
    const { emptyCart } = useCartContext();

    return (
        <div className="wrapper-cart">
            <div className="wrapper-products">
                <li key={product.id} className="item-list-product">
                    {" "}
                    Nombre: {product.name} - Categoria: {product.categoria} - precio:{" "}
                    {product.price} - cantidad: {product.cant}{" "}
                </li>
                <button className="btn-empty-item">X</button>
            </div>
            <section className="wrapper-empty-back">
                <button className="btn-empty-cart" onClick={emptyCart}>
                    Vaciar carrito
                </button>
                <button className="btn-back">
                    <Navigate to="/">Back</Navigate>
                </button>
            </section>
        </div>
    );
};

export default Cart;
