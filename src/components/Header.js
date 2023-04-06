import React from "react";
import "../assets/styles/main/header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          src="/path/to/logo.png"
          alt="Company Logo"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "";
            e.target.alt = "P2P Trade Center";
          }}
        />
      </div>
      <div className="header__targetCripto">
        <span>BTC</span>
      </div>
      <div className="header__panel">
        <span>Панель</span>
      </div>
    </header>
  );
};

export default Header;