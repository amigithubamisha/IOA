import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from '../../assets/ioa1.jpg';
import jaganathLogo from '../../assets/jaganathlogo.png';

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/upcoming-events">Upcoming Events</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/ireland">Ireland</Link></li>
            <li><Link to="/e-patrika">E-Patrika</Link></li>
            <li className="dropdown">
              <li className='odisha'><Link to={"/odisha"}>Odisha</Link></li>
              <ul className="dropdown-content">
                <li><Link to="/culture">Culture</Link></li>
                <li><Link to="/festival">Festival</Link></li>
                <li><Link to="/food">Food</Link></li>
                <li><Link to="/artandcraft">Art and Craft</Link></li>
                <li><Link to="/historyandheritage">History and Heritage</Link></li>
                <li><Link to="/leaders">Leaders</Link></li>
                <li><Link to="/odiasnow">Odias Now</Link></li>
                <li><Link to="/placetovisit">Place to visit</Link></li>
              </ul>
            </li>
            <img className="jaganath-img" src={jaganathLogo} alt="" />
          </ul>
          <Link to='/'>
          <img src={Logo} alt="Logo" className="logo" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
