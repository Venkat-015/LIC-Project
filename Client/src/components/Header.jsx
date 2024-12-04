import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <h1>LIC</h1>
        <p>Join the Team of LIC Development Officer to make your dreams come true</p>
      </div>
      <nav className="header-nav">
        <ul>
          <li>About us</li>
          <li>Become LIC Agent</li>
          <li>Earning Opportunities</li>
          <li>Role of LIC Agent</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
