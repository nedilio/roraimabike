import { CartContext } from "../../context/CartContext";
import { createOrder, updateStock } from "../../services/firestore";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Button from "../Button/Button";
import CartForm from "./CartForm";
import Loader from "../Loader/Loader";
import CartItem from "./CartItem";
import useCurrency from "../../hooks/useCurrency";

const Cart = () => {
  const { cart, cartTotal, clear } = useContext(CartContext);
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
    const regexName = /^[\w'\-,.][^0-9_!¡?÷?¿/+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regexName.test(name) && phone !== "" && regexEmail.test(email)) {
      return false;
    } else {
      return true;
    }
  };

  const total = useCurrency(cartTotal);

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
          <p className="text-slate-500 mb-4">No hay Productos en el Carrito</p>
          <Link className="underline text-orange-500 text-center" to="/">
            Encuentra productos para agregar al carrito
          </Link>
        </div>
      ) : (
        <div className="shadow p-6 lg:flex lg:justify-between">
          <div className="cart-items flex-1 px-4 mb-6">
            <ul className="divide-y divide-slate-300 ">
              {cart.map((producto) => {
                return <CartItem producto={producto} key={producto.id} />;
              })}
            </ul>
            <div className="mb-4 justify-end text-center">
              <p className="inline-block float-right font-bold text-xl mb-4">
                Total: {total}
              </p>
              <Button
                onClick={clear}
                color="bg-red-500 hover:bg-red-300 text-white"
              >
                Vaciar Carrito
              </Button>
            </div>
          </div>

          <div className="flex-1">
            <div className="w-full px-4">
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
