import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom"

const Cart = ({ product }) => {
    const { splitPrice, deleteItemToCart } = useCartContext();
    const navigate = useNavigate();
    const subTotal = splitPrice(product.price, product.quantity);

    return (
        <>
            <li key={product.id} className="cart_item-list-product">
                {" "}
                <p className="back-item-detail" onClick={()=> navigate(`/detail/${product.id}`)}>
                    Nombre: {product.name} - Categoria: {product.categoria} - precio:{" "}
                    {subTotal[0]},{subTotal[1]} - cantidad: {product.quantity}{" "}
                </p>
                <button
                    className="btn-empty-item"
                    onClick={() => deleteItemToCart(product)}>
                    X
                </button>
            </li>
        </>
    );
};

export default Cart;
