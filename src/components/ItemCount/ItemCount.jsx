import { useState } from "react";
import Button from "../Button/Button";

function ItemCount({ initial, stock, quantity, onAddToCart }) {
  console.log(quantity);
  const [count, setCount] = useState(initial);
  console.log(count);
  const [error, setError] = useState("");

  // Recibimos la funcion que actualiza el estado y la ejecutamos al hacer click en agregar al carrito
  function handleAddToCart() {
    onAddToCart(count);
  }

  const plusCount = () => {
    if (count < stock) {
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
    <div className="">
      <div className="mt-4 flex items-center justify-between">
        <Button onClick={minusCount}>-</Button>
        <span>{count}</span>
        <Button onClick={plusCount}>+</Button>
      </div>
      {error && (
        <div class="p-4 my-4 text-sm font-medium text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
        {error}
      </div>
      )}
      <div className="mt-5 text-center ">
        <Button onClick={handleAddToCart}>
          {quantity > 0 ? "Actualizar Carrito" : "Agregar al Carrito"}
        </Button>
      </div>

    </div>
  );
}

export default ItemCount;
