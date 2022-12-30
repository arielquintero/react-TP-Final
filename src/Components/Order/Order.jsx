const Order = ({ order }) => {
	console.log(order);

	return (
		<>
			<h2>Order:{order.id}</h2>
			{order.buyer && <h2>Buyer:{order.buyer?.name}</h2>}
			{order.buyer && <h2>Buyer:{order.buyer?.email}</h2>}
			{order.buyer && <h2>Buyer:{order.buyer?.phone}</h2>}

			{order.items &&
				order.items.map(({ id, name, price }) => (
					<ul key={id}>
						{id && <li>{id}</li>}
						{name && <li>{name}</li>}
						{price && <li>{price}</li>}
					</ul>
				))}
		</>
	);
};

export default Order;
