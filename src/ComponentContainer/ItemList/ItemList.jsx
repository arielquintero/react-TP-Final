import Item from "../../Components/Item/Item";

const ItemList = ({ products }) => {
	return (
		<section className="itemlist_item-list-grid">
			{products.map((product) => (
				<Item {...product} key={product.id} />
			))}
		</section>
	);
};
export default ItemList;
