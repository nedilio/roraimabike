function NavLink(props) {
  const handleOnClick = (e) => {
    e.preventDefault();
    const activeLink = document.querySelector('a.active');
    const clickedItem = e.target;
    activeLink.classList.remove('active');
    clickedItem.classList.add('active');
    // console.log(clickedItem, activeLink);

;  }
  return (
    <li className="nav-item">
      <a className={`nav-link ${props.active ? props.active : ''}`} onClick={handleOnClick} href="/#">
        {props.title}
      </a>
    </li>
  );
}

export default NavLink;
