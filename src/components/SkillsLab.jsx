import React from 'react';
import { FaCode, FaChartBar, FaGraduationCap, FaUserTie } from 'react-icons/fa';
import { MdOutlinePeople, MdOutlineWorkOutline } from 'react-icons/md';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto text-center'>
        <h1 className='text-4xl font-bold text-[#cc9900] mb-12'>
          Skills Lab Initiatives
        </h1>
      </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-12'>
        
        {/* Programming & Software Development Skills */}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:w-[90%] mx-auto'>
          <FaCode className='text-[#cc9900] text-6xl mx-auto mt-[-3rem]' />
          <h2 className='text-2xl font-bold text-center py-8'>Programming & Software Development</h2>
          <p className='text-center text-xl font-medium'>
            Learn coding essentials and software development practices to build real-world applications and strengthen your technical skills.
          </p>
        </div>

        {/* Data Analysis & Research Skills */}
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 md:w-[90%] mx-auto'>
          <FaChartBar className='text-[#cc9900] text-6xl mx-auto mt-[-3rem]' />
          <h2 className='text-2xl font-bold text-center py-8'>Data Analysis & Research Skills</h2>
          <p className='text-center text-xl font-medium'>
            Gain insights into data analysis and research methodologies to empower data-driven decision-making and problem-solving.
          </p>
        </div>

        {/* Educational Technology & Learning Tools */}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:w-[90%] mx-auto'>
          <FaGraduationCap className='text-[#cc9900] text-6xl mx-auto mt-[-3rem]' />
          <h2 className='text-2xl font-bold text-center py-8'>Educational Technology & Learning Tools</h2>
          <p className='text-center text-xl font-medium'>
            Explore digital tools and resources that enhance learning, designed to make education engaging, accessible, and impactful.
          </p>
        </div>

        {/* Personal Development & Leadership */}
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 md:w-[90%] mx-auto'>
          <FaUserTie className='text-[#cc9900] text-6xl mx-auto mt-[-3rem]' />
          <h2 className='text-2xl font-bold text-center py-8'>Personal Development & Leadership</h2>
          <p className='text-center text-xl font-medium'>
            Build soft skills, confidence, and leadership qualities to excel in both personal and professional settings.
          </p>
        </div>

        {/* Effective Communication & Collaboration */}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:w-[90%] mx-auto'>
          <MdOutlinePeople className='text-[#cc9900] text-6xl mx-auto mt-[-3rem]' />
          <h2 className='text-2xl font-bold text-center py-8'>Effective Communication & Collaboration</h2>
          <p className='text-center text-xl font-medium'>
            Enhance your communication skills and learn techniques for successful teamwork, conflict resolution, and collaboration.
          </p>
        </div>

        {/* Career Development & Networking Skills */}
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 md:w-[90%] mx-auto'>
          <MdOutlineWorkOutline className='text-[#cc9900] text-6xl mx-auto mt-[-3rem]' />
          <h2 className='text-2xl font-bold text-center py-8'>Career Development & Networking Skills</h2>
          <p className='text-center text-xl font-medium'>
            Develop strategies for career growth and learn networking skills to build meaningful professional relationships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
