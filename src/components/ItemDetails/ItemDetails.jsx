function ItemDetails({item}) {
  return (
    <div className="row item-details">
        <div className="col-6">
            <img src={item.pictureUrl} alt="" className="img-fluid" />
        </div>
        <div className="col-6">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h4>{item.category}</h4>
            <h4 className="price">$ {item.price}</h4>
            <button className="btn btn-general">Agregar al Carrito</button>

        </div>
    </div>
  )
}

export default ItemDetails