import React, { useState } from 'react';
import './ForgotP.css'; // Import the CSS file

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a request to your backend to initiate the password reset process
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='forgot-password-container'>
      <p id='p1'>Did you forget password?</p>
      <p>Enter your email address and we’ll send you a link to restore password</p>
      <form onSubmit={handleSubmit}>
        <label>
          Email Address
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}

      <a href='#'>Back to log in</a>
    </div>
  );
};

export default ForgotPassword;
