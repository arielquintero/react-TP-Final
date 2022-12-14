import { useState, createContext, useContext } from "react";

const CartContext = createContext([]);

// Creo un function para no hacer doble importacion
// La function me exporta useContext(), con el contexto CartContext
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartlist] = useState([])

    const addToCart = (product) => {
        setCartlist([...cartList,product])
    }

    const emptyCart = () => {
        setCartlist([])
    }

    return (

        <CartContext.Provider value={{
                cartList,
                addToCart,
                emptyCart
        }}>
            { children }
        </CartContext.Provider>

    )

}