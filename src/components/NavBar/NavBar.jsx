import './NavBar.css'
function NavBar() {
  return (
    <nav className="nav-container">
        <ul className="nav-main">
            <li><a href="#">Mantenimiento</a></li>
            <li><a href="#">Protecciones</a></li>
            <li><a href="#">Repuestos</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>
  )
}

export default NavBar