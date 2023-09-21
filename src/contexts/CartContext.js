import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  // Load cart data from localStorage when the component mounts
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [cartCount, setCartCount] = useState(0);

  // Function to update cart count
  const updateCartCount = () => {
    const totalCount = cart.reduce((total, item) => total + item.amount, 0);
    setCartCount(totalCount);
  };

  useEffect(() => {
    // Save cart data to localStorage whenever the cart changes
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }, [cart]);

  const addToCart = (item, id) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === id);
  
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].amount += 1;
      setCart(updatedCart);
    } else {
      const newItem = {
        ...item,
        amount: 1,
      };
      setCart([...cart, newItem]);
    }
  };
  
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
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