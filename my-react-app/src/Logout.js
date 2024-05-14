// Logout.js
import React from 'react';
import './Login.css'; // Import the CSS file

function Logout({ onLogout }) {
  return (
    <div className="container"> {/* Add className to apply styles */}
      <div className="content">
        <h2>You are logged in</h2>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Logout;
