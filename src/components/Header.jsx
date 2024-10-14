// src/components/Header.js
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="navbar">
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink 
              to="/" 
              className="nav-link" 
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/about" 
              className="nav-link" 
              activeClassName="active"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/contact" 
              className="nav-link" 
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
