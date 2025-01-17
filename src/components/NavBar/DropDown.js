import React from "react";
import { Link } from "react-router-dom";

function Dropdown({ isOpen, toggleDropdown, label, items, isMenuOpen }) {
  return (
    <div className="dropdown-solutions">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {label}
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
        <ul className={`solutions-dropdown ${isMenuOpen ? "mobile-open" : ""}`}>
          {items.map((item, index) => (
            <li
              key={index}
              className={`${
                item.isIndented ? "additional-margin" : "bold-on-hover"
              }`}
              onClick={toggleDropdown}
            >
              <Link to={item.path}>
                <img src={item.icon} alt={item.label} />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
