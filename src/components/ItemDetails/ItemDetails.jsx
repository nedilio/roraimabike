import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetails.css";

function ItemDetails({ item }) {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const producto = cart.find((producto) => producto.id === item.id);
    if (producto) {
      setQuantity(producto.quantity);
    }
  }, []);

  // Funcion que dice cuantos items de este producto se agregaran al carrito (state)
  const onAddToCart = (quantity) => {
    addItem(item, quantity);
    setQuantity(quantity);
    setIsAdded(true);
  };

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
        <p>Tienes {quantity} de este producto en el carrito</p>

        {isAdded ? (
          <div>
            <Link to="/cart">
              <button className="btn-general btn btn-primary add-to-cart-btn">
                Ir al Carrito
              </button>
            </Link>
          </div>
        ) : (
          <ItemCount
            stock={item.stock}
            initial={item.initial}
            quantity={quantity}
            onAddToCart={onAddToCart}
          ></ItemCount>
        )}
      </div>
    </div>
  );
}

export default ItemDetails;
