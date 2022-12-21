import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { BsCart } from "react-icons/bs";
import ModalWindow from "../ModalWindow/ModalWindow";
import CartList from "../CartList/CartList";

const CartWidget = () => {
    const { cartList, cartQuantity, viewModal, setViewModal, toggleModal, closeModal } =
        useCartContext();
    // const [viewModal, setViewModal] = useState(false);
    // const navigate = useNavigate();

    // const closeModal = () => {
    //     setViewModal(!viewModal);
    //     navigate("/cart")
        console.log(viewModal);
    // };

    return (
        <>
            <div
                className="cartwidget_cart-widget"
                onClick={ toggleModal }>
                <p className="cart-widget">
                    <BsCart />{" "}
                    <p className="my-cart">
                        Mi carrito
                        <p
                            className={
                                cartList.length === 0 ? "badge-opacity" : "badge"
                            }>
                            { cartQuantity() || ""}
                            {"   "}- items
                        </p>
                    </p>
                </p>
            </div>
            <ModalWindow viewModal={viewModal} setViewModal={setViewModal}>
                <CartList />
                <button className="btn-link-cart" onClick={ closeModal }>
                    Mi Carrito
                </button>
            </ModalWindow>
        </>
    );
};

export default CartWidget;

// <p className={cartList.length === 0 ? "badge-opacity" : "badge"}>
