import React from 'react';

const Clients = () => {
  return (
    <section className='py-16 px-4 bg-gray-100'>
      <div className='max-w-[1240px] mx-auto'>
        <h1 className='text-3xl font-bold text-center mb-8'>Our Aspirations</h1>
        <p className='text-center mb-12'>
          We’re committed to fostering a vibrant community of learners and innovators. 
          Our club's initiatives are designed to inspire and empower students to excel beyond the classroom.
        </p>
        
        {/* Club Initiatives */}
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mb-12'>
          <div className='bg-white p-6 shadow-lg rounded-lg'>
          <h2 className='text-xl font-bold mb-4'>Echo Success Stories</h2>
            <p>Big on recognizing achievements of our members & alumni, who have gone on to make impactful contributions in tech, business, and innovation.</p>
          </div>
          <div className='bg-white p-6 shadow-lg rounded-lg'>
            <h2 className='text-xl font-bold mb-4'>Hackathon Challenges</h2>
            <p>Organizing & competing in annual hackathons to bring together talent from across disciplines, fostering creativity, teamwork, and real-world problem-solving.</p>
          </div>
          <div className='bg-white p-6 shadow-lg rounded-lg'>
            <h2 className='text-xl font-bold mb-4'>Ambitious Project Goals</h2>
            <p>Setting achievable and impactful project targets that enable club members to apply their skills and make meaningful contributions to society.</p>
          </div>
          {/* Add more initiatives as needed */}
        </div>
        
        {/* Call to Action */}
        <div className='text-center'>
          <h2 className='text-2xl font-bold mb-4'>Ready to Join the Journey?</h2>
          <p className='mb-8'>
            Get involved with our club and make a difference. Join us today to build skills, network, and bring your ideas to life.
          </p>
          {/* <a href='/contact' className='bg-[#cc9900] text-black py-3 px-6 rounded-md font-medium'>
            Get Involved
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Clients;
