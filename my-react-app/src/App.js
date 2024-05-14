// App.js
import React, { useState } from 'react';
import Login from './Login';
import HomePage from './HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement login logic here (e.g., validate credentials)
    // If login is successful, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement logout logic here (e.g., clear user data)
    // Set isLoggedIn to false
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <HomePage onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;


