import { NavLink, useNavigate } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { BsCart4, BsSearch } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const NavBar = () => {
	const [isMenu, setIsMenu] = useState(false);
	const navigate = useNavigate();

	const MySwal = withReactContent(Swal);

	const alertSearch = () => {
		MySwal.fire({
			html: <i>Pronto podras hacer una busqueda por producto</i>,
			icon: "success",
		});
	};

	return (
		<header className="navbar_header">
			<nav className="nav-container">
				<button
					className="btn-burger"
					onClick={() => setIsMenu(!isMenu)}
				>
					<BiMenu className="BiMenu" />
				</button>
				<span className="brand">All-Mycro</span>
				<p className="nav-container-search">
					<input className="nav-container-input" type="text" />
					<button
						className="btn-search"
						onClick={() => alertSearch()}
					>
						<BsSearch className="BsSearh" />
					</button>
				</p>
				<button className="btn-nav-search">
					<BsSearch className="BsSearh-nav" />
				</button>
				<button onClick={() => navigate("/cart")}>
					<BsCart4 className="BsCart4" />
				</button>
			</nav>
			<nav className={`nav-navbar ${isMenu ? "isActive" : " "}`}>
				<p className="nav-responsive-search">
					<input className="nav-resposive-input" type="text" />
					<button
						className="btn-search-responsive"
						onClick={() => alertSearch()}
					>
						<BsSearch className="BsSearh-responsive" />
					</button>
				</p>
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? "link link-home" : "link"
					}
				>
					Home
				</NavLink>
				<NavLink
					className="link link-article"
					to="/category/Componentes"
				>
					Componentes
				</NavLink>
				<NavLink className="link link-article" to="/category/Arduino">
					Arduino
				</NavLink>
				<p className="cart-widget">
					<CartWidget />
				</p>
			</nav>
		</header>
	);
};

export default NavBar;
