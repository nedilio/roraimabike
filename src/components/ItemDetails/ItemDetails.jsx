import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
// import "./ItemDetails.css";

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
    // eslint-disable-next-line
  }, []);

  // Funcion que dice cuantos items de este producto se agregaran al carrito (state)
  const onAddToCart = (quantity) => {
    addItem(item, quantity);
    setQuantity(quantity);
    setIsAdded(true);
  };
  return (
    <>
      <div className="w-11/12 md:w-4/5 mx-auto shadow-md rounded">
        <div className="sm:flex p-6">
          <div className="flex-none w-80 h-80 sm:w-56 mb-10 relative z-10 before:absolute before:top-2 before:left-2 before:w-full before:h-80 sm:before:h-56 before:bg-orange-400">
            <img
              src={item.pictureUrl}
              alt=""
              className="absolute z-10 inset-0 w-full h-auto object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="md:flex-auto pl-6">
            <div className="relative flex flex-wrap items-baseline pb-6 before:bg-slate-800 before:absolute before:-top-6 before:bottom-0 before:-left-6 sm:before:-left-10 before:-right-6">
              <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                {item.title}
              </h1>
              <div className="relative text-lg text-white">${item.price}</div>
              <div className="relative uppercase text-orange-400 ml-3">
                {item.stock > 0 ? `En Stock: ${item.stock}` : "Sin Stock"}
              </div>
            </div>
            <div className="text-md sm:text-sm leading-6 text-slate-500">
              <p>
                Categoría: {item.category}
              </p>
              <p>{item.description}</p>
              <p className="text-slate-800">Tienes {quantity} de este producto en el carrito</p>
            </div>

            <div className="w-44 sm:w-1/2 lg:w-1/3 mb-4 mx-auto md:mx-0 text-sm text-center font-medium">
              {isAdded ? (
                <div>
                  <Link to="/cart">
                    <Button>Ir Al Carrito</Button>
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

              {/* <button className="flex-none flex items-center justify-center w-12 h-12 text-black" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* <h1>bootstrap</h1>
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
              <button className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-orange-400 text-black">
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
    </div> */}
    </>
  );
}

export default ItemDetails;
