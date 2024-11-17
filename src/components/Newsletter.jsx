import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwGXoGLduC5W06KqMtfZRUbB5adhQBuG1GbiYRts-6l9xcxG5Gm-2tyM1lZ3D2C3Hxqow/exec';

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');

    try {
      // Use fetch to send email to Google Sheets
      const formData = new FormData();
      formData.append('Email', email);

      await fetch(scriptURL, { method: 'POST', body: formData });
      setSuccess(true);
      setEmail('');
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('Error!', error);
      setError('There was an error saving your email.');
    }
  };

  return (
<div className='w-full py-16 text-white px-4 bg-black border-b-2 border-white'>
  <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
    <div className='lg:col-span-2 my-4'>
      <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
        Want tips & tricks to stay Savvy?
      </h1>
      <p>Sign up to our newsletter and stay up to date.</p>

      {/* Contact Information */}
      <div className='text-sm mt-4 space-y-2'>
        <p className='flex items-center gap-2'>
          <span className='font-medium'>Phone:</span> 
          +267 72444713 / +267 74559884
        </p>
        <p className='flex items-center gap-2'>
          <span className='font-medium'>Email:</span>
          <a 
            href='mailto:skillforge24@gmail.com' 
            className='text-[#cc9900] hover:underline'
          >
            skillforge24@gmail.com
          </a>
        </p>
      </div>
    </div>
    <div className='my-4'>
      <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row items-center justify-between w-full'>
        <input
          className='p-3 flex w-full rounded-md text-black'
          type='email'
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type='submit'
          className='bg-[#cc9900] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
          Notify Me
        </button>
      </form>
      {error && <p className='text-red-500'>{error}</p>}
      {success && <p className='text-green-500'>Thank you for subscribing!</p>}
      <p>
        We care about the protection of your data. Read our{' '}
        <span className='text-[#cc9900]'>Privacy Policy.</span>
      </p>
    </div>
  </div>
</div>
  );
};

export default Newsletter;
