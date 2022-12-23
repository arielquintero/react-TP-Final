import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ product }) => {
	const { addToCart, splitPrice } = useCartContext();
	const [andNow, setAndNow] = useState(false);
	const navigate = useNavigate();

	const onAdd = (quantity) => {
		addToCart(product, quantity);
		setAndNow(true);
	};

	const showPrice = splitPrice(product.price);

	return (
		<div className="itemdetail_item-detail">
			<div className="item-wrapper">
				<div className="item-product">
					<button
						className="item-back"
						onClick={() => navigate("/")}
					/>
					<h3 className="item-title-product">{product.name}</h3>
					<h4 className="item-price-product">
						$ {showPrice[0]},{showPrice[1]}
					</h4>
					<img src={product.img} alt={product.name} />
				</div>
				<div className="item-detail-product">
					<h3 className="item-detail-description">
						{product.descripcion}
					</h3>
					<p className="item-detail-detail">{product.detalle}</p>
					<h4 className="item-detail-category">
						Categoria: {product.categoria}
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
								price={product.price}
							/>
						)}
					</>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
