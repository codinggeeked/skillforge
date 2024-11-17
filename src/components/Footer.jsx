import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#cc9900]'>SKILL FORGE.</h1>
        <p className='py-4'>
          Prioritizing value, this club excels in providing innovative educational tools, 
          actionable insights, and tailored learning solutions to enhance academic performance 
          and foster personal growth.
        </p>
        {/* <div className='flex justify-between md:w-[75%] my-6'>
          <a href="https://www.facebook.com/skillforge" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare size={30} />
          </a>
          <a href="https://www.instagram.com/skillforge" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com/skillforge" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare size={30} />
          </a>
          <a href="https://www.linkedin.com/company/skillforge" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://chat.whatsapp.com/EYJEIN1ay2yBV58F6fTO3V" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} />
          </a>
        </div> */}
      </div>
      <div className='lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-8 mt-6'>
        <div className='flex flex-col items-start'>
          <h6 className='font-medium text-gray-400 pb-2'>Structure</h6>
          <ul className='pl-1'>
            <li className='py-1 text-sm'>
              <a href="javascript:void(0)" className='no-underline text-gray-300'>Members</a>
            </li>
            <li className='py-1 text-sm'>
              <a href="javascript:void(0)" className='no-underline text-gray-300'>Alumni</a>
            </li>
            <li className='py-1 text-sm'>
              <a href="javascript:void(0)" className='no-underline text-gray-300'>Patrons</a>
            </li>
            <li className='py-1 text-sm'>
              <a href="javascript:void(0)" className='no-underline text-gray-300'>Founders</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-start'>
          <h6 className='font-medium text-gray-400 pb-2'>Support</h6>
          <ul className='pl-1'>
            <li className='py-1 text-sm'>
              <a href="javascript:void(0)" className='no-underline text-gray-300'>Documentation</a>
            </li>
            <li className='py-1 text-sm'>
              <a href="javascript:void(0)" className='no-underline text-gray-300'>Guides</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-start'>
          <h6 className='font-medium text-gray-400 pb-2'>Club</h6>
          <ul className='pl-1'>
            <li className='py-1 text-sm'>
              <a href="javascript:void(0)" className='no-underline text-gray-300'>About</a>
            </li>
            <li className='py-1 text-sm'>
              <a href="javascript:void(0)" className='no-underline text-gray-300'>Blog</a>
            </li>
            <li className='py-1 text-sm'>
              <a href="javascript:void(0)" className='no-underline text-gray-300'>Events</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-start'>
          <h6 className='font-medium text-gray-400 pb-2'>Legal</h6>
          <ul className='pl-1'>
            <li className='py-1 text-sm'>
              <a href="javascript:void(0)" className='no-underline text-gray-300'>Policy</a>
            </li>
            <li className='py-1 text-sm'>
              <a href="javascript:void(0)" className='no-underline text-gray-300'>Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
