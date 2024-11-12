import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='text-3xl font-bold text-[#cc9900]'>SF.</h1>
      <ul className='hidden md:flex items-center'>
        {['Home', 'About', 'Skills Lab', 'Contact'].map((item, index) => (
          <li key={index} className='p-4'>
            <Link 
              to={item.toLowerCase().replace(' ', '')} // Maps to IDs in App.js
              smooth={true} 
              duration={500} 
              offset={-70} 
              className='cursor-pointer text-white hover:text-[#cc9900] transition duration-300 no-underline'
            >
              {item}
            </Link>
          </li>
        ))}
        <li>
          <button className='ml-4 bg-[#cc9900] text-black rounded-md font-medium px-6 py-2'>
            Register
          </button>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 transform ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
        <h1 className='text-3xl font-bold text-[#cc9900] m-4'>SKILL FORGE.</h1>
        {['Home', 'About', 'Skills Lab', 'Contact'].map((item, index) => (
          <li key={index} className='p-4 border-b border-gray-600'>
            <Link 
              onClick={handleNav} 
              to={item.toLowerCase().replace(' ', '')} 
              smooth={true} 
              duration={500} 
              offset={-70} 
              className='cursor-pointer text-white no-underline'
            >
              {item}
            </Link>
          </li>
        ))}
        <li className='p-4'>
          <button className='bg-[#cc9900] text-black rounded-md font-medium w-full py-3'>
            Register
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
