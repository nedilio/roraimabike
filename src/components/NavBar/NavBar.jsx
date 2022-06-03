import CartWidget from "./CartWidget/CartWidget";
import './NavBar.css';
import NavLink from "./NavLink/NavLink";
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">RoraimaBike</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
