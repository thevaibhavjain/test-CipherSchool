import React, { useState } from 'react';
import { loginUser } from '../api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser({ email, password });
      localStorage.setItem('token', data.token);
      navigate('/test');
    } catch (error) {
      console.error(error);
      alert('Login Failed.');
    }
  };

  return (
    <div class="wrapper">
       <div class="logo">

       </div>
      <div class="text-center mt-4 name">
        Login
      </div>
      <form  class="p-3 mt-3" onSubmit={handleSubmit}>
        <div class="form-field d-flex align-items-center">
        <span class="far fa-user"></span>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <div class="form-field d-flex align-items-center">
        <span class="far fa-user"></span>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
        <button class="btn mt-3" type="submit">Login</button>
      </form>
      <div class="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="/">New User (Register)</a>
        </div>
    </div>
  );
};

export default Login;
