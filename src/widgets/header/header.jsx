import { useState } from "react";
import "./header.css";

export const Header = ({ onOpenModal }) => {
  const [lang, setLang] = useState("ENG");

  const toggleLang = () => {
    setLang((prev) => (prev === "ENG" ? "RU" : "ENG"));
  };

  return (
    <header className="header-container">
      <div className="logo">
        <img src="/favicon.svg" alt="Dust Land Logo" />
      </div>

      <nav className="header-menu">
        <a href="#home" className="menu-item">
          HOME
        </a>
        <span className="menu-divider" />
        <a href="#game" className="menu-item">
          GAME
        </a>
        <span className="menu-divider" />
        <a href="#features" className="menu-item">
          FEATURES
        </a>
        <span className="menu-divider" />
        <button
          className={`menu-item lang-btn ${lang === "ENG" ? "active" : ""}`}
          onClick={toggleLang}
        >
          {lang} / {lang === "ENG" ? "RU" : "ENG"}
        </button>
        <button className="play-btn" onClick={onOpenModal}>
          PLAY THE BETA
        </button>
      </nav>
    </header>
  );
};
