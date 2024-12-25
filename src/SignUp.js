// src/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client'); // Default to 'client'
  const navigate = useNavigate();

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      // Here, you would send a request to the server to store the new user
      // For now, just simulate that the user is created

      // Store the role and username in localStorage
      localStorage.setItem('role', role);
      localStorage.setItem('username', username);

      // Redirect to the corresponding page based on the role
      if (role === 'lawyer') {
        navigate('/mainapp');  // Redirect to MainApp.js
      } else {
        navigate('/app');  // Redirect to App.js
      }
    } else {
      alert('Please enter valid sign-up credentials.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
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
          <label>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="client">Client</option>
            <option value="lawyer">Lawyer</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
