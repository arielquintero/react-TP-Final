// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
// TODO: Prestar atencion a las importaciones
// import ItemListContainer from "./ComponentContainer/ItemListContainer";
// import ItemDetailContainer from "./ComponentContainer/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import CartContainer from "./ComponentContainer/CartContainer/CartContainer";
import Layout from "./Components/Layout/Layout";
import Slider from "./ComponentContainer/Slider/Slider";
import "./App.scss";

function App() {
	// const showName = (name) => name;
	return (
		<BrowserRouter>
			<CartContextProvider>
				<NavBar />
				<Slider />
				<Layout />
			</CartContextProvider>
		</BrowserRouter>
	);
}

export default App;
