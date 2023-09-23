import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { GiHanger } from 'react-icons/gi';
import { CartContext } from '../contexts/CartContext';

import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { cartCount } = useContext(CartContext);

  const handleBagClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-pink-200 fixed backdrop-blur-2xl w-full z-20 flex justify-between h-14 px-[70px] items-center">
        <Link to='/'>
        <GiHanger className="text-2xl" />
        </Link>
        <div onClick={handleBagClick} className="cursor-pointer flex relative">
          <div className="relative">
            <div className="absolute bg-red-500 w-4 h-4 flex items-center justify-center rounded-full">
              <span className="text-white ">{cartCount}</span>
            </div>
            <BsBag className="text-3xl w-10 h-10" viewBox="0 0 24 24" />
          </div>
        </div>
      </header>
     
    </>
  );
};

export default Header;