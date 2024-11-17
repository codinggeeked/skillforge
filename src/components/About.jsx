import React, { useState } from 'react';
import Laptop from '../assets/laptop.jpg';
import Digital from '../assets/disc.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const About = () => {
  // State to control modal visibility
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleClose1 = () => setShowModal1(false);
  const handleShow1 = () => setShowModal1(true);

  const handleClose2 = () => setShowModal2(false);
  const handleShow2 = () => setShowModal2(true);

  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='Programming & Analytics' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#cc9900] font-bold'>RESEARCH & ANALYTICS</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Develop Skills and Unlock Potential</h1>
          <p>
            Join our educational club to build strong foundations in indepth study and analytics. 
            We offer hands-on skill sharing sessions, mentorship, and resources to help you grow both technically and personally. 
            Be part of a community that values learning, collaboration, and personal progress.
          </p>
          <Button variant='dark' className='w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3' onClick={handleShow1}>
            Read More
          </Button>
        </div>
      </div>

      {/* Duplicated Section with Switched Positions */}
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 mt-12'>
        <div className='flex flex-col justify-center'>
          <p className='text-[#cc9900] font-bold'>DIGITAL SKILLS FOR THE FUTURE</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Empowerment Through Tech</h1>
          <p>
          Empowering young people with essential digital skills extends beyond career preparation; 
          it fosters a mindset of innovation, adaptability, and critical thinking. Through training 
          in areas like digital literacy, creative problem-solving, and technology-driven project work, 
          this club equips students with practical abilities that are increasingly valuable across all fields. 
          This skill set enhances employability, opens doors to new opportunities, and encourages members to innovate locally, 
          addressing challenges in their communities.
          </p>
          <Button variant='dark' className='w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3' onClick={handleShow2}>
            Read More
          </Button>
        </div>
        <img className='w-[500px] mx-auto my-4' src={Digital} alt='Digital Skills for the Future' />
      </div>

      {/* Modal for "Programming & Analytics" */}
      <Modal show={showModal1} onHide={handleClose1} centered>
        <Modal.Header closeButton>
          <Modal.Title>Programming & Analytics</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Our programming and analytics curriculum provides a robust foundation in coding and data analysis.
            Through practical coding sessions, real-world projects, and mentorship, members will enhance their 
            technical abilities and analytical thinking, equipping them to solve complex problems.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for "Digital Skills for the Future" */}
      <Modal show={showModal2} onHide={handleClose2} centered>
        <Modal.Header closeButton>
          <Modal.Title>Digital Skills for the Future</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          Our digital skills training program offers a comprehensive foundation in navigating the digital world. Covering everything from foundational digital concepts to hands-on projects, we provide a structured learning experience that emphasizes critical thinking and adaptability. By supporting both technical and creative growth, we are 
          developing well-rounded, future-ready individuals who are prepared to lead, collaborate, and innovate in an increasingly digital society.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default About;
