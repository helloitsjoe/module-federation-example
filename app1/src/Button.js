import React from 'react';

const handleClick = () => {
  alert('Hello all the way from App 1!');
};

export const Button = () => {
  return <button onClick={handleClick}>Click me!</button>;
};

export default Button;
