import { Navigate, Route, Routes } from "react-router-dom";
import ItemListContainer from "../../ComponentContainer/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../../ComponentContainer/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "../../ComponentContainer/CartContainer/CartContainer";
import Footer from "../Footer/Foorter";

const Layout = () => {
	return (
		<div className="layout_layout">
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
			<Footer />
		</div>
	);
};

export default Layout;
