// import Cart from "../Cart/Cart";

const CartList = ({ children }) => {
	return (
		<div className="cartlist_wrapper-products">
			<div className="show-cart">
				{/* {cartList.map((prod) => (
					<Cart key={prod.id} product={prod} />
				))} */}
				{/* <h4>El precio total es: $ {priceTotal()}</h4> */}

				<button onClick={() => handleFinish()}>Terminar Compra</button>

				{/* <button className="btn-empty-cart" onClick={emptyCart}>
					Vaciar carrito
				</button> */}

				
			</div>
            {children}
		</div>
	);
};
export default CartList;
