import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { VscPreview } from "react-icons/vsc";
import { MdFavoriteBorder } from "react-icons/md";

const Item = ({ product }) => {
	const { splitPrice } = useCartContext();
	const navigate = useNavigate();
	const showPrice = splitPrice(product.price);

	return (
		<div className="item_wrapper">
			<div className="wrapper-product">
				<div className="item-header">
					<h4 className="item-title">{`${product.name}`}</h4>
					<button
						className="item-favorite"
						onClick={() => alert("me gusta")}
					>
						<MdFavoriteBorder fontSize="2rem" />
					</button>
				</div>
				<div className="item-body">
					<button className="body-btn-to-cart">
						Sumar al Carrito
					</button>
					<img src={product.img} alt="" />
				</div>
				<div className="item-footer">
					<p className="item-price">
						Precio: ${showPrice[0]}.{showPrice[1]}
					</p>
					<p className="item-btns">
						<button
							className="item-btn-footer"
							onClick={() => navigate(`/detail/${product.id}`)}
						>
							<VscPreview /> Detalle del producto
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Item;
