import React from "react";

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
            >
              <img src={item.icon} alt={item.label} />
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
