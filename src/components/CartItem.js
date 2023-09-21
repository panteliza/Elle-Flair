import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const { removeFromCart, updateCartItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(amount);
  const [totalPrice, setTotalPrice] = useState((price * quantity).toFixed(2));

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateCartItem(id, newQuantity);
      setTotalPrice((price * newQuantity).toFixed(2));
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCartItem(id, newQuantity);
    setTotalPrice((price * newQuantity).toFixed(2));
  };

  const handleRemoveItem = () => {
    removeFromCart(id);
  };

  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4 ">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px] " src={image} alt="" />
        </Link>
        <div className="flex-grow">
          <div className="flex justify-between items-center ">
            <div className=' w-3/4'>
            <Link to={`/product/${id}`}>{title}</Link>
            </div>
            <IoMdClose
              className="cursor-pointer text-[20px] text-red-700" // Set a fixed size and color
              onClick={handleRemoveItem}
            />
          </div>
          <div>Price: ${price.toFixed(2)}</div>
          <div className="flex items-center">
            <div className="flex items-center gap-x-2 px-2 border bg-green-500 border-gray-500">
              <AiOutlineMinus
                className="cursor-pointer bg-yellow-400"
                onClick={handleDecrease}
              />
              <span>{quantity}</span>
              <AiOutlinePlus
                className="cursor-pointer bg-yellow-400"
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
