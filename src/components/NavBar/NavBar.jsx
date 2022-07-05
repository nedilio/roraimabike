import CartWidget from "./CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import LogoRoraima from "../../img/logo-color.png";
import { products } from "../../data/products";
import "./NavBar.scss";

function NavBar() {
  // Armamos el Menu desde las categorias de los productos
  let menuArray = [];
  products.map((item) => {
    if (!menuArray.includes(item.category)) {
      menuArray.push(item.category);
    }
    return true;
  });

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
        <div className="container mx-auto flex py-4 sm:py-0 px-4 md:px-0 justify-between items-center">
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
          <div className="navbar-collapse flex-1">
            <ul className="sm:flex sm:justify-between sm:pl-4 m-0">
              <li className="p-2 relative text-center">
                <NavLink
                  className="capitalize text-orange-400 nav-link"
                  to="/"
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              {menuArray.map((item, index) => (
                <li className="p-2 relative text-center" key={item}>
                  <NavLink
                    className="nav-link capitalize text-orange-400"
                    to={`/category/${item}`}
                    onClick={closeMobileMenu}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
              <li className="p-2 relative flex justify-center">
                <CartWidget onClick={closeMobileMenu} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
