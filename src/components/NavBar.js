import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
  return (
    <>
    <div className='navbarCon'>

      <div className="navbar">

        <Link to="/" className="logo">Mello</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/" className="nav-link">About Us</Link>
          <Link to="/CommunityPage" className="nav-link">News</Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <i className="fas fa-search"></i>
        </div>

      </div>

      <div className="navbar2">
        <div className="nav-links">
          <div className="dropdown">
            <Link to="/" className="nav-link">Category</Link>
          </div>
          <div className="dropdown">
            <Link to="/GuitarPage" className="nav-link">Guitar</Link>
            <div className="dropdown-content">
              <Link to="/GuitarPage">Electric Guitar</Link>
              <Link to="/GuitarPage">Acoustic Guitar</Link>
              <Link to="/GuitarPage">Bass Guitar</Link>
              <Link to="/GuitarPage">Ukuleles</Link>
              <Link to="/GuitarPage">Classical Guitar</Link>
            </div>
          </div>
          <div className="dropdown">
            <Link to="/KeyboardPage" className="nav-link">Keyboard</Link>
            <div className="dropdown-content">
              <Link to="/KeyboardPage">Grand Piano</Link>
              <Link to="/KeyboardPage">Upright Piano</Link>
              <Link to="/KeyboardPage">Digital Piano</Link>
              <Link to="/KeyboardPage">Electronic Keyboard</Link>
              <Link to="/KeyboardPage">Workstation Keyboard</Link>
            </div>
          </div>
          <div className="dropdown">
            <Link to="/DrumsPage" className="nav-link">Drums</Link>
            <div className="dropdown-content">
              <Link to="/DrumsPage">Acoustic Drums</Link>
              <Link to="/DrumsPage">Electronic Drums</Link>
              <Link to="/DrumsPage">Drum Accessories</Link>
              <Link to="/DrumsPage">Marching Drums</Link>
              <Link to="/DrumsPage">Frame Drums</Link>
            </div>
          </div>
          <div className="dropdown">
            <Link to="/CommunityPage" className="nav-link">Violin</Link>
            <div className="dropdown-content">
              <Link to="/">Classical Violin</Link>
              <Link to="/">Electric Violin</Link>
              <Link to="/">Acoustic Electric</Link>
              <Link to="/">Fiddle</Link>
              <Link to="/">Tenor Violin</Link>
            </div>
          </div>
          <div className="dropdown">
            <Link to="/CommunityPage" className="nav-link">Flute</Link>
            <div className="dropdown-content">
              <Link to="/">Concert Flute</Link>
              <Link to="/">Piccolo</Link>
              <Link to="/">Alto Flute</Link>
              <Link to="/">Bass Flute</Link>
              <Link to="/">Contrabass Flute</Link>
            </div>
          </div>
          <div className="dropdown">
            <Link to="/CommunityPage" className="nav-link">Saxophone</Link>
            <div className="dropdown-content">
              <Link to="/">Soprano Saxophone</Link>
              <Link to="/">Alto Saxophone</Link>
              <Link to="/">Tenor Saxophone</Link>
              <Link to="/">Baritone Saxophone</Link>
              <Link to="/">Bass Saxophone</Link>
            </div>
          </div>
          <div className="dropdown">
            <Link to="/CommunityPage" className="nav-link">Clarinet</Link>
            <div className="dropdown-content">
              <Link to="/">B♭ Soprano Clarinet</Link>
              <Link to="/">A Clarinet</Link>
              <Link to="/">Bass Clarinet</Link>
              <Link to="/">Alto Clarinet</Link>
              <Link to="/">Contrabass Clarinet</Link>
            </div>
          </div>
          <div className="dropdown">
            <Link to="/CommunityPage" className="nav-link">DJ Equipment</Link>
            <div className="dropdown-content">
              <Link to="/">DJ Controllers</Link>
              <Link to="/">Turntables</Link>
              <Link to="/">CDJs/Media Players</Link>
              <Link to="/">Mixers</Link>
              <Link to="/">Headphones</Link>
            </div>
          </div>

        </div>

      </div>

    </div>
    </>
  );
}

export default NavBar;