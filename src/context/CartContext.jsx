import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  let cartCount = cart
    .map((item) => item.quantity)
    .reduce((sum, value) => sum + value, 0);
  let cartTotal = cart
    .map((item) => item.quantity * item.price)
    .reduce((sum, value) => sum + value, 0);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) => {
          if (prod.id !== item.id) {
            return prod;
          } else {
            // return { ...prod, quantity };
            return { ...prod, quantity: prod.quantity + quantity };
          }
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const isInCart = (id) => {
    return cart.find((item) => item.id === id);
  };

  const clear = () => {
    setCart([]);
  };

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
