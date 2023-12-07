import React, { useState } from 'react';
import ForgetPassword from './ForgetPassword';
import { Link } from 'react-router-dom';

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
    <div className="flex justify-center flex-col gap-y-5 items-center h-screen bg-[#40A858]">
        <img src="https://i.imgur.com/ol5lsnc_d.jpg?maxwidth=520&shape=thumb&fidelity=high" alt="logo" />
        <div className="w-96 p-6 bg-white rounded shadow-md">
          <h2 className="text-center mb-6">Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border rounded"
          />
          <Link to="/dashboard">

            <button
              onClick={handleLogin}
              disabled={!username || !password}
              className={`w-full p-3 bg-green-500 text-white border-none rounded cursor-pointer ${
                !username || !password ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Login
            </button>
          </Link>

          {/* <button
            className="block mt-4 ml-[180px] w-44 text-blue-500 cursor-pointer hover:underline"
            onClick={() => {
              window.location.href = '/forget-password';
            }}
          >
          <Button onClick={handleLogin} disabled={!username || !password}>
          
            Login
            
          </Button>
          </Link>
            {/* <LinkButton>
          <Link to="/forget-password">
            Forgot Password?
          </button> */}
        </div>
    </div>
  );
};

export default LoginForm;