import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import Cart from "../Cart/Cart";
import OrderForm from "../OrderForm/OrderForm";

const CartList = () => {
    const { cartList, emptyCart, priceTotal, closeModal } = useCartContext();
    const navigate = useNavigate();

    return (
        <>
            {cartList.length === 0 ? (
                <>
                    <p>Tu carrito esta vacio! :(</p>
                    <button className="btn-back" onClick={() => closeModal("/")}>
                        Back
                    </button>
                </>
            ) : (
                <div className="cartlist_wrapper-products show-cart">
                    {cartList.map((prod) => (
                        <Cart key={prod.id} product={prod} />
                    ))}
                    <h4>El precio total es: {priceTotal()} </h4>
                    <button className="btn-empty-cart" onClick={emptyCart}>
                        Vaciar carrito
                    </button>
                    <OrderForm />
                </div>
            )}
        </>
    );
};

export default CartList;
