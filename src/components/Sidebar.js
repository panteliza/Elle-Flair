import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, cartCount } = useContext(CartContext);

  const handleArrowClick = () => {
    handleClose(); // Close the sidebar when arrow is clicked
  };

  // Calculate grand total
  const grandTotal = cart.reduce((total, item) => {
    return Number(total + item.price * item.quantity) ;

  }, 0);


  const handleClearCart = () => {
    clearCart();
  };

  return (
    <>
      {isOpen && (
        <div
          className={`${
            isOpen ? 'right-0' : '-right-full'
          }w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
        >
          <div className="flex items-center justify-between py-6 border-b">
            <div className="uppercase text-sm font-semibold">
              Shopping Bag ({cartCount})
            </div>
            <div
              onClick={handleArrowClick}
              className="cursor-pointer w-8 h-8 flex justify-center items-center"
            >
              <IoMdArrowForward className="text-2xl" />
            </div>
          </div>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="flex justify-between">
            <div className="flex py-4">
              <div>Grand Total:</div>
              <div>${grandTotal}</div>
            </div>
            <div className="flex items-center justify-end">
              <AiOutlineDelete
                className="text-red-700 text-lg cursor-pointer"
                onClick={handleClearCart}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
