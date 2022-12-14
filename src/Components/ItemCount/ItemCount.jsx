import { useState } from "react";
import "./ItemCount.scss";

const ItemCount = ({ stock = 10, initial = 1, onAdd, price }) => {
    const [count, setCount] = useState(initial);

    const add = () => count < stock && setCount(count + 1);
    const subtract = () => count > initial && setCount(count - 1);

    const handleOnAdd = () => onAdd(count);

    return (
        <div className="wrapper-item-count">
            <span className="title-price-total-item-count">Precio Total</span>
            <div className="item-count">
                <div className="start-item-count">
                    <p className="price-item-count">$ {price}</p>
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
