import { useState } from "react";
import { ExclamationOctagonFill} from 'react-bootstrap-icons';
import './itemcount.css';

function ItemCount({ initial, stock }) {
  const [count, setCount] = useState(initial);
  const [error, setError] = useState('');

  const plusCount = () => {
    if (count < stock) {
      setCount(count + 1);
      setError(false);
    } else {
      setError(`Se ha alcanzado el maximo stock (${stock})`);
    }
  };
  const minusCount = () => {
    if (count > initial) {
      setCount(count - 1);
      setError('');
    } else {
      setError(`Minimo de productos es ${initial}`);
    }
  };

  return (
    <div className="col-sm-3">
        <div className="count-control">

            <button className="btn-general btn btn-primary btn-minus btn-control" onClick={minusCount}>-</button>
            <span>{count}</span>
            <button className="btn-general btn btn-primary btn-plus btn-control" onClick={plusCount}>+</button>
        </div>
      <div>
        <button className="btn-general btn btn-primary add-to-cart-btn">Agregar al Carrito</button>
      </div>
      {error && <p className="alerta-error alert alert-danger"><ExclamationOctagonFill/><span>{error}</span></p>}
    </div>
  );
}

export default ItemCount;
