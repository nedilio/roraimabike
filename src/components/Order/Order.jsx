import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOrder } from "../../services/firestore";
import Loader from "../Loader/Loader";

const Order = () => {
  const [order, setOrder] = useState(undefined);
  const orderId = useParams().id;

  //   const fecha =
  useEffect(() => {
    getOrder(orderId).then((res) => {
      setOrder(res);
    });
  }, [orderId]);

  return (
    <div className="container mx-auto py-4">
      {!order ? (
        <Loader />
      ) : (
        <div>
          <h3>
            Hola {order.buyer.name} tu orden es la: {order.id}
          </h3>
          <ul className="mt-4">
            {order.items.map((producto) => (
              <li
                key={producto.id}
                className="mb-3 border-b-slate-400 border-b-2"
              >
                <p>
                  {producto.title} <span>Cantidad: {producto.quantity}</span>
                </p>
              </li>
            ))}
          </ul>
          <p>total: {order.total}</p>
          <p>
            Creada:
            {new Intl.DateTimeFormat("es-CL", {
              dateStyle: "full",
              timeStyle: "medium",
            }).format(order.date.seconds * 1000)}
          </p>
          <Link to="/" className="underline text-orange-500">
            Volver al Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Order;
