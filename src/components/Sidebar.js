import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, cartCount } = useContext(CartContext);

  const handleArrowClick = () => {
    handleClose(); // Close the sidebar when the arrow is clicked
  };

  // Calculate grand total
  const grandTotal = cart.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0).toFixed(2);

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <>
      {isOpen && (
        <div
          className={`${
            isOpen ? 'right-0' : '-right-full'
          }w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]  flex flex-col`}
        >
          <div className="flex items-center justify-between py-6 border-b ">
            
            <div
              onClick={handleArrowClick}
              className="cursor-pointer w-8 h-8 flex justify-center items-center"
            >
              <IoMdArrowBack className="text-2xl" />
            </div>
            <div className="uppercase text-sm font-semibold">
              Shopping Bag ({cartCount})
            </div>

          </div>
          <div className="cart-items" style={{ maxHeight: '350px', overflowY: 'auto' }}>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className='mt-auto mb-3 flex flex-col gap-2'>
            <div className='flex py-4 justify-between'>
              <div className="flex py-4">
                <div className='font-semibold'>Grand Total: </div>
                <div className='font-semibold'>${grandTotal}</div>
              </div>
              <AiOutlineDelete
                className="text-red-700 text-lg cursor-pointer"
                onClick={handleClearCart}
              />
            </div>

            <button className='text-center w-full bg-gray-400 py-2'>View Cart</button>
            <button className='text-center w-full bg-black text-white py-2'>Checkout</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
