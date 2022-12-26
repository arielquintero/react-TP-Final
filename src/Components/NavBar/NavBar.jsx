import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { BsCart4, BsSearch } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

const NavBar = () => {
	const [isMenu, setIsMenu] = useState(false);

	return (
		<header className="navbar_header">
			<nav className="nav-container">
				<button
					className="btn-burger"
					onClick={() => setIsMenu(!isMenu)}
				>
					<BiMenu className="BiMenu" />
				</button>
				<span className="brand">EcoMMerS</span>
				<p className="nav-container-search">
					<input className="nav-container-input" type="text" />
					<button className="btn-search">
						<BsSearch className="BsSearh" />
					</button>
				</p>
				<button className="btn-nav-search">
					<BsSearch className="BsSearh-nav" />
				</button>
				<BsCart4 className="BsCart4" />
			</nav>
			<nav className={`nav-navbar ${isMenu ? "isActive" : " "}`}>
				<p className="nav-responsive-search">
					<input className="nav-resposive-input" type="text" />
					<button className="btn-search-responsive">
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
