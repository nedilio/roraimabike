import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetails.css";

function ItemDetails({ item }) {
  const [cart, setCart] = useState(0);

  // Funcion que dice cuantos items de este producto se agregaran al carrito (state)
  function onAddToCart(cantidad) {
    setCart(cantidad);
  }

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
        <p>En el carrito: {cart}</p>
        {cart === 0 ? (
          <ItemCount
            stock={item.stock}
            initial={item.initial}
            onAddToCart={onAddToCart}
          ></ItemCount>
        ) : (
          <Link to="/cart">
            <button className="btn-general btn btn-primary add-to-cart-btn">
              Ir al Carrito
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ItemDetails;
