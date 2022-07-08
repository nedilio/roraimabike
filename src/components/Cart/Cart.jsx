import { CartContext } from "../../context/CartContext";
import { createOrder, updateStock } from "../../services/firestore";
import { Link, useNavigate } from "react-router-dom";
import { Trash } from "react-bootstrap-icons";
import { useContext, useState } from "react";
import Button from "../Button/Button";
import CartForm from "./CartForm";
import Loader from "../Loader/Loader";

const Cart = () => {
  const { cart, cartTotal, removeItem, clear } = useContext(CartContext);
  const [order, setOrder] = useState({
    buyer: { name: "", phone: "", email: "" },
    items: cart,
    total: cartTotal,
  });
  const [creatingOrder, setCreatingOrder] = useState(false);

  let navigate = useNavigate();

  const handleOnChange = (event) => {
    const input = event.target["name"];
    const value = event.target.value;
    setOrder({ ...order, buyer: { ...order.buyer, [input]: value } });
  };

  const handleBuyOrder = (order) => {
    setCreatingOrder(true);
    createOrder(order).then((res) => navigate(`/order/${res}`));
    // createOrder(order);
    updateStock(cart);
    clear();
  };

  const validateBuyerData = () => {
    const { name, phone, email } = order.buyer;
    if (name === "" || phone === "" || email === "") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <section className="container my-4 mx-auto px-4 relative">
      {creatingOrder && (
        <div className="absolute bg-slate-100 min-w-full flex items-center">
          <div className="relative min-w-full">
            <h3 className="text-xl absolute text-center min-w-full">
              Creando Orden...
            </h3>
            <Loader></Loader>
          </div>
        </div>
      )}
      {cart.length === 0 ? (
        <div>
          <p className="text-slate-500">No hay Productos en el Carrito</p>
          <Link className="underline text-orange-500 text-center" to="/">
            Encuentra productos para agregar al carrito
          </Link>
        </div>
      ) : (
        <div className="shadow p-6 lg:flex lg:justify-between">
          <div className="cart-items flex-1">
            <ul className="divide-y divide-slate-300 ">
              {cart.map((producto) => {
                return (
                  <li className="py-3 sm:py-4" key={producto.id}>
                    <div className="flex items-center flex-row sm:flex-row space-x-4">
                      <div className="flex-shrink-0 relative">
                        <span className="bg-orange-500 absolute -right-2 px-2 -top-2 text-white font-bold">
                          {producto.quantity}
                        </span>
                        <Link to={`/item/${producto.id}`}>
                          <img
                            className="w-24 sm:w-32  rounded"
                            src={producto.pictureUrl}
                            alt={producto.title}
                          />
                        </Link>
                      </div>
                      <div className="flex-1 min-w-0 text-center sm:text-left">
                        <Link to={`/item/${producto.id}`}>
                          <p className="sm:text-xl font-medium text-slate-900">
                            {producto.title}
                          </p>
                        </Link>
                        <p className="text-sm text-slate-500 ">
                          Precio: $ {producto.price}
                        </p>

                        <p className="text-md text-slate-500 font-bold">
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
            <div className="mb-4 justify-end">
              <Button
                onClick={clear}
                color="bg-red-500 hover:bg-red-300 text-white"
              >
                Vaciar Carrito
              </Button>
              <p className="inline-block float-right font-bold text-xl">
                Total: $ {cartTotal}
              </p>
            </div>
          </div>

          <div className="flex items-center flex-col flex-1">
            <div>
              <CartForm
                handleBuyOrder={() => handleBuyOrder(order)}
                handleOnChange={handleOnChange}
                validateBuyerData={validateBuyerData}
              ></CartForm>
            </div>
            <div className="text-center"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
