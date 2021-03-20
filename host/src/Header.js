import React from 'react';

const handleClick = () => {
  alert('Hello all the way from the host!');
};

export const Button = () => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'cornflowerblue',
        padding: '2em',
      }}
    >
      <h2 style={{ display: 'inline' }}>
        I am a header, shared from the host app!
      </h2>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default Button;
