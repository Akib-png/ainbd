// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './Auth';  // Auth component handles login & signup
import MainApp from './MainApp';  
import AppPage from './AppPage';  // Client's Dashboard
import Llist from './Components/llist'; // Adjust path as needed
import PostSystem from './PostSystem';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />  {/* Auth page for login/signup */}
        <Route path="/app" element={<AppPage />} />  {/* Client's Dashboard */}
        <Route path="/mainapp" element={<MainApp />} />  {/* Lawyer's Dashboard */}
        <Route path="./postSystem" element={<postSystem />} />  {/* Lawyer's post */}
       <Route path="/llist" element={<Llist />} />  {/* Define the route for /llist */}
      </Routes>
    </Router>
  );
}

export default App;
