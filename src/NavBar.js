import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import './Navbar.css';

export default function NavBar({ onEnquireClick, onTestimonialClick }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <div className="navbar">
        <img 
          src={logo} 
          alt="Logo" 
          className={`logo navbar-logo ${isSidebarOpen ? 'move-right' : ''}`} 
        />
        <div className="nav-links">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>
          <Link to="/About">About us</Link>
          <Link to="/Features">Features</Link>
          <Link to="/Testimonial" onClick={onTestimonialClick}>Testimonial</Link>
          <Link to="/Gallery">Gallery</Link>
        </div>
        <button className="enquire-button" onClick={onEnquireClick}>
          Enquire now
        </button>
        <div className="hamburger" onClick={toggleSidebar}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeSidebar}>
          &times;
        </button>
        <img src={logo} alt="Logo" className="logo sidebar-logo" />
        <div className="sidebar-link">
          <Link to="/" onClick={closeSidebar}>Home</Link>
          <Link to="/About" onClick={closeSidebar}>About us</Link>
          <Link to="/Features" onClick={closeSidebar}>Features</Link>
          <Link to="/Testimonial" onClick={() => { closeSidebar(); onTestimonialClick(); }}>Testimonial</Link>
          <Link to="/Gallery" onClick={closeSidebar}>Gallery</Link>
          <button className="sidebar-enquire-button" onClick={() => { closeSidebar(); onEnquireClick(); }}>
            Enquire now
          </button>
        </div>
      </div>
    </div>
  );
}
