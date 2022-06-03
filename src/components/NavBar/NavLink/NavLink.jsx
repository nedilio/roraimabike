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
    <li className="nav-item">
      <a className={`link nav-link ${props.active ? props.active : ''}`} onClick={handleOnClick} href="/#">
        {props.title}
      </a>
    </li>
  );
}

export default NavLink;
