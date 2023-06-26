import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item, id) => {
    const existingItem = cart.find((cartItem) => cartItem.id === id);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            amount: cartItem.amount + 1,
          };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      const newItem = {
        ...item,
        amount: 1,
      };
      setCart([...cart, newItem]);
    }
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    setCartCount(cartCount - 1);
  };

  const updateCartItem = (id, quantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: quantity,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
    setCartCount(0);
  };

  return (
    <CartContext.Provider
      value={{ cart, cartCount, addToCart, removeFromCart, updateCartItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;


