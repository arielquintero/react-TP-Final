import { useState } from "react";
import { useCartContext } from "../../context/CartContext";

const ItemCount = ({ stock = 10, initial = 1, onAdd, price }) => {
    const [count, setCount] = useState(initial);
    const { splitPrice } = useCartContext();

    const add = () => count < stock && setCount(count + 1);
    const subtract = () => count > initial && setCount(count - 1);

    const subTotal = splitPrice(price, count);

    const handleOnAdd = () => onAdd(count);

    return (
        <div className="itemcount_wrapper-item-count">
            <span className="title-price-total-item-count">Precio Total</span>
            <div className="item-count">
                <div className="start-item-count">
                    <p className="price-item-count">
                        $ {subTotal[0]}.<sup className="super">{subTotal[1]}</sup>
                    </p>
                </div>
                <div className="center-item-count">
                    <span className="quanty-item-count">Cantidad</span>
                    <button className="btn-item-count-add" onClick={add}>
                        {" "}
                        +{" "}
                    </button>
                    <span className="count">{count}</span>
                    <button className="btn-item-count-subtract" onClick={subtract}>
                        {" "}
                        -{" "}
                    </button>
                </div>
                <div className="end-item-count">
                    <button className="btn-to-cart-item-count" onClick={handleOnAdd}>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;
