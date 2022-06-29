import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider(props) {
  // Estate de productos en el carrito
  const [cart, setCart] = useState([]);

  //   Cantidad de productos en el carrito
  let cartCount = cart
    .map((item) => item.quantity)
    .reduce((sum, value) => sum + value, 0);
  let cartTotal = cart
    .map((item) => item.quantity*item.price)
    .reduce((sum, value) => sum + value, 0);

  // Funcion que agrega item al carrito o actualiza la cantidad si ya se encuentra en el carrito
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) => {
          if (prod.id !== item.id) {
            return prod;
          } else {
            return { ...prod, quantity };
          }
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  //   Funcion que verifica si un item se encuentra en el carrito
  const isInCart = (id) => {
    return cart.find((item) => item.id === id);
  };

  //   Funcion que remueve todos los productos del carrito
  const clear = () => {
    setCart([]);
  };

  //   Funcion que remueve un producto del carrito por id
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, cartCount, cartTotal, addItem, clear, removeItem }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
