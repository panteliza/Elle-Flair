import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Add item to cart
  const addToCart = (item, id) => {
    const existingItem = cart.find((cartItem) => cartItem.id === id);
    if (existingItem) {
      // Item already exists in the cart, update the quantity
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
      // Item doesn't exist in the cart, add it to the cart
      const newItem = {
        ...item,
        amount: 1,
      };
      setCart([...cart, newItem]);
    }
    setCartCount(cartCount + 1);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    setCartCount(cartCount - 1);
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
    setCartCount(0);
  };

  return (
    <CartContext.Provider
      value={{ cart, cartCount, addToCart, removeFromCart, clearCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
