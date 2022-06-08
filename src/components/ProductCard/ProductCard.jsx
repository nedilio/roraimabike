import './ProductCard.css';
function ProductCard() {
  return (
    <div className="col-3">
      <div className="card text-end">
        <img
          src="https://dummyimage.com/420x260"
          className="card-img-top"
          alt="product-name"
        />
        <div className="card-body">
          <h4 className="card-title">Esto es un Producto</h4>
          <h5 className="fs-6">Categoria</h5>
          <p className="card-text">
            $ 5.000
          </p>
          <a href="/#" className="btn btn-primary ver-btn">
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
