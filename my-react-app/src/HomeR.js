// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import RolesTable from './RolesTable'; // Import RolesTable component

function Navbar1() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/roles">Roles</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
      <RolesTable /> {/* Render the RolesTable component here */}
    </nav>
  );
}

export default Navbar1;
