import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../utils/auth';
import '../styles/styles.css';

// New Navbar
const NavBar = () => {
  const isLoggedIn = Auth.loggedIn();
  
  return (
    <nav>
      <ul className="nav__links">
        <li className="link">
          <a href="/home">Home</a>
        </li>
        <li className="link">
          <a href="#">Program</a>
        </li>
        <li className="link">
          <a href="#">Service</a>
        </li>
        <li className="link">
          <a href="#">About</a>
        </li>
        <li className="link">
          <a href="#">Community</a>
        </li>
        {isLoggedIn ? (
          <>
            <li className="link">
              <a href="/profile">Profile</a>
            </li>
            <li className="link">
              <a href="/" onClick={() => Auth.logout()}>Logout</a>
            </li>
          </>
        ) : (
          <li className="link">
            <a href="/login">Login</a>
          </li>
        )}
      </ul>
      <button className="btn">
        {isLoggedIn ? (
          <a href="/" onClick={() => Auth.logout()}>Logout</a>
        ) : (
          <a href="/Signup">Join Now</a>
        )}
      </button>
    </nav>
  );
};

export default NavBar;