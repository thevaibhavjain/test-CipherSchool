import React, { useState } from 'react';
import { registerUser } from '../api';
import './Register.css';
import CipherSchoolsLogo from '../Cipherschools.png'; 

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

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
       <img src={CipherSchoolsLogo} alt="Cipher Schools Logo" className="logo-image" />
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
