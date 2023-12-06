// LoginForm.js

import React, { useState } from 'react';
import ForgetPassword from "./ForgetPassword"
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

const handleForget=()=>{
  <Link to="/forget-password" />
}

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      console.log('Username:', username);
      console.log('Password:', password);
    } else {
      alert('Please fill in both username and password.');
    }
  };

  return (
    <div className='bg-[#40A858]'>
      <Container>
        <img src="https://i.imgur.com/ol5lsnc_d.jpg?maxwidth=520&shape=thumb&fidelity=high" alt="logo" />
        <FormContainer>
          <Title>Login</Title>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/dashboard">
          <Button onClick={handleLogin} disabled={!username || !password}>
          
            Login
            
          </Button>
          </Link>
            {/* <LinkButton>
          <Link to="/forget-password">
            Forgot Password?
            </Link>
            </LinkButton> */}
        </FormContainer>
      </Container>
    </div>
  );
};

export default LoginForm;
