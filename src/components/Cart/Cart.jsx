import { useContext } from "react";
import { Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './Cart.scss';

const Cart = () => {
  const { cart, cartTotal, removeItem, clear } = useContext(CartContext);
  return (
    <section className="container mt-4 mb-4">
      {cart.length === 0 ? (
        <div>
          <p>No hay Productos en el Carrito</p>
          <Link className="btn-general btn btn-primary" to="/">Encuentra productos para agregar al carrito</Link>
        </div>
      ) : (
        <div className="row mt-4 mb-4">
          <div className="col-6">
            {cart.map((producto) => {
              return (
                <div className="row bg-body rounded shadow-sm pt-4 pb-4 mb-4" key={producto.id}>
                  <div className="col-2">
                    <Link to={`/item/${producto.id}`}>
                      <img
                        className="img-fluid"
                        src={producto.pictureUrl}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="col-8">
                    <h3 className="fs-4">{producto.title}</h3>
                    <p>Total productos: {producto.quantity}</p>
                    <p>Precio Unidad: {producto.price}</p>
                  </div>
                  <div className="col-2">
                    <button
                      className="btn-general btn btn-primary"
                      onClick={() => removeItem(producto.id)}
                    >
                      <Trash />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-6 resumen text-center">
            <p>Total: $ {cartTotal}</p>
            <button className="btn-general btn btn-primary" onClick={clear}>
              Vaciar Carrito
            </button>
            <button className="btn-general btn btn-primary">Finalizar Compra</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
