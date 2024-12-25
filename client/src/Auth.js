// src/Auth.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function Auth() {
  const [email, setEmail] = useState(''); // New email state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client'); // Default to 'client'
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and SignUp
  const navigate = useNavigate();

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (email && username && password) {
        // Simulate user registration
        localStorage.setItem('email', email); // Store email
        localStorage.setItem('username', username); // Store username
        localStorage.setItem('role', role); // Store role

        alert('Sign Up Successful!');
        setIsSignUp(false); // Switch to login mode
      } else {
        alert('Please fill in all fields for Sign Up.');
      }
    } else {
      if (username && password) {
        // Simulate user login
        localStorage.setItem('role', role); // Store role
        localStorage.setItem('username', username); // Store username

        // Redirect based on role
        if (role === 'lawyer') {
          navigate('/mainapp'); // Redirect to MainApp.js for Lawyer
        } else {
          navigate('/app'); // Redirect to AppPage.js for Client
        }
      } else {
        alert('Please enter valid credentials for Login.');
      }
    }
  };

  return (
    <div className="loginpage">
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleFormSubmit}>
        {isSignUp && (
          <div className="Login">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={isSignUp} // Required only for Sign Up
            />
          </div>
        )}
        <div className="Login">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Select your Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="client">Client</option>
            <option value="lawyer">Lawyer</option>
          </select>
        </div>
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>

      <div>
        <button onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
}

export default Auth;
