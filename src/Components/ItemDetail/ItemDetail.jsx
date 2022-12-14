import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";
import "./ItemDetail.scss";

const ItemDetail = ({ product }) => {
    const { addToCart } = useCartContext();

    const onAdd = (cant) => {
        console.log(cant);
        addToCart({ ...product, cant });
    };


    return (
        <div className="item-detail">
            <div className="item-wrapper">
                <div className="item-product">
                    <button className="item-back">
                        <NavLink to="/">back</NavLink>
                    </button>
                    <h3 className="item-title-product">{product.name}</h3>
                    <h4 className="item-price-product">$ {product.price}</h4>
                    <img src={product.img} alt={product.name} />
                </div>
                <div className="item-detail-product">
                    <h3 className="item-detail-description">
                        {product.descripcion}
                    </h3>
                    <p className="item-detail-detail">{product.detalle}</p>
                    <h4 className="item-detail-category">
                        categoria: {product.categoria}
                    </h4>
                </div>
                <div className="item-detail-footer">
                    <ItemCount
                        stock={5}
                        initial={1}
                        onAdd={onAdd}
                        price={product.price}
                    />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
