



import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const { removeFromCart, updateCartItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(amount);
  const totalPrice = price * quantity;

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateCartItem( quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    updateCartItem(quantity + 1);
  };

  const handleRemoveItem = () => {
    removeFromCart(id);
  };

  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="flex-grow">
          <div className="flex justify-between items-center">
            <Link to={`/product/${id}`}>{title}</Link>
            <IoMdClose
              className="cursor-pointer text-[40px]"
              onClick={handleRemoveItem}
            />
          </div>
          <div>Price: ${price}</div>
          <div className="flex items-center">
            <span></span>
            <div className="flex items-center gap-x-2 px-2 border bg-green-500 border-gray-500">
              <AiOutlineMinus
                className="cursor-pointer bg-yellow-400"
                onClick={handleDecrease}
              />
              <span>{quantity}</span>
              <AiOutlinePlus
                className="cursor-pointer  bg-yellow-400"
                onClick={handleIncrease}
              />
            </div>
          </div>
          <div>Total: ${totalPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;