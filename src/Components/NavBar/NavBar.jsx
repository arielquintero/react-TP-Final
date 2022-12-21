import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <div className="navbar_nav-bar">
            <span className="brand">Ecommers</span>
            <section className="flex-links">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "link link-home" : "link"
                    }>
                    Home
                </NavLink>
                <NavLink className="link link-article" to="/category/Componentes">
                    Componentes
                </NavLink>
                <NavLink className="link link-article" to="/category/Arduino">
                    Arduino
                </NavLink>
                <CartWidget />
            </section>
        </div>
    );
};

export default NavBar;
