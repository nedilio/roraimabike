import { CartFill } from 'react-bootstrap-icons';
import './cartwidget.css';

function CartWidget(props) {
  return (
    <div className='cart-widget'>
        <a href="/#">
            <CartFill size={32}/><span>{props.items}</span>
        </a>
    </div>
  )
}

export default CartWidget
