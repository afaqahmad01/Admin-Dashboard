import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = ({ onVerifyEmail, onBackToLogin }) => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleVerifyEmail = () => {
    if (email) {
      console.log('Simulating email verification for:', email);

      alert('Sending verification code...');

      setTimeout(() => {
        console.log('Email sent successfully.');
        onVerifyEmail();
      }, 2000);
    } else {
      alert('Please fill in your email address.');
    }
  };

  const handleSubmitVerificationCode = () => {
    if (verificationCode) {
      console.log('Verification Code:', verificationCode);
    } else {
      alert('Please fill in the verification code.');
    }
  };

  return (
    <div className='bg-[#40A858]'>
      <div className="flex justify-center flex-col gap-y-5 items-center h-screen">
        <div className="w-96 p-6 bg-white rounded shadow-md">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border rounded"
          />
          <button
            onClick={handleVerifyEmail}
            disabled={!email}
            className={`w-full p-3 bg-green-500 text-white border-none rounded cursor-pointer ${
              !email ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Send Verification Code
          </button>
          <button
            onClick={onBackToLogin}
            className="block mt-4 ml-[180px] w-44 text-blue-500 cursor-pointer hover:underline"
          >
            <Link to="/">Back to Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
