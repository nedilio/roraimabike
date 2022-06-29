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
  }
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
        <div className="container">
          <NavLink to="/">
            <img src={LogoRoraima} className="logo-nav" alt="" />
          </NavLink>

          <button className="hamburger-toggle" onClick={toggleMobileMenu}>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
            {/* <span className="navbar-toggler-icon"></span> */}
          </button>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="nav-main navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link link" to ="/">Home</NavLink>
              </li>
              {menuArray.map((item, index) => (
                <li className="nav-item" key={item}>
                  <NavLink className="nav-link link" to={`/category/${item}`} onClick={closeMobileMenu}>
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
