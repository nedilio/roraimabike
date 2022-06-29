import { NavLink } from "react-router-dom";
import { CartFill } from "react-bootstrap-icons";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartWidget.css";

function CartWidget() {
  const { cartCount } = useContext(CartContext);

  if (cartCount > 0) {
    return (
      <div className="cart-widget">
        <NavLink to="/cart">
          <CartFill size={32} />
          <span>{cartCount}</span>
        </NavLink>
      </div>
    );
  }
}

export default CartWidget;
