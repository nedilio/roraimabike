import { useContext } from "react";
import { Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import useCurrency from "../../hooks/useCurrency";
import Button from "../Button/Button";

const CartItem = ({ producto }) => {
  const { removeItem } = useContext(CartContext);

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
            <p className="sm:text-xl font-medium text-orange-500">
              {producto.title}
            </p>
          </Link>
          <p className="text-sm text-slate-500 ">
            Precio: {useCurrency(producto.price)}
          </p>

          <p className="text-md text-slate-500 font-bold">
            Subtotal: {useCurrency(producto.price * producto.quantity)}
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
};

export default CartItem;
