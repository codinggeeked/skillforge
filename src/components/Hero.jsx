import React from 'react';

const Hero = () => {
  return (
    <section className='text-white bg-black h-screen'>
      <div className='max-w-[800px] mt-[-96px] w-full h-full mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#cc9900] font-bold p-2'>
          EMPOWERING GROWTH THROUGH EDUCATION
        </p>
        <div className='flex flex-col justify-center items-center space-y-4'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Join Us to Develop Skills in
          </p>
          <p className='md:text-3xl sm:text-2xl text-lg font-medium md:pl-4 pl-2 text-[#cc9900] typewriter'>
            PROGRAMMING, RESEARCH & PERSONAL DEVELOPMENT 
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 mt-8'>
          Discover your potential through hands-on learning and mentorship.
        </p>
        <a href="https://chat.whatsapp.com/EYJEIN1ay2yBV58F6fTO3V" target="_blank" rel="noopener noreferrer">
          <button className='bg-[#cc9900] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
            Join On WhatsApp
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
