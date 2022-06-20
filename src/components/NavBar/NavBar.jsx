import CartWidget from "./CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import LogoRoraima from "../../img/logo-color.png";

function NavBar() {
  const menuArray = [
    { title: "Home", link: "/" },
    { title: "Mantenimiento", link: "/category/mantenimiento" },
    { title: "Protecciones", link: "/category/protecciones" },
    { title: "Repuestos", link: "/category/repuestos" },
    { title: "Electronicos", link: "/category/electronics" },
  ];


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
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
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
              {menuArray.map((item, index) => (
                <li className="nav-item" key={index}>
                  <NavLink className="nav-link link" to={item.link} onClick={closeMobileMenu}>
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
            <CartWidget items={5} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
