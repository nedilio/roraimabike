import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import useCurrency from "../../hooks/useCurrency";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";

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

  const onAddToCart = (quantity) => {
    addItem(item, quantity);
    setQuantity(quantity);
    setIsAdded(true);
  };

  return (
    <>
      <div className="w-11/12 md:w-4/5 mx-auto shadow-md rounded mb-4 relative">
        <div className="sm:flex p-6">
          <div className="flex-none w-72 h-72 sm:w-56 mb-10 relative z-10 before:absolute before:top-2 before:left-2 before:w-full before:h-72 sm:before:h-56 before:bg-orange-500 mx-auto">
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
              <div className="relative text-lg text-white">
                {useCurrency(item.price)}
              </div>
              <div className="relative uppercase text-orange-500 ml-3">
                {item.stock > 0 ? `En Stock: ${item.stock}` : "Sin Stock"}
              </div>
            </div>
            <div className="text-md sm:text-sm leading-6 text-slate-500">
              <p className="my-4">Categoría: {item.category}</p>
              <p>{item.description}</p>
              {item.stock !== 0 && (
                <p className="text-slate-800 mt-4">
                  Tienes {quantity} de este producto en el carrito
                </p>
              )}
            </div>

            <div className="w-44 sm:w-1/2 lg:w-1/3 mb-4 mx-auto md:mx-0 text-sm text-center font-medium">
              {isAdded ? (
                <div className="mt-4">
                  <Link to="/cart">
                    <Button>Ir Al Carrito</Button>
                  </Link>
                </div>
              ) : (
                item.stock !== 0 && (
                  <ItemCount
                    stock={item.stock}
                    initial={item.initial}
                    quantity={quantity}
                    onAddToCart={onAddToCart}
                  ></ItemCount>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetails;
