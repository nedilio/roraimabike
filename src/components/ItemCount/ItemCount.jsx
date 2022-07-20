import { useState } from "react";
import Button from "../Button/Button";

function ItemCount({ initial, stock, quantity, onAddToCart }) {
  const [count, setCount] = useState(initial);
  const [error, setError] = useState("");

  function handleAddToCart() {
    onAddToCart(count);
  }

  const plusCount = () => {
    if (count + quantity < stock) {
      setCount(count + 1);
      setError("");
    } else {
      setError(`Se ha alcanzado el máximo stock (${stock})`);
    }
  };
  const minusCount = () => {
    if (count > initial) {
      setCount(count - 1);
      setError("");
    } else {
      setError(`El mínimo de productos es ${initial}`);
    }
  };

  return (
    <div>
      <div className="mt-4 flex items-center justify-center">
        <Button
          onClick={minusCount}
          color="bg-red-500 hover:bg-red-300 text-white"
          className="px-2 py-2 mr-3"
        >
          -
        </Button>
        <span>{count}</span>
        <Button
          onClick={plusCount}
          color="bg-green-500 hover:bg-green-300 text-white"
          className="px-2 py-2 ml-3"
        >
          +
        </Button>
      </div>
      {error && (
        <div
          className="p-4 my-4 text-sm font-medium text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          {error}
        </div>
      )}
      <div className="mt-5 text-center ">
        <Button onClick={handleAddToCart}>Agregar al Carrito</Button>
      </div>
    </div>
  );
}

export default ItemCount;
