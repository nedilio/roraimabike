import { NavLink } from "react-router-dom";
import { CartFill } from "react-bootstrap-icons";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget({ onClick }) {
  const { cartCount } = useContext(CartContext);

  return (
    <NavLink
      to="/cart"
      className="flex items-center justify-center nav-link text-orange-400 transition delay-150 hover:text-orange-500"
      onClick={onClick}
    >
      <CartFill size={18} />
      <span className="text-lg ml-4">{cartCount}</span>
    </NavLink>
  );
}

export default CartWidget;
