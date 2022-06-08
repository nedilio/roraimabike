import "./Item.css";
function Item(props) {
  const producto = props.producto;
  console.log(producto);
  return (
    <div className="col-sm-3">
      <div className="card text-center mb-4">
        <div className="img-container mt-2 mb-2">
          <img
            src={producto.pictureUrl}
            className="card-img-top img-fluid img-product"
            alt={producto.title}
          />
        </div>
        <div className="card-body">
          <h4 className="card-title">{producto.title}</h4>
          <h5 className="fs-6">{producto.category}</h5>
          <p className="card-text">$ {producto.price}</p>
          <a href="/#" className="btn btn-primary ver-btn">
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
}

export default Item;
