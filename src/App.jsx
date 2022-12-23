import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./ComponentContainer/ItemDetailContainer/ItemDetailContainer";
import ItemDetailContainer from "./ComponentContainer/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import CartContainer from "./ComponentContainer/CartContainer/CartContainer";
import "./App.scss";

function App() {
    // const showName = (name) => name;
    return (
        <BrowserRouter>
            <CartContextProvider value={{}}>
                <NavBar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ItemListContainer
                                // greeting={"Te saludo desde Item List Container, "}
                                // myName={showName("Ariel")}
                            />
                        }
                    />
                    <Route
                        path="/category/:idCategory"
                        element={<ItemListContainer />}
                    />
                    <Route
                        path="/detail/:productId"
                        element={<ItemDetailContainer />}
                    />
                    <Route path="/cart" element={<CartContainer />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </CartContextProvider>
        </BrowserRouter>
    );
}

export default App;
