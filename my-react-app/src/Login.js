// Login.js
import React, { useState } from 'react';
import styles from './Login.module.css'; // Import the CSS module
import logo from './DigitalflakeLogo.png';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email and password
    // Call onLogin if validation passes
    onLogin();
  };

  const handleForgotPassword = () => {
    // Implement functionality to send reset password link to the user's email
    // You can use a service like SendGrid or your backend server to send the email
    // For demonstration purposes, you can simply log a message to the console
    console.log('Forgot Password: A reset password link has been sent to your email.');
  };

  return (
    <div className={styles.container}>
       <img src={logo} alt="Logo"></img>
        <p>Welcome to Digitalflake admin</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
              <button type="submit">Login</button>

      </form>
      <div className={styles['forgot-password']}>
        <a onClick={handleForgotPassword}>Forgot Password?</a>
      </div>

    </div>
  );
}

export default Login;





// ******************************************************************************
// // HomePage.js
// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import './HomePage.css';
// import logoutlogo from'./logoutlogo.png';
// import Group from'./Group.png';

// function HomePage({ onLogout }) {
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const handleLogout = () => {
//     setShowConfirmation(true);
//   };

//   const handleConfirmLogout = () => {
//     // Call the logout function passed from the parent component
//     onLogout();
//     // Hide the confirmation dialog
//     setShowConfirmation(false);
//   };

//   const handleCancelLogout = () => {
//     // Hide the confirmation dialog
//     setShowConfirmation(false);
//   };

//   return (
//     <div>
//       <div>
//       <img src={Group}  alt="logo"></img>
//       </div>
//       <Navbar/>
//       <h1>Welcome to Digitalflake admin</h1>
//       <button onClick={handleLogout}>Logout</button>
//       <img src={logoutlogo}  alt="logo" onClick={handleLogout}></img>

//       {showConfirmation && (
//         <div className="modal">
//           <div className="modal-content">
//             <p>Are you sure you want to logout?</p>
//             <div>
//               <button onClick={handleConfirmLogout}>Confirm</button>
//               <button onClick={handleCancelLogout}>Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default HomePage;














//forgot pass**********************************************************************




// import React, { useState } from 'react';
// import './ForgotP.css'; // Import the CSS file

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send a request to your backend to initiate the password reset process
//       const response = await fetch('/api/forgot-password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });
//       const data = await response.json();
//       setMessage(data.message);
//     } catch (error) {
//       setMessage('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className='forgot-password-container'>
//       <p id='p1'>Did you forget password?</p>
//       <p>Enter your email address and we’ll send you a link to restore password</p>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email Address
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Reset Password</button>
//       </form>
//       {message && <p>{message}</p>}

//       <a href='#'>Back to log in</a>
//     </div>
//   );
// };

// export default ForgotPassword;












//************************************************************************************* */






