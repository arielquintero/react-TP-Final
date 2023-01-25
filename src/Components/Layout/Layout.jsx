import { Navigate, Route, Routes } from "react-router-dom";
import ItemListContainer from "../../ComponentContainer/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../../ComponentContainer/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "../../ComponentContainer/CartContainer/CartContainer";
import Footer from "../Footer/Foorter";
import OrderForm from "../OrderForm/OrderForm";
import OrderDetail from "../../ComponentContainer/OrderDetail/OrderDetail";

const Layout = () => {
	return (
		<div className="layout_layout">
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route
					path="/category/:idCategory"
					element={<ItemListContainer />}
				/>
				<Route
					path="/detail/:productId"
					element={<ItemDetailContainer />}
				/>
				<Route path="/order/" element={<OrderForm />} />
				<Route path="/order/:orderId" element={<OrderDetail />} />
				<Route path="/cart" element={<CartContainer />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default Layout;
