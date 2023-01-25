import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { VscPreview } from "react-icons/vsc";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import SlideShow from "../SlideShow/SlideShow";
import { useState } from "react";

const Item = ({ id, name, img, price }) => {
	const [like, setLike] = useState(false);
	const { splitPrice } = useCartContext();
	const navigate = useNavigate();
	const showPrice = splitPrice(price);

	return (
		<div className="item_wrapper-product">
			<div className="item-header">
				<h4 className="item-title">{`${name}`}</h4>
				<button
					className="item-favorite"
					onClick={() => setLike((prevLike) => !prevLike)}
				>
					{like ? (
						<MdFavorite fontSize="2rem" />
					) : (
						<MdFavoriteBorder fontSize="2rem" />
					)}
				</button>
			</div>
			<div className="item-body">
				<button className="body-btn-to-cart">Sumar al Carrito</button>
				<SlideShow imgs={img} condition={false} />
			</div>
			<div className="item-footer">
				<p className="item-price">
					Precio: ${showPrice[0]}.{showPrice[1]}
				</p>
				<p className="item-btns">
					<button
						className="item-btn-footer"
						onClick={() => navigate(`/detail/${id}`)}
					>
						<VscPreview /> Detalle del producto
					</button>
				</p>
			</div>
		</div>
	);
};
export default Item;
