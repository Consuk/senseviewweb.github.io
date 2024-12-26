import React from "react";
import { useLanguage } from "../../LanguageContext";

function LanguageSelector({ isOpen, toggleLanguageDropdown, languages }) {
  const { toggleLanguage, language } = useLanguage();
  const currentLanguageLabel = languages.find((lang) => lang.code === language)?.label;

  return (
    <div className="language-selector">
      <button className="language-button" onClick={toggleLanguageDropdown}>
      {currentLanguageLabel} {/* Mostrar el idioma actual dinámicamente */}
        <img
          src={
            isOpen
              ? "/01-NavBar/keyboard_arrow_up.png"
              : "/01-NavBar/keyboard_arrow_down.png"
          }
          alt="Toggle Dropdown"
        />
      </button>
      {isOpen && (
        <ul className="language-dropdown">
          {languages.map((lang, index) => (
            <li
              key={index}
              className={`bold-on-hover ${lang.code === language ? "active" : ""}`}
              onClick={() => {
                toggleLanguage(lang.code); // Cambiar idioma al hacer clic
                toggleLanguageDropdown(); // Cerrar el dropdown
              }}
            >
              <img src={lang.icon} alt={lang.label} />
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;
