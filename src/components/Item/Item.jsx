import "./Item.css";
function Item({item}) {
  return (
    <div className="col-sm-3">
      <div className="card text-center mb-4">
        <div className="img-container">
          <img
            src={item.pictureUrl}
            className="card-img-top img-fluid img-product"
            alt={item.title}
          />
        </div>
        <div className="card-body">
          <h4 className="card-title fs-4">{item.title}</h4>
          <p className="card-text">$ {item.price}</p>
          <a href="/#" className="btn btn-primary ver-btn">
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
}

export default Item;
