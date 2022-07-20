import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import LogoRoraima from "../../img/logo-color.png";
import { products } from "../../data/products";
import "./NavBar.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function NavBar() {
  let menuArray = [];
  products.map((item) => {
    if (!menuArray.includes(item.category)) {
      menuArray.push(item.category);
    }
    return true;
  });
  const { cartCount } = useContext(CartContext);

  const toggleMobileMenu = () => {
    const menu = document.querySelector(".navbar-collapse");
    const button = document.querySelector(".hamburger-toggle");
    const body = document.querySelector("body");
    menu.classList.toggle("active");
    button.classList.toggle("active");
    body.classList.toggle("menu-active");
  };
  const closeMobileMenu = () => {
    const menu = document.querySelector(".navbar-collapse");
    const button = document.querySelector(".hamburger-toggle");
    const body = document.querySelector("body");
    menu.classList.remove("active");
    button.classList.remove("active");
    body.classList.remove("menu-active");
  };
  return (
    <div>
      <nav className="shadow">
        <div className="container mx-auto flex py-4 lg:py-0 px-4 lg:px-0 justify-between items-center">
          <NavLink to="/">
            <img src={LogoRoraima} className="max-h-8" alt="" />
          </NavLink>
          <button
            className="hamburger-toggle float-right"
            onClick={toggleMobileMenu}
          >
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </button>
          <div className="navbar-collapse flex-1 z-50">
            <ul className="md:flex md:justify-around md:pl-4 m-0">
              <li className="px-5 py-2 mb-4 md:p-2 md:mb-0 relative text-center">
                <NavLink
                  className="capitalize text-orange-400 nav-link text-xl md:text-base"
                  to="/"
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              {menuArray.map((item, index) => (
                <li
                  className="px-5 py-2 mb-4 md:p-2 md:mb-0 relative text-center"
                  key={item}
                >
                  <NavLink
                    className="nav-link capitalize text-orange-400 text-xl md:text-base"
                    to={`/category/${item}`}
                    onClick={closeMobileMenu}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
              {cartCount > 0 && (
                <li className="px-5 py-2 mb-4 md:p-2 md:mb-0 relative flex justify-center">
                  <CartWidget onClick={closeMobileMenu} />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
