import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src="/profile.png" alt="Akhil Reddy" className="profile-pic" />
        <div className="header-text">
          <h1>Akhil Reddy Motakatla</h1>
          <p>Full Stack Developer | Data Engineer | Cloud Enthusiast</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
