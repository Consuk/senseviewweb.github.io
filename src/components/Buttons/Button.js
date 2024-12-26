import React from 'react';
import './Button.css';

const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
  const className = variant === 'primary' ? 'demo-button' : 'demo-button secondary';
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
