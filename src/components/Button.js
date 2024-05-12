import React from 'react';
import './Button.css';

const Button = ({ variant, onClick, children }) => {
    const buttonClass = variant === 'big' ? 'button big' : 'button';

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;