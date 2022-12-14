import { useState, createContext, useContext } from "react";

const CartContext = createContext([]);

// Creo un function para no hacer doble importacion
// La function me exporta useContext(), con el contexto CartContext
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    // const addToCart = (product) => {
    //     setCartlist([...cartList,product])
    // }

    const addToCart = (productToAdd, quantity) => {
        const newObj = { ...productToAdd, quantity };
        if (isInCart(newObj.id)) {
            cartList.map((el) => {
                if (el.id === newObj.id) {
                    el.quantity += newObj.quantity;
                }
                return el;
            });
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

    return (
        <CartContext.Provider
            value={{
                cartList,
                addToCart,
                emptyCart,
            }}>
            {children}
        </CartContext.Provider>
    );
};
