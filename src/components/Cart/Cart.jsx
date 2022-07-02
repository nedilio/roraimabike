import { useContext } from "react";
import { Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Button from "../Button/Button";

const Cart = () => {
  const { cart, cartTotal, removeItem, clear } = useContext(CartContext);
  return (
    <section className="container my-4 mx-auto">
      {cart.length === 0 ? (
        <div>
          <p className="text-slate-500">No hay Productos en el Carrito</p>
          <Link className="underline text-orange-500 text-center" to="/">
            Encuentra productos para agregar al carrito
          </Link>
        </div>
      ) : (
        <div className="shadow p-6">
          <ul
            role="list"
            className="divide-y divide-slate-200 dark:divide-slate-700"
          >
            {cart.map((producto) => {
              console.log(producto);
              return (
                <li className="py-3 sm:py-4" key={producto.id}>
                  <div className="flex items-center flex-col sm:flex-row space-x-4">
                    <div className="flex-shrink-0">
                      <Link to={`/item/${producto.id}`}>
                        <img
                          className="w-32 h-32 rounded"
                          src={producto.pictureUrl}
                          alt={producto.title}
                        />
                      </Link>
                    </div>
                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <p className="text-xl font-medium text-slate-900">
                        {producto.title}
                      </p>
                      <p className="text-sm text-slate-500 ">
                        Precio unidad: $ {producto.price}
                      </p>
                      <p className="text-sm text-slate-500 ">
                        Cantidad: {producto.quantity}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base text-slate-900">
                      ${producto.price * producto.quantity}
                    </div>
                    <div className="inline-flex items-center text-base text-slate-900">
                      <Button
                      onClick={() => removeItem(producto.id)}
                      >
                      <Trash />

                      </Button>
                
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="text-center">
            <p className="mb-4">Total: $ {cartTotal}</p>
            <Button className="block" onClick={clear}>
              Vaciar Carrito
            </Button>
            <Button>
              Finalizar Compra
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
