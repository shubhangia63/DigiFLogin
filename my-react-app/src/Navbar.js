// Navbar.js
// import React from 'react';
import Home from'./Home.png';
//import state from'./state.png';
import city from'./city.png';
import Warehouse from'./Warehouse.png';

// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li><a href="#"><img src={Home}  alt="logo" ></img></a></li>
//         <li><a href="#"><img src={state}  alt="logo" ></img></a></li>
//         <li><a href="#"><img src={city}  alt="logo" ></img></a></li>
//         <li><a href="#"><img src={Warehouse}  alt="logo" ></img></a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RolesTable from './RolesTable'; // Import your RolesTable component

const App = () => {
  return (
    <Router>
      
      
      <ul>
        <li>
          <Link to="/roles-table">
            <img src={Home} alt="logo" />
          </Link>
        </li>
      </ul>
      <Routes> {/* Wrap Routes around Route */}
        <Route path="/roles-table" element={<RolesTable />} /> {/* Use element prop to render component */}
      </Routes>
    </Router>
  );
};

export default App;
