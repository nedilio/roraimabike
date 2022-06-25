import { NavLink } from 'react-router-dom';
import { CartFill } from 'react-bootstrap-icons';
import './CartWidget.css';

function CartWidget(props) {
  return (
    <div className='cart-widget'>
        <NavLink to="/cart">
            <CartFill size={32}/><span>{props.items}</span>
        </NavLink>
    </div>
  )
}

export default CartWidget
