import { useContext } from "react";
import { Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Button from "../Button/Button";

const Cart = () => {
  const { cart, cartTotal, removeItem, clear } = useContext(CartContext);
  return (
    <section className="container my-4 mx-auto px-4">
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
            className="divide-y divide-slate-700 "
          >
            {cart.map((producto) => {
              return (
                <li className="py-3 sm:py-4" key={producto.id}>
                  <div className="flex items-center flex-row sm:flex-row space-x-4">
                    <div className="flex-shrink-0">
                      <Link to={`/item/${producto.id}`}>
                        <img
                          className="w-24 sm:w-32  rounded"
                          src={producto.pictureUrl}
                          alt={producto.title}
                        />
                      </Link>
                    </div>
                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <p className="sm:text-xl font-medium text-slate-900">
                        {producto.title}
                      </p>
                      <p className="text-sm text-slate-500 ">
                        Precio: $ {producto.price}
                      </p>
                      <p className="text-sm text-slate-500 ">
                        Cantidad: {producto.quantity}
                      </p>
                      <p className="text-sm text-slate-500 ">
                        Subtotal: ${producto.price * producto.quantity}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base text-slate-900">
                      <Button
                        onClick={() => removeItem(producto.id)}
                        color="bg-red-500 hover:bg-red-300"
                        className="text-lg"
                      >
                        <Trash size={22} />
                      </Button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center flex-col">
            <div className="mb-4">
              <p>Total: $ {cartTotal}</p>
            </div>
            <div className="text-center">
              <Button className="mx-4 mb-4">Finalizar Compra</Button>
              <Button
                onClick={clear}
                color="bg-red-500 hover:bg-red-300 text-white"
              >
                Vaciar Carrito
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
