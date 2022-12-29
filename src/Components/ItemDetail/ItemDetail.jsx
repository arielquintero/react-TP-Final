import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import SlideShow from "../SlideShow/SlideShow";
import { GrPrevious } from "react-icons/gr";

const ItemDetail = ({ product }) => {
	const { name, img, descripcion, detalle, categoria, price } = product;

	const { addToCart, splitPrice } = useCartContext();
	const [andNow, setAndNow] = useState(false);
	const navigate = useNavigate();

	const onAdd = (quantity) => {
		addToCart(product, quantity);
		setAndNow(true);
	};

	const showPrice = splitPrice(price);

	return (
		<div className="itemdetail_item-detail">
			<div className="item-wrapper">
				<div className="item-product">
					<button
						className="item-back"
						onClick={() => navigate("/")}
					/>
					<GrPrevious className="iconGr" />
					<h3 className="item-title-product">{name}</h3>
					<h4 className="item-price-product">
						$ {showPrice[0]},{showPrice[1]}
					</h4>
						{/* <SlideShow imgs={[img]} condition={true} /> */}
				</div>
				<div className="item-detail-product">
					<h3 className="item-detail-description">{descripcion}</h3>
					<p className="item-detail-detail">{detalle}</p>
					<h4 className="item-detail-category">
						Categoria: {categoria}
					</h4>
				</div>
				<div className="item-detail-footer">
					<div className="line-top"></div>
					<>
						{andNow ? (
							<p className="show-btn-andnow">
								<button
									className="follow-shopping"
									onClick={() => navigate("/")}
								>
									Sigue Comprando
								</button>
								<button
									className="to-cart"
									onClick={() => navigate("/cart")}
								>
									Mi Carrito
								</button>
							</p>
						) : (
							<ItemCount
								stock={5}
								initial={1}
								onAdd={onAdd}
								price={price}
							/>
						)}
					</>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
