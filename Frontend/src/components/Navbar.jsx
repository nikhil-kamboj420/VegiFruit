import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <img src="/earth.jpeg" alt="Earth" />

        <ul className={menuOpen ? "show" : ""}>
       
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>
          </li>

        <li>
            <NavLink to="/signup" className={({ isActive }) => isActive ? "active" : ""}>
              Signup
            </NavLink>
          </li>
          

          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
              Contact
            </NavLink>
          </li>
        </ul>

        <button className="btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "X" : "☰"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;