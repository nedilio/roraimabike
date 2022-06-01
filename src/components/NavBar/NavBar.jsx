import './NavBar.css'
function NavBar() {
  return (
    <nav className="nav-container">
      <span className='brand'>RoraimaBike</span>
      <ul className="nav-main">
        <li className='nav-item'><a href="/#">Home</a></li>
        <li className='nav-item'><a href="/#">Mantenimiento</a></li>
        <li className='nav-item'><a href="/#">Protecciones</a></li>
        <li className='nav-item'><a href="/#">Repuestos</a></li>
        <li className='nav-item'><a href="/#">Contacto</a></li>
      </ul>
    </nav>
  )
}

export default NavBar