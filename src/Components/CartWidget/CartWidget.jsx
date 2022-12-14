import { useCartContext } from "../../context/CartContext";
import "./CartWidget.scss";

const CartWidget = () => {
    const { cartList } = useCartContext();

    const quanty = cartList.map((prod) => prod.cant);
    console.log(quanty);
    const quantyTotal = quanty.reduce((acu, elem) => acu + elem, 0);

    return (
        <div className="cart-widget">
            <p className={quanty.length === 0 ? "badge-opacity" : "badge"}>
                {quantyTotal}
            </p>
            <img
                className="img-cart-widget"
                src="/src/assets/images/cartwidget.svg"
                alt="cartwidget"
            />
        </div>
    );
};

export default CartWidget;
