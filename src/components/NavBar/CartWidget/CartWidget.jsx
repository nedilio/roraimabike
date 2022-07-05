import { NavLink } from "react-router-dom";
import { CartFill } from "react-bootstrap-icons";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
// import "./CartWidget.css";

function CartWidget({ onClick }) {
  const { cartCount } = useContext(CartContext);

  if (cartCount > 0) {
    return (
      <NavLink
        to="/cart"
        className="flex items-center justify-center w-28 text-white text-center bg-orange-500 border border-slate-500 px-4 rounded transition delay-150 hover:bg-orange-300"
        onClick={onClick}
      >
        <CartFill size={18} />
        <span className="text-lg ml-4">{cartCount}</span>
      </NavLink>
    );
  }
}

export default CartWidget;
