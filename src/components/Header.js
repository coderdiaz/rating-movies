import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header py-3 bg-info">
    <div className="container">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="pr-3 text-white">Logo</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="pr-3 text-white">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/movies" className="pr-3 text-white">Movies</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
