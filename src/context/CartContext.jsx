import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext([]);

// Creo un function para no hacer doble importacion
// La function me exporta useContext(), con el contexto CartContext
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);
	const [viewModal, setViewModal] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
    const [fullOrder, setFullOrder] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
	});

	const navigate = useNavigate();

	const addToCart = (productToAdd, quantity) => {
		const newObj = { ...productToAdd, quantity };

		if (isInCart(newObj.id)) {
			const newQty = cartList.map((el) => {
				if (el.id === newObj.id) {
					el.quantity += newObj.quantity;
				}
				return el;
			});
			setCartList([...newQty]);
		} else {
			setCartList([...cartList, newObj]);
		}
	};
	const isInCart = (id) => {
		return cartList.some((el) => el.id === id);
	};

	const emptyCart = () => {
		setCartList([]);
	};
	const deleteItemToCart = (productToCart) => {
		const oldCart = { ...productToCart };
		const newCart = cartList.filter((el) => el.id !== oldCart.id);
		setCartList([...newCart]);
	};

	const cartQuantity = () => {
		return cartList.reduce((acc, prod) => (acc += prod.quantity), 0);
	};

	const splitPrice = (price, qty = 1) => {
		const op = (price * qty).toFixed([2]);
		const arr = String(op).split(".");
		return [arr[0], arr[1]];
	};
	const priceTotal = () => {
		return cartList.reduce(
			(acc, prod) => (acc += prod.price * prod.quantity),
			0,
		);
	};

	const toggleModal = (toogle = !viewModal) => setViewModal(toogle);

	const closeModal = (path = "/cart", state = null) => {
		toggleModal(state);
		return navigate(path);
	};

	return (
		<CartContext.Provider
			value={{
				cartList,
				viewModal,
				isLoading,
                formData,
                fullOrder,
				setViewModal,
				setIsLoading,
                setFullOrder,
                setFormData,
				addToCart,
				emptyCart,
				cartQuantity,
				splitPrice,
				deleteItemToCart,
				priceTotal,
				toggleModal,
				closeModal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
