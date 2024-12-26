import React from "react";

function NavbarMenuItem({ label, onClick, className, icon }) {
  return (
    <li className={`navbar-menu-item ${className || ""}`} onClick={onClick}>
      {icon && <img src={icon} alt={label} />}
      {label}
    </li>
  );
}

export default NavbarMenuItem;
