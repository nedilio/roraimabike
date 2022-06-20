import './ItemDetails.css';

function ItemDetails({item}) {
  return (
    <div className="row item-details p-4 rounded-5 shadow">
        <div className="col-md-4">
            <img src={item.pictureUrl} alt="" className="img-fluid mb-4" />
        </div>
        <div className="col-md-8">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h4 className="fs-6">categoría: {item.category}</h4>
            <h4 className="price">$ {item.price}</h4>
            <button className="btn btn-general">Agregar al Carrito</button>
        </div>
    </div>
  )
}

export default ItemDetails