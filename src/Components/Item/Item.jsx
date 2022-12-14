import { Link } from "react-router-dom";
import "./Item.scss";

const Item = ({ product }) => {
    return (
        <div>
            <div className="product">
                <div className="item-header"><h4 className="item-title">{`${product.name}`}</h4></div>
                <div className="item-body">
                    <img src={product.img} alt="" />
                </div>
                <div className="item-footer">
                    <p className="item-price">Precio: ${product.price}</p>
                    <Link to={`/detail/${product.id}`}>
                        <button className="item-btn-footer">Detalle del producto</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Item;
