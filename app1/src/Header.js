import React from 'react';

const handleClick = () => {
  alert('Hello all the way from App 1!');
};

export const Button = () => {
  return (
    <div
      style={{
        height: '80px',
        width: '100%',
        backgroundColor: 'cornflowerblue',
      }}
    >
      <h2>I am a shared header!</h2>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default Button;
