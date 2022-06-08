import { useState } from 'react';
import { DashLg, ExclamationOctagonFill, PlusLg } from 'react-bootstrap-icons';
import './ItemCount.css';

function ItemCount({ initial, stock }) {
  const [count, setCount] = useState(initial);
  const [error, setError] = useState('');

  const plusCount = () => {
    if (count < stock) {
      setCount(count + 1);
      setError('');
    } else {
      setError(`Se ha alcanzado el máximo stock (${stock})`);
    }
  };
  const minusCount = () => {
    if (count > initial) {
      setCount(count - 1);
      setError('');
    } else {
      setError(`El mínimo de productos es ${initial}`);
    }
  };

  return (
    <div className="col-sm-3">
      <div className="count-control">
        <button
          className="btn-general btn btn-primary btn-minus btn-control"
          onClick={minusCount}
        >
          <DashLg />
        </button>
        <span>{count}</span>
        <button
          className="btn-general btn btn-primary btn-plus btn-control"
          onClick={plusCount}
        >
          <PlusLg />
        </button>
      </div>
      <div>
        <button className="btn-general btn btn-primary add-to-cart-btn">
          Agregar al Carrito
        </button>
      </div>
      {error && (
        <div className="alerta-error alert alert-danger">
          <ExclamationOctagonFill size={24} />
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default ItemCount;
