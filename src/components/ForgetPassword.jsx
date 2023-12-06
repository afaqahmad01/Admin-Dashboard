// ForgotPasswordComponent.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Container = ({ children }) => (
    <div className="flex justify-center flex-col gap-y-5 items-center h-screen">{children}</div>
  );
  
  const FormContainer = ({ children }) => (
    <div className="w-96 p-6 bg-white rounded shadow-md">{children}</div>
  );
  
  const Title = ({ children }) => <h2 className="text-center mb-6">{children}</h2>;
  

const Input = ({ type, placeholder, value, onChange }) => (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 mb-4 border rounded"
    />
  );
  const Button = ({ onClick, disabled, children }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full p-3 bg-green-500 text-white border-none rounded cursor-pointer ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  );
  const LinkButton = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="block mt-4 ml-[180px] w-44 text-blue-500 cursor-pointer hover:underline"
    >
      {children}
    </button>
  );
  

const ForgetPassword = ({ onVerifyEmail, onBackToLogin }) => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleVerifyEmail = () => {
    if (email) {
      console.log('Simulating email verification for:', email);

      alert('Sending verification code...');

      setTimeout(() => {
        console.log('Email sent successfully.');
        // Call the parent component's onVerifyEmail function
        onVerifyEmail();
      }, 2000);
    } else {
      alert('Please fill in your email address.');
    }
  };

  const handleSubmitVerificationCode = () => {
    if (verificationCode) {
      console.log('Verification Code:', verificationCode);
      // Handle verification code submission logic
    } else {
      alert('Please fill in the verification code.');
    }
  };

  return (
    <div className='bg-[#40A858]'>

      <Container>
      <FormContainer>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleVerifyEmail} disabled={!email}>
        Send Verification Code
      </Button>
      <LinkButton onClick={onBackToLogin}>
      <Link to="/">
        Back to Login
        </Link>
      </LinkButton>
      </FormContainer>

      </Container>
    </div>
  );
};

export default ForgetPassword;
