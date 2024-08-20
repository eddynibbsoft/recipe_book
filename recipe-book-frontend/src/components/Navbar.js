import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Recipe Book
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Recipes</Link>
          </li>
          <li className="navbar-item">
            <Link to="/add-recipe" className="navbar-link">Add Recipe</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
