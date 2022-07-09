import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOrder } from "../../services/firestore";
import Loader from "../Loader/Loader";

const Order = () => {
  const [order, setOrder] = useState(undefined);
  const orderId = useParams().id;

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
        <div className="shadow p-6 rounded-md">
          <div>
            <h2 className="text-orange-500 font-bold text-xl sm:text-3xl">
              Orden {order.id}
            </h2>
          </div>

          <div className="my-4">
            <h3>Datos de Usuario</h3>
            <p>Nombre: {order.buyer.name}</p>
            <p>Telefono: {order.buyer.phone}</p>
          </div>
          <table className="table-auto">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((producto) => (
                <tr
                  key={producto.id}
                  className="mb-3 border-b-slate-400 border-b-2"
                >
                  <td>{producto.title}</td>
                  <td className="text-center">{producto.quantity}</td>
                  <td className="text-center">
                    {producto.price * producto.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p>Total: {order.total}</p>
          <p className="mb-4">
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
