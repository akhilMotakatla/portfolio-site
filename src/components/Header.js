import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-pic">
          <img src="/profile.png" alt="Profile" />
        </div>
        <div className="header-text">
          <h1>Akhil Reddy Motakatla</h1>
          <p>Full Stack Developer | Data Engineer | Cloud Enthusiast</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
