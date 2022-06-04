import './NavLink.css';
function NavLink(props) {
  const handleOnClick = (e) => {
    e.preventDefault();
    const activeLink = document.querySelector('a.active');
    const clickedItem = e.target;
    activeLink.classList.remove('active');
    clickedItem.classList.add('active');
  }
  return (
    <a className={`nav-link mr-5 hover:text-orange-600 ${props.active? props.active : ''}`} href='/#' onClick={handleOnClick}>{props.title}</a>
  );
}

export default NavLink;
