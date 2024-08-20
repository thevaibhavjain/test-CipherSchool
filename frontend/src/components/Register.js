import React, { useState } from 'react';
import { registerUser } from '../api';
import './Register.css';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ensure that email and password are strings
      // const userEmail = String(email);
      // const userPassword = String(password);

      await registerUser({ email, password });
      alert('Registration Successful. Please log in.');

      // Clear the form fields after successful registration
      setEmail('');
      setPassword('');
    } catch (error) {
      
      alert('Registration Failed.');
    }
  };

  return (
    <div class="wrapper">
       <div class="logo">

       </div>
      <div class="text-center mt-4 name">
        Register
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
        <button class="btn mt-3" type="submit">Register</button>
      </form>
      <div class="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="login">Log in</a>
        </div>
    </div>
  );
};

export default Register;
