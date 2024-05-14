// HomePage.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import './HomePage.css'


function HomePage({ onLogout }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogout = () => {
    setShowConfirmation(true);
  };

  const handleConfirmLogout = () => {
    // Call the logout function passed from the parent component
    onLogout();
    // Hide the confirmation dialog
    setShowConfirmation(false);
  };

  const handleCancelLogout = () => {
    // Hide the confirmation dialog
    setShowConfirmation(false);
  };

  return (
    <div>
      <h1>Welcome to Digitalflake admin</h1>


      <Navbar />
      <button onClick={handleLogout}>Logout</button>

      
      

      {showConfirmation && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to logout?</p>
            <div>
              <button onClick={handleConfirmLogout}>Confirm</button>
              <button onClick={handleCancelLogout}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
