import { Link } from 'react-router-dom';
import './Item.css';
function Item({ item }) {
  const url = `/item/${item.id}`;
  return (
    <div className="col-sm-4 col-md-3 mb-4">
      <div className="card text-center h-100 shadow">
        <div className="img-container">
          <img
            src={item.pictureUrl}
            className="card-img-top img-fluid img-product"
            alt={item.title}
          />
        </div>
        <div className="card-body p-4">
          <h4 className="card-title fs-6">{item.title}</h4>
          <p className="card-text">$ {item.price}</p>
          <Link className="btn btn-primary btn-general" to={url}>
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
