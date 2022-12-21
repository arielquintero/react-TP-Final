import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { VscPreview } from "react-icons/vsc";
import { GrFavorite } from "react-icons/gr";

const Item = ({ product }) => {
    const { splitPrice } = useCartContext();
    const navigate = useNavigate();
    const showPrice = splitPrice(product.price);

    return (
        <>
            <div className="item_wrapper-product">
                <div className="item-header">
                    <h4 className="item-title">{`${product.name}`}</h4>
                </div>
                <div className="item-body">
                    <img src={product.img} alt="" />
                </div>
                <div className="item-footer">
                    <p className="item-price">
                        Precio: ${showPrice[0]}.{showPrice[1]}
                    </p>
                    <p className="item-btns">
                        <button className="item-favorite">
                            <GrFavorite />
                        </button>
                        <button
                            className="item-btn-footer"
                            onClick={() => navigate(`/detail/${product.id}`)}>
                            <VscPreview /> Detalle del producto
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
};
export default Item;
