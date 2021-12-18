import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext({
  cart: [],
  cartLength: 0,
  addItemHandler: (item) => {},
  incrementItem: (itemId) => {},
  decrementItem: (itemId) => {},
  placeOrder: () => {},
});

export const CartContextProvider = (props) => {
  const intialItems = JSON.parse(window.localStorage.getItem("cart") || "[]");

  const [cart, setCart] = useState(intialItems);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItemHandler = (item) => {
    setCart((prev) => {
      const isAvailable = prev.some((cartItem) => cartItem.id === item.id);

      if (isAvailable) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, qty: parseInt(cartItem.qty) + parseInt(item.qty) }
            : { ...cartItem }
        );
      }
      return [...prev, item];
    });
    console.log(cart);
  };
  const incrementQtyHandler = (itemId) => {
    setCart((prev) => {
      return prev.map((food) =>
        food.id === itemId
          ? { ...food, qty: parseInt(food.qty) + 1 }
          : { ...food }
      );
    });
  };
  const decrementQtyHandler = (itemId) => {
    setCart((prev) => {
      return prev.map((food) =>
        food.id === itemId
          ? {
              ...food,
              qty: parseInt(food.qty) >= 0 ? parseInt(food.qty) - 1 : food.qty,
            }
          : { ...food }
      );
    });
    setCart((prev) => {
      return prev.filter((food) => food.qty > 0);
    });
  };

  const placeOrderHandler = async () => {
    if (cart.length > 0) {
      await axios.post("http://localhost:8000/placeorder", { cart });
      setCart(() => {
        return [];
      });
    }
  };

  const context = {
    cart: cart,
    cartLength: cart.length,
    addItemHandler: addItemHandler,
    incrementItem: incrementQtyHandler,
    decrementItem: decrementQtyHandler,
    placeOrder: placeOrderHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
