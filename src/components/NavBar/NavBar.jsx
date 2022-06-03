import CartWidget from "./CartWidget/CartWidget";
import './NavBar.css';
import NavLink from "./NavLink/NavLink";
function NavBar() {
  const toggleMobileMenu = () => {
    const menu = document.querySelector('.navbar-collapse');
    const button = document.querySelector('.hamburger-toggle');
    menu.classList.toggle('active');
    button.classList.toggle('active');
    // console.log('click menu boton');
  };
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <img src="./img/logo-color.png" className="logo-nav" alt="" />
          <button 
            className="hamburger-toggle"
            onClick={toggleMobileMenu}
          >
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
            {/* <span className="navbar-toggler-icon"></span> */}
          </button>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="nav-main navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink title="Home" active="active"/>
              <NavLink title="Mantenimiento"/>
              <NavLink title="Protecciones"/>
              <NavLink title="Repuestos"/>
              <NavLink title="Contacto"/>
            </ul>
            <CartWidget items={5}/>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
