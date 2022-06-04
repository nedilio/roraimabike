import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.css";
import NavLink from "./NavLink/NavLink";
function NavBar() {
  const toggleMobileMenu = () => {
    const menu = document.querySelector(".menu-nav");
    const button = document.querySelector(".hamburger-toggle");
    menu.classList.toggle("active");
    button.classList.toggle("active");
    // console.log('click menu boton');
  };
  return (
    <header className="text-orange-400 bg-gray-100 body-font">
      <div className="nav-container container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="logo-container flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/#">
          <img className="logo-nav" src="./img/Logo-color.PNG" alt="roraimabike-logo" />
        </a>
        <div className="menu-nav">
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center bg-gray-100">
            <NavLink title="Home" active="active"/>
            <NavLink title="Mantenimiento"/>
            <NavLink title="Protecciones"/>
            <NavLink title="Repuestos"/>
            <NavLink title="Contacto"/>
          </nav>
        </div>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">
          <CartWidget items={5}/>
        </button>
        <button
          className="hamburger-toggle"
          onClick={toggleMobileMenu}
        >
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
        </button>
      </div>
    </header>
    // <div>
    //   <nav className="navbar navbar-expand-md navbar-light bg-light">
    //     <div className="container-fluid">
    //       <img src="./img/logo-color.png" className="logo-nav" alt="" />
    //       <button
    //         className="hamburger-toggle"
    //         onClick={toggleMobileMenu}
    //       >
    //           <span className="line-1"></span>
    //           <span className="line-2"></span>
    //           <span className="line-3"></span>
    //         {/* <span className="navbar-toggler-icon"></span> */}
    //       </button>
    //       <div className="navbar-collapse" id="navbarSupportedContent">
    //         <ul className="nav-main navbar-nav me-auto mb-2 mb-lg-0">
    //           <NavLink title="Home" active="active"/>
    //           <NavLink title="Mantenimiento"/>
    //           <NavLink title="Protecciones"/>
    //           <NavLink title="Repuestos"/>
    //           <NavLink title="Contacto"/>
    //         </ul>
    //         <CartWidget items={5}/>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
}

export default NavBar;
