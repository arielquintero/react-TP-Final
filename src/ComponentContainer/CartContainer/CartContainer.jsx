import Cart from "../../Components/Cart/Cart";
import { useCartContext } from "../../context/CartContext";

const CartContainer = () => {
    const { cartList } = useCartContext();

    return cartList.map((prod) => <Cart key={prod.id} product={prod} />);
};

export default CartContainer;
